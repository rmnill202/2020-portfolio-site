# 2020 Portfolio Website
This is my new portfolio website for the new decade! My last site was feeling a bit old and clunky after having it for a couple years, so I thought I'd go ahead and rewrite it. With this iteration, I'll be supporting pre-rendering to improve performance and SEO reach, and going for a flatter/simpler design. 

## Some Details
- Written with Vue, vue-router, vuex and babel/webpack. 
- Material components from [Material Design Lite](https://getmdl.io/index.html).
- Prerendering done with [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin).
- Placeholders from https://placekitten.com/

## Installation
- Make sure you've got `node` and `npm`.
- Download the repo and run `npm install` to download any dependencies

## Running Locally w/ Hot Reloading
This should be primarily used for development. Pages will reload on any detected changes.

- Use the command `npm run serve` to run a hot-reload version of the website on a local server. 
- This should take you to a `localhost:####` url. 

## Running Locally w/ HTTP Server
This'll be useful for testing the built files before you deploy them.

- Use the command `npm run build` to build the pre-rendered static files for deployment.
- Use the command `npm run http-server` to deploy an HTTP server with those files.
- The console is a little misleading here; you should visit the URL provided and append the `BASE_URL` from `vue.config.js` onto the end.
- For example: `http://127.0.0.1:8080/2020-portfolio-site`
