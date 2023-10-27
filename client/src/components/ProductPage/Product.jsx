import React, { useState } from 'react';

const ProductPage = () => {
    const [images, setImages] = useState([
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VKpQD9xA8OE6E2lTlSf3igHaFT%26pid%3DApi&f=1&ipt=8d24b012d2a173984999b4b09b88eaabdb7aecefe79b8d5af25bb4e1265c63d1&ipo=images'
    ,'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nNlUtw0VONZmtMP_VFnR1AHaEK%26pid%3DApi&f=1&ipt=a3e9217371dc36eccb8f94724b61be42c3404157a2799b2109583ef213534569&ipo=images'
    ]);

    const [activeImg, setActiveImage] = useState(images[0]);
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
        <div className='lg:flex lg:flex-row gap-16 lg:items-center'>
            <div className='lg:w-2/4 w-full max-w-screen-lg mx-auto'>
                <div className='aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9'>
                    <img src={activeImg} alt="" className='w-full h-full object-cover rounded-xl' />
                </div>
                <div className='flex flex-row justify-between h-24'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Product Image ${index}`}
                            className='w-24 h-24 rounded-md cursor-pointer'
                            onClick={() => setActiveImage(image)}
                        />
                    ))}
                </div>
            </div>

            <div className='lg:w-2/4 w-full max-w-screen-lg mx-auto flex flex-col gap-4 items-center'>
                <h1 className='text-3xl font-bold text-center'>laptop</h1>
                <h6 className='text-2xl font-semibold text-center'>₹ 59999.00</h6>
                <div className='flex flex-row items-center justify-center gap-12'>
                    <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={decreaseAmount}>-</button>
                    <span className='py-4 px-6 rounded-lg text-3xl'>{amount}</span>
                    <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={increaseAmount}>+</button>
                </div>
                <div className='flex flex-row items-center justify-center gap-12'>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-12 rounded-xl'>Add to Cart</button>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-12 rounded-xl'>Buy Now</button>
                </div>
                <p className='text-gray-700 text-center pb-4 lg:pb-4'>
                    Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
            </div>
        </div>
    );
}

export default ProductPage;
