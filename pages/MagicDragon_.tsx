import MD_Hero_ from "../components/MD_Hero_";
import MD_Rooms_ from "../components/MD_Rooms_";

interface MagicDragon_Props {}

const MagicDragon_ = ({}: MagicDragon_Props) => {
  const position = [51.505, -0.09]
  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen w-[1200px] relative top-2 rounded-t-[10px] overflow-hidden  bg-[#2e2c2d]`}
    >
      <MD_Hero_/>
      <MD_Rooms_/>
    </div>
  );
};

export default MagicDragon_;
