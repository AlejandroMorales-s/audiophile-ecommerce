export interface ProductFromDb {
  id: number;
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  includes: Include[];
  features: string;
  image_url: string;
}

export interface Include {
  item: string;
  quantity: number;
}
