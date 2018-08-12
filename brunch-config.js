module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app\/)/,
        'js/app.js': /^app/
      },
      order: {
        before: [
          'js/jquery-3.3.1.min.js',
          'js/d3.v3.min.js',
          'js/topojson.v1.min.js',
          'js/Leaflet.Geodesic.js',
          'js/MovingMarker.js'
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app\/stylus\/app.styl/
      }
    }
  },

  plugins: {
    babel: {
      presets: ['env']
    },
    stylus: {
      includeCss: true
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
        require('csswring')
      ]
    }
  }

};
