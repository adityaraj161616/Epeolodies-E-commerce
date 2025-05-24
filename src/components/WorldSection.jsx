import React from 'react';

function WorldSection() {
  return (
    <div className="p-4">
      <h2 className="text-center text-lg uppercase tracking-widest mb-4">
        World of Epeoloides
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src="images/mfs-fw25-desk.webp"
            alt="Fashion show"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
            <h3>Men's Fall/Winter 2023 Fashion Show</h3>
            <button className="underline mt-2">Discover More</button>
          </div>
        </div>
        <div className="relative">
          <img
            src="images/mostra-desk.webp"
            alt="Fashion event"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm">
            <h3>Du Cœur À La Main - epeoloides</h3>
            <button className="underline mt-2">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldSection;
