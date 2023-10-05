import React from "react";
import pdfIcon from "../../assets/pdficon.svg";

interface CardProps {
  cardText?: string;
  downloadLink?: string;
}
const DownloadCard: React.FC<CardProps> = ({ cardText, downloadLink }) => {
  return (
    <div className="sm:w-[215px] w-full">
      <div className="bg-hex-2 rounded-[20px] flex flex-col items-center pt-10 pb-5 font-nunitoSans">
        <img className="w-[96px] h-[104px]" src={pdfIcon} alt="Pdf Icon" />
        <a
          href={downloadLink}
          className="p-5 text-xs font-bold rounded-[10px] text-white bg-hex-3 mt-5"
          download
        >
          Download
        </a>
      </div>
      <span className="text-xl block text-black pt-3">{cardText}</span>
    </div>
  );
};

export default DownloadCard;
