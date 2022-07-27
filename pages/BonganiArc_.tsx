import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutUs_ from "../components/AboutUs_";
import Awards_ from "../components/Awards_";

interface BonganiArc_Props {}

const BonganiArc_ = ({}: BonganiArc_Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen w-[1200px] relative top-2 rounded-t-[10px] overflow-hidden z-[-2]`}
    >
      <div
        className={`flex flex-col items-center justify-start w-full h-[700px] relative overflow-hidden rounded-b-[0px]`}
      >
        <div
          className={`absolute top-0 w-full h-screen overflow-hidden z-[-1]`}
        >
          <img
            src={`/assets/images/GardenHouse.jpeg`}
            className={`w-full object-cover`}
          />
        </div>
        <div
          className={`absolute top-0 w-full h-screen flex flex-col items-start justify-start overflow-hidden topFade`}
        />
        {/* 👇️👇️👇️ Services */}
        <div
          className={`h-[90px] w-full bg-black z-[1] flex flex-row justify-start items-start pl-[30px] pr-[130px]`}
        >
          <div
            className={`h-[90px] w-[100px] flex flex-col justify-start items-start z-5`}
          >
            <img
              src={`/assets/images/Logo0.png`}
              className={`w-[100px] object-cover mb-[-20px]`}
            />
            <p
              className={`text-[15px] w-[100px] min-h-[1px] text-center font-black text-white Oswald_`}
            >
              Bongani
            </p>
            <p
              className={`text-[10px] w-[100px] min-h-[1px] relative left-[18px] text-center top-3 font-black text-yellow-400 Work_`}
            >
              ARC
            </p>
          </div>
          <div className={`flex flex-row w-full h-full-400 mt-[60px] justify-center items-center`}>
            <p className={`text-[20px] relative bottom-2 text-yellow-400 transition duration-500 hover:text-white cursor-pointer font-black mx-3`}>HOME</p>
            <p className={`text-[20px] relative bottom-2 text-white transition duration-500 hover:text-yellow-200 cursor-pointer font-black mx-3`}>CONTACT</p>
            <p className={`text-[20px] relative bottom-2 text-white transition duration-500 hover:text-yellow-200 cursor-pointer font-black mx-3`}>B'ARC</p>
            <p className={`text-[20px] relative bottom-2 text-white transition duration-500 hover:text-yellow-200 cursor-pointer font-black mx-3`}>SERVICES</p>
          </div>
          
        </div>
        <div
          className={`flex flex-row items-center justify-center bg-yellow-400/30 w-[650px] mb-[90px] min-h-[1px] relative`}
        ></div>
        <div
          className={`flex flex-row items-center justify-center w-full min-h-[20px] relative mb-[5px] pointer-events-none`}
        >
          <p className={`text-[16px] font-normal text-white Work_`}>Plumbing</p>
          <div className={`w-[5px] h-[5px] rounded-[50%] bg-yellow-400 m-1`} />
          <p className={`text-[16px] font-normal text-white Work_`}>Landscaping</p>
          <div className={`w-[5px] h-[5px] rounded-[50%] bg-yellow-400 m-1`} />
          <p className={`text-[16px] font-normal text-white Work_`}>Electrical</p>
          <div className={`w-[5px] h-[5px] rounded-[50%] bg-yellow-400 m-1`} />
          <p className={`text-[16px] font-normal text-white Work_`}>Architecture</p>
        </div>
        
        {/* 👇️👇️👇️ Main Header */}
        <div
          className={`flex flex-row items-center justify-center w-full min-h-[20px] relative pointer-events-none`}
        >
          <p className={`text-[65px] font-light text-white m-1 Oswald_`}>
            Quality Workmanship.
          </p>
          <p className={`text-[65px] font-bold text-yellow-400 m-1 Oswald_`}>
            Amazing Price.
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-center bg-yellow-400/30 w-[250px] min-h-[1px] relative pointer-events-none`}
        ></div>
        {/* 👇️👇️👇️ Hero Copy */}
        <div
          className={`flex flex-col items-center justify-center w-[650px] min-h-[20px] relative mb-3`}
        >
          <p className={`text-[16px] font-normal text-white text-center m-1`}>
            Ipsum dolore officia tempor magna sint ea ex anim laborum occaecat
            enim nostrud nostrud. Cupidatat in occaecat eiusmod in labore
            deserunt! Consectetur officia aliqua. Reprehenderit exercitation
            deserunt ipsum Lorem ea officia.
          </p>
        </div>
        {/* 👇️👇️👇️ Hero Ratings */}
        <div
          className={`flex flex-row items-center justify-center w-[150px] relative`}
        >
          <div
            className={`flex flex-row items-center justify-center w-[150px] relative`}
          >
            <FontAwesomeIcon
              // @ts-ignore
              icon={faFacebook}
              className={`h-[25px] w-[25px] cursor-pointer text-white transition-all duration-200 m-[1px] pointer-events-none`}
              onClick={() => {}}
            />
            <div
              className={`flex flex-col items-center justify-center ml-[-25px] w-[150px] h-[35px] relative`}
            >
              <div
                className={`flex flex-row items-center justify-center w-[150px] h-[35px] relative`}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
              </div>
              <p
                className={`text-white text-[12px] font-light pointer-events-none`}
              >
                5.0 Rating
              </p>
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-center w-[150px] relative`}
          >
            <FontAwesomeIcon
              // @ts-ignore
              icon={faGoogle}
              className={`h-[22px] w-[22px] cursor-pointer text-white transition-all duration-200 m-[1px] pointer-events-none`}
              onClick={() => {}}
            />
            <div
              className={`flex flex-col items-center justify-center ml-[-25px] w-[150px] h-[35px] relative`}
            >
              <div
                className={`flex flex-row items-center justify-center w-[150px] h-[35px] relative`}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
              </div>
              <p
                className={`text-white text-[12px] font-light pointer-events-none`}
              >
                5.0 Rating
              </p>
            </div>
          </div>
        </div>
        <div className={`absolute bottom-0 w-full h-[300px] bottomFade`}/>
      </div>
      <Awards_/>
      <AboutUs_/>
    </div>
  );
};

export default BonganiArc_;
