exports.up = function (knex) {
	return Promise.all([
		knex.schema.alterTable('product_entry', (table) => {
			table.uuid('product_id', 36).references('product.id').notNullable();
			table.dropColumn('generic_product_id');
		}),
		knex.schema.alterTable('product', (table) => {
			table.string('name', 100).notNullable();
			table
				.integer('generic_product_id')
				.references('generic_product.id')
				.notNullable();
		}),
	]);
};

exports.down = function (knex) {
	return Promise.all([
		knex.schema.alterTable('product_entry', (table) => {
			table.dropColumn('product_id');
			table.integer('generic_product_id').references('generic_product.id');
		}),
		knex.schema.alterTable('product', (table) => {
			table.dropColumn('name');
			table.dropColumn('generic_product_id');
		}),
	]);
};
