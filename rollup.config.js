import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/text-reveal.js',
    output: [
      {
        file: 'dist/text-reveal.esm.js',
        format: 'esm'
      },
      {
        file: 'dist/text-reveal.umd.js',
        format: 'umd',
        name: 'textReveal'
      },
      {
        file: 'demo/dist/text-reveal.js',
        format: 'umd',
        name: 'textReveal'
      }
    ]
  },
  {
    input: 'src/text-reveal.js',
    output: [
      {
        file: 'dist/text-reveal.esm.min.js',
        format: 'esm'
      },
      {
        file: 'dist/text-reveal.umd.min.js',
        format: 'umd',
        name: 'textReveal'
      }
    ],
    plugins: [terser()]
  }
];
