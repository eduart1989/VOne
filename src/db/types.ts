export type Tenant = {
  id: number;
  name: string;
};

export type Priceboard = {
  id: number;
  product_name: string;
  price: number;
  tenant_id: number;
};

export type Vehicle = {
  id: number;
  brand: string;
  tenant_id: number;
};
