import { defineConfig } from '@speedy-js/universal';

export default defineConfig({
  html: {
    template: './index.html',
  },
  minify: false,
  ssr: {
    baseUrl: '/base-url',
    pages: [
      {
        path: '/ssr',
        name: 'ssr',
      },
      {
        path: '/params/:id/:name',
        name: 'params',
      },
    ],
  },
});
