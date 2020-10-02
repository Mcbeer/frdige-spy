import { Router } from 'express';
import { isFinite, toNumber } from 'lodash';
import { createLocation } from '../lib/location/createLocation';
import { getLocations } from '../lib/location/getLocations';
import { postLocationSchema } from '../lib/location/locationvalidators';
import { respond } from '../lib/respond/respond';
import { validate } from '../middleware/validatorMiddleware';
import { perhaps } from '../utils/perhaps';

const router = Router();

router.get('/:accountId', async (req, res, next) => {
	const accountIdToNumber = toNumber(req.params.accountId);
	console.log(accountIdToNumber);
	const accountId = isFinite(accountIdToNumber) ? accountIdToNumber : null;

	const [locationsError, locations] = await perhaps(
		getLocations({ accountId })
	);

	if (locationsError) {
		next(locationsError);
	}

	respond(res).sendSuccess(locations);
});

router.post(
	'/',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	validate({ body: postLocationSchema }),
	async (req, res, next) => {
		const { body } = req;
		const [createLocationError, createdLocation] = await perhaps(
			createLocation(body)
		);

		if (createLocationError) {
			next(createLocationError);
		}

		respond(res).sendSuccess(createdLocation);
	}
);

export { router as locationService };
