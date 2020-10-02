import { PostLocationArgs } from '../../lib/location/createLocation';
import database from '../connection';
import { tableNames } from '../tableNames';

export const postLocation = (
	inputData: PostLocationArgs
): Promise<PostLocationArgs> => {
	return database(tableNames.location)
		.insert(inputData)
		.returning('*')
		.then((data) => data[0]);
};
