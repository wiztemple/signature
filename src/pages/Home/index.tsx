import Banner from "../../components/Banner";
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import bannerSvg from '../../assets/bannersvg.svg';
import { Slide } from "../../utils/Slide";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string
  description: string
  url: string
}

const Hero = ({title, description, url}: HeroProps) => (
  <Slide style={{ backgroundColor: "rgb(249, 250, 251)" }} className="h-screen overflow-hidden relative w-full z-40">
    <div className="w-[85%] mx-auto h-full">
      <img className='absolute -top-5 z-30 rotate overflow-hidden -ml-20' src={bannerSvg} alt="banner svg" />
      <div className="flex justify-between z-50 items-center w-full h-full">
        <div className="text-black w-[45%] mt-44">
          <h1 className="text-[64px] text-hex-2 font-nunito leading-[1em] font-bold">{title}</h1>
          <p className="text-xl font-nunito text-hex-8 mt-3">{description}</p>
          <button className="bg-hex-2 px-4 py-2 rounded-[10px] text-white mt-4 font-nunito">Learn More</button>
        </div>
        <div className="text-black flex-1">
          <img className="w-full h-full z-50 object-center bg-cover ml-24 mt-[24%]" src={url} alt="" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-4 z-40 text-black mx-auto w-full flex justify-center">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} className="w-20 h-7 gap-2 rounded-[20px] flex justify-center items-center">
        <span className="w-[10px] h-[10px] bg-white rounded-full" />
        <span className="w-[10px] h-[10px] bg-gray-400 rounded-full" />
        <span className="w-[10px] h-[10px] bg-gray-400 rounded-full" />
      </div>
    </div>
  </Slide>
);

const Home = () => {

  const dots = [
  {dot: 1},
  {dot: 2},
  {dot: 3},
]

  const [activeIndex, setActiveIndex] = useState(1);

    const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === dots.length ? 1 : prevIndex + 1));
    };
    
     useEffect(() => {
    // Automatically change slide every 7 seconds
    const slideInterval = setInterval(nextSlide, 7000);

    // Clear interval when the component is unmounted
    return () => clearInterval(slideInterval);
     }, [activeIndex]);
  
  return (
    <div className="font-nunitoSans bg-white">
      <Header />
      {/* https://framerusercontent.com/images/RBrg2DQg02GRb93W6tUeDp1hTE.png */}
      {/* https://framerusercontent.com/images/QgQXRLJTwx5NqjV4oPeHZf4rFf8.png */}
      {/* https://framerusercontent.com/images/YP5wt0ZQnMobsLhO7jhlynAAio.png */}
      {dots[0].dot === activeIndex && <Hero
        title="Unlock Limitless Possibilities"
        description="We provide exceptional banking solutions by leveraging technology to accelerate your financial growth."
        url="https://framerusercontent.com/images/RBrg2DQg02GRb93W6tUeDp1hTE.png"
      />}
      {dots[1].dot === activeIndex && <Hero
        title="Experience Freedom"
        description="Stay ahead with on-the-go banking."
        url="https://framerusercontent.com/images/QgQXRLJTwx5NqjV4oPeHZf4rFf8.png"
      />}
      {dots[2].dot === activeIndex && <Hero
        title="Make Your Mark"
        description="Whatever the size of your dream we will help you achieve them with our variety of innovative banking products and services."
        url="https://framerusercontent.com/images/YP5wt0ZQnMobsLhO7jhlynAAio.png"
      />}
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
    <Footer />
    </div>
  )
}

export default Home;