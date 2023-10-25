import ZoomOnScroll from "../../utils/ZoomOnScroll"

interface CardProps {
  cardTitle: string
  cardDescription: string
  buttonName: string
  src: string
  bg: string
  buttonBg: string
  link: string
}

const Card = ({ cardTitle, cardDescription, buttonName, src, bg, buttonBg, link }: CardProps) => {
  return (
      <div>
          <ZoomOnScroll>
               <div className={`${bg} rounded-[20px] p-[30px]`}>
              <div className="w-[117px] h-[97px] relative">
                  <img className="block w-full h-[117px] rounded-[10px]" src={src} alt="" sizes="117px"></img>
              </div>
              <div className="text-[28.85px] w-[90%] font-bold leading-[1.1em] mt-3">{cardTitle}</div>
              <div className="text-lg leading-[1.7em] mt-6 text-primarygray font-normal">{cardDescription}</div>
              <button style={{ backdropFilter: "blur(50px)" }} className={`${buttonBg} transition-all delay-100 duration-200 text-white py-4 px-7 rounded-[10px]`}>
            <a className="text-lg text-center font-nunitoSans" href={link}>{buttonName}</a>
              </button>
          </div>
         </ZoomOnScroll>
      </div>
  );
};

export default Card;
