import React from 'react';

function MiddleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="relative">
        <img
          src="images/detail page mid.jpg"
          alt="Fashion model in urban setting"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="relative">
        <img
          src="images/detail page after mid.jpg"
          alt="Mirror selfie"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
          <p>Spring / Summer 2023 Men's A/W Campaign</p>
          <p>Styled by Steven Meisel</p>
          <button className="underline mt-2">Shop the collection</button>
        </div>
      </div>
    </div>
  );
}

export default MiddleGrid;
