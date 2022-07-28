import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MagicDragon_Props {}

const MagicDragon_ = ({}: MagicDragon_Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen w-full relative overflow-hidden z-[-2] bg-[#333132]`}
    >
      <div className={`w-full h-screen relative`}>
        <img
          src={`/assets/images/Plant.jpg`}
          className={`h-full w-full object-cover z-[0]`}
        />
        <div className={`absolute top-0 w-full h-full bottomFade`}></div>
        <div
          className={`absolute top-0 w-full h-full topFade opacity-70`}
        ></div>
        <div
          className={`absolute top-0 w-full h-full rightFade opacity-60`}
        ></div>
        <div
          className={`w-full h-[30px] absolute pr-[100px] top-[107px] flex flex-row justify-end items-end opacity-70`}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={`transition-all duration-500 h-[25px] w-[25px] text-white m-2 cursor-pointer`}
            onClick={() => {}}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className={`transition-all duration-500 h-[25px] w-[25px] text-white m-2 cursor-pointer`}
            onClick={() => {}}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className={`transition-all duration-500 h-[25px] w-[25px] text-white m-2 cursor-pointer`}
            onClick={() => {}}
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`transition-all duration-500 h-[25px] w-[25px] m-2 cursor-pointer text-white`}
            onClick={() => {}}
          />
        </div>
        <div
          className={`w-full h-[30px] opacity-90 absolute top-[110px] flex flex-row justify-center items-center`}
        >
          <p
            className={`text-white font-light Oswald_ text-[25px] opacity-80 hover:opacity-100 transition-all duration-400 mx-4 cursor-pointer`}
          >
            Shop
          </p>
          <p
            className={`text-[#4de850] font-light Oswald_ text-[25px] opacity-100 hover:opacity-800 transition-all duration-400 mx-4 cursor-pointer`}
          >
            Contact
          </p>
          <p
            className={`text-white font-light Oswald_ text-[25px] opacity-80 hover:opacity-100 transition-all duration-400 mx-4 cursor-pointer`}
          >
            About Us
          </p>
        </div>
        <div className={`absolute top-[60px] left-[150px] w-[150px] h-[80px] opacity-80`}>
          <div className={`relative overflow-hidden w-full h-full`}>
            <img
              src={`https://magicdragon.shop/wp-content/uploads/2021/09/cropped-MD-logo-slogan-PNG.png`}
              className={`left-[150px] w-[150px]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicDragon_;
