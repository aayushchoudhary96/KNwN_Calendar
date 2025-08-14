import request from 'supertest';
import app from './main';

describe('tasks API', () => {
  it('creates a task', async () => {
    const res = await request(app)
      .post('/api/v1/tasks')
      .send({ title: 'Test', goLiveDate: '2024-01-01' });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test');
  });

  it('rejects invalid task', async () => {
    const res = await request(app).post('/api/v1/tasks').send({});
    expect(res.status).toBe(400);
  });
});
