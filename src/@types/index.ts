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
