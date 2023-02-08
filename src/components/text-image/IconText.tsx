import { IIconText } from "./IIconText";

const IconText = ({ text, icon }: IIconText) => {
  return (
    <div className="icon-text-wrapper">
      {icon}
      {text}
    </div>
  );
};

export default IconText;
