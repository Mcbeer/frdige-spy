import { mapSeries } from 'bluebird';
import { queryGenericProducts } from '../../db/product/queryGenericProducts';
import { queryProduct } from '../../db/product/queryProduct';
import { queryProductEntry } from '../../db/product/queryProductEntry';
import { GenericProduct, Product } from '../../models/Product.model';

type GetProductsArgs = {
	accountId?: number;
	locationId?: number;
};

export const getProducts = async ({
	accountId,
	locationId,
}: GetProductsArgs): Promise<GenericProduct[]> => {
	const genericProducts = await queryGenericProducts({ accountId, locationId });

	const genericProductsWithAmount = await mapSeries<GenericProduct[]>(
		genericProducts,
		async (genericProduct) => {
			const productInfo = await queryProduct({
				genericProductId: genericProduct.id,
			});

			const productIds = productInfo.map((product: Product) => product.id);
			const barcodes = productInfo.map((product: Product) => product.barcode);

			const entries = await queryProductEntry({ productIds });

			return {
				...genericProduct,
				barcodes,
				amount: entries.length,
			};
		}
	);

	return genericProductsWithAmount;
};
