import closeSvg from "../../assets/cancel.svg";

interface IProps {
    handleClick: any
    name: string
    url: string
    title: string
    description: string
}

const AboutModal = ({handleClick, name, url, title, description}:IProps) => {
    return (
        <div className="bg-black/90 z-50 fixed top-0 left-0 h-screen overflow-hidden inset-0 items-center justify-center flex">
            <div className="bg-white w-[693px] h-[508px] font-nunitoSans rounded-[40px] p-5 relative">
                <img onClick={handleClick} className="-mt-10 absolute right-0" src={closeSvg} alt="close icon" />
                <div className="flex gap-5">
                    <div className="w-[214px]">
                        <img className="w-[214px] bg-cover rounded-[30px] object-cover h-[232px]" src={url} alt="" />
                    </div>
                    <div className="text-alternate w-[60%]">
                        <h1 className="text-[26.83px] font-bold mt-3">{name}</h1>
                        <p className="text-[18.78px]">{title}</p>
                        <div className="overflow-auto h-[362px] mt-2 leading-[1.3em] text-alternate/60 text-base">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;