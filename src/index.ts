import { Hono } from "hono";

const app = new Hono();

app.post('/test', async (c) => {
	const bodyText = await c.req.text();
	const headers = c.req.header();
	console.log('Query:', c.req.query());
	console.log(`Headers:`, headers);
	console.log(`Body [${bodyText.length}]:`, bodyText);
	return c.json({ message: 'test' });
});

export default app;
