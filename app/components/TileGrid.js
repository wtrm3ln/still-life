import Tile from "./Tile";
import Tile4 from "./Tile4";
const TileGrid = () => {

  return (
    <div
      className='hidden md:grid md:grid-cols-[repeat(17,_minmax(0,_1fr))] divide-x divide-y divide-secondary divide-x-2 divide-y-2'
    >
      {Array.from({ length: 18 }, (_, index) => (
        <Tile />
      ))}

      <Tile square = {false} colspan="8">
        <div className="absolute top-0 bottom-0 left-0 w-1/4 z-10 border-r-[1.5px] border-secondary font-reenie text-4xl flex items-center justify-center bg-white text-primary">
          still
        </div>
        
        {/* Second Child */}
        <div className="absolute top-0 bottom-0 right-full w-3/4 flex gap-1 items-center justify-center bg-white text-black transition-all duration-500 group-hover:right-0">
         <p>puilding products and experiences</p> <div className="w-1 h-1 rounded-full bg-primary"></div>
        </div>
      </Tile>

      {Array.from({ length: 20 }, (_, index) => (
        <Tile />
      ))}

      <Tile>
      <div
          className="w-full aspect-square bg-accent rounded-full"
        >
        </div>
      </Tile>

      {Array.from({ length: 14 }, (_, index) => (
        <Tile />
      ))}

      <Tile square = {false} colspan="6" className='col-start-3'>
        <div className="absolute top-0 bottom-0 right-0 w-1/3 z-10 border-l-[1.5px] border-secondary font-reenie text-4xl flex items-center justify-center bg-white text-primary">
          life
        </div>
        
        {/* Second Child */}
        <div className="absolute top-0 bottom-0 left-full w-2/3 flex gap-1 items-center justify-center bg-white text-black transition-all duration-500 group-hover:left-0">
          <div className="w-1 h-1 rounded-full bg-primary text-lg font-bold"></div> <p>with a little beauty and craft</p> 
        </div>
      </Tile>

      {Array.from({ length: 22}, (_, index) => (
        <Tile />
      ))}

        <div className='col-span-4 aspect-[4/1] flex flex-col justify-center items-center bg-primary shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)]'>
          
            <h1 className="font-reenie text-white text-5xl">stilllife</h1>
          <div className="flex">
          <div className="w-1 h-1 bg-accent rounded-full mr-2 inline-block"></div> <p className="font-grotesk text-2xl text-accent whitespace-nowrap -mt-3 text-lg">design studio</p>  <div className="w-1 h-1 bg-black bg-accent rounded-full ml-2 inline-block"></div>
          
          </div>
        </div>
        {Array.from({ length: 32 }, (_, index) => (
        <Tile />
      ))}
    </div>
  );
};

export default TileGrid;