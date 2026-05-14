export type PropertyType = 'apartment' | 'house' | 'villa' | 'studio' | 'office';
export type PropertyStatus = 'available' | 'rented' | 'pending';

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  address: string;
  district: string;
  city: string;
  thumbnail: string;
  tags: string[];
  isVerified: boolean;
};
