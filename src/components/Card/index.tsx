
interface CardProps {
    cardTitle: string
    cardDescription: string
    buttonName: string
}

const Card = ({ cardTitle, cardDescription, buttonName }: CardProps) => {
    return (
        <div>
            <div className="bg-[#fff5fa]/90 rounded-[20px] h-auto p-[30px]">
                <img className="block w-[117px] h-[117px] rounded-inherit object-center object-contain image-rendering-auto" src="https://framerusercontent.com/images/hFULY64HSxNlieXQDxDF2XD13AA.png" alt="" sizes="117px"></img>
                <div className="text-[25.85px] font-bold leading-[1em] mt-3">{cardTitle}</div>
                <div className="text-lg leading-[1.7em] mt-6 text-[#667084]">{cardDescription}</div>
                <button style={{ backdropFilter: "blur(50px)" }} className="bg-hex-2 text-white py-4 px-7 mt-14 rounded-[10px]">
                    <a className="text-lg text-center font-nunito" href="/">{buttonName}</a>
                </button>
            </div>
        </div>
    );
};

export default Card;