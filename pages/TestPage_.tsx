import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faCheck, faMusic, faPeopleGroup, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MD_Hero_ from "../components/MD_Hero_";
import MD_Rooms_ from "../components/MD_Rooms_";

interface TestPage_Props {}

const TestPage_ = ({}: TestPage_Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-start min-h-screen lg:w-[1200px] sm:w-full relative lg:top-2 sm:top-0 lg:rounded-t-[10px] sm:rounded-none overflow-hidden  bg-[#2e2c2d]`}
    >
      <MD_Hero_/>
      <MD_Rooms_/>
    </div>
  );
};

export default TestPage_;
