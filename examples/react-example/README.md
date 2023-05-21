# react-example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/upupming/speedy-ssr-examples/tree/main/examples/react-example)

This is an example using `@speedy-js/universal` for server-side rendering.

Local development:

```bash
pnpm dev
```

Run into production:

```bash
pnpm build
pnpm start
```

Client-side downgrade is supported, so you can serve the result using a simple http server:

```bash
pnpm serve
```

## Deploy to Vercel

```bash
pnpm deploy:vercel
```

## Deploy to Cloudflare worker

```bash
pnpm deploy:cf-worker
```
