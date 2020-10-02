export interface GenericProduct {
	id: number;
	name: string;
	barcodes: string[];
	account_id: number;
	location_id: number;
	created_at: string;
	updated_at: string;
	amount?: number;
}

export interface Product {
	id: string;
	name: string;
	barcode: string;
	created_at: string;
	updated_at: string;
	generic_product_id: number;
}

export interface ProductEntry {
	id: string;
	generic_product_id: number;
	purchase_date: string;
	use_date: string;
}

export enum PostProductTypes {
	GENERIC = 'GENERIC',
	SPECIFIC = 'SPECIFIC',
}

export interface PostProduct {
	type: PostProductTypes;
	name: string;
	barcode?: string;
	generic_product_id?: number;
	accound_id?: number;
	location_id: number;
}
