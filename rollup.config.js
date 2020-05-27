import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/hello-world-webcomponent.ts',
    plugins: [
      babel({
        extensions: ['.ts'],
        include: ['src/**/*'],
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: false,
              modules: false,
              targets: {
                browsers: '> 1%, IE 11, not dead',
              },
            },
          ],
          '@babel/preset-typescript',
        ]
      }),
      terser(),
    ],
    output: {
      file: 'dist/hello-world-webcomponent.legacy.js',
      format: 'es',
    },
  },
  {
    input: './src/hello-world-webcomponent.ts',
    plugins: [
      babel({
        extensions: ['.ts'],
        include: ['src/**/*'],
        presets: ['@babel/preset-typescript'],
      }),
      terser(),
    ],
    output: {
      file: 'dist/hello-world-webcomponent.js',
      format: 'es',
    },
  },
];
