import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faCheck,
  faCheckCircle,
  faEarthAfrica,
  faHeadSideMask,
  faMusic,
  faPeopleGroup,
  faShield,
  faTv,
  faTvAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MagicDragon_Props {}

const MagicDragon_ = ({}: MagicDragon_Props) => {
  const position = [51.505, -0.09]
  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen w-full relative overflow-hidden z-[-2] bg-[#2e2c2d]`}
    >
      <div className={`w-full h-screen relative`}>
        <img
          src={`/assets/images/Plant.jpg`}
          className={`h-full w-full object-cover z-[0]`}
        />
        <div className={`absolute top-0 w-full h-full bottomFadeLight`}></div>
        <div
          className={`absolute top-0 w-full h-full topFadeLight opacity-70`}
        ></div>
        <div
          className={`absolute top-0 w-full h-full rightFadeLight opacity-60`}
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
        <div
          className={`w-full h-screen bg-black/10 absolute top-0 right-0 flex flex-row items-center justify-center`}
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
              className={`w-[120px] h-[40px] mr-[12px] relative top-[-50px] ml-auto rounded-[4px] bg-[#4de850]/60 flex flex-row justify-center items-center`}
            >
              <p className={`text-[13px] text-black/70 font-black`}>
                Make Order
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-[60px] left-[150px] w-[150px] h-[80px] opacity-80`}
        >
          <div className={`relative overflow-hidden w-full h-full`}>
            <img
              src={`https://magicdragon.shop/wp-content/uploads/2021/09/cropped-MD-logo-slogan-PNG.png`}
              className={`left-[150px] w-[150px]`}
            />
          </div>
        </div>
      </div>
      <div
        className={`w-[1200px] h-[100px] relative top-[-180px] mb-[-25px] flex flex-col justify-center items-center`}
      >
        <p className={`text-[30px] font-black text-white/70 mb-2`}>
          Recent Strain Imports
        </p>
        <p
          className={`w-[40%] mx-auto text-[14px] text-white/50 Work_ font-light text-center relative`}
        >
          Magna irure dolor labore nulla eu commodo deserunt labore duis laboris
          irure. Ipsum eu laborum ex aliqua sunt est ulla.
        </p>
      </div>
      <div
        className={`w-[1200] h-[350px] relative top-[-100px] flex flex-row justify-center items-center`}
      >
        <div
          className={`w-[300px] h-[400px] mx-4 rounded-[10px] bg-[#212121] border-solid border-[1px] border-[#4de850]/50 flex flex-col pt-[40px]`}
        >
          <img
            src={`/assets/images/NugZero.png`}
            className={`w-[280px] mx-auto object-cover opacity-70`}
          />
          <p
            className={`text-[20px] text-[#4de850]/80 Monts_ font-black text-center relative top-[5px]`}
          >
            AFRODITE
          </p>
          <p
            className={`w-[95%] mx-auto text-[13px] text-white/70 Work_ font-light text-center relative top-[10px]`}
          >
            Magna irure dolor labore nulla eu commodo deserunt labore duis
            laboris irure. Ipsum eu laborum ex aliqua sunt est ulla.
          </p>
        </div>
        <div
          className={`w-[300px] h-[400px] mx-4 rounded-[10px] bg-[#212121] border-solid border-[1px] border-transparent flex flex-col pt-[40px]`}
        >
          <img
            src={`/assets/images/NugTwo.png`}
            className={`w-[140px] mx-auto object-cover opacity-90`}
          />
          <p
            className={`text-[20px] text-[#4de850]/60 Monts_ font-black relative top-[25px] text-center`}
          >
            PURPLE MONKEY BALLS
          </p>
          <p
            className={`w-[95%] mx-auto text-[13px] text-white/50 Work_ font-light text-center relative top-[30px]`}
          >
            Magna irure dolor labore nulla eu commodo deserunt labore duis
            laboris irure. Ipsum eu laborum ex aliqua sunt est ulla.
          </p>
        </div>
        <div
          className={`w-[300px] h-[400px] mx-4 rounded-[10px] bg-[#212121] border-solid border-[1px] border-transparent flex flex-col pt-[40px]`}
        >
          <img
            src={`/assets/images/NugThree.png`}
            className={`w-[180px] mx-auto object-cover opacity-80 rotate-[123deg] mt-[35px]`}
          />
          <p
            className={`text-[20px] text-[#4de850]/60 Monts_ font-black relative top-[70px] text-center`}
          >
            STINKY PINKY
          </p>
          <p
            className={`w-[95%] mx-auto text-[13px] text-white/50 Work_ font-light text-center relative top-[75px]`}
          >
            Magna irure dolor labore nulla eu commodo deserunt labore duis
            laboris irure. Ipsum eu laborum ex aliqua sunt est ulla.
          </p>
        </div>
      </div>
      <div className={`w-full h-[500px] relative overflow-hidden`}>
        <img
          src={`/assets/images/HoldingJoint.jpg`}
          className={`w-full object-cover relative bottom-[500px]`}
        />
        <div
          className={`w-full h-full absolute top-0 right-0 bg-[#2e2c2d]/30 flex flex-col justify-center items-center`}
        >
          <p
            className={`text-[130px] font-black tracking-[30px] word-spacing-wide Monts_ text-white/60 relative`}
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
            className={`w-[120px] h-[40px] relative top-[130px] left-[460px] rounded-[4px] bg-[#4de850]/60 flex flex-row justify-center items-center`}
          >
            <p className={`text-[13px] text-black/70 font-black`}>
              Book A Visit
            </p>
          </div>
        </div>
      </div>
      <div className={`w-full h-[400px] bg-black relative`}>
        <div
          className={`w-full h-full flex flex-row justify-center items-center pt-[150px] bg-[#2e2c2d]/60 absolute top-0 right-0 `}
        >
          <div
            className={`flex flex-col justify-center items-center pt-[250px]`}
          >
            <p
              className={`text-[45px] text-white/70 font-bold Oswald_ mb-4 text-right tracking-[1px] w-[400px]`}
            >
              Work break on us!
            </p>
            <div
              className={`w-[400px] min-h-[350px] text-white/40 text-[14px] font-light text-right`}
            >
              Cillum nulla eu sint reprehenderit. Pariatur commodo sunt non ea
              ut laboris voluptate nulla incididunt. Laborum minim officia
              cillum eiusmod ullamco ipsum sit duis qui occaecat.Magna velit
              nisi elit est cupidatat ut officia eiusmod aute reprehenderit
              reprehenderit ullamco.
            </div>
          </div>
          <div
            className={`w-[600px] h-[320px] rounded-[2px] relative bottom-[65px] ml-6 overflow-hidden`}
          >
            <img
              src={`/assets/images/SmokeRoom.jpg`}
              className={`w-full object-cover relative bottom-[400px] opacity-70`}
            />
          </div>
          <div
            className={`w-[300px] h-[320px] rounded-[2px] relative bottom-[65px] ml-4 overflow-hidden`}
          >
            <img
              src={`https://images.pexels.com/photos/7667812/pexels-photo-7667812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              className={`W-full object-cover relative bottom-[70px] opacity-90`}
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full min-h-[250px] bg-black relative flex flex-col justify-center items-center`}
      >
        <div
          className={`w-full h-[100px] relative flex flex-col justify-center items-center bg-[#2e2c2d]/60 pt-[50px]`}
        >
          <p className={`text-[30px] font-black text-white/70 mb-2`}>
            Welcome To Our Private Rooms!
          </p>
          <p
            className={`w-[30%] mx-auto text-[14px] text-white/50 Work_ font-light text-center relative`}
          >
            Magna irure dolor labore nulla eu commodo deserunt labore duis
            laboris irure. Ipsum eu laborum ex aliqua sunt est ulla.
          </p>
        </div>
        <div
          className={`w-full h-full flex flex-row justify-center items-center bg-[#2e2c2d]/60 py-[25px] pt-[50px]`}
        >
          <div
            className={`w-[250px] h-[150px] rounded-[4px] bg-[#212121] flex flex-col justify-center items-center relative overflow-hidden mx-6`}
          >
            <div
              className={`w-full h-[40%] flex flex-row justify-center items-center`}
            >
              <FontAwesomeIcon
                icon={faShield}
                className={`transition-all duration-500 h-[50px] w-[50px] text-white/70 m-2 cursor-pointer pt-2`}
                onClick={() => {}}
              />
            </div>
            <div
              className={`w-full h-[60%] flex flex-col justify-center items-center`}
            >
              <p
                className={`text-[18px] font-black text-[#4de850]/60 Monts_ mb-1`}
              >
                Secure Space
              </p>
              <p
                className={`w-[90%] mx-auto text-[13px] text-white/50 Work_ font-thin text-center relative`}
              >
                Magna irure dolor labore nulla eu commodo deserunt labore duis.
              </p>
            </div>
          </div>
          <div
            className={`w-[250px] h-[150px] rounded-[4px] bg-[#212121] flex flex-col justify-center items-center relative overflow-hidden mx-6`}
          >
            <div
              className={`w-full h-[40%] flex flex-row justify-center items-center`}
            >
              <FontAwesomeIcon
                icon={faMusic}
                className={`transition-all duration-500 h-[50px] w-[50px] text-white/70 m-2 cursor-pointer pt-2`}
                onClick={() => {}}
              />
            </div>
            <div
              className={`w-full h-[60%] flex flex-col justify-center items-center`}
            >
              <p
                className={`text-[18px] font-black text-[#4de850]/60 Monts_ mb-1`}
              >
                International Vibe
              </p>
              <p
                className={`w-[90%] mx-auto text-[13px] text-white/50 Work_ font-thin text-center relative`}
              >
                Magna irure dolor labore nulla eu commodo deserunt labore duis.
              </p>
            </div>
          </div>
          <div
            className={`w-[250px] h-[150px] rounded-[4px] bg-[#212121] flex flex-col justify-center items-center relative overflow-hidden mx-6`}
          >
            <div
              className={`w-full h-[40%] flex flex-row justify-center items-center`}
            >
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className={`transition-all duration-500 h-[50px] w-[50px] text-white/70 m-2 cursor-pointer pt-2`}
                onClick={() => {}}
              />
            </div>
            <div
              className={`w-full h-[60%] flex flex-col justify-center items-center`}
            >
              <p
                className={`text-[18px] font-black text-[#4de850]/60 Monts_ mb-1`}
              >
                Redefining 'Sports Bar'
              </p>
              <p
                className={`w-[90%] mx-auto text-[13px] text-white/50 Work_ font-thin text-center relative`}
              >
                Magna irure dolor labore nulla eu commodo deserunt labore duis.
              </p>
            </div>
          </div>
          <div
            className={`w-[250px] h-[150px] rounded-[4px] bg-[#212121] flex flex-col justify-center items-center relative overflow-hidden mx-6`}
          >
            <div
              className={`w-full h-[40%] flex flex-row justify-center items-center`}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={`transition-all duration-500 h-[50px] w-[50px] text-white/70 m-2 cursor-pointer pt-2`}
                onClick={() => {}}
              />
            </div>
            <div
              className={`w-full h-[60%] flex flex-col justify-center items-center`}
            >
              <p
                className={`text-[18px] font-black text-[#4de850]/60 Monts_ mb-1`}
              >
                Quality Weed
              </p>
              <p
                className={`w-[90%] mx-auto text-[13px] text-white/50 Work_ font-thin text-center relative`}
              >
                Magna irure dolor labore nulla eu commodo deserunt labore duis.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full flex flex-row justify-center items-center bg-[#2e2c2d]/60 py-[25px] pt-[50px]`}
        >
         {/* Map Missing */}
        </div>
      </div>
    </div>
  );
};

export default MagicDragon_;
