import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('vehicles').del();
  const existingVehicles = await knex('vehicles').select();

  // Inserts seed entries
  if (existingVehicles.length === 0) {
    await knex('vehicles').insert([
      { id: 1, brand: 'benz', tenant_id: 1 },
      { id: 2, brand: 'bmw', tenant_id: 1 },
      { id: 3, brand: 'audi', tenant_id: 2 },
    ]);
  }
}
