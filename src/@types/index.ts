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
