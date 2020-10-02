import { Router } from 'express';
import { NotFoundError } from '../lib/errors';
import { respond } from '../lib/respond/respond';
import { getAllUsers } from '../lib/user/getAllUsers';
import { getUserById } from '../lib/user/getUserById';
import { perhaps } from '../utils/perhaps';

const router = Router();

// router.use(authMiddleware);

router.get('/', async (_req, res, next) => {
	const [usersError, users] = await perhaps(getAllUsers());

	if (usersError) {
		next(usersError);
	}

	respond(res).sendSuccess(users);
});

router.get('/:id', async (req, res, next) => {
	const userId = req?.params?.id;
	if (!userId) {
		return next(new NotFoundError('No user found with that id'));
	}
	const idAsNumber = parseInt(userId);
	const [userError, user] = await perhaps(getUserById(idAsNumber));

	if (userError) {
		return next(userError);
	}

	return respond(res).sendSuccess(user);
});

export { router as userService };
