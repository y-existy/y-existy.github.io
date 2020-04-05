var require = {
    baseUrl: "",
    paths: {
        "backbone": "libs/backbone",
        "jquery": "libs/jquery",
        "underscore": "libs/underscore",
        "toastr": "libs/toastr",
        "bootstrap": "libs/bootstrap.min"
    },
    shim: {
          'backbone': {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
          }
    },
    
    waitSeconds: 15
};
