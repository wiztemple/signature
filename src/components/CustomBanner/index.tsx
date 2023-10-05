interface CustomBannerProps {
  src: string
  alt: string
  dropFilter: string
  lineargradient: string
  description: string
  title1: string
  title2: string
  bg: string
  color: string
  subColor: string
  top: string
  bannerWidth: string
  textWidth: string
  display: string
  scaling: string
  heroBg: string
}

const CustomBanner = ({
  src,
  alt,
  dropFilter,
  lineargradient,
  description,
  title1, title2, bg, color, subColor, top, bannerWidth, textWidth, display, scaling, heroBg }: CustomBannerProps) => {
  return (
    <div className={`relative h-screen ${heroBg} w-full overflow-hidden`}>
      <div className={`w-full ${display} mx-auto flex justify-center`}>
        <div className="bg-primaryyellow bottom-[123px] h-[470px] absolute w-[38.1%] rounded-full" />
      </div>
      <div className={`z-40 h-full ${scaling}`}>
        <img
          className="h-full w-full rounded-inherit relative object-center object-cover image-auto"
          src={src}
          alt={alt}
        />
      </div>
      <div className={`text-white z-40 absolute w-full h-auto flex lg:mx-auto lg:justify-center ${top}`}>
        <div style={{ backdropFilter: `${dropFilter}` }} className={`text-[60px] ${bannerWidth} ${bg} rounded-[20px] p-[30px]`}>
          <div className={`text-${color} lg:text-[64px] text-center font-bold font-nunito leading-[1em]`}>
            <h1>{title1}</h1>
            <h1>{title2}</h1></div>
          <p className={`text-2xl font-nunito flex justify-center text-center mt-4 text-${subColor}`}>
            <p className={`${textWidth}`}>{description}</p>
          </p>
        </div>
      </div>
      <div style={{ background: `${lineargradient}` }} className="h-[450px] absolute bottom-0 left-0 w-full" />
    </div>
  );
};

export default CustomBanner;