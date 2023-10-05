
interface CardProps {
  cardTitle: string
  cardDescription: string
  buttonName: string
  src: string
  bg: string
  buttonBg: string
}

const Card = ({ cardTitle, cardDescription, buttonName, src, bg, buttonBg }: CardProps) => {
  return (
      <div>
          <div className={`${bg} rounded-[20px] h-auto p-[30px]`}>
              <div className="w-[117px] h-[97px] relative">
                  <img className="block w-full h-[117px] rounded-[10px]" src={src} alt="" sizes="117px"></img>
              </div>
              <div className="text-[28.85px] font-bold leading-[1em] mt-3">{cardTitle}</div>
              <div className="text-lg leading-[1.7em] mt-6 text-primarygray">{cardDescription}</div>
              <button style={{ backdropFilter: "blur(50px)" }} className={`${buttonBg} text-white py-4 px-7 mt-14 rounded-[10px]`}>
                  <a className="text-lg text-center font-nunito" href="/">{buttonName}</a>
              </button>
          </div>
      </div>
  );
};

export default Card;
