import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductPage = () => {
  const [amount, setAmount] = useState(1);

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  return (
    <div className="lg:flex lg:flex-row lg:justify-around lg:gap-16 lg: px-4 my-10 md:my-16">
      <div className="lg:w-2/4 w-full max-w-screen-lg mx-auto my-5 md:my-0">
        <div className="w-full md:w-9/12 mx-auto">
          <LazyLoadImage
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VKpQD9xA8OE6E2lTlSf3igHaFT%26pid%3DApi&f=1&ipt=8d24b012d2a173984999b4b09b88eaabdb7aecefe79b8d5af25bb4e1265c63d1&ipo=images"
            alt="productImage"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      <div className="lg:w-2/4 w-full max-w-screen-lg mx-auto flex flex-col gap-4 items-center md:my-0">
        <h1 className="text-3xl font-bold text-center">laptop</h1>
        <h6 className="text-2xl font-semibold text-center">₹ 59999.00</h6>
        <div>
          <p className="text-green-600">{4999} in stock</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-12">
          <button
            className="bg-gray-200 py-2 pb-3 px-5 rounded-lg text-violet-800 text-3xl font-bold"
            onClick={decreaseAmount}
          >
            -
          </button>
          <span className="py-4 px-6 rounded-lg text-3xl">{amount}</span>
          <button
            className="bg-gray-200 py-2 pb-3 px-5 rounded-lg text-violet-800 text-3xl font-bold"
            onClick={increaseAmount}
          >
            +
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-12">
          <button className="bg-violet-800 text-white font-semibold py-3 w-28 rounded-xl">
            Add to Cart
          </button>
          <button className="bg-violet-800 text-white font-semibold py-3 w-28 rounded-xl">
            Buy Now
          </button>
        </div>
        <div>
          <p className="font-semibold text-gray-600">
            Category:{" "}
            <span className="font-semibold text-black">{"Electronics"}</span>
          </p>
        </div>
        <p className="text-gray-700 text-center pb-4 lg:pb-4">
          Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
