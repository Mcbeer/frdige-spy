import { Router } from 'express';
import { getAccountById } from '../lib/account/getAccountById';
import { perhaps } from '../utils/perhaps';

const router = Router();

router.get(
	'/:id',
	async (req, res, next): Promise<void> => {
		const id = parseInt(req.params.id);

		const [accountError, account] = await perhaps(getAccountById({ id }));

		if (accountError) {
			next(accountError);
		}

		res.json(account);
	}
);

export { router as accountService };
