export interface Billboard {
    id : string;
    label : string;
    imageUrl : string;
}

export enum CategoryType {
    MEN,
    WOMEN,
    UNISEX,
    BEAUTY
}

export enum CategoryClassification {
    TOPWEAR,
    BOTTOMWEAR,
    FOOTWEAR,
    INNERWEARANDSLEEPWEAR,
    MAKEUP,
    SKINCARE,
    HAIRCARE,
    FRAGRANCES
}

export interface Category {
    id : string;
    name : string;
    type : CategoryType;
    classification : CategoryClassification
    billboardId : Billboard
}

export enum ProductType {
    MEN,
    WOMEN,
    KIDS,
    BEAUTY
}

export interface Product {
    id : string;
    category : Category;
    name : string;
    price : number;
    isFeatured : boolean;
    isArchieved : boolean;
    stock : number;
    about : string;
    description : string;
    type : ProductType;
    sizeAndFit : string[];
    materialAndCare : string[];
    size : Size;
    color : Color;
    productImages : ProductImage[];
}

export interface ProductImage {
    id : string;
    url : string;
}

export interface Size {
    id : string;
    name : string;
    value : string;
}

export interface Color {
    id : string;
    name : string;
    value : string
}

export interface CartSelectedItem {
    id :  string;
    quantity : number;
    price : number;
}