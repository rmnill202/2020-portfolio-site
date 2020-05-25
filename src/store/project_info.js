module.exports = {
  projects: [

    { 
      id: 'pantreats',                    title: 'Pantreats', 
      image: 'pantreats/pantreats.png',   color: '#fff',
      start_date: '12/17',      end_date: '09/17',
          
      project_url: '/',
      tags: [
        {text: 'Class Project', icon: 'fas fa-book-open'},
        {text: 'JavaScript',    icon: 'fab fa-js-square'},
        {text: 'VueJS',         icon: 'fab fa-vuejs'}
      ], 
      summary: 'Web application for exploring recipes based on what you have in your kitchen. First exposure to Vue, focused on UX/UI work',

      links: [
        {text: 'Source Code',   link: 'https://github.com/steplica/swen444-pantreats'},
      ]
    },

    { 
      id: '2018-portfolio',                    title: '2018 Portfolio Website', 
      image: '2018-portfolio/preview.png',   color: '#fff',
      start_date: '01/18',      end_date: '07/19',
          
      project_url: 'https://github.com/rmnill202/vuewebsite',
      tags: [
        {text: 'Personal Project', icon: 'fas fa-user-circle'},
        {text: 'JavaScript',       icon: 'fab fa-js-square'},
        {text: 'VueJS',            icon: 'fab fa-vuejs'}
      ], 
      summary: 'An older Vue SPA website that I made to show off my work.',

      links: [
        {text: 'Live Site', link: 'https://rmnill202.github.io/vuewebsite'},
        {text: 'Source Code',   link: 'https://github.com/rmnill202/vuewebsite'},
      ]
    },

    { 
      id: 'supply-chain',                    title: 'Supply Chain Visibility', 
      image: 'supply-chain/poster_content.png', color: '#fff',
      start_date: '08/18',      end_date: '05/19',
          
      project_url: '/',
      tags: [
        {text: 'Capstone (SE)', icon: 'fas fa-graduation-cap'},
        {text: '.NET & Azure',  icon: 'fab fa-microsoft'},
        {text: 'Mobile App',    icon: 'fas fa-mobile-alt'}
      ], 
      summary: 'Multi-tier system for Wegmans employees to determine the root cause of empty shelves. Built with Azure DevOps, C# and Xamarin.',
    },

    
    { 
      id: 'raytracing',                    title: 'Ray Tracing', 
      image: 'raytracing/ward.png',   color: '#fff',
      start_date: '10/18',      end_date: '05/20',
          
      project_url: 'https://rmnill202.github.io/711-raytracer',
      tags: [
        {text: 'Graduate Work', icon: 'fas fa-book-open'},
        {text: 'C++',           icon: 'fas fa-copyright'}, //Pretend its a C :)
        {text: 'Java',          icon: 'fab fa-coffee'},
        {text: 'Graphics',      icon: 'fas fa-lightbulb'},
        
      ], 
      summary: 'Simple Java/C++ ray tracers written for academic assignments.',
      
      links: [
        {text: 'Project Site', link: 'https://rmnill202.github.io/711-raytracer/#/updates'},
      ]
    },

    { 
      id: 'tigercenter',                    title: 'TigerCenter', 
      image: 'tigercenter/preview.png', color: '#fff',
      start_date: '05/19',      end_date: '08/19',
          
      project_url: 'https://rmnill202.github.io/711-raytracer',
      tags: [
        {text: 'Employed Work', icon: 'fas fa-briefcase'},
        {text: 'Java / Spring', icon: 'fab fa-coffee'},
        {text: 'Angular 8',     icon: 'fab fa-angular'},
        
      ], 
      summary: 'An information and service portal used by thousands of RIT students, written with Angular/Java. ',

      links: [
        {text: 'Live Site',   link: 'https://tigercenter.rit.edu/'},
      ]
    },

    { 
      id: 'painterly',                    title: 'Painterly Shaders', 
      image: 'shaders/lily.png',     color: '#fff',
      start_date: '02/20',      end_date: '05/20',
          
      project_url: 'https://rmnill202.github.io/711-raytracer',
      tags: [
        {text: 'Blender / OSL', icon: 'fas fa-blender'},
        {text: 'Graduate Work', icon: 'fas fa-book-open'},
        {text: 'Graphics / GLSL',      icon: 'fas fa-lightbulb'},
      ], 
      summary: 'Experiments with OSL and Blender to give images a "painterly" effect, for a 700 level procedural shading course. ',
    },

    { 
      id: '2020-portfolio',         title: '2020 Portfolio & Blog', 
      image: 'proj_portfolio.png',  color: '#fff',
      start_date: '05/20',          end_date: 'Now',
          
      tags: [
        {text: 'Personal Project', icon: 'fas fa-user-circle'},
        {text: 'UX/UI Design',     icon: 'fas fa-paint-brush'},
        {text: 'JavaScript',       icon: 'fab fa-js-square'},
        {text: 'VueJS',            icon: 'fab fa-vuejs'}
      ], 
      summary: 'New portfolio website with a refined design and improved color scheme, also based on Vue. ',

      links: [
        {text: 'Source Code', link: 'https://github.com/rmnill202/2020-portfolio-site'},
        {text: 'Live Site',   link: 'https://rmnill202.github.io/2020-portfolio-site/'},
      ]
    },

  ],
};
