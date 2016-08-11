function DrawXAxis(instance) {
    Axis.call(this, instance);
    this.instance = instance;
}
DrawXAxis.prototype = Object.create(Axis.prototype);
DrawXAxis.prototype.constructor = DrawXAxis;
DrawXAxis.prototype.drawXAxis = function(check, numberOfCharts) {
    var instance = this.instance;
    var chartNo = instance.chartNo;
   




    var x1 = widthEachChart * distYAxisFromOr; // distance from the origin to the yaxis
    instance.chartLowBoundXCoor = x1;

    var x2 = x1 + widthEachChart ;//+ (widthEachChart * distYAxisFromOr) /*+ (widthEachChart / 20)*/ ; //the extra divided by 20 added to keep some extra space
    instance.chartUpBoundXCoor = x2;
    var y1 = 0;
    var y2 = 0;
    if (check !== 2) { //check is being calculated many number of times
        instance.yShift = yShiftPer;
        var yShift = instance.yShift;
        y1 = (heightEachChart * yShift);
        y2 = (heightEachChart * yShift);
    } else {
        instance.yShift = yShiftPer;
        var yShift = instance.yShift;
        y1 = (heightEachChart * yShift) + (heightEachChart);
        y2 = (heightEachChart * yShift) + (heightEachChart);
    }
   
    this.horizontalAxis();
    
    //drawTicks
    var numberOfTicks = obj.data.length;
    if (obj.chartType == "line") {
        var temp_x1 = x1 + (shiftXTipLine * widthEachChart); /*this variable is used to set the distance from y-axis to the first plotting point*/
    } else if (obj.chartType == "column") {
        var temp_x1 = x1 + (shiftXTipCol * widthEachChart);
    }

    instance.lowLimitXAxis = temp_x1; //setting the limits from the Tip value
    //var widthEachChart = this.widthEachChart;
    /*
     */
    instance.noofXTips = instance.storeValue.length;
    //end of horizontal axis draw
    for (i = 0; i < instance.noofXTips; i++) {
        //console.log(instance.noofXTips + 'noofXTips');
        x1 = temp_x1 + (widthEachChart / instance.noofXTips) * (i);
        x2 = temp_x1 + (widthEachChart / instance.noofXTips) * (i);
        instance.upLimitXAxis = x1;
        if (check !== 2) {
            y1 = (heightEachChart * yShift) - 4;
            y2 = (heightEachChart * yShift) + 4;
        } else {
            y1 = (heightEachChart * yShift) + (heightEachChart) - 4;
            y2 = (heightEachChart * yShift) + (heightEachChart) + 4;
        }
        if (obj.chartType == "line") {
            var style = "stroke:rgb(237, 237, 237);stroke-width:1;";
            var className = "axisTicks";

            var svg = instance.svg;
            this.drawLine(svg, x1, y1, x2, y2, style, className);
            

        }


        //put x-axis label 
        //console.log(check+ ' check'+ numberOfColCharts + ' numberOfColCharts');
        if (check !== 2 && chartNo <= numberOfColCharts) {
            //console.log("test");
            this.chartDivLabelX(obj.month[i], x1, y2, check);

        }

        if (check == 2 && chartNo > (numberOfCharts - numberOfColCharts)) {
            //console.log("test");
            this.chartDivLabelX(obj.month[i], x1, y2, check);
        }
    }
};