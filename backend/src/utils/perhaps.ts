/**
 * Converts a possibly rejected promise to a node callback-like syntax
 */
export async function perhaps<T>(
	promise: Promise<T>
): Promise<[Error, T] | [Error]> {
	try {
		const result = await promise;
		return [null, result];
	} catch (error) {
		return [error, null];
	}
}
