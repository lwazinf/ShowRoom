interface AboutUs_Props {
    
}
 
const AboutUs_ = ({}:AboutUs_Props) => {
    return ( 
        <div className={`w-full h-[500px] bg-black relative overflow-hidden flex flex-row`}>
                <img className={`h-[400px] object-cover absolute top-[50px] z-[0] left-[100px] opacity-90 rounded-[2px]`} src={`/assets/images/Drill.jpg`}></img>
            <div className={`w-full h-full flex flex-row justify-center items-center z-[1] opacity-90`}>
                <p className={`text-[55px] text-white font-light m-2 Oswald_ relative left-[500px] bottom-[160px]`}>About</p>
                <p className={`text-[55px] text-yellow-400 font-bold m-2 Oswald_ relative left-[500px] bottom-[160px]`}>Us.</p>
                <div className={`w-[193px] h-[2px] bg-yellow-400 relative left-[300px] bottom-[125px]`}/>
                <p className={`text-[13px] text-white font-light m-2 Work_ relative left-[110px] bottom-[60px] w-[290px]`}>
                    Qui consequat nisi cupidatat ea Lorem ipsum dolore consequat fugiat amet ut laborum voluptate non. Aute ut cillum mollit elit. Occaecat excepteur aliqua nisi labore deserunt dolore. Eu laboris dolor id ea Lorem.
                </p>
            </div>
            <div className={`w-[100px] h-[40px] rounded-[1px] bg-yellow-400 shadow-md absolute right-[335px] bottom-[100px] opacity-90 font-black text-[15px] Oswald_ flex flex-row justify-center items-center cursor-pointer`}>
                GET QUOTE
            </div>
        </div>
     );
}
 
export default AboutUs_;