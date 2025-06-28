import { resolve } from './vite-project/src/templates';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'articles'),
    }),
  ],
};