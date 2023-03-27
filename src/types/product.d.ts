interface ProductData {
    id?: number;
    title?: string;
    description?: string;
    sellPrice?: number;
    prevPrice?: number;
    minAmount?: number;
    category?: { name: string };
    productImageUrl?: { storedFileName: string[] };
    productDetailImagesUrl?: { storedFileName: string[] };
}
