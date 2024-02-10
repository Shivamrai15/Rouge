import { Category } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-IN", {
  style : "currency",
  currency : "INR"
});

export const getCategories = ( key: string, type : "TOPWEAR" | "BOTTOMWEAR" | "FOOTWEAR" | "INNERWEARANDSLEEPWEAR" , category : Category[] ) => {
  const formattedCategory = category.filter((c) => c.classification.toString() === type);
  const categoryURL = formattedCategory.map((c) => ({
    url : `/category/${c.id}?category=${key}&page=1`,
    label : c.name
  }));
  return categoryURL;
}