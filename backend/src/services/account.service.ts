import { Router } from 'express';
import { getAccountsById } from '../lib/account/getAccountsById';
import { perhaps } from '../utils/perhaps';

const router = Router();

router.get(
	'/:id',
	async (req, res, next): Promise<void> => {
		const id = parseInt(req.params.id);

		const [accountError, account] = await perhaps(
			getAccountsById({ ids: [id] })
		);

		if (accountError) {
			next(accountError);
		}

		res.json(account);
	}
);

export { router as accountService };
