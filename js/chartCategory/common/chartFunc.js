"use strict";
function ChartFunc(instance) {
    this.instance = instance;
}

ChartFunc.prototype.drawBoundRectangle = function(className) {
    var instance = this.instance,
        widthRect,
        heightRect,
        chartLowBoundXCoor = instance.chartLowBoundXCoor,
        chartUpBoundXCoor = instance.chartUpBoundXCoor,
        lowLimitYAxis = instance.lowLimitYAxis,
        upLimitYAxis = instance.upLimitYAxis,
        rectBound,
        drawRect = new PlotGraph(instance),
        argumentPass;



    var style = "stroke:rgb(237, 237, 237);stroke-width:1;fill:transparent";
    widthRect = chartUpBoundXCoor - chartLowBoundXCoor;
    heightRect = lowLimitYAxis - upLimitYAxis;
    argumentPass = {
            "svg" : instance.svg,
            "className" : className,
            "style" : style
            };

    
    rectBound = drawRect.drawRectangle(chartLowBoundXCoor, upLimitYAxis, heightRect, widthRect, argumentPass);

    return rectBound;

};

ChartFunc.prototype.calculateMappingPoint = function(value, a, b, c, d) {

    if (jsonData.chartType == "CrossTab") {
        return ((value - a) / (b - a) * (d - c));
    } else {
        return (d - (value - a) / (b - a) * (d - c));
    }


};