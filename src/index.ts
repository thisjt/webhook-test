import { Hono } from "hono";

const app = new Hono();

app.get('/test', (c) => c.text('Hono!'))

export default app;
