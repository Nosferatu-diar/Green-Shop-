import { useDispatch } from "react-redux";
import { setModalAuthorizationModalVisibilty } from "../../../redux/modalSlice";

const BlogHeader = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-[90%] m-auto h-[200px] p-[50px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[200px] max-md:h-[180px] justify-between max-[530px]:hidden">
        <img
          className="w-[100px] h-full"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media"
          alt="stiker"
        />
        <img
          className="w-[100px] h-full mt-[20px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media"
          alt="stiker"
        />
        <img
          className="w-[100px] h-full mt-[50px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media"
          alt="stiker"
        />
        <img
          className="w-[100px] h-full mt-[20px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media"
          alt="stiker"
        />
        <img
          className="w-[100px] h-full"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media"
          alt="stiker"
        />
      </div>
      <h1 className="mt-10 font-black text-center text-7xl max-[1000px]:text-5xl max-[600px]:text-3xl max-[380px]:text-xl">
        Monetize your content with
        <span className="text-[#46A358]">GreenShop</span>
      </h1>
      <p className="text-center text-lg max-[600px]:text-base mt-5">
        Greenshop - a platform for buying and selling, publishing and monetizing
        all types of flowers: articles, notes, video, photos, podcasts or songs.
      </p>
      <button
        onClick={() => {
          dispatch(setModalAuthorizationModalVisibilty());
        }}
        className="bg-[#46A358] flex rounded-md items-center justify-center text-white m-auto mt-7 px-5 cursor-pointer py-2"
      >
        Join Greenshop
      </button>
    </div>
  );
};

export default BlogHeader;
