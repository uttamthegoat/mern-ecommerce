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

  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: "Product 1",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 50.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
    {
      id: 2,
      name: "Product 2",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 75.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
    {
      id: 3,
      name: "Product 3",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 60.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
    {
      id: 4,
      name: "Product 1",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 50.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
    {
      id: 5,
      name: "Product 1",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 50.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
    {
      id: 6,
      name: "Product 1",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 50.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
    {
      id: 7,
      name: "Product 1",
      productImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images",
      price: 50.0,
      description:
        "kjsj sdh lorem10 shdb fwhyebfiwe wiebfwuif wibwe weubfg wfiuw wonwof wwhe cfhw9wf we8whn9wfc weuwbf cfwubw wciubwcf waijxa w9hw wonwc ncowewhwf cownicw",
    },
  ]);

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
