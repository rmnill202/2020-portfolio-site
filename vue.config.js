const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Projects = require('./src/store/project_info.js');
const Blogs = require('./src/store/blog_listing.js');

// Change this
const BASE_URL = '2020-portfolio-site';

module.exports = {

  publicPath: process.env.NODE_ENV === 'production' 
    ? `/${BASE_URL}/`
    : '/',
  outputDir: process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, `dist/${BASE_URL}/`)
    : path.join(__dirname, 'dist/'),

  pluginOptions: {
    prerenderSpa: {
      staticDir: path.join(__dirname, 'dist'),
      outputDir: path.join(__dirname, `dist/${BASE_URL}`),
      indexPath: path.join(__dirname, 'dist', `/${BASE_URL}/index.html`),
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/blog',
        '/contact',
        ...Projects.projects.map( proj => `/project/${proj.id}`),
        ...Blogs.posts.map( post => `/blog/${post.id}`),
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },

  transpileDependencies: [
    "vuetify"
  ],

}
