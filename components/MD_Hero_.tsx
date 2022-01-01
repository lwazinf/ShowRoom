import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MD_Strains_ from "./MD_Strains_";

interface MD_Hero_Props {}

const MD_Hero_ = ({}: MD_Hero_Props) => {
  return (
    <div>
      <div className={`[1680px] h-[690px] relative`}>
        <img
          src={`/assets/images/Plant.jpg`}
          className={`h-full w-[1680px] object-cover`}
        />
        <div className={`absolute top-0 w-full h-full bottomFadeLight`}></div>
        <div
          className={`absolute top-0 w-full h-full topFadeLight opacity-70`}
        ></div>
        <div
          className={`absolute top-0 w-full h-full rightFadeLight opacity-60`}
        ></div>

        <div
          className={`w-full h-[690px] bg-black/10 absolute top-0 right-0 flex flex-row items-center justify-center`}
        >
          <div className={`w-[500px] h-[400px] rounded-[4px] relative right-9`}>
            <p className={`text-[60px] font-black text-white/70 text-right`}>
              DON'T BE SHY
            </p>
            <p
              className={`text-[40px] font-normal Oswald_ text-white/50 text-right relative bottom-[20px]`}
            >
              STOP BY AND SAY
            </p>
            <p
              className={`text-[150px] font-black Monts_ text-pink-400/60 text-right relative bottom-[20px]`}
            >
              HIGH
            </p>
            <div
              className={`w-[120px] h-[40px] mr-[12px] relative top-[0px] ml-auto rounded-[4px] bg-[#4de850]/60 flex flex-row justify-center items-center cursor-pointer`}
            >
              <p className={`text-[13px] text-black/70 font-black`}>
                Make Order
              </p>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-[30px] absolute px-[50px] top-[80px] flex flex-row justify-end items-center opacity-70`}
        >
          <div
            className={`w-[150px] h-[80px] opacity-80 relative bottom-[20px]`}
          >
            <div className={`relative overflow-hidden w-full h-full`}>
              <img
                src={`https://magicdragon.shop/wp-content/uploads/2021/09/cropped-MD-logo-slogan-PNG.png`}
                className={`left-[150px] w-[150px]`}
              />
            </div>
          </div>
          <div
            className={`min-w-[100px] h-[30px] opacity-90 flex flex-row justify-center items-center mx-auto`}
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
          <div className={`w-[150px] flex flex-col justify-center items-center relative top-[250px]`}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={`transition-all duration-500 h-[25px] w-[25px] text-white m-2 cursor-pointer`}
              onClick={() => {}}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className={`transition-all duration-500 h-[25px] w-[25px] text-white opacity-100 hover:opacity-75 m-2 cursor-pointer`}
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
        </div>
      </div>
      <MD_Strains_ />
    </div>
  );
};

export default MD_Hero_;
