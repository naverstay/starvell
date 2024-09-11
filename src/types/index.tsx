export interface Seller {
  name: string,
  avatar: string,
  reviewsCount?: number,
  online?: boolean,
  age: string,
  rating: number
}

export interface adItem {
  text: string,
  count: number | string,
  price: number,
  flyDelivery?: boolean
  pinned?: boolean
  seller?: Seller
}

export interface RobloxItem {
  name: string,
  count?: number,
  index?: number,
  action?: (a: FilterItem) => void,
  active?: boolean
}

export interface FilterItem {
  name: string,
  index?: number,
  action?: (a: FilterItem) => void,
  active?: boolean
}

export interface MenuPropsItem {
  label: string,
  key: string
}
