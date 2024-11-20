// app/components/Tile.js

import React from 'react';

const Tile = ({ children, square, colspan }) => {

  return (
    <div
      className={`p-4 border flex flex-col justify-center group items-center col-span-${colspan} ${square == false ? "" : "aspect-square"} border-secondary bg-light hover:bg-primary text-black hover:text-white transition duration-300`}
    >
      {children}
    </div>
  );
};

export default Tile;
