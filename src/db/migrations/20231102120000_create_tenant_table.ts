import { Knex } from 'knex';

exports.up = function (knex: Knex): Knex.SchemaBuilder {
  return knex.schema.createTable('tenant', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });
};

exports.down = function (knex: Knex): Knex.SchemaBuilder {
  return knex.schema.dropTable('tenant');
};
