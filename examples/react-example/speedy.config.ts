import { defineConfig } from '@speedy-js/universal';

export default defineConfig({
  html: {
    template: './index.html',
  },
  output: {
    format: 'esm',
    clean: true,
  },
  minify: false,
  ssr: {
    baseUrl: '/ssr-react-example',
    pages: [
      {
        path: '/blog-ssg',
        name: 'blog',
        entry: './src/pages/blog',
      },
      {
        path: '/demo',
        name: 'demo',
      },
      {
        path: '/',
        name: 'index',
      },
      {
        path: '/city/:id',
        name: 'city',
      },
      {
        path: '/no-prefetch',
        name: 'no-prefetch',
      },
    ],
    environment: 'cloudflare',
  },
});
