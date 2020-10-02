/* eslint-disable no-undef */
exports.up = function (knex) {
	const betterTimestamps = (table) => {
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	};

	const accountTable = knex.schema.createTable('account', (table) => {
		table.increments('id');
		table.string('name', 50);
		table.text('invite_code');
		betterTimestamps(table);
	});

	const usersTable = knex.schema.createTable('user', (table) => {
		table.increments('id').primary();
		table.string('googleId', 50).notNullable();
		table.string('name', 60);
		table.string('email', 50);
		table.text('avatar_url');
		betterTimestamps(table);
	});

	const userAccountTable = knex.schema.createTable('user_account', (table) => {
		table.increments('id').primary();
		table.enu('role', ['ADMIN', 'USER', 'GUEST']).notNullable();
		table.integer('account_id').references('account.id').notNullable();
		table.integer('user_id').references('user.id').notNullable();
	});

	const productsTable = knex.schema.createTable('product', (table) => {
		table.uuid('id').primary();
		table.string('barcode', 50);
		betterTimestamps(table);
	});
	const genericProductsTable = knex.schema.createTable(
		'generic_product',
		(table) => {
			table.increments('id').primary();
			table.string('name', 50).notNullable();
			table.boolean('fixed_item').defaultTo(false);
			table.jsonb('barcodes').defaultTo([]);
			table.integer('account_id').references('account.id');
			betterTimestamps(table);
		}
	);

	const productEntryTable = knex.schema.createTable(
		'product_entry',
		(table) => {
			table.uuid('id').primary();
			table.integer('generic_product_id').references('generic_product.id');
			table.datetime('purchase_date').defaultTo(knex.fn.now());
			table.datetime('use_date');
		}
	);

	return Promise.all([
		accountTable,
		usersTable,
		productsTable,
		genericProductsTable,
		productEntryTable,
		userAccountTable,
	]);
};

exports.down = function (knex) {
	return Promise.all([
		knex.schema.dropTableIfExists('product_entry'),
		knex.schema.dropTableIfExists('generic_product'),
		knex.schema.dropTableIfExists('product'),
		knex.schema.dropTableIfExists('account'),
		knex.schema.dropTableIfExists('user'),
	]);
};
