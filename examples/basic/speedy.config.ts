import { defineConfig } from '@speedy-js/universal';

export default defineConfig({
  html: {
    template: './index.html',
  },
  minify: false,
  ssr: {
    pages: [
      {
        path: '/ssg',
        name: 'ssg',
      },
      {
        path: '/ssr',
        name: 'ssr',
      },
      {
        path: '/static',
        name: 'static',
      },
      {
        path: '/params/:id/:name',
        name: 'params',
      },
    ],
    environment: 'cloudflare',
  },
});
