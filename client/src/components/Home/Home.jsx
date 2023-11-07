import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Home.css";
import { sliderSettings } from "../../utils/swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../WishList/wishlistApi";
import { fetchHomeProducts } from "../Admin/apiCall";

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-end md:justify-normal gap-3 r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton pb-3">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};

const HomePage = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetchHomeProducts(category, setProducts, navigate, dispatch);
  }, []);

  const handleAddWishlist = (productId) => {
    addToWishlist(dispatch, navigate, productId);
  };

  return (
    <div id="residencies" className="mt-3 r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flex flex-col mb-4">
          <span className="text-2xl font-semibold ps-5 hover:text-blue-700 underline">
            {category}
          </span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {products.map((product, i) => (
            <SwiperSlide key={i} className="r-swiper">
              <div className="flexColStart r-card">
                <div className="w-11/12 md:w-9/12 mx-auto mb-2">
                  <LazyLoadImage
                    src={product.productImage}
                    alt="home"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div className="flex flex-col px-6">
                  <span>
                    <span className="font-bold text-2xl text-blue-800">
                      {product.name}
                    </span>
                  </span>
                  <span className="text-red-500">₹{product.price}</span>
                  <span className="font-normal text-sm line-clamp-2 my-3">
                    {product.description}
                  </span>
                  <div className="flex md:flex-row flex-col justify-around mt-auto">
                    <Link
                      to={`/product-page/${product._id}`}
                      className="text-white bg-purple-500 border border-purple-600 py-2 px-2 md:px-4 rounded-md text-sm hover:bg-purple-600 hover:border-purple-700 text-center"
                    >
                      View Product
                    </Link>
                    <button
                      className="text-white bg-purple-500 border border-purple-600 py-2 px-2 md:px-4 rounded-md text-sm hover:bg-purple-600 hover:border-purple-700 mt-4 md:mt-0"
                      onClick={() => handleAddWishlist(product._id)}
                    >
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
