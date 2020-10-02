import { postLocation } from '../../db/location/postLocation';

export type PostLocationArgs = {
	id?: number;
	name: string;
	description: string;
	account_id?: number;
};

export const createLocation = ({
	name,
	description,
	account_id = 1,
}: PostLocationArgs): Promise<PostLocationArgs> => {
	return postLocation({ name, description, account_id });
};
