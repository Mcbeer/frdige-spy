import { times } from 'lodash';
import { v4 as uuid } from 'uuid';
import database from '../../db/connection';
import { tableNames } from '../../db/tableNames';
import { PostProductEntry } from '../../models/Product.model';
import { logger } from '../../utils/logger';

export const addProductEntry = ({
	product_id,
	amount,
}: PostProductEntry): Promise<unknown> => {
	const entriesToAdd = times(amount, () => {
		const id = uuid();
		return { id, product_id };
	});

	return database(tableNames.product_entry)
		.insert(entriesToAdd)
		.then(() => ({ entries: amount }))
		.catch((err) => {
			logger.error(err);
			throw new Error('Cannot add to database, please try again');
		});
};
