import { Knex } from 'knex';

exports.up = function (knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('priceboard', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('product_name').notNullable();
    table.decimal('price', 10, 2).notNullable();
    table.integer('tenant_id').unsigned();
    table.foreign('tenant_id').references('tenant.id').onDelete('CASCADE');
  });
};

exports.down = function (knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('priceboard');
};
