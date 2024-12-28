import Tile4 from "./components/Tile4";
import Tile from "./components/Tile";
import Image from "next/image";
import ContentTile from "./components/ContentTile";
import TileGrid from "./components/TileGrid";

export default function Home() {
  return (
    <div className="p-2 bg-light">
      
      <TileGrid />
      <div className="bg-light w-full h-20 relative z-[2] -mt-20"></div>
      <Image width={150} height={150} src="/circle.png" alt="still-life logo" className="fixed z-[99] right-5 bottom-5 animate-spin-slow" />

      <p className="text-center text-3xl">we make the<span className="font-reenie text-4xl ml-3">magic happen</span> </p>
      
      <div class="notebook">
        <ul className="text-xl z-[10]">
          <li>Industrial Design</li>
          <li>Digital Experience Design</li>
          <li>Industrial Design</li>
        </ul>
      </div>

    </div>
  );
}
