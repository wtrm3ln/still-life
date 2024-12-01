import Tile4 from "./components/Tile4";
import Tile from "./components/Tile";
import Image from "next/image";
import ContentTile from "./components/ContentTile";
import TileGrid from "./components/TileGrid";

export default function Home() {
  return (
    <div className="p-2 bg-light">
      
      <TileGrid />

      <div className="bg-light w-full h-24 relative z-[2] -mt-24"></div>
      <Image width={150} height={150} src="/circle.png" alt="still-life logo" className="fixed z-[99] right-5 bottom-5 animate-spin-slow" />

    </div>
  );
}
