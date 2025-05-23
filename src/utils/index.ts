import type {
  HeroCarouselType,
  TitleCategoryType,
  PostMockItemType,
  InfoMockItemType,
  FooterLinksType,
  AdviceMockItemType,
  PathProfileType,
  ProfileTabType,
} from "../@types";

import post from "../assets/imgs/post.png";
import post1 from "../assets/imgs/post1.png";
import post2 from "../assets/imgs/post2.png";
import post3 from "../assets/imgs/post3.png";
import vektor from "../assets/imgs/vektor.png";
import info from "../assets/imgs/info.png";
import info1 from "../assets/imgs/info1.png";
import advice from "../assets/imgs/advice.png";
import advice1 from "../assets/imgs/advice1.png";
import advice2 from "../assets/imgs/advice2.png";
import {
  DashboardOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AccauntDetails from "../components/profile/profile-pages/accaunt-details";
import MyProducts from "../components/profile/profile-pages/my-products";
import Adress from "../components/profile/profile-pages/adress";
import Wishlist from "../components/profile/profile-pages/wishlist";
import TrackOrder from "../components/profile/profile-pages/track-order";
import About from "../components/user-page-children/user-details/about";
import Products from "../components/user-page-children/user-details/products";
import Posts from "../components/user-page-children/user-details/posts";
import Likees from "../components/user-page-children/user-details/likees";
import Followers from "../components/user-page-children/user-details/followers";

export const hero_carousel: HeroCarouselType[] = [
  {
    id: 1,
    title: "Le’s Make a Better",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "SHOP NOW",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 2,
    title: "LET'S LIVE IN A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "LE'TS START",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 3,
    title: "LET'S OBSERVE A BETTER",
    subTitle: "WELCOME TO GREENSHOP",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    buttonText: "GET CREDITS",
    big_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
    small_img_url:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
];

export const title_category: TitleCategoryType[] = [
  {
    id: 1,
    title: "All Plants",
    label: "all-plants",
  },
  {
    id: 2,
    title: "New Arrivals",
    label: "new-arrivals",
  },
  {
    id: 3,
    title: "Sale",
    label: "sale",
  },
];

export const post_item: PostMockItemType[] = [
  {
    id: 1,
    title: "Cactus & Succulent Care Tips",
    subTitle: "September 12 | Read in 6 minutes",
    description:
      "Cacti and succulents are easy care plants for any home or patio.",
    img: post,
  },
  {
    id: 2,
    title: "Top 10 Succulents for Your Home",
    subTitle: "September 12 | Read in 6 minutes",
    description: "Best in hanging baskets. Prefers medium to high light.",
    img: post1,
  },
  {
    id: 3,
    title: "Cacti & Succulent Care Tips",
    subTitle: "September 15 | Read in 3 minutes",
    description:
      "Cacti and succulents thrive in containers and because most are..",
    img: post2,
  },
  {
    id: 4,
    title: "Best Houseplants Room by Room",
    subTitle: "September 15 | Read in 2 minutes",
    description: "The benefits of houseplants are endless. In addition to..",
    img: post3,
  },
];

export const info_item: InfoMockItemType[] = [
  {
    id: 0,
    title: "Summer cactus & succulents",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info,
    vektor,
  },
  {
    id: 1,
    title: "STYLING TRENDS & MUCH MORE",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    img: info1,
    vektor,
  },
];

export const footer_links: FooterLinksType[] = [
  {
    id: 1,
    title: "My Account",
    link1: "My Account",
    link2: "Our stores",
    link3: "Contact us",
    link4: "Career",
    link5: "Specials",
  },

  {
    id: 2,
    title: "Help & Guide",
    link1: "Help Center",
    link2: "How to Buy",
    link3: "Shipping & Delivery",
    link4: "Product Policy",
    link5: "How to Return",
  },

  {
    id: 3,
    title: "Categories",
    link1: "House Plants",
    link2: "Potter Plants",
    link3: "Seeds",
    link4: "Small Plants",
    link5: "Accessories",
  },
];

export const advice_item: AdviceMockItemType[] = [
  {
    id: 0,
    title: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice,
    border: false,
  },
  {
    id: 1,
    title: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice1,
    border: true,
  },
  {
    id: 2,
    title: "Watering Graden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    img: advice2,
    border: true,
  },
];

export const path_profile: PathProfileType[] = [
  {
    id: 1,
    path: "",
    Component: AccauntDetails,
    Icon: UserOutlined,
    title: "Account Details",
  },
  {
    id: 2,
    path: "my-products",
    Component: MyProducts,
    Icon: ShoppingOutlined,
    title: "My Products",
  },
  {
    id: 3,
    path: "address",
    Component: Adress,
    Icon: EnvironmentOutlined,
    title: "Adress",
  },
  {
    id: 4,
    path: "wishlist",
    Component: Wishlist,
    Icon: HeartOutlined,
    title: "Wishlist",
  },
  {
    id: 5,
    path: "track-order",
    Component: TrackOrder,
    Icon: DashboardOutlined,
    title: "Track Order",
  },
];

export const profile_tab_items: ProfileTabType[] = [
  {
    key: "1",
    label: "About",
    Components: About,
  },
  {
    key: "2",
    label: "Products",
    Components: Products,
  },
  {
    key: "3",
    label: "Posts",
    Components: Posts,
  },
  {
    key: "4",
    label: "Likees",
    Components: Likees,
  },
  {
    key: "5",
    label: "Followers",
    Components: Followers,
  },
];
