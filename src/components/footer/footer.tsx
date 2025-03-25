import FooterTop from "./footer-top/footer-top";
import FooterSotional from "./footer-sotional";
import FooterItem from "./footer-item";
import Advice from "./advice/advice";
import { footer_links } from "../../utils";

const Footer = () => {
  return (
    <footer className="w-full relative mt-20">
      <div className="pb-5">
        <Advice />
        <FooterTop />
        <div className="grid grid-cols-4 max-[780px]:grid-cols-2 max-[780px]:gap-7 mt-10 px-[40px] max-[1099px]:px-10 max-[500px]:grid-cols-1 max-[780px]:items-center max-[780px]:justify-center max-[780px]:text-center">
          {footer_links.map((value) => (
            <FooterItem key={value.id} {...value} />
          ))}
          <FooterSotional />
        </div>
      </div>
      <hr className="text-[#92c59c]" />
      <div className="text-center py-5">© 2023 GreenShop. Davron Raimjonov</div>
    </footer>
  );
};

export default Footer;
