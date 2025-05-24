import React from 'react';

function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid">
        <div className="relative">
          <img
            src="images/hero page.jpg"
            alt="Fashion model with curly hair"
            className="w-full h-[50vh] md:h-screen object-cover grayscale"
          />
          <div className="absolute bottom-1/4 left-4 md:left-8 text-white text-xs md:text-sm uppercase tracking-widest">
            <p>Spring / Summer Women's adv Campaign signed steven</p>
            <p>miesel</p>
            <button className="underline mt-2">Shop the collection</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
