/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 113.0, "minX": 0.0, "maxY": 67833.0, "series": [{"data": [[0.0, 113.0], [0.1, 113.0], [0.2, 113.0], [0.3, 113.0], [0.4, 113.0], [0.5, 113.0], [0.6, 113.0], [0.7, 118.0], [0.8, 118.0], [0.9, 118.0], [1.0, 118.0], [1.1, 118.0], [1.2, 118.0], [1.3, 118.0], [1.4, 118.0], [1.5, 118.0], [1.6, 119.0], [1.7, 119.0], [1.8, 119.0], [1.9, 119.0], [2.0, 119.0], [2.1, 119.0], [2.2, 119.0], [2.3, 119.0], [2.4, 119.0], [2.5, 119.0], [2.6, 119.0], [2.7, 119.0], [2.8, 119.0], [2.9, 119.0], [3.0, 119.0], [3.1, 119.0], [3.2, 119.0], [3.3, 119.0], [3.4, 119.0], [3.5, 119.0], [3.6, 119.0], [3.7, 119.0], [3.8, 120.0], [3.9, 120.0], [4.0, 120.0], [4.1, 120.0], [4.2, 120.0], [4.3, 120.0], [4.4, 120.0], [4.5, 120.0], [4.6, 120.0], [4.7, 120.0], [4.8, 120.0], [4.9, 120.0], [5.0, 121.0], [5.1, 121.0], [5.2, 121.0], [5.3, 121.0], [5.4, 121.0], [5.5, 121.0], [5.6, 121.0], [5.7, 121.0], [5.8, 121.0], [5.9, 121.0], [6.0, 121.0], [6.1, 121.0], [6.2, 121.0], [6.3, 122.0], [6.4, 122.0], [6.5, 122.0], [6.6, 122.0], [6.7, 122.0], [6.8, 122.0], [6.9, 123.0], [7.0, 123.0], [7.1, 123.0], [7.2, 123.0], [7.3, 123.0], [7.4, 123.0], [7.5, 123.0], [7.6, 123.0], [7.7, 123.0], [7.8, 123.0], [7.9, 124.0], [8.0, 124.0], [8.1, 124.0], [8.2, 124.0], [8.3, 124.0], [8.4, 124.0], [8.5, 124.0], [8.6, 124.0], [8.7, 124.0], [8.8, 125.0], [8.9, 125.0], [9.0, 125.0], [9.1, 125.0], [9.2, 125.0], [9.3, 125.0], [9.4, 125.0], [9.5, 125.0], [9.6, 125.0], [9.7, 126.0], [9.8, 126.0], [9.9, 126.0], [10.0, 126.0], [10.1, 126.0], [10.2, 126.0], [10.3, 126.0], [10.4, 126.0], [10.5, 126.0], [10.6, 126.0], [10.7, 126.0], [10.8, 126.0], [10.9, 126.0], [11.0, 126.0], [11.1, 126.0], [11.2, 126.0], [11.3, 127.0], [11.4, 127.0], [11.5, 127.0], [11.6, 127.0], [11.7, 127.0], [11.8, 127.0], [11.9, 127.0], [12.0, 127.0], [12.1, 127.0], [12.2, 128.0], [12.3, 128.0], [12.4, 128.0], [12.5, 128.0], [12.6, 128.0], [12.7, 128.0], [12.8, 128.0], [12.9, 129.0], [13.0, 129.0], [13.1, 129.0], [13.2, 129.0], [13.3, 129.0], [13.4, 129.0], [13.5, 130.0], [13.6, 130.0], [13.7, 130.0], [13.8, 130.0], [13.9, 130.0], [14.0, 130.0], [14.1, 131.0], [14.2, 131.0], [14.3, 131.0], [14.4, 131.0], [14.5, 131.0], [14.6, 131.0], [14.7, 132.0], [14.8, 132.0], [14.9, 132.0], [15.0, 132.0], [15.1, 132.0], [15.2, 132.0], [15.3, 132.0], [15.4, 133.0], [15.5, 133.0], [15.6, 133.0], [15.7, 133.0], [15.8, 133.0], [15.9, 133.0], [16.0, 133.0], [16.1, 133.0], [16.2, 133.0], [16.3, 134.0], [16.4, 134.0], [16.5, 134.0], [16.6, 134.0], [16.7, 134.0], [16.8, 134.0], [16.9, 134.0], [17.0, 134.0], [17.1, 134.0], [17.2, 136.0], [17.3, 136.0], [17.4, 136.0], [17.5, 137.0], [17.6, 137.0], [17.7, 137.0], [17.8, 137.0], [17.9, 138.0], [18.0, 138.0], [18.1, 138.0], [18.2, 138.0], [18.3, 138.0], [18.4, 138.0], [18.5, 139.0], [18.6, 139.0], [18.7, 139.0], [18.8, 140.0], [18.9, 140.0], [19.0, 140.0], [19.1, 140.0], [19.2, 140.0], [19.3, 140.0], [19.4, 140.0], [19.5, 140.0], [19.6, 140.0], [19.7, 141.0], [19.8, 141.0], [19.9, 141.0], [20.0, 141.0], [20.1, 141.0], [20.2, 141.0], [20.3, 141.0], [20.4, 142.0], [20.5, 142.0], [20.6, 142.0], [20.7, 142.0], [20.8, 142.0], [20.9, 142.0], [21.0, 142.0], [21.1, 142.0], [21.2, 142.0], [21.3, 142.0], [21.4, 142.0], [21.5, 142.0], [21.6, 142.0], [21.7, 142.0], [21.8, 142.0], [21.9, 143.0], [22.0, 143.0], [22.1, 143.0], [22.2, 143.0], [22.3, 143.0], [22.4, 143.0], [22.5, 143.0], [22.6, 143.0], [22.7, 143.0], [22.8, 143.0], [22.9, 143.0], [23.0, 143.0], [23.1, 143.0], [23.2, 144.0], [23.3, 144.0], [23.4, 144.0], [23.5, 144.0], [23.6, 144.0], [23.7, 144.0], [23.8, 145.0], [23.9, 145.0], [24.0, 145.0], [24.1, 146.0], [24.2, 146.0], [24.3, 146.0], [24.4, 146.0], [24.5, 146.0], [24.6, 146.0], [24.7, 146.0], [24.8, 146.0], [24.9, 146.0], [25.0, 147.0], [25.1, 147.0], [25.2, 147.0], [25.3, 147.0], [25.4, 148.0], [25.5, 148.0], [25.6, 148.0], [25.7, 152.0], [25.8, 152.0], [25.9, 152.0], [26.0, 152.0], [26.1, 152.0], [26.2, 152.0], [26.3, 152.0], [26.4, 152.0], [26.5, 152.0], [26.6, 153.0], [26.7, 153.0], [26.8, 153.0], [26.9, 155.0], [27.0, 155.0], [27.1, 155.0], [27.2, 155.0], [27.3, 155.0], [27.4, 155.0], [27.5, 156.0], [27.6, 156.0], [27.7, 156.0], [27.8, 156.0], [27.9, 156.0], [28.0, 156.0], [28.1, 156.0], [28.2, 157.0], [28.3, 157.0], [28.4, 157.0], [28.5, 158.0], [28.6, 158.0], [28.7, 158.0], [28.8, 158.0], [28.9, 158.0], [29.0, 158.0], [29.1, 159.0], [29.2, 159.0], [29.3, 159.0], [29.4, 159.0], [29.5, 159.0], [29.6, 159.0], [29.7, 160.0], [29.8, 160.0], [29.9, 160.0], [30.0, 160.0], [30.1, 160.0], [30.2, 160.0], [30.3, 160.0], [30.4, 162.0], [30.5, 162.0], [30.6, 162.0], [30.7, 163.0], [30.8, 163.0], [30.9, 163.0], [31.0, 163.0], [31.1, 163.0], [31.2, 163.0], [31.3, 164.0], [31.4, 164.0], [31.5, 164.0], [31.6, 164.0], [31.7, 164.0], [31.8, 164.0], [31.9, 165.0], [32.0, 165.0], [32.1, 165.0], [32.2, 165.0], [32.3, 165.0], [32.4, 165.0], [32.5, 165.0], [32.6, 165.0], [32.7, 165.0], [32.8, 165.0], [32.9, 167.0], [33.0, 167.0], [33.1, 167.0], [33.2, 167.0], [33.3, 167.0], [33.4, 167.0], [33.5, 167.0], [33.6, 167.0], [33.7, 167.0], [33.8, 168.0], [33.9, 168.0], [34.0, 168.0], [34.1, 168.0], [34.2, 168.0], [34.3, 168.0], [34.4, 170.0], [34.5, 170.0], [34.6, 170.0], [34.7, 170.0], [34.8, 170.0], [34.9, 170.0], [35.0, 170.0], [35.1, 170.0], [35.2, 170.0], [35.3, 170.0], [35.4, 174.0], [35.5, 174.0], [35.6, 174.0], [35.7, 176.0], [35.8, 176.0], [35.9, 176.0], [36.0, 176.0], [36.1, 176.0], [36.2, 176.0], [36.3, 177.0], [36.4, 177.0], [36.5, 177.0], [36.6, 178.0], [36.7, 178.0], [36.8, 178.0], [36.9, 182.0], [37.0, 182.0], [37.1, 182.0], [37.2, 183.0], [37.3, 183.0], [37.4, 183.0], [37.5, 184.0], [37.6, 184.0], [37.7, 184.0], [37.8, 184.0], [37.9, 186.0], [38.0, 186.0], [38.1, 186.0], [38.2, 187.0], [38.3, 187.0], [38.4, 187.0], [38.5, 190.0], [38.6, 190.0], [38.7, 190.0], [38.8, 192.0], [38.9, 192.0], [39.0, 192.0], [39.1, 194.0], [39.2, 194.0], [39.3, 194.0], [39.4, 194.0], [39.5, 194.0], [39.6, 194.0], [39.7, 196.0], [39.8, 196.0], [39.9, 196.0], [40.0, 198.0], [40.1, 198.0], [40.2, 198.0], [40.3, 198.0], [40.4, 199.0], [40.5, 199.0], [40.6, 199.0], [40.7, 200.0], [40.8, 200.0], [40.9, 200.0], [41.0, 200.0], [41.1, 200.0], [41.2, 200.0], [41.3, 200.0], [41.4, 200.0], [41.5, 200.0], [41.6, 204.0], [41.7, 204.0], [41.8, 204.0], [41.9, 206.0], [42.0, 206.0], [42.1, 206.0], [42.2, 207.0], [42.3, 207.0], [42.4, 207.0], [42.5, 209.0], [42.6, 209.0], [42.7, 209.0], [42.8, 209.0], [42.9, 209.0], [43.0, 209.0], [43.1, 209.0], [43.2, 210.0], [43.3, 210.0], [43.4, 210.0], [43.5, 210.0], [43.6, 210.0], [43.7, 210.0], [43.8, 211.0], [43.9, 211.0], [44.0, 211.0], [44.1, 212.0], [44.2, 212.0], [44.3, 212.0], [44.4, 213.0], [44.5, 213.0], [44.6, 213.0], [44.7, 215.0], [44.8, 215.0], [44.9, 215.0], [45.0, 216.0], [45.1, 216.0], [45.2, 216.0], [45.3, 216.0], [45.4, 217.0], [45.5, 217.0], [45.6, 217.0], [45.7, 218.0], [45.8, 218.0], [45.9, 218.0], [46.0, 218.0], [46.1, 218.0], [46.2, 218.0], [46.3, 219.0], [46.4, 219.0], [46.5, 219.0], [46.6, 220.0], [46.7, 220.0], [46.8, 220.0], [46.9, 221.0], [47.0, 221.0], [47.1, 221.0], [47.2, 222.0], [47.3, 222.0], [47.4, 222.0], [47.5, 224.0], [47.6, 224.0], [47.7, 224.0], [47.8, 224.0], [47.9, 227.0], [48.0, 227.0], [48.1, 227.0], [48.2, 230.0], [48.3, 230.0], [48.4, 230.0], [48.5, 231.0], [48.6, 231.0], [48.7, 231.0], [48.8, 231.0], [48.9, 231.0], [49.0, 231.0], [49.1, 231.0], [49.2, 231.0], [49.3, 231.0], [49.4, 231.0], [49.5, 231.0], [49.6, 231.0], [49.7, 231.0], [49.8, 231.0], [49.9, 231.0], [50.0, 233.0], [50.1, 233.0], [50.2, 233.0], [50.3, 233.0], [50.4, 233.0], [50.5, 233.0], [50.6, 233.0], [50.7, 239.0], [50.8, 239.0], [50.9, 239.0], [51.0, 240.0], [51.1, 240.0], [51.2, 240.0], [51.3, 240.0], [51.4, 240.0], [51.5, 240.0], [51.6, 242.0], [51.7, 242.0], [51.8, 242.0], [51.9, 242.0], [52.0, 242.0], [52.1, 242.0], [52.2, 243.0], [52.3, 243.0], [52.4, 243.0], [52.5, 246.0], [52.6, 246.0], [52.7, 246.0], [52.8, 246.0], [52.9, 247.0], [53.0, 247.0], [53.1, 247.0], [53.2, 248.0], [53.3, 248.0], [53.4, 248.0], [53.5, 249.0], [53.6, 249.0], [53.7, 249.0], [53.8, 250.0], [53.9, 250.0], [54.0, 250.0], [54.1, 252.0], [54.2, 252.0], [54.3, 252.0], [54.4, 254.0], [54.5, 254.0], [54.6, 254.0], [54.7, 255.0], [54.8, 255.0], [54.9, 255.0], [55.0, 258.0], [55.1, 258.0], [55.2, 258.0], [55.3, 258.0], [55.4, 258.0], [55.5, 258.0], [55.6, 258.0], [55.7, 262.0], [55.8, 262.0], [55.9, 262.0], [56.0, 264.0], [56.1, 264.0], [56.2, 264.0], [56.3, 264.0], [56.4, 264.0], [56.5, 264.0], [56.6, 266.0], [56.7, 266.0], [56.8, 266.0], [56.9, 267.0], [57.0, 267.0], [57.1, 267.0], [57.2, 268.0], [57.3, 268.0], [57.4, 268.0], [57.5, 273.0], [57.6, 273.0], [57.7, 273.0], [57.8, 273.0], [57.9, 277.0], [58.0, 277.0], [58.1, 277.0], [58.2, 281.0], [58.3, 281.0], [58.4, 281.0], [58.5, 283.0], [58.6, 283.0], [58.7, 283.0], [58.8, 286.0], [58.9, 286.0], [59.0, 286.0], [59.1, 286.0], [59.2, 286.0], [59.3, 286.0], [59.4, 287.0], [59.5, 287.0], [59.6, 287.0], [59.7, 295.0], [59.8, 295.0], [59.9, 295.0], [60.0, 295.0], [60.1, 295.0], [60.2, 295.0], [60.3, 295.0], [60.4, 304.0], [60.5, 304.0], [60.6, 304.0], [60.7, 304.0], [60.8, 304.0], [60.9, 304.0], [61.0, 306.0], [61.1, 306.0], [61.2, 306.0], [61.3, 308.0], [61.4, 308.0], [61.5, 308.0], [61.6, 319.0], [61.7, 319.0], [61.8, 319.0], [61.9, 321.0], [62.0, 321.0], [62.1, 321.0], [62.2, 322.0], [62.3, 322.0], [62.4, 322.0], [62.5, 323.0], [62.6, 323.0], [62.7, 323.0], [62.8, 323.0], [62.9, 324.0], [63.0, 324.0], [63.1, 324.0], [63.2, 324.0], [63.3, 324.0], [63.4, 324.0], [63.5, 329.0], [63.6, 329.0], [63.7, 329.0], [63.8, 329.0], [63.9, 329.0], [64.0, 329.0], [64.1, 330.0], [64.2, 330.0], [64.3, 330.0], [64.4, 332.0], [64.5, 332.0], [64.6, 332.0], [64.7, 333.0], [64.8, 333.0], [64.9, 333.0], [65.0, 333.0], [65.1, 333.0], [65.2, 333.0], [65.3, 333.0], [65.4, 334.0], [65.5, 334.0], [65.6, 334.0], [65.7, 335.0], [65.8, 335.0], [65.9, 335.0], [66.0, 337.0], [66.1, 337.0], [66.2, 337.0], [66.3, 338.0], [66.4, 338.0], [66.5, 338.0], [66.6, 341.0], [66.7, 341.0], [66.8, 341.0], [66.9, 342.0], [67.0, 342.0], [67.1, 342.0], [67.2, 342.0], [67.3, 342.0], [67.4, 342.0], [67.5, 342.0], [67.6, 342.0], [67.7, 342.0], [67.8, 342.0], [67.9, 342.0], [68.0, 342.0], [68.1, 342.0], [68.2, 343.0], [68.3, 343.0], [68.4, 343.0], [68.5, 348.0], [68.6, 348.0], [68.7, 348.0], [68.8, 350.0], [68.9, 350.0], [69.0, 350.0], [69.1, 350.0], [69.2, 350.0], [69.3, 350.0], [69.4, 352.0], [69.5, 352.0], [69.6, 352.0], [69.7, 352.0], [69.8, 352.0], [69.9, 352.0], [70.0, 353.0], [70.1, 353.0], [70.2, 353.0], [70.3, 353.0], [70.4, 357.0], [70.5, 357.0], [70.6, 357.0], [70.7, 358.0], [70.8, 358.0], [70.9, 358.0], [71.0, 359.0], [71.1, 359.0], [71.2, 359.0], [71.3, 363.0], [71.4, 363.0], [71.5, 363.0], [71.6, 365.0], [71.7, 365.0], [71.8, 365.0], [71.9, 366.0], [72.0, 366.0], [72.1, 366.0], [72.2, 366.0], [72.3, 366.0], [72.4, 366.0], [72.5, 368.0], [72.6, 368.0], [72.7, 368.0], [72.8, 368.0], [72.9, 370.0], [73.0, 370.0], [73.1, 370.0], [73.2, 377.0], [73.3, 377.0], [73.4, 377.0], [73.5, 380.0], [73.6, 380.0], [73.7, 380.0], [73.8, 380.0], [73.9, 380.0], [74.0, 380.0], [74.1, 380.0], [74.2, 380.0], [74.3, 380.0], [74.4, 388.0], [74.5, 388.0], [74.6, 388.0], [74.7, 415.0], [74.8, 415.0], [74.9, 415.0], [75.0, 420.0], [75.1, 420.0], [75.2, 420.0], [75.3, 420.0], [75.4, 421.0], [75.5, 421.0], [75.6, 421.0], [75.7, 425.0], [75.8, 425.0], [75.9, 425.0], [76.0, 427.0], [76.1, 427.0], [76.2, 427.0], [76.3, 436.0], [76.4, 436.0], [76.5, 436.0], [76.6, 439.0], [76.7, 439.0], [76.8, 439.0], [76.9, 455.0], [77.0, 455.0], [77.1, 455.0], [77.2, 473.0], [77.3, 473.0], [77.4, 473.0], [77.5, 506.0], [77.6, 506.0], [77.7, 506.0], [77.8, 506.0], [77.9, 515.0], [78.0, 515.0], [78.1, 515.0], [78.2, 535.0], [78.3, 535.0], [78.4, 535.0], [78.5, 542.0], [78.6, 542.0], [78.7, 542.0], [78.8, 574.0], [78.9, 574.0], [79.0, 574.0], [79.1, 616.0], [79.2, 616.0], [79.3, 616.0], [79.4, 636.0], [79.5, 636.0], [79.6, 636.0], [79.7, 642.0], [79.8, 642.0], [79.9, 642.0], [80.0, 676.0], [80.1, 676.0], [80.2, 676.0], [80.3, 676.0], [80.4, 703.0], [80.5, 703.0], [80.6, 703.0], [80.7, 727.0], [80.8, 727.0], [80.9, 727.0], [81.0, 782.0], [81.1, 782.0], [81.2, 782.0], [81.3, 915.0], [81.4, 915.0], [81.5, 915.0], [81.6, 946.0], [81.7, 946.0], [81.8, 946.0], [81.9, 1030.0], [82.0, 1030.0], [82.1, 1030.0], [82.2, 1160.0], [82.3, 1160.0], [82.4, 1160.0], [82.5, 1166.0], [82.6, 1166.0], [82.7, 1166.0], [82.8, 1166.0], [82.9, 1181.0], [83.0, 1181.0], [83.1, 1181.0], [83.2, 1183.0], [83.3, 1183.0], [83.4, 1183.0], [83.5, 1185.0], [83.6, 1185.0], [83.7, 1185.0], [83.8, 1224.0], [83.9, 1224.0], [84.0, 1224.0], [84.1, 1273.0], [84.2, 1273.0], [84.3, 1273.0], [84.4, 1279.0], [84.5, 1279.0], [84.6, 1279.0], [84.7, 1337.0], [84.8, 1337.0], [84.9, 1337.0], [85.0, 1365.0], [85.1, 1365.0], [85.2, 1365.0], [85.3, 1365.0], [85.4, 1414.0], [85.5, 1414.0], [85.6, 1414.0], [85.7, 1617.0], [85.8, 1617.0], [85.9, 1617.0], [86.0, 19429.0], [86.1, 19429.0], [86.2, 19429.0], [86.3, 19475.0], [86.4, 19475.0], [86.5, 19475.0], [86.6, 19476.0], [86.7, 19476.0], [86.8, 19476.0], [86.9, 19498.0], [87.0, 19498.0], [87.1, 19498.0], [87.2, 19521.0], [87.3, 19521.0], [87.4, 19521.0], [87.5, 19547.0], [87.6, 19547.0], [87.7, 19547.0], [87.8, 19547.0], [87.9, 19554.0], [88.0, 19554.0], [88.1, 19554.0], [88.2, 19632.0], [88.3, 19632.0], [88.4, 19632.0], [88.5, 19639.0], [88.6, 19639.0], [88.7, 19639.0], [88.8, 19710.0], [88.9, 19710.0], [89.0, 19710.0], [89.1, 19759.0], [89.2, 19759.0], [89.3, 19759.0], [89.4, 19765.0], [89.5, 19765.0], [89.6, 19765.0], [89.7, 19771.0], [89.8, 19771.0], [89.9, 19771.0], [90.0, 19774.0], [90.1, 19774.0], [90.2, 19774.0], [90.3, 19774.0], [90.4, 19790.0], [90.5, 19790.0], [90.6, 19790.0], [90.7, 19803.0], [90.8, 19803.0], [90.9, 19803.0], [91.0, 19807.0], [91.1, 19807.0], [91.2, 19807.0], [91.3, 19809.0], [91.4, 19809.0], [91.5, 19809.0], [91.6, 19810.0], [91.7, 19810.0], [91.8, 19810.0], [91.9, 19810.0], [92.0, 19810.0], [92.1, 19810.0], [92.2, 19812.0], [92.3, 19812.0], [92.4, 19812.0], [92.5, 19823.0], [92.6, 19823.0], [92.7, 19823.0], [92.8, 19823.0], [92.9, 19838.0], [93.0, 19838.0], [93.1, 19838.0], [93.2, 19858.0], [93.3, 19858.0], [93.4, 19858.0], [93.5, 19866.0], [93.6, 19866.0], [93.7, 19866.0], [93.8, 19869.0], [93.9, 19869.0], [94.0, 19869.0], [94.1, 19877.0], [94.2, 19877.0], [94.3, 19877.0], [94.4, 19879.0], [94.5, 19879.0], [94.6, 19879.0], [94.7, 19902.0], [94.8, 19902.0], [94.9, 19902.0], [95.0, 19968.0], [95.1, 19968.0], [95.2, 19968.0], [95.3, 19968.0], [95.4, 20009.0], [95.5, 20009.0], [95.6, 20009.0], [95.7, 20010.0], [95.8, 20010.0], [95.9, 20010.0], [96.0, 20021.0], [96.1, 20021.0], [96.2, 20021.0], [96.3, 20035.0], [96.4, 20035.0], [96.5, 20035.0], [96.6, 20046.0], [96.7, 20046.0], [96.8, 20046.0], [96.9, 20209.0], [97.0, 20209.0], [97.1, 20209.0], [97.2, 35583.0], [97.3, 35583.0], [97.4, 35583.0], [97.5, 35620.0], [97.6, 35620.0], [97.7, 35620.0], [97.8, 35620.0], [97.9, 35917.0], [98.0, 35917.0], [98.1, 35917.0], [98.2, 36059.0], [98.3, 36059.0], [98.4, 36059.0], [98.5, 36233.0], [98.6, 36233.0], [98.7, 36233.0], [98.8, 36340.0], [98.9, 36340.0], [99.0, 36340.0], [99.1, 36391.0], [99.2, 36391.0], [99.3, 36391.0], [99.4, 36432.0], [99.5, 36432.0], [99.6, 36432.0], [99.7, 67833.0], [99.8, 67833.0], [99.9, 67833.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 130.0, "series": [{"data": [[600.0, 4.0], [700.0, 3.0], [900.0, 2.0], [1000.0, 1.0], [1100.0, 5.0], [1200.0, 3.0], [19400.0, 4.0], [20200.0, 1.0], [19900.0, 2.0], [19800.0, 13.0], [20000.0, 5.0], [19700.0, 6.0], [19600.0, 2.0], [19500.0, 3.0], [1300.0, 2.0], [1400.0, 1.0], [100.0, 130.0], [1600.0, 1.0], [36400.0, 1.0], [36300.0, 2.0], [36000.0, 1.0], [36200.0, 1.0], [35900.0, 1.0], [35600.0, 1.0], [35500.0, 1.0], [200.0, 63.0], [67800.0, 1.0], [300.0, 46.0], [400.0, 9.0], [500.0, 5.0]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 67800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 248.0, "series": [{"data": [[0.0, 248.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 46.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.6765236E12, "maxY": 19.879310344827587, "series": [{"data": [[1.67652372E12, 1.0], [1.6765236E12, 13.122605363984668], [1.67652366E12, 19.879310344827587]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652372E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1735.4166666666665, "minX": 1.0, "maxY": 9278.5, "series": [{"data": [[2.0, 1735.4166666666665], [3.0, 3133.0], [4.0, 3160.4615384615386], [5.0, 4030.2], [6.0, 6643.0], [7.0, 2043.1818181818185], [8.0, 2649.375], [9.0, 9278.5], [10.0, 4481.8], [11.0, 5058.25], [12.0, 3914.2000000000003], [13.0, 2380.9473684210525], [14.0, 2177.8999999999996], [15.0, 2363.1578947368425], [1.0, 3711.421052631579], [16.0, 4780.0], [17.0, 5928.428571428572], [18.0, 5218.25], [19.0, 2797.866666666667], [20.0, 4739.777777777777], [21.0, 2532.777777777778], [22.0, 3074.7142857142853], [23.0, 4187.599999999999], [24.0, 4547.2307692307695], [25.0, 5516.11111111111], [26.0, 5027.800000000001], [27.0, 3092.9999999999995]], "isOverall": false, "label": "2359project", "isController": false}, {"data": [[14.309374999999996, 3588.1156249999985]], "isOverall": false, "label": "2359project-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 27.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6.8, "minX": 1.6765236E12, "maxY": 4283.616666666667, "series": [{"data": [[1.67652372E12, 16.416666666666668], [1.6765236E12, 4283.616666666667], [1.67652366E12, 951.9333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.67652372E12, 6.8], [1.6765236E12, 1774.8], [1.67652366E12, 394.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652372E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1481.3141762452112, "minX": 1.6765236E12, "maxY": 67833.0, "series": [{"data": [[1.67652372E12, 67833.0], [1.6765236E12, 1481.3141762452112], [1.67652366E12, 11961.051724137931]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652372E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1481.0919540229888, "minX": 1.6765236E12, "maxY": 67833.0, "series": [{"data": [[1.67652372E12, 67833.0], [1.6765236E12, 1481.0919540229888], [1.67652366E12, 11960.999999999998]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652372E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1403.6206896551726, "minX": 1.6765236E12, "maxY": 67761.0, "series": [{"data": [[1.67652372E12, 67761.0], [1.6765236E12, 1403.6206896551726], [1.67652366E12, 11900.706896551721]], "isOverall": false, "label": "2359project", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652372E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 113.0, "minX": 1.6765236E12, "maxY": 67833.0, "series": [{"data": [[1.67652372E12, 67833.0], [1.6765236E12, 36432.0], [1.67652366E12, 36391.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.67652372E12, 67833.0], [1.6765236E12, 113.0], [1.67652366E12, 119.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.67652372E12, 67833.0], [1.6765236E12, 1138.8000000000015], [1.67652366E12, 35649.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.67652372E12, 67833.0], [1.6765236E12, 20107.94], [1.67652366E12, 36391.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.67652372E12, 67833.0], [1.6765236E12, 218.0], [1.67652366E12, 10294.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.67652372E12, 67833.0], [1.6765236E12, 19806.399999999998], [1.67652366E12, 36238.35]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652372E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 200.0, "minX": 1.0, "maxY": 19858.0, "series": [{"data": [[8.0, 592.0], [4.0, 210.5], [2.0, 10022.5], [1.0, 19858.0], [5.0, 200.0], [10.0, 316.5], [6.0, 214.0], [3.0, 207.0], [7.0, 330.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 200.0, "minX": 1.0, "maxY": 19858.0, "series": [{"data": [[8.0, 586.0], [4.0, 210.0], [2.0, 10022.5], [1.0, 19858.0], [5.0, 200.0], [10.0, 316.5], [6.0, 214.0], [3.0, 207.0], [7.0, 330.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5833333333333334, "minX": 1.6765236E12, "maxY": 4.75, "series": [{"data": [[1.6765236E12, 4.75], [1.67652366E12, 0.5833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652366E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6765236E12, "maxY": 4.35, "series": [{"data": [[1.67652372E12, 0.016666666666666666], [1.6765236E12, 4.35], [1.67652366E12, 0.9666666666666667]], "isOverall": false, "label": "206", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67652372E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6765236E12, "maxY": 4.35, "series": [{"data": [[1.67652372E12, 0.016666666666666666], [1.6765236E12, 4.35], [1.67652366E12, 0.9666666666666667]], "isOverall": false, "label": "2359project-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652372E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6765236E12, "maxY": 4.35, "series": [{"data": [[1.67652372E12, 0.016666666666666666], [1.6765236E12, 4.35], [1.67652366E12, 0.9666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67652372E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

