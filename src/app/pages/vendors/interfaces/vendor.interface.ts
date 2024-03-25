export interface Vendor {
  name: string;
  address: string;
  ruc: string;
  phone: number;
  status: number;
  dv: number;
  email: string;
}

export interface VendorNegotiation {
  idNegotiation: number;
  dias_descuento: number;
  porcentaje_descuento: number;
}

export interface VendorLegalClassification {
  name: string;
  value: number;
}

export interface VendorType {
  name: string;
  value: number;
}
