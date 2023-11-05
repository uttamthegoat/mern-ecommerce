import React from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation]);

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 50.0,
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 75.0,
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 60.0,
  },
  {
    id: 4,
    name: 'Product 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 50.0,
  },
  {
    id: 5,
    name: 'Product 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 50.0,
  },
  {
    id: 6,
    name: 'Product 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 50.0,
  },
  {
    id: 7,
    name: 'Product 1',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.cnHsK8bcMIiT_5_ED0cckAHaHN%26pid%3DApi&f=1&ipt=cbb60fa1ef5eeaa2b739d17c0d2544579fd174717d504fbe28eaf8b517418169&ipo=images',
    price: 50.0,
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto py-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <Swiper
            navigation
            slidesPerView={1}
            spaceBetween={50}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              750: {
                slidesPerView: 3,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white p-4 shadow-md r-card">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-600">Price: $ {product.price.toFixed(2)}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
