import { Reveal } from "../../utils/Reveal";

interface CustomBannerProps {
  src: string;
  alt: string;
  dropFilter: string;
  lineargradient: string;
  description: string;
  title1: any;
  bg: string;
  color: string;
  subColor: string;
  top: string;
  bannerWidth: string;
  textWidth: string;
  display: string;
  scaling: string;
  heroBg: string;
  show: boolean
  extraClass: string
}

const CustomBanner = ({
  src,
  alt,
  lineargradient,
  description,
  title1,
  show,
  bg,
  color,
  subColor,
  top,
  bannerWidth,
  textWidth,
  display,
  scaling,
  heroBg,
  extraClass
}: CustomBannerProps) => {
  return (
    <div className={`relative h-screen ${heroBg} w-full overflow-hidden font-nunitoSans`}>
      <div className={`w-full ${display} mx-auto flex justify-center`}>
        <div className="bg-primaryyellow bottom-[123px] h-[470px] absolute w-[38.1%] rounded-full" />
      </div>
      {show === true ? <Reveal>
        <div className={`z-40 h-screen ${scaling}`}>
        <img
          className="h-full w-full rounded-inherit relative object-center object-cover image-auto"
          src={src}
          alt={alt}
        />
      </div>
      </Reveal> : <div className={`z-40 h-full ${scaling}`}>
        <img
          className="h-full w-full rounded-inherit relative object-center object-cover image-auto"
          src={src}
          alt={alt}
        />
      </div>}
      <div
        className={`text-white z-40 absolute w-full ${extraClass} flex mx-auto justify-center ${top}`}
      >
        <div
          // style={{ backdropFilter: `${dropFilter}` }}
          className={`text-[60px] backdrop-blur-md ${bannerWidth} ${bg} rounded-[20px] md:p-[30px] py-[30px] px-[10px]`}
        >
          <div
            className={`text-${color} md:text-[64px] text-[42px] text-center font-bold leading-[1em]`}
          >
            <h1>{title1}</h1>
          </div>
          <p
            className={`text-2xl flex justify-center text-center mt-2 text-${subColor}`}
          >
            <p className={`${textWidth}`}>{description}</p>
          </p>
        </div>
      </div>
      <div
        style={{ background: `${lineargradient}` }}
        className="h-[450px] absolute bottom-0 left-0 w-full"
      />
    </div>
  );
};

export default CustomBanner;
