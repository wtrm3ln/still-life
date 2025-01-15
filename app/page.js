import Tile4 from "./components/Tile4";
import Tile from "./components/Tile";
import Image from "next/image";
import ContentTile from "./components/ContentTile";
import TileGrid from "./components/TileGrid";

export default function Home() {
  return (
    <div className="p-2 bg-light">
      
      <TileGrid />
      <Image width={150} height={150} src="/circle.png" alt="still-life logo" className="fixed z-[99] right-5 bottom-5 animate-spin-slow" />

      <p className="text-center text-3xl my-12">we make the<span className="font-reenie text-4xl ml-3">magic happen</span> </p>
      
      <div className="notebook">
        <ul className="text-xl z-[10] leading-[50px]">
          <li>We are a Design Studio doing all things Design</li>
          <li>Have a great idea  and need manufacturable and user friendly product designed?</li>
          <li>Have great tech a or company and need a great website like this one?</li>
        </ul>
      </div>

    </div>
  );
}
