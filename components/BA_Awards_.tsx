interface BA_Awards_Props {
    
}
 
const BA_Awards_ = ({}:BA_Awards_Props) => {
    return ( 
        <div className={`w-full min-h-[200px] bg-black flex flex-col items-start justify-start`}>
        <div className={`w-full h-[40px] mt-4 flex flex-row items-center justify-center mb-4`}>
            <p className={`text-white/80 text-[15px] font-medium`}>BonganiArc Awards and Certifications</p>
        </div>
        <div className={`w-full h-[150px] pt-1 flex flex-row items-start justify-center`}>
            <img src={`https://cdn.dribbble.com/users/131151/screenshots/16260908/media/428fb5436131463fe0cd09306b3fd009.png?compress=1&resize=1000x750&vertical=top`} className={`transition-all duration-200 hover:opacity-100 opacity-70 w-[180px] object-cover relative bottom-4`} />
            <img src={`https://seeklogo.com/images/C/certified-ccof-organic-logo-26F83B9D5F-seeklogo.com.png`} className={`transition-all duration-200 hover:opacity-100 opacity-70 w-[80px] object-cover z-[1]`} />
            <img src={`https://seeklogo.com/images/B/BC_Road_Builders__and__Heavy_Construction_Association-logo-1B790F4053-seeklogo.com.png`} className={`transition-all duration-200 hover:opacity-100 opacity-70 w-[100px] object-cover invert z-[1] mx-10`} />
            <img src={`https://seeklogo.com/images/A/ANSI_Accredited_Certification_Program-logo-C1FC4EA8B1-seeklogo.com.png`} className={`transition-all duration-200 hover:opacity-100 opacity-70 w-[150px] object-cover`} />
            <img src={`https://seeklogo.com/images/A/angies-list-award-2018-logo-E2D696CDCA-seeklogo.com.png`} className={`transition-all duration-200 hover:opacity-100 opacity-70 w-[100px] object-cover invert mx-10`} />
        </div>
        </div>
     );
}
 
export default BA_Awards_;