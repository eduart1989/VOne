import request from 'supertest';
import { app } from '../../index';

// Mocking CRUD operations
jest.mock('../../operations/crud', () => ({
  createRecord: jest.fn(),
  findRecords: jest.fn().mockResolvedValue([]),
}));

describe('Tenants API', () => {
  describe('GET /tenant', () => {
    it('should return all tenants with status 200', async () => {
      const response = await request(app).get('/tenant');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('GET /tenant/:tenantId/priceboards', () => {
    it('should return priceboards for a specific tenant with status 200', async () => {
      const tenantId = 'id';
      const response = await request(app).get(`/tenant/${tenantId}/priceboards`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('GET /tenant-test/:tenantId/priceboards', () => {
    it('should return status 500 for unregistered path', async () => {
      const tenantId = 'id';
      const response = await request(app).get(`/tenant-test/${tenantId}/priceboards`);
      expect(response.status).toBe(500);
    });
  });
});
