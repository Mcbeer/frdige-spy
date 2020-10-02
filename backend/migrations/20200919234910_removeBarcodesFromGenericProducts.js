/* eslint-disable no-undef */
exports.up = function (knex) {
	return knex.schema.alterTable('generic_product', (table) => {
		table.dropColumn('barcodes');
	});
};

exports.down = function (knex) {
	return knex.schema.alterTable('generic_product', (table) => {
		table.jsonb('barcodes');
	});
};
