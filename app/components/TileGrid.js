'use client'
const specialTiles = [
    {
      id: 1,
      position: 25,
      colSpan: 4,
      rowSpan: 2,
      bgColor: "bg-light",
      content: (
        <div
          className="p-4 w-full h-full hover:bg-primary text-black hover:text-white flex flex-col justify-center group items-center"
          onClick={() => alert("Special Tile 1 Clicked!")}
        >
          <h1 className="font-reenie text-5xl">stilllife</h1>
        <div className="flex">
        <div className="w-1 h-1 bg-black group-hover:bg-accent rounded-full mr-2 inline-block"></div> <p className="font-grotesk text-2xl group-hover:text-accent whitespace-nowrap -mt-3 text-lg">design studio</p>  <div className="w-1 h-1 bg-black group-hover:bg-accent rounded-full ml-2 inline-block"></div>
        </div>
        </div>
      ),
    },
    {
      id: 2,
      position: 38,
      colSpan: 4,
      rowSpan: 2,
      bgColor: "bg-secondary",
      content: (
        <div
          className="p-4 text-black"
        >
          <h3 className="text-xl font-grotesk font-bold">Rapid Response Design Team</h3>
          <p>We help companies do design better</p>
        </div>
      ),
    },
    {
      id: 3,
      position: 78,
      colSpan: 5,
      rowSpan: 3,
      bgColor: "bg-accent",
      content: (
        <div
          className="p-4 text-black"
          onClick={() => console.log("Special Tile 3 clicked!")}
        >
          <h3 className="text-xl font-bold">What can we do for you?</h3>
          <p>Tell us!</p>
        </div>
      ),
    },
  ];
  
  function calculateTotalTiles(threshold, specialTiles, columns = 15) {
    const specialTilesArea = specialTiles.reduce(
      (sum, tile) => sum + tile.colSpan * tile.rowSpan,
      0
    );
    const total = threshold + specialTilesArea;
    return Math.ceil(total / columns) * columns;
  }
  
  export default function TileGrid() {
    const threshold = 100;
    const totalTiles = calculateTotalTiles(threshold, specialTiles);
  
    return (
      <div className="outline outline-2 outline-light grid sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-15 auto-rows-[minmax(0,1fr)] gap-0">
        {Array.from({ length: totalTiles }).map((_, index) => {
          const specialTile = specialTiles.find(
            (tile) => tile.position === index + 1
          );
  
          if (specialTile) {
            return (
              <div
                key={`special-${specialTile.id}`}
                className={`${specialTile.bgColor} flex border border-secondary items-center justify-center`}
                style={{
                  gridColumn: `span ${specialTile.colSpan} / span ${specialTile.colSpan}`,
                  gridRow: `span ${specialTile.rowSpan} / span ${specialTile.rowSpan}`,
                }}
              >
                {specialTile.content}
              </div>
            );
          }
  
          return (
            <div
              key={`default-${index}`}
              className="border border-secondary aspect-square bg-light hover:bg-primary transition duration-300"
            ></div>
          );
        })}
      </div>
    );
  }
  