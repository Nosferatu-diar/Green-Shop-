import { type FooterLinksType } from "../../../@types";

const FooterItem = (props: FooterLinksType) => {
  const footer_link_style = " text-[#3D3D3D] font-normal text-[14px] ";
  return (
    <div className="flex flex-col gap-2 *:cursor-pointer">
      <h1 className="font-bold text-[#3D3D3D] text-[18px]">{props.title}</h1>
      <div className={`${footer_link_style}`}>{props.link1}</div>
      <div className={`${footer_link_style}`}>{props.link2}</div>
      <div className={`${footer_link_style}`}>{props.link3}</div>
      <div className={`${footer_link_style}`}>{props.link4}</div>
      <div className={`${footer_link_style}`}>{props.link5}</div>
    </div>
  );
};

export default FooterItem;
