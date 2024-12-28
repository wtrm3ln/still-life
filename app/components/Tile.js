// app/components/Tile.js

import React from 'react';

const Tile = ({ children, square, colspan }) => {

  return (
    <div
      className={`p-1 flex flex-col justify-center relative group overflow-hidden items-center bg-light hover:bg-primary hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] text-black hover:text-white transition duration-300`}
      style={{ aspectRatio: square == false ? `${colspan} / 1` : '1 / 1',
      gridColumn: `span ${colspan} / span ${colspan}`, }}>
      {children}
    </div>
  );
};

export default Tile;
