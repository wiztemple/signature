import React, { useRef } from 'react';

const CopyToClipboardButton: React.FC<{ text: string; bg: string; textColor: string }> = ({ text, bg, textColor }) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className={`font-semibold font-nunitoSans text-base p-3 rounded-[10px] w-fit transition ease-in-out delay-150 focus-within:scale-90 ${bg}`}>
      <textarea
        ref={textAreaRef}
        style={{ position: 'absolute', left: '-9999px' }}
        defaultValue={text}
      />
      <button onClick={copyToClipboard} className={`${textColor} font-semibold`}>Copy {text}</button>
    </div>
  );
};

export default CopyToClipboardButton;
