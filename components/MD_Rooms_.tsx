import {
  faCheck,
  faMusic,
  faPeopleGroup,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MD_Article0_ from "./MD_Article0_";

interface MD_Rooms_Props {}

const MD_Rooms_ = ({}: MD_Rooms_Props) => {
  return (
    <div>
      <div className={`w-full h-[500px] relative overflow-hidden`}>
        <img
          src={`/assets/images/HoldingJoint.jpg`}
          className={`w-full object-cover relative bottom-[270px]`}
        />
        <div
          className={`w-full h-full absolute top-0 right-0 bg-[#2e2c2d]/30 flex flex-col justify-center items-center`}
        >
          <p
            className={`text-[90px] bottom-[-20px] font-black tracking-[30px] word-spacing-wide Monts_ text-white/60 relative`}
          >
            SMOKE ROOMS
          </p>
        </div>
        <div
          className={`w-full h-full absolute top-0 right-0 flex flex-col pt-[50px] justify-center items-center`}
        >
          <p
            className={`text-[25px] font-thin italic Monts_ top-[95px] left-[275px] text-yellow-400/70 relative`}
          >
            Magic Dragon Centurion is now open..
          </p>
          <p
            className={`text-[15px] font-black italic Monts_ top-[100px] left-[410px] text-white/60 relative`}
          >
            9AM to 5PM - Weekdays
          </p>
          <p
            className={`text-[15px] font-black italic Monts_ top-[100px] left-[416px] text-white/60 relative`}
          >
            10AM to 3PM - Weekends
          </p>
          <div
            className={`w-[120px] h-[40px] relative top-[130px] left-[460px] rounded-[4px] bg-[#4de850]/60 flex flex-row justify-center items-center cursor-pointer`}
          >
            <p
              className={`text-[13px] text-black/70 font-black pointer-events-none`}
            >
              Book A Visit
            </p>
          </div>
        </div>
      </div>
      <MD_Article0_/>
    </div>
  );
};

export default MD_Rooms_;
