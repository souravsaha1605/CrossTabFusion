"use strict";
function arrangeOnMax() {
        var maxValueArray = [],
            object = range2,
            i,
            loopLen,
            j,
            max,
            y_map_tmp,
            tmp;
        loopLen = jsonData.y_axis_map.length;    
        for (i = 0; i < loopLen; i++) {
            maxValueArray.push(object[i].max);

        }
        loopLen = maxValueArray.length;

        for (i = 0; i < loopLen - 1; i++) { //Number of passes
            max = i; //min holds the current minimum number position for each pass; i holds the Initial min number
            for (j = i + 1; j < loopLen; j++) { //Note that j = i + 1 as we only need to go through unsorted array
                if (maxValueArray[j] > maxValueArray[max]) { //Compare the numbers
                    max = j; //Change the current min number position if a smaller num is found
                }
            }
            if (max != i) { //After each pass, if the current min num != initial min num, exchange the position.
                //Swap the numbers
                y_map_tmp = jsonData.y_axis_map[i];
                tmp = maxValueArray[i];
                jsonData.y_axis_map[i] = jsonData.y_axis_map[max];
                maxValueArray[i] = maxValueArray[max];
                jsonData.y_axis_map[max] = y_map_tmp;
                maxValueArray[max] = tmp;
            }
        }

    }