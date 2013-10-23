define(['marionette', 'highcharts', 'highcharts-exporter', 'header'],
    function (Marionette, highcharts, highchartsExporter, Header) {
    "use strict";

    var chartOptions = function(){
        return {
            chart: {
                height: 273,
                width: 750
            },

            rangeSelector : {
                selected : 1
            },

            title : {
                enabled : false
            },

            credits: {
                enabled: false
            },

            legend: {
                enabled: true,
                floating: true,
                layout: 'horizontal',
                verticalAlign: 'top',
                align: 'right',
                y: 30
            },

            series : [{
                name : "USD/EUR",
                data : usdeur,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        }
    };

    return Marionette.Layout.extend({
        template : "#template-main",
        className: "trend-chart-container workspace-chart-input-drop",

        regions: {
            header: ".trend-chart-header"
        },

        onRender: function(){
            this.header.show(new Header({moduleName: this.options["moduleName"]}));

            this.chart = this.$el.find(".trend-chart-area").highcharts("StockChart", chartOptions());
        }
    });

});
