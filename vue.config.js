const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');1

module.exports = {
  // publicPath: '/2020-portfolio-site/',
  // outputDir: `dist/2020-portfolio-site/`,

  publicPath: process.env.NODE_ENV === 'production' 
    ? '/2020-portfolio-site/'
    : '/',
  outputDir: process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, 'dist/2020-portfolio-site/')
    : path.join(__dirname, 'dist/'),

  pluginOptions: {
    prerenderSpa: {
      staticDir: path.join(__dirname, 'dist'),
      outputDir: path.join(__dirname, 'dist/2020-portfolio-site'),
      indexPath: path.join(__dirname, 'dist', '/2020-portfolio-site/index.html'),
      registry: undefined,
      renderRoutes: [
        '/',
        '/project/1',
        '/project/2'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
