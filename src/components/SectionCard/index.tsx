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
}

const SectionCard = ({ flexRow, cardTitle, cardDescription, src, black, gray, buttonBg, buttonColor, display }: SectionCardProps) => {
  return (
    <div className={`mt-10 flex ${flexRow} items-center gap-14 pt-10`}>
      <div>
        <img className="w-[630px] h-[450px] object-cover image-rendering-auto rounded-[50px]" src={src} />
      </div>
      <div>
        <div className={`text-${black} text-[30px] font-nunito h-[38px] font-bold`}>{cardTitle}</div>
        <div className={`text-lg ${gray} w-[570px] leading-[28px] mt-4`}>{cardDescription}</div>
        <button style={{ backdropFilter: "blur(50px)" }} className={`${buttonBg} ${display} ${buttonColor} py-4 px-7 text-lg font-nunito mt-6 rounded-[10px]`}>Contact Us</button>
      </div>
    </div>
  )
}
export default SectionCard;
