import Tile4 from "./components/Tile4";
import Tile from "./components/Tile";
import Image from "next/image";
import ContentTile from "./components/ContentTile";
import TileGrid from "./components/TileGrid";

export default function Home() {
  return (
    <div className="p-2 bg-light">
      
      <TileGrid />

      <h1 className="font-reenie text-4xl">Stll Life is a design company</h1>
      <p className="font-grotesk text-lg">Made by product designers</p>
      <Image width={200} height={200} src="/circle.png" alt="still-life logo" className="fixed right-5 bottom-5 animate-spin-slow" />

    </div>
  );
}
