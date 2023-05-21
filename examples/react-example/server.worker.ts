// use esm entry of universal import to enable tree-shaking when bundling
import {
  CloudflareBuildManifest,
  createCloudflareWorkerHandler,
} from '@speedy-js/universal/adapters/cloudflare-worker';

const manifest: CloudflareBuildManifest = require('./.universal/universal.manifest.cjs');

globalThis.addEventListener(
  'fetch',
  createCloudflareWorkerHandler({
    manifest,
  })
);
