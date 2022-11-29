const purgecss = {
  '@fullhuman/postcss-purgecss': {
    // Specify the paths to all of the template files in your project
    content: [
      './components/*.jsx',
      './container/*.jsx',
      './pages/**/*.jsx',
      './styles/*.css',
      './pages/**/*.js',
      './pages/*.js',

      // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
};
//const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    //tailwindcss("./tailwind.js"),
    // ...(process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? purgecss : {}), //production
    // purgecss, //test
    //   ...(process.env.NODE_ENV === "production" ? {} : {}),
  },
};
