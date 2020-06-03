module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        debug: false,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [],
};
