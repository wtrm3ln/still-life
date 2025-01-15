// app/components/Tile.js

import React from 'react';

const Tile = ({ children, square, colspan }) => {

  return (
    <div
      className={` relative group divide-x divide-secondary divide-x-2 overflow-hidden bg-light hover:bg-primary hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] text-black hover:text-white transition duration-300`}
      style={{ aspectRatio: square == false ? `${colspan} / 1` : '1 / 1',
      gridColumn: `span ${colspan} / span ${colspan}`,
      display: "grid",
      gridTemplateColumns: `repeat(${colspan}, 1fr)`,
       }}>
      {children}
    </div>
  );
};

export default Tile;
