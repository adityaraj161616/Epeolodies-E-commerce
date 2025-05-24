import React from 'react';

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="relative">
        <img
          src="images/04-desk-dg-main-adv-ss25.webp"
          alt="Men's bag"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute bottom-4 left-4 text-black text-xs md:text-sm">
          <h3>Men's Bags</h3>
          <button className="underline mt-2">Shop Now</button>
        </div>
      </div>
      <div className="relative">
        <img
          src="images/05-desk-dg-main-adv-ss25.webp"
          alt="Men's shoes"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute bottom-4 left-4 text-black text-xs md:text-sm">
          <h3>Men's Shoes</h3>
          <button className="underline mt-2">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
