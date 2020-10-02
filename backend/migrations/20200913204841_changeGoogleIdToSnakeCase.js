/* eslint-disable no-undef */
exports.up = function (knex) {
	return knex.schema.alterTable('user', (table) => {
		table.renameColumn('googleId', 'google_id');
	});
};

exports.down = function (knex) {
	return knex.schema.alterTable('user', (table) => {
		table.renameColumn('google_id', 'googleId');
	});
};
