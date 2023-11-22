interface TermProps {
    tabs: { name: string, link: string }[]
    title?: string
    color?: string
}

const TermsBar = ({ tabs, title="Content", color="text-hex-2" }: TermProps) => {
    return (
        <div className="sticky top-20 lg:w-[305px] overflow-auto lg:h-[80.75vh] h-[25vh] bg-hex-13 rounded-[20px] p-4">
            <div><a className={`${color} text-xl font-nunito font-bold`} href="/terms">{title}</a></div>
            {tabs.map((tab, index: number) => (
                <div key={index} className="mt-2"><a className="text-lg text-hex-2 hover:underline hover:text-primaryyellow font-nunito" href={tab.link}>{tab.name}</a></div>
            ))}
        </div>
    );
};

export default TermsBar;