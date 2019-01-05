import { setup, log } from 'electron-log-rotate';
setup({
  appName: 'tsc-definition-.d.ts',  // require for directory name
  maxSize: 10 * 1024 * 1024
});

log('Hello, log');
