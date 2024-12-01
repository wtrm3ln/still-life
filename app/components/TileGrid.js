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
          className="p-4 w-full h-full hover:bg-primary text-black hover:text-white animate duration-200 flex flex-col justify-center group items-center"
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
      position: 43,
      colSpan: 3,
      rowSpan: 2,
      bgColor: "",
      content: (
        <div
          className="p-4 text-black text-center"
        >
          <h3 className="text-xl font-grotesk font-bold">Still</h3>
          <p>We build products that experiences that delight users.</p>
        </div>
      ),
    },
    {
      id: 3,
      position: 60,
      colSpan: 3,
      rowSpan: 2,
      bgColor: "bg-light",
      content: (
        <div
          className="p-4 text-black text-center"
          onClick={() => console.log("Special Tile 3 clicked!")}
        >
          <h3 className="text-xl font-grotesk font-bold">Life</h3>
          <p>We make sure that our creations have a meaningful identity.</p>
        </div>
      ),
    },
    {
      id: 4,
      position: 23,
      colSpan: 1,
      rowSpan: 1,
      bgColor: "bg-white",
      content: (
        <div
          className="p-4 w-full aspect-square bg-accent rounded-full m-2"
        >
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
      <div className="outline outline-2 -outline-offset-2 outline-light grid sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-15 auto-rows-[minmax(0,1fr)] gap-0">
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
              className="border border-secondary aspect-square bg-light transition duration-300"
            ></div>
          );
        })}
      </div>
    );
  }
  