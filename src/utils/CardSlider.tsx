import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides: { url: string, alt: string }[] = [
  {  alt: 'Personal Banking', url: 'https://framerusercontent.com/images/IdAjTDC1X43zBVcCNP3zIe8dw.png' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/5LpQCnxX1yp1hFoO251hK9KuTIM.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/POXME8dVduwPVY7ZBj6MEJArYE.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
   {  alt: 'Personal Banking', url: 'https://framerusercontent.com/images/IdAjTDC1X43zBVcCNP3zIe8dw.png' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/5LpQCnxX1yp1hFoO251hK9KuTIM.png?scale-down-to=512' }, 
];

const responsive = [
    {
        breakpoint: 1200,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
        }
    }
];

export const CardToLeft = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        initialSlide: 0,
        responsive: responsive
    };
    return (
        <div>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer w-[202px] h-[148px] px-2">
                        <img className="left-5 bg-primaryyellow whitespace-nowrap transition-all duration-500 delay-300 rounded-[10px] w-full h-full bg-cover object-cover" src={slide.url} alt={slide.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const CardToRight = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        rtl: true,
        initialSlide: 0,
        responsive: responsive
    };
    return (
        <div>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer px-2 sm:w-[229px] w-[202px] sm:h-[148px] h-[130px]">
                        <img className="left-5 bg-primaryyellow whitespace-nowrap transition-all duration-500 delay-300 rounded-[10px] sm:w-[229px] w-[202px] sm:h-[148px] h-[130px] bg-cover object-cover" src={slide.url} alt={slide.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}