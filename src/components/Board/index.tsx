interface BoardProps {
    title: string
    description: string
}

const Board = ({title, description}: BoardProps) => {
    return (
        <div className="text-primaryblack h-[500px] overflow-hidden relative bg-main-7 font-nunitoSans">
            <img className="absolute lg:-bottom-20 bottom-10 lg:right-44 right-0 lg:w-[72%] w-full" src="https://framerusercontent.com/images/lrpi5BupBslKQxBnserqWJ30fDs.png" alt="" />
            <div className="flex relative flex-col h-full items-center justify-center pt-20">
                <h1 className="lg:text-[72px] md:w-[60%] leading-[1.3em] text-center text-[36px] font-bold text-black">{title}</h1>
                <p className="text-lg lg:w-[44%] md:w-[55%] w-[70%] text-center leading-[28px] lg:mt-0 mt-2 text-hex-11">{description}</p>
            </div>
        </div>
    );
};

export default Board;