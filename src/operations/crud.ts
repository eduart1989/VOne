import knex, { Knex } from 'knex';

const db: Knex = knex({
  client: 'sqlite3',
  connection: {
    filename: './src/db/data/priceboard.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './src/db/migrations',
  },
  seeds: {
    directory: './src/db/seeds',
  },
});
async function createRecord<T>(tableName: string, data: any): Promise<number[]> {
  const result = (await db<T>(tableName).insert(data)) as number[];
  return result;
}

type WhereCondition = Record<string, any>;

async function findRecords<T>(
  tableName: string,
  columns: string[] = ['*'],
  whereCondition: Record<string, any> = {},
): Promise<T[]> {
  const records = (await db<T>(tableName)
    .select(...columns)
    .where(whereCondition)) as T[];
  return records;
}

function updateRecord<T>(
  tableName: string,
  whereCondition: WhereCondition,
  data: any,
): Knex.QueryBuilder<T, number> {
  return db<T>(tableName).where(whereCondition).update(data);
}

async function deleteRecords(
  tableName: string,
  whereCondition: Record<string, any>,
): Promise<number> {
  const result = await db(tableName).where(whereCondition).del();
  return result;
}

async function closeConnection(): Promise<void> {
  await db.destroy();
}

export { createRecord, findRecords, updateRecord, deleteRecords, closeConnection };
