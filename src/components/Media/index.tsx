import nextSvg from "../../assets/next.svg";

const MediaDetailComponent = ({children, title, date, link, img}: any) => {
    return (
        <div className="pt-44 bg-main-8 pb-28">
            <div className="lg:w-[40%] md:w-[60%] w-[90%] mx-auto font-nunitoSans">
                <h1 className="text-[#111111] text-[40px] leading-[1.2em] tracking-[-1.5px] font-bold text-center">{title}</h1>
                <p className="text-base text-center text-[#999999] leading-[2em] mt-5">{date}</p>
                <div className="mt-5">
                    <img className="rounded-[20px] w-full h-[450px] object-cover bg-cover" src={img} alt="" />
                    <div className="text-main-4 text-base">{children}</div>
                    <a href={link}><button className="bg-hex-2 mt-24 hover:bg-hex-1 duration-1000 delay-100 transition-all ease-in-out py-5 px-9 rounded-[20px] text-white text-4xl flex items-center mx-auto gap-2">Next <img className="w-8 h-8" src={nextSvg} alt="" /></button></a>
                </div>
            </div>
        </div>
    );
};

export default MediaDetailComponent;