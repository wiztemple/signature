import bannerSvg from '../../assets/bannersvg.svg';

interface BannerProps {
  title: string
  description: string
  buttonName: string
  url: string
  bannerBg: string
  titleStyle: string
  textColor: string
  buttonStyle: string
  imgContainer: string
}

const Banner = ({ title, description, buttonName, url, bannerBg, titleStyle, textColor, buttonStyle, imgContainer }: BannerProps) => {
  return (
    <div className={`rounded-[50px] relative h-[410px] overflow-hidden ${bannerBg}`}>
      <img className='absolute -top-36' src={bannerSvg} alt="banner svg" />
      <div className='text-primaryblack px-10 flex h-full items-center relative justify-between'>
        <div>
          <div className={`text-[42px] font-nunito ${titleStyle} font-bold leading-[1.2em]`}>{title}</div>
          <div className={`text-[20px] ${textColor} text-2xl mt-5 w-[80%]`}>{description}</div>
          <button style={{ backdropFilter: "blur(50px)" }} className={`${buttonStyle} mt-12 text-lg px-6 py-4 rounded-[10px]`}>{buttonName}</button>
        </div>
        <div className={`${imgContainer}`}>
          <img className='h-[340px] w-full rounded-[30px] object-cover' src={url} alt="Open an account" />
        </div>
      </div>
    </div>
  );
};


export default Banner;
