import React from "react";
import fileSvg from '../../assets/file.svg';

interface CardProps {
  svgLink?: string;
  pngLink?: string;
  downloadLink?: string;
  bgColor?: string;
  img?: string;
  imgSize?: string;
}
const LogoDownloadCard: React.FC<CardProps> = ({ pngLink, svgLink, bgColor, img, imgSize }) => {
  return (
    <div className="w-full">
      <div className={`${bgColor} rounded-[20px] flex justify-center sm:w-[215px] sm:h-[215px] items-center py-10 font-nunitoSans`}>
        <img className={imgSize} src={img} alt="Logo" />
      </div>
      <div className="flex gap-x-2">
      <a
          href={svgLink}
          className="p-2.5 text-base flex gap-1 font-bold rounded-[10px] text-hex-2 bg-pink mt-3 cursor-pointer"
          download
        >
          <img src={fileSvg} alt="file download" />
          .svg
        </a>
        <a
          href={pngLink}
          className="p-2.5 text-base flex gap-1 font-bold rounded-[10px] text-hex-2 bg-pink mt-3 cursor-pointer"
          download
        >
        <img src={fileSvg} alt="file download" />
          .png
        </a>
      </div>
    </div>
  );
};

export default LogoDownloadCard;