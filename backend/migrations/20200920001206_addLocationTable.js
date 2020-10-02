exports.up = function (knex) {
	return Promise.all([
		knex.schema.createTable('location', (table) => {
			table.increments('id');
			table.string('name', 50).notNullable();
			table.string('description', 70);
			table.integer('account_id').references('account.id').notNullable();
		}),
		knex.schema.alterTable('generic_product', (table) => {
			table.integer('location_id').references('location.id');
		}),
	]);
};

exports.down = function (knex) {
	return Promise.all([
		knex.schema.alterTable('generic_product', (table) => {
			table.dropColumn('location_id');
		}),
		knex.schema.dropTableIfExists('location'),
	]);
};
