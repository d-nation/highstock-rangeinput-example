/*
    This is the require.js configuration
*/

require.config({
    urlArgs: "bust=" + (new Date()).getTime(),

    paths : {
        backbone : 'backbone.marionette/backbone',
        underscore : 'backbone.marionette/underscore',
        jquery : 'backbone.marionette/jquery',
        jqueryui: 'jqueryui/jquery-ui.min',
        bootstrap: 'bootstrap/js/bootstrap.min',
        highcharts: 'highcharts/highstock',
        'highcharts-exporter': 'highcharts/modules/exporting',
        marionette : 'backbone.marionette/backbone.marionette',
        mainApp: 'app'
    },
    shim : {
        jquery : {
            exports : 'jQuery'
        },
        jqueryui: {
            deps: ['jquery']
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },
        bootstrap:{
            deps: ["jquery"]
        },
        highcharts: {
            deps: ["jquery", "jqueryui"],
            exports: "highcharts"
        },
        'highcharts-exporter': {
            deps: ["jquery", 'jqueryui', 'highcharts']
        }
    }
});

require(['mainApp', 'backbone'], function(app, Backbone){
    /**
     * This runs once app.js has been loaded.     */


    app.start();
});