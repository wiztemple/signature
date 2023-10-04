interface SectionCardProps {
  flexRow: string
  cardTitle: string
  cardDescription: string
  src: string
}

const SectionCard = ({ flexRow, cardTitle, cardDescription, src }: SectionCardProps) => {
  return (
    <div className={`mt-10 flex ${flexRow} items-center gap-14 pt-10`}>
      <div>
        <img className="w-[630px] h-[450px] object-cover image-rendering-auto rounded-[50px]" src={src} />
      </div>
      <div>
        <div className="text-[#0f1728] text-[30px] font-nunito h-[38px] font-bold">{cardTitle}</div>
        <div className="text-lg text-[#667084] w-[570px] leading-[28px] mt-4">{cardDescription}</div>
      </div>
    </div>
  )
}
export default SectionCard;
