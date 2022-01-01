interface MD_Strains_Props {}

const MD_Strains_ = ({}: MD_Strains_Props) => {
  return (
    <div className={`min-h-[200px]`}>
      <div
        className={`md:w-[1200px] sm:w-full h-[200px] relative top-[-100px] mb-[0px] flex flex-col justify-center items-center`}
      >
        <p className={`text-[30px] font-black text-white/70 mb-2`}>
          Recent Strain Imports
        </p>
        <p
          className={`md:w-[40%] w-[400px] mx-auto text-[14px] text-white/50 Work_ font-light text-center relative`}
        >
          Magna irure dolor labore nulla eu commodo deserunt labore duis laboris
          irure. Ipsum eu laborum ex aliqua sunt est ulla.
        </p>
      </div>
      <div
        className={`w-[1200] min-h-[350px] relative top-[-100px] flex md:flex-row flex-col justify-center items-center`}
      >
        <div
          className={`w-[300px] h-[400px] mx-4 my-2 rounded-[10px] bg-[#212121] border-solid border-[1px] border-[#4de850]/50 flex flex-col pt-[40px] cursor-pointer`}
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
          className={`w-[300px] h-[400px] mx-4 my-2 rounded-[10px] bg-[#212121] border-solid border-[1px] border-transparent flex flex-col pt-[40px] hover:border-[#4de850]/50 transition-all duration-200 cursor-pointer`}
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
          className={`w-[300px] h-[400px] mx-4 my-2 rounded-[10px] bg-[#212121] border-solid border-[1px] border-transparent flex flex-col pt-[40px] hover:border-[#4de850]/50 transition-all duration-200 cursor-pointer`}
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
    </div>
  );
};

export default MD_Strains_;
