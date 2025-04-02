import React from "react";

export interface ComponentType {
  children: React.ReactNode;
}

export interface FieldType {
  email?: string;
  password?: string;
}

export interface FieldTypeRegisgter {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

export interface HeroCarouselType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}

export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  _id: string;
}

export interface QueryType<T> {
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
  data?: T;
}

export interface DiscountType {
  _id: number;
  title: string;
  discount_up_to: number;
  poster_image_url: string;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface CartType {
  category: string;
  comments: string[];
  description: string;
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  _id: string;
  detailed_images: string[];
  created_by: string;
}

export interface PostMockItemType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
}

export interface InfoMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  vektor: string;
}

export interface FooterLinksType {
  id: number;
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
  link5?: string;
}

export interface AdviceMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  border: boolean;
}

export interface CartTypeData extends CartType {
  counter: number;
  userPrice: number;
}

export interface WishListItemType {
  flower_id: string;
  route_path: string;
}

interface BillingAdres {
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
}

export interface AuthUser {
  _id: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: WishListItemType[];
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
  //   wishlist?: string[];
  country?: string;
  town?: string;
  username?: string;
  billing_address?: BillingAdres;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

export interface MakeOrderType {
  name: string;
  surname: string;
  country: string;
  street: string;
  state: string;
  email: string;
  zip: string;
  appartment: string;
  town: string;
  phone_number: string;
  comment: string;
  payment_method: string;
}

export interface BlogType {
  content: string;
  created_at: string;
  created_by: string;
  reaction_length: number;
  short_description: string;
  title: string;
  views: number;
  _id: string;
}

export interface PathProfileType {
  id: number;
  title: string;
  path: string;
  Component: React.FC;
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export interface OrderType {
  billing_address: BillingAdres;
  created_at: string;
  created_by: string;
  extra_shop_info: {
    total: number;
    method: string;
  };
  shop_list: CartTypeData[];
  _id: string;
}

export interface AdressType {
  name: string;
  surname: string;
  country: string;
  town: string;
  street_adress: string; // Note: 'adress' might be a typo
  additional_street_address: string;
  state: string;
  zip: string;
  email: string;
  phone_number: string;
}

export interface AccountDetails {
  name: string;
  surname: string;
  email: string;
  phone_number: string;
  username: string;
  profile_photo: {
    file: {
      response: {
        image_url: {
          url: string;
        };
      };
    };
  };
}
