exports.up = function (knex) {
	return knex.schema.alterTable('user', (table) => {
		table.text('avatar_url');
	});
};

exports.down = function (knex) {
	return knex.schema.alterTable('user', (table) => {
		table.dropColumn('avatar_url');
	});
};
