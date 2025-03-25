const FooterSotional = () => {
  const sotional_style =
    "border border-[#46A35833] w-[34px] h-[34px] flex justify-center items-center cursor-pointer";
  const sotional_title = "font-bold text-[#3D3D3D] text-[18px]";
  const payme_style = "w-[40px] h-[40px] cursor-pointer";

  return (
    <div>
      <h1 className={`${sotional_title}`}>Social Media</h1>
      <div className="flex items-center gap-3 mt-[10px] mb-[30px]">
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media"
            alt="facebook"
          />
        </div>
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media"
            alt="instagram"
          />
        </div>
        <div className={`${sotional_style}`}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media"
            alt="twitter"
          />
        </div>
      </div>

      <h1 className={`${sotional_title} mb-4`}>We Accept</h1>
      <div className="flex items-center gap-5">
        <img
          className={payme_style}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media"
          alt="paypal"
        />
        <img
          className={payme_style}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media"
          alt="mastercard"
        />
        <img
          className={payme_style}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media"
          alt="visa"
        />
        <img
          className={payme_style}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media"
          alt="express"
        />
      </div>
    </div>
  );
};

export default FooterSotional;
