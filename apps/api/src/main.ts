import express from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json());

app.get('/api/v1/health', (_req, res) => {
  res.json({ ok: true });
});

const taskSchema = z.object({
  title: z.string(),
  goLiveDate: z.string()
});

type Task = z.infer<typeof taskSchema>;

const tasks: Task[] = [];

app.get('/api/v1/tasks', (_req, res) => {
  res.json(tasks);
});

app.post('/api/v1/tasks', (req, res) => {
  const parsed = taskSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  tasks.push(parsed.data);
  res.status(201).json(parsed.data);
});

export default app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}
