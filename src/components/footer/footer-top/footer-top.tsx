import type { FC } from "react";
import { Link } from "react-router-dom";

const FooterTop: FC = () => {
  const info_style =
    "flex items-center gap-2 text-[#3D3D3D] text-[14px] font-normal";

  return (
    <div className="bg-[#edf6ef] mt-[40px] grid grid-cols-4 gap-6 items-center px-[27px] py-[23px] max-[1041px]:grid-cols-2 max-[767px]:grid-cols-1">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=0e4f4f4f-4f4f-4f4f-4f4f-4f4f4f4f4f4f"
            alt="logo"
          />
        </Link>
      </div>

      {/* Address Section */}
      <div>
        <a
          className={`${info_style}`}
          href="https://maps.app.goo.gl/JsBEY9JET5mrALtH6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flocation.svg?alt=media&token=0e4f4f4f-4f4f-4f4f-4f4f-4f4f4f4f4f4f"
            alt="location"
          />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </a>
      </div>

      {/* Email Section */}
      <div>
        <a className={`${info_style}`} href="mailto:contact@greenshop.com">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Femail.svg?alt=media"
            alt="mail"
          />
          <p>contact@greenshop.com</p>
        </a>
      </div>

      {/* Phone Section */}
      <div>
        <a className={`${info_style}`} href="tel:+770224446">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fcall.svg?alt=media"
            alt="tel"
          />
          <p>+88 01911 717 490</p>
        </a>
      </div>
    </div>
  );
};

export default FooterTop;
