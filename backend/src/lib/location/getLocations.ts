import { queryLocations } from '../../db/location/queryLocations';
import { Location } from '../../models/Location.model';

type GetLocationsArgs = {
	accountId: number;
};

export const getLocations = ({
	accountId,
}: GetLocationsArgs): Promise<Location[]> => {
	return queryLocations({ accountId });
};
