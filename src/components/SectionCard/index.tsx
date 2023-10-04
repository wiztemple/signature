interface SectionCardProps {
  flexRow: string
}

const SectionCard = ({ flexRow }: SectionCardProps) => {
  return (
    <div className={`mt-10 flex ${flexRow} items-center gap-14 pt-10`}>
      <div>
        <img className="w-[630px] h-[450px] object-cover image-rendering-auto rounded-[50px]" src="https://framerusercontent.com/images/dwaQogkrt99Ybnxmpycv6sqPz8.jpg?scale-down-to=1024" />
      </div>
      <div>
        <div className="text-[#0f1728] text-[30px] font-nunito h-[38px] font-bold">Personalized Financial Solutions</div>
        <div className="text-lg text-[#667084] w-[570px] leading-[28px] mt-4">At Signature Bank, we understand that every individual has unique financial goals and needs. Our personal banking services are tailored to empower your aspirations as we provide customized products and services that align with your preferences.</div>
      </div>
    </div>
  )
}
export default SectionCard;
