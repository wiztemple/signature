interface SectionCardProps {
  flexRow: string
  cardTitle: string
  cardDescription: string
  src: string
  black: string
  gray: string
  buttonBg: string
  buttonColor: string
  display: string
  extraClass: string
}

const SectionCard = ({ flexRow, cardTitle, cardDescription, src, black, gray, buttonBg, buttonColor, display, extraClass }: SectionCardProps) => {
  return (
    <div className={`mt-10 lg:flex ${flexRow} items-center gap-14 pt-10 font-nunitoSans`}>
      <div className="w-full">
        <img className="w-full h-[450px] object-cover bg-cover image-rendering-auto lg:rounded-[50px] rounded-[40px]" src={src} />
      </div>
      <div>
        <div className={`text-${black} text-[30px] leading-[1.2em] mt-10 h-[38px] font-bold`}>{cardTitle}</div>
        <div className={`text-lg ${gray} ${extraClass} 2xl:w-full leading-[28px] lg:mt-5 mt-14`}>{cardDescription}</div>
        <button style={{ backdropFilter: "blur(50px)" }} className={`${buttonBg} ${display} ${buttonColor} py-4 px-7 text-lg mt-6 rounded-[10px]`}>Contact Us</button>
      </div>
    </div>
  )
}
export default SectionCard;
