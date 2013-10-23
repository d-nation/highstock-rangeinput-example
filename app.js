define( ["marionette", "mainLayout"],
    function (Marionette, MainLayout) {
    "use strict";

    // set up the app instance
    var ExampleApp = new Marionette.Application();

    // configuration, setting up regions, etc ...
    ExampleApp.addRegions({
        main: '#main-container'
    });

    ExampleApp.addInitializer(function(){

        ExampleApp.main.show(new MainLayout());
    });

    return ExampleApp;
});