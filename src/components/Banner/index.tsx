import '../../App.css';

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
    <div className={`lg:rounded-[50px] rounded-[20px] font-nunitoSans relative lg:h-[410px] overflow-hidden ${bannerBg}`}>
      {/* <img className='absolute -top-32 rotate overflow-hidden' src="https://lottie.host/?file=e63cd636-2a1e-4a7c-ab8a-7f19d1a6671a/EPxCFliCOt.json" alt="banner svg" /> */}
      <iframe className='absolute w-full h-full' src="https://lottie.host/?file=e63cd636-2a1e-4a7c-ab8a-7f19d1a6671a/EPxCFliCOt.json"></iframe>
      <div className='text-primaryblack lg:px-10 p-4 flex lg:flex-row flex-col-reverse h-full items-center relative justify-between'>
        <div>
          <div className={`md:text-[42px] text-[36px] mt-10 ${titleStyle} font-bold leading-[1.2em]`}>{title}</div>
          <div className={`text-[20px] ${textColor} md:text-2xl mt-5 md:w-[80%]`}>{description}</div>
          <button style={{ backdropFilter: "blur(50px)" }} className={`${buttonStyle} lg:mt-12 mt-6 text-lg px-6 py-4 rounded-[10px]`}>{buttonName}</button>
        </div>
        <div className={`${imgContainer}`}>
          <img className='h-[340px] w-full rounded-[30px] object-cover' src={url} alt="Open an account" />
        </div>
      </div>
    </div>
  );
};


export default Banner;
