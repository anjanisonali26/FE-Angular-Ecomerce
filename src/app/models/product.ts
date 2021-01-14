export interface Product{
    _id: string;
    _categoryId: string;
    itemname: string;
    tumbnail: string;
    image: string;
    describe: string;
    price: number;
    amount: number;
    shortdescription: string;
    publish: string;
}



export interface ProductId{
    _categoryId: string;
    itemname: string;
    tumbnail: string;
    image: string;
    describe: string;
    price: number;
    amount: number;
    shortdescription: string;
    publish: string;
}


export interface ProductDetail{
    _productId: string;
    itemname: string;
    tumbnail: string;
    image: string;
    describe: string;
    price: number;
    amount: number;
    shortdescription: string;
    publish: string;
}

export interface ProductCard{
    _id: string;
    _categoryId: string;
    itemname: string;
    tumbnail: string;
    image: string;
    describe: string;
    price: number;
    amount: number;
    shortdescription: string;
    publish: string;
}