define(['marionette'],
    function (Marionette) {
        "use strict";

    return Marionette.Layout.extend({
        template:"#template-header",

        regions: {
        },

        events: {
            "click .close": "onCloseBtnClick"
        },

        initialize: function(options){
        },

        onRender: function(){

        },

        onCloseBtnClick: function(){
            //do stuff to close this
        }
    })

});
