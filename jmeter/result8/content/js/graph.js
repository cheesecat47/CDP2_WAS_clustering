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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 39466.0, "series": [{"data": [[0.0, 34.0], [0.1, 34.0], [0.2, 37.0], [0.3, 37.0], [0.4, 91.0], [0.5, 91.0], [0.6, 91.0], [0.7, 99.0], [0.8, 103.0], [0.9, 103.0], [1.0, 122.0], [1.1, 122.0], [1.2, 168.0], [1.3, 168.0], [1.4, 172.0], [1.5, 172.0], [1.6, 172.0], [1.7, 172.0], [1.8, 179.0], [1.9, 179.0], [2.0, 192.0], [2.1, 192.0], [2.2, 197.0], [2.3, 197.0], [2.4, 206.0], [2.5, 206.0], [2.6, 207.0], [2.7, 207.0], [2.8, 207.0], [2.9, 252.0], [3.0, 252.0], [3.1, 266.0], [3.2, 266.0], [3.3, 277.0], [3.4, 277.0], [3.5, 287.0], [3.6, 287.0], [3.7, 332.0], [3.8, 332.0], [3.9, 335.0], [4.0, 335.0], [4.1, 335.0], [4.2, 335.0], [4.3, 340.0], [4.4, 340.0], [4.5, 342.0], [4.6, 342.0], [4.7, 357.0], [4.8, 357.0], [4.9, 360.0], [5.0, 360.0], [5.1, 366.0], [5.2, 366.0], [5.3, 380.0], [5.4, 380.0], [5.5, 381.0], [5.6, 381.0], [5.7, 386.0], [5.8, 386.0], [5.9, 412.0], [6.0, 412.0], [6.1, 415.0], [6.2, 415.0], [6.3, 441.0], [6.4, 441.0], [6.5, 462.0], [6.6, 462.0], [6.7, 485.0], [6.8, 485.0], [6.9, 486.0], [7.0, 486.0], [7.1, 490.0], [7.2, 490.0], [7.3, 494.0], [7.4, 494.0], [7.5, 502.0], [7.6, 502.0], [7.7, 505.0], [7.8, 505.0], [7.9, 512.0], [8.0, 512.0], [8.1, 514.0], [8.2, 514.0], [8.3, 518.0], [8.4, 518.0], [8.5, 521.0], [8.6, 521.0], [8.7, 531.0], [8.8, 538.0], [8.9, 538.0], [9.0, 543.0], [9.1, 543.0], [9.2, 543.0], [9.3, 543.0], [9.4, 559.0], [9.5, 559.0], [9.6, 566.0], [9.7, 566.0], [9.8, 566.0], [9.9, 566.0], [10.0, 580.0], [10.1, 580.0], [10.2, 583.0], [10.3, 583.0], [10.4, 587.0], [10.5, 587.0], [10.6, 606.0], [10.7, 606.0], [10.8, 612.0], [10.9, 612.0], [11.0, 616.0], [11.1, 616.0], [11.2, 624.0], [11.3, 624.0], [11.4, 625.0], [11.5, 625.0], [11.6, 626.0], [11.7, 626.0], [11.8, 637.0], [11.9, 637.0], [12.0, 638.0], [12.1, 638.0], [12.2, 661.0], [12.3, 661.0], [12.4, 666.0], [12.5, 666.0], [12.6, 667.0], [12.7, 667.0], [12.8, 668.0], [12.9, 668.0], [13.0, 675.0], [13.1, 675.0], [13.2, 684.0], [13.3, 684.0], [13.4, 695.0], [13.5, 695.0], [13.6, 696.0], [13.7, 696.0], [13.8, 697.0], [13.9, 697.0], [14.0, 710.0], [14.1, 710.0], [14.2, 718.0], [14.3, 718.0], [14.4, 721.0], [14.5, 721.0], [14.6, 724.0], [14.7, 724.0], [14.8, 729.0], [14.9, 729.0], [15.0, 737.0], [15.1, 737.0], [15.2, 747.0], [15.3, 747.0], [15.4, 749.0], [15.5, 749.0], [15.6, 754.0], [15.7, 754.0], [15.8, 775.0], [15.9, 775.0], [16.0, 792.0], [16.1, 792.0], [16.2, 797.0], [16.3, 797.0], [16.4, 814.0], [16.5, 814.0], [16.6, 815.0], [16.7, 815.0], [16.8, 853.0], [16.9, 853.0], [17.0, 862.0], [17.1, 862.0], [17.2, 869.0], [17.3, 869.0], [17.4, 872.0], [17.5, 872.0], [17.6, 889.0], [17.7, 889.0], [17.8, 895.0], [17.9, 895.0], [18.0, 907.0], [18.1, 907.0], [18.2, 925.0], [18.3, 925.0], [18.4, 931.0], [18.5, 931.0], [18.6, 932.0], [18.7, 932.0], [18.8, 933.0], [18.9, 933.0], [19.0, 940.0], [19.1, 940.0], [19.2, 941.0], [19.3, 941.0], [19.4, 946.0], [19.5, 946.0], [19.6, 948.0], [19.7, 948.0], [19.8, 959.0], [19.9, 959.0], [20.0, 964.0], [20.1, 964.0], [20.2, 965.0], [20.3, 965.0], [20.4, 966.0], [20.5, 966.0], [20.6, 966.0], [20.7, 966.0], [20.8, 972.0], [20.9, 972.0], [21.0, 977.0], [21.1, 977.0], [21.2, 983.0], [21.3, 983.0], [21.4, 995.0], [21.5, 995.0], [21.6, 996.0], [21.7, 996.0], [21.8, 998.0], [21.9, 998.0], [22.0, 1015.0], [22.1, 1015.0], [22.2, 1040.0], [22.3, 1040.0], [22.4, 1045.0], [22.5, 1045.0], [22.6, 1053.0], [22.7, 1053.0], [22.8, 1082.0], [22.9, 1082.0], [23.0, 1083.0], [23.1, 1083.0], [23.2, 1107.0], [23.3, 1107.0], [23.4, 1126.0], [23.5, 1126.0], [23.6, 1156.0], [23.7, 1156.0], [23.8, 1157.0], [23.9, 1157.0], [24.0, 1176.0], [24.1, 1176.0], [24.2, 1179.0], [24.3, 1179.0], [24.4, 1202.0], [24.5, 1202.0], [24.6, 1220.0], [24.7, 1220.0], [24.8, 1232.0], [24.9, 1232.0], [25.0, 1232.0], [25.1, 1232.0], [25.2, 1237.0], [25.3, 1237.0], [25.4, 1245.0], [25.5, 1245.0], [25.6, 1267.0], [25.7, 1267.0], [25.8, 1268.0], [25.9, 1268.0], [26.0, 1271.0], [26.1, 1271.0], [26.2, 1273.0], [26.3, 1273.0], [26.4, 1276.0], [26.5, 1276.0], [26.6, 1283.0], [26.7, 1283.0], [26.8, 1308.0], [26.9, 1308.0], [27.0, 1331.0], [27.1, 1331.0], [27.2, 1332.0], [27.3, 1332.0], [27.4, 1344.0], [27.5, 1344.0], [27.6, 1369.0], [27.7, 1369.0], [27.8, 1370.0], [27.9, 1370.0], [28.0, 1405.0], [28.1, 1405.0], [28.2, 1406.0], [28.3, 1406.0], [28.4, 1409.0], [28.5, 1409.0], [28.6, 1433.0], [28.7, 1433.0], [28.8, 1453.0], [28.9, 1453.0], [29.0, 1467.0], [29.1, 1467.0], [29.2, 1480.0], [29.3, 1480.0], [29.4, 1483.0], [29.5, 1483.0], [29.6, 1488.0], [29.7, 1488.0], [29.8, 1523.0], [29.9, 1523.0], [30.0, 1533.0], [30.1, 1533.0], [30.2, 1538.0], [30.3, 1538.0], [30.4, 1540.0], [30.5, 1540.0], [30.6, 1559.0], [30.7, 1559.0], [30.8, 1573.0], [30.9, 1573.0], [31.0, 1589.0], [31.1, 1589.0], [31.2, 1618.0], [31.3, 1618.0], [31.4, 1630.0], [31.5, 1630.0], [31.6, 1638.0], [31.7, 1638.0], [31.8, 1639.0], [31.9, 1639.0], [32.0, 1666.0], [32.1, 1666.0], [32.2, 1678.0], [32.3, 1678.0], [32.4, 1691.0], [32.5, 1691.0], [32.6, 1713.0], [32.7, 1713.0], [32.8, 1722.0], [32.9, 1722.0], [33.0, 1734.0], [33.1, 1734.0], [33.2, 1758.0], [33.3, 1758.0], [33.4, 1761.0], [33.5, 1761.0], [33.6, 1762.0], [33.7, 1762.0], [33.8, 1807.0], [33.9, 1807.0], [34.0, 1817.0], [34.1, 1817.0], [34.2, 1828.0], [34.3, 1828.0], [34.4, 1835.0], [34.5, 1835.0], [34.6, 1856.0], [34.7, 1856.0], [34.8, 1876.0], [34.9, 1876.0], [35.0, 1900.0], [35.1, 1900.0], [35.2, 1903.0], [35.3, 1903.0], [35.4, 1904.0], [35.5, 1904.0], [35.6, 1908.0], [35.7, 1908.0], [35.8, 1919.0], [35.9, 1919.0], [36.0, 1921.0], [36.1, 1921.0], [36.2, 1961.0], [36.3, 1961.0], [36.4, 1967.0], [36.5, 1967.0], [36.6, 2000.0], [36.7, 2000.0], [36.8, 2022.0], [36.9, 2022.0], [37.0, 2056.0], [37.1, 2056.0], [37.2, 2068.0], [37.3, 2068.0], [37.4, 2071.0], [37.5, 2071.0], [37.6, 2080.0], [37.7, 2080.0], [37.8, 2080.0], [37.9, 2082.0], [38.0, 2082.0], [38.1, 2100.0], [38.2, 2100.0], [38.3, 2109.0], [38.4, 2109.0], [38.5, 2137.0], [38.6, 2137.0], [38.7, 2165.0], [38.8, 2165.0], [38.9, 2184.0], [39.0, 2184.0], [39.1, 2191.0], [39.2, 2191.0], [39.3, 2221.0], [39.4, 2221.0], [39.5, 2229.0], [39.6, 2229.0], [39.7, 2241.0], [39.8, 2241.0], [39.9, 2251.0], [40.0, 2251.0], [40.1, 2255.0], [40.2, 2255.0], [40.3, 2302.0], [40.4, 2302.0], [40.5, 2337.0], [40.6, 2337.0], [40.7, 2348.0], [40.8, 2348.0], [40.9, 2349.0], [41.0, 2349.0], [41.1, 2362.0], [41.2, 2362.0], [41.3, 2389.0], [41.4, 2389.0], [41.5, 2422.0], [41.6, 2422.0], [41.7, 2430.0], [41.8, 2430.0], [41.9, 2431.0], [42.0, 2431.0], [42.1, 2440.0], [42.2, 2440.0], [42.3, 2445.0], [42.4, 2445.0], [42.5, 2465.0], [42.6, 2465.0], [42.7, 2479.0], [42.8, 2479.0], [42.9, 2481.0], [43.0, 2481.0], [43.1, 2500.0], [43.2, 2500.0], [43.3, 2537.0], [43.4, 2537.0], [43.5, 2594.0], [43.6, 2594.0], [43.7, 2595.0], [43.8, 2595.0], [43.9, 2599.0], [44.0, 2599.0], [44.1, 2603.0], [44.2, 2603.0], [44.3, 2611.0], [44.4, 2611.0], [44.5, 2632.0], [44.6, 2632.0], [44.7, 2638.0], [44.8, 2638.0], [44.9, 2746.0], [45.0, 2746.0], [45.1, 2750.0], [45.2, 2750.0], [45.3, 2759.0], [45.4, 2759.0], [45.5, 2778.0], [45.6, 2778.0], [45.7, 2801.0], [45.8, 2801.0], [45.9, 2824.0], [46.0, 2824.0], [46.1, 2876.0], [46.2, 2876.0], [46.3, 2881.0], [46.4, 2881.0], [46.5, 2902.0], [46.6, 2902.0], [46.7, 2915.0], [46.8, 2915.0], [46.9, 2952.0], [47.0, 2952.0], [47.1, 2980.0], [47.2, 2980.0], [47.3, 3048.0], [47.4, 3048.0], [47.5, 3062.0], [47.6, 3062.0], [47.7, 3070.0], [47.8, 3070.0], [47.9, 3111.0], [48.0, 3111.0], [48.1, 3126.0], [48.2, 3126.0], [48.3, 3133.0], [48.4, 3133.0], [48.5, 3147.0], [48.6, 3147.0], [48.7, 3188.0], [48.8, 3188.0], [48.9, 3239.0], [49.0, 3239.0], [49.1, 3255.0], [49.2, 3255.0], [49.3, 3262.0], [49.4, 3262.0], [49.5, 3282.0], [49.6, 3282.0], [49.7, 3419.0], [49.8, 3419.0], [49.9, 3436.0], [50.0, 3436.0], [50.1, 3445.0], [50.2, 3445.0], [50.3, 3455.0], [50.4, 3455.0], [50.5, 3456.0], [50.6, 3456.0], [50.7, 3456.0], [50.8, 3456.0], [50.9, 3486.0], [51.0, 3486.0], [51.1, 3498.0], [51.2, 3498.0], [51.3, 3583.0], [51.4, 3583.0], [51.5, 3648.0], [51.6, 3648.0], [51.7, 3700.0], [51.8, 3700.0], [51.9, 3713.0], [52.0, 3713.0], [52.1, 3771.0], [52.2, 3771.0], [52.3, 3782.0], [52.4, 3782.0], [52.5, 3825.0], [52.6, 3825.0], [52.7, 3849.0], [52.8, 3849.0], [52.9, 3878.0], [53.0, 3878.0], [53.1, 3892.0], [53.2, 3892.0], [53.3, 3907.0], [53.4, 3907.0], [53.5, 3911.0], [53.6, 3911.0], [53.7, 3919.0], [53.8, 3919.0], [53.9, 3936.0], [54.0, 3936.0], [54.1, 3970.0], [54.2, 3970.0], [54.3, 3976.0], [54.4, 3976.0], [54.5, 3999.0], [54.6, 3999.0], [54.7, 4004.0], [54.8, 4004.0], [54.9, 4011.0], [55.0, 4011.0], [55.1, 4022.0], [55.2, 4022.0], [55.3, 4023.0], [55.4, 4023.0], [55.5, 4033.0], [55.6, 4033.0], [55.7, 4107.0], [55.8, 4107.0], [55.9, 4108.0], [56.0, 4108.0], [56.1, 4110.0], [56.2, 4110.0], [56.3, 4138.0], [56.4, 4138.0], [56.5, 4152.0], [56.6, 4152.0], [56.7, 4158.0], [56.8, 4158.0], [56.9, 4191.0], [57.0, 4191.0], [57.1, 4217.0], [57.2, 4217.0], [57.3, 4225.0], [57.4, 4225.0], [57.5, 4254.0], [57.6, 4254.0], [57.7, 4265.0], [57.8, 4265.0], [57.9, 4311.0], [58.0, 4311.0], [58.1, 4314.0], [58.2, 4314.0], [58.3, 4357.0], [58.4, 4357.0], [58.5, 4378.0], [58.6, 4378.0], [58.7, 4414.0], [58.8, 4414.0], [58.9, 4480.0], [59.0, 4480.0], [59.1, 4495.0], [59.2, 4495.0], [59.3, 4519.0], [59.4, 4519.0], [59.5, 4565.0], [59.6, 4565.0], [59.7, 4567.0], [59.8, 4567.0], [59.9, 4593.0], [60.0, 4593.0], [60.1, 4610.0], [60.2, 4610.0], [60.3, 4649.0], [60.4, 4649.0], [60.5, 4662.0], [60.6, 4662.0], [60.7, 4664.0], [60.8, 4664.0], [60.9, 4714.0], [61.0, 4714.0], [61.1, 4721.0], [61.2, 4721.0], [61.3, 4739.0], [61.4, 4739.0], [61.5, 4752.0], [61.6, 4752.0], [61.7, 4769.0], [61.8, 4769.0], [61.9, 4801.0], [62.0, 4801.0], [62.1, 4830.0], [62.2, 4830.0], [62.3, 4833.0], [62.4, 4833.0], [62.5, 4844.0], [62.6, 4844.0], [62.7, 4859.0], [62.8, 4859.0], [62.9, 4860.0], [63.0, 4860.0], [63.1, 4876.0], [63.2, 4876.0], [63.3, 4913.0], [63.4, 4913.0], [63.5, 4976.0], [63.6, 4976.0], [63.7, 4976.0], [63.8, 4976.0], [63.9, 5005.0], [64.0, 5005.0], [64.1, 5036.0], [64.2, 5036.0], [64.3, 5041.0], [64.4, 5041.0], [64.5, 5085.0], [64.6, 5085.0], [64.7, 5134.0], [64.8, 5134.0], [64.9, 5186.0], [65.0, 5186.0], [65.1, 5191.0], [65.2, 5191.0], [65.3, 5209.0], [65.4, 5209.0], [65.5, 5248.0], [65.6, 5248.0], [65.7, 5266.0], [65.8, 5266.0], [65.9, 5283.0], [66.0, 5283.0], [66.1, 5308.0], [66.2, 5308.0], [66.3, 5314.0], [66.4, 5314.0], [66.5, 5314.0], [66.6, 5314.0], [66.7, 5356.0], [66.8, 5356.0], [66.9, 5401.0], [67.0, 5401.0], [67.1, 5411.0], [67.2, 5411.0], [67.3, 5427.0], [67.4, 5427.0], [67.5, 5491.0], [67.6, 5491.0], [67.7, 5529.0], [67.8, 5529.0], [67.9, 5530.0], [68.0, 5530.0], [68.1, 5635.0], [68.2, 5635.0], [68.3, 5646.0], [68.4, 5646.0], [68.5, 5661.0], [68.6, 5661.0], [68.7, 5689.0], [68.8, 5689.0], [68.9, 5754.0], [69.0, 5754.0], [69.1, 5768.0], [69.2, 5768.0], [69.3, 5814.0], [69.4, 5814.0], [69.5, 5877.0], [69.6, 5877.0], [69.7, 5883.0], [69.8, 5883.0], [69.9, 5888.0], [70.0, 5888.0], [70.1, 5981.0], [70.2, 5981.0], [70.3, 6044.0], [70.4, 6044.0], [70.5, 6067.0], [70.6, 6067.0], [70.7, 6101.0], [70.8, 6101.0], [70.9, 6102.0], [71.0, 6102.0], [71.1, 6114.0], [71.2, 6114.0], [71.3, 6259.0], [71.4, 6259.0], [71.5, 6293.0], [71.6, 6293.0], [71.7, 6364.0], [71.8, 6364.0], [71.9, 6378.0], [72.0, 6378.0], [72.1, 6434.0], [72.2, 6434.0], [72.3, 6497.0], [72.4, 6497.0], [72.5, 6611.0], [72.6, 6611.0], [72.7, 6672.0], [72.8, 6672.0], [72.9, 6726.0], [73.0, 6726.0], [73.1, 6872.0], [73.2, 6872.0], [73.3, 6889.0], [73.4, 6889.0], [73.5, 6947.0], [73.6, 6947.0], [73.7, 6954.0], [73.8, 6954.0], [73.9, 7093.0], [74.0, 7093.0], [74.1, 7249.0], [74.2, 7249.0], [74.3, 7307.0], [74.4, 7307.0], [74.5, 7308.0], [74.6, 7308.0], [74.7, 7344.0], [74.8, 7344.0], [74.9, 7426.0], [75.0, 7426.0], [75.1, 7427.0], [75.2, 7427.0], [75.3, 7482.0], [75.4, 7482.0], [75.5, 7566.0], [75.6, 7566.0], [75.7, 7614.0], [75.8, 7614.0], [75.9, 7698.0], [76.0, 7698.0], [76.1, 7773.0], [76.2, 7773.0], [76.3, 7812.0], [76.4, 7812.0], [76.5, 7951.0], [76.6, 7951.0], [76.7, 8053.0], [76.8, 8053.0], [76.9, 8060.0], [77.0, 8060.0], [77.1, 8485.0], [77.2, 8485.0], [77.3, 8692.0], [77.4, 8692.0], [77.5, 8733.0], [77.6, 8733.0], [77.7, 8876.0], [77.8, 8876.0], [77.9, 9367.0], [78.0, 9367.0], [78.1, 11585.0], [78.2, 11585.0], [78.3, 16594.0], [78.4, 16594.0], [78.5, 16707.0], [78.6, 16707.0], [78.7, 18009.0], [78.8, 18009.0], [78.9, 18283.0], [79.0, 18283.0], [79.1, 18333.0], [79.2, 18333.0], [79.3, 18464.0], [79.4, 18464.0], [79.5, 18491.0], [79.6, 18491.0], [79.7, 19280.0], [79.8, 19280.0], [79.9, 19550.0], [80.0, 19550.0], [80.1, 20323.0], [80.2, 20323.0], [80.3, 20331.0], [80.4, 20331.0], [80.5, 20334.0], [80.6, 20334.0], [80.7, 20343.0], [80.8, 20343.0], [80.9, 20441.0], [81.0, 20441.0], [81.1, 20461.0], [81.2, 20461.0], [81.3, 20515.0], [81.4, 20515.0], [81.5, 20516.0], [81.6, 20516.0], [81.7, 20539.0], [81.8, 20539.0], [81.9, 20575.0], [82.0, 20575.0], [82.1, 30003.0], [82.2, 30003.0], [82.3, 30326.0], [82.4, 30326.0], [82.5, 30407.0], [82.6, 30407.0], [82.7, 30418.0], [82.8, 30418.0], [82.9, 30422.0], [83.0, 30422.0], [83.1, 30424.0], [83.2, 30424.0], [83.3, 30425.0], [83.4, 30425.0], [83.5, 30426.0], [83.6, 30426.0], [83.7, 30426.0], [83.8, 30426.0], [83.9, 30427.0], [84.0, 30427.0], [84.1, 30429.0], [84.2, 30429.0], [84.3, 30430.0], [84.4, 30430.0], [84.5, 30431.0], [84.6, 30431.0], [84.7, 30433.0], [84.8, 30433.0], [84.9, 30435.0], [85.0, 30435.0], [85.1, 30437.0], [85.2, 30437.0], [85.3, 30437.0], [85.4, 30437.0], [85.5, 30438.0], [85.6, 30438.0], [85.7, 30439.0], [85.8, 30439.0], [85.9, 30439.0], [86.0, 30439.0], [86.1, 30443.0], [86.2, 30443.0], [86.3, 30443.0], [86.4, 30443.0], [86.5, 30450.0], [86.6, 30450.0], [86.7, 30461.0], [86.8, 30461.0], [86.9, 30472.0], [87.0, 30472.0], [87.1, 30488.0], [87.2, 30488.0], [87.3, 30489.0], [87.4, 30489.0], [87.5, 30513.0], [87.6, 30513.0], [87.7, 30519.0], [87.8, 30519.0], [87.9, 30522.0], [88.0, 30522.0], [88.1, 30525.0], [88.2, 30525.0], [88.3, 30543.0], [88.4, 30543.0], [88.5, 30576.0], [88.6, 30576.0], [88.7, 30600.0], [88.8, 30600.0], [88.9, 30603.0], [89.0, 30603.0], [89.1, 30647.0], [89.2, 30647.0], [89.3, 30652.0], [89.4, 30652.0], [89.5, 30688.0], [89.6, 30688.0], [89.7, 30738.0], [89.8, 30738.0], [89.9, 30750.0], [90.0, 30750.0], [90.1, 30766.0], [90.2, 30766.0], [90.3, 30795.0], [90.4, 30795.0], [90.5, 30938.0], [90.6, 30938.0], [90.7, 31118.0], [90.8, 31118.0], [90.9, 31199.0], [91.0, 31199.0], [91.1, 31272.0], [91.2, 31272.0], [91.3, 31276.0], [91.4, 31276.0], [91.5, 31298.0], [91.6, 31298.0], [91.7, 31465.0], [91.8, 31465.0], [91.9, 31667.0], [92.0, 31667.0], [92.1, 31934.0], [92.2, 31934.0], [92.3, 32256.0], [92.4, 32256.0], [92.5, 32260.0], [92.6, 32260.0], [92.7, 32270.0], [92.8, 32270.0], [92.9, 32329.0], [93.0, 32329.0], [93.1, 32349.0], [93.2, 32349.0], [93.3, 32367.0], [93.4, 32367.0], [93.5, 32476.0], [93.6, 32476.0], [93.7, 32805.0], [93.8, 32805.0], [93.9, 32856.0], [94.0, 32856.0], [94.1, 32882.0], [94.2, 32882.0], [94.3, 33086.0], [94.4, 33086.0], [94.5, 33296.0], [94.6, 33296.0], [94.7, 33302.0], [94.8, 33302.0], [94.9, 33335.0], [95.0, 33335.0], [95.1, 33436.0], [95.2, 33436.0], [95.3, 33445.0], [95.4, 33445.0], [95.5, 33468.0], [95.6, 33468.0], [95.7, 33608.0], [95.8, 33608.0], [95.9, 33862.0], [96.0, 33862.0], [96.1, 33876.0], [96.2, 33876.0], [96.3, 34247.0], [96.4, 34247.0], [96.5, 34493.0], [96.6, 34493.0], [96.7, 34517.0], [96.8, 34517.0], [96.9, 34584.0], [97.0, 34584.0], [97.1, 34659.0], [97.2, 34659.0], [97.3, 34748.0], [97.4, 34748.0], [97.5, 35570.0], [97.6, 35570.0], [97.7, 37825.0], [97.8, 37825.0], [97.9, 37971.0], [98.0, 37971.0], [98.1, 37996.0], [98.2, 37996.0], [98.3, 38076.0], [98.4, 38076.0], [98.5, 38230.0], [98.6, 38230.0], [98.7, 38359.0], [98.8, 38359.0], [98.9, 38460.0], [99.0, 38460.0], [99.1, 38551.0], [99.2, 38551.0], [99.3, 38699.0], [99.4, 38699.0], [99.5, 38989.0], [99.6, 38989.0], [99.7, 39196.0], [99.8, 39196.0], [99.9, 39466.0], [100.0, 39466.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 25.0, "series": [{"data": [[0.0, 4.0], [100.0, 8.0], [33300.0, 2.0], [34500.0, 2.0], [34700.0, 1.0], [35500.0, 1.0], [38500.0, 1.0], [37900.0, 2.0], [38300.0, 1.0], [38900.0, 1.0], [39100.0, 1.0], [200.0, 6.0], [300.0, 11.0], [400.0, 8.0], [500.0, 16.0], [600.0, 17.0], [700.0, 12.0], [800.0, 8.0], [900.0, 20.0], [1000.0, 6.0], [1100.0, 6.0], [1200.0, 12.0], [1300.0, 6.0], [1400.0, 9.0], [1500.0, 7.0], [1600.0, 7.0], [1700.0, 6.0], [1800.0, 6.0], [1900.0, 8.0], [2000.0, 7.0], [2100.0, 6.0], [2200.0, 5.0], [2300.0, 6.0], [2400.0, 8.0], [2500.0, 5.0], [2600.0, 4.0], [2800.0, 4.0], [2700.0, 4.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 5.0], [3200.0, 4.0], [3400.0, 8.0], [3500.0, 1.0], [3700.0, 4.0], [3600.0, 1.0], [3800.0, 4.0], [3900.0, 7.0], [4000.0, 5.0], [4100.0, 7.0], [4300.0, 4.0], [4200.0, 4.0], [4600.0, 4.0], [4400.0, 3.0], [4500.0, 4.0], [4800.0, 7.0], [4700.0, 5.0], [4900.0, 3.0], [5100.0, 3.0], [5000.0, 4.0], [5200.0, 4.0], [5300.0, 4.0], [5400.0, 4.0], [5600.0, 4.0], [5500.0, 2.0], [5800.0, 4.0], [5700.0, 2.0], [6100.0, 3.0], [6000.0, 2.0], [5900.0, 1.0], [6200.0, 2.0], [6300.0, 2.0], [6400.0, 2.0], [6600.0, 2.0], [6700.0, 1.0], [6800.0, 2.0], [6900.0, 2.0], [7000.0, 1.0], [7400.0, 3.0], [7200.0, 1.0], [7300.0, 3.0], [7600.0, 2.0], [7500.0, 1.0], [7700.0, 1.0], [7900.0, 1.0], [7800.0, 1.0], [8000.0, 2.0], [8600.0, 1.0], [8700.0, 1.0], [8400.0, 1.0], [8800.0, 1.0], [9300.0, 1.0], [11500.0, 1.0], [16500.0, 1.0], [16700.0, 1.0], [18000.0, 1.0], [18200.0, 1.0], [18400.0, 2.0], [18300.0, 1.0], [19200.0, 1.0], [20400.0, 2.0], [20300.0, 4.0], [19500.0, 1.0], [20500.0, 4.0], [30500.0, 6.0], [30400.0, 25.0], [30600.0, 5.0], [30700.0, 4.0], [30000.0, 1.0], [30300.0, 1.0], [31400.0, 1.0], [31100.0, 2.0], [31200.0, 3.0], [30900.0, 1.0], [31600.0, 1.0], [32300.0, 3.0], [32200.0, 3.0], [32400.0, 1.0], [31900.0, 1.0], [34400.0, 1.0], [33400.0, 3.0], [32800.0, 3.0], [33800.0, 2.0], [34200.0, 1.0], [34600.0, 1.0], [33200.0, 1.0], [33000.0, 1.0], [33600.0, 1.0], [38200.0, 1.0], [37800.0, 1.0], [38600.0, 1.0], [38000.0, 1.0], [38400.0, 1.0], [39400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 39400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 309.0, "series": [{"data": [[0.0, 37.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 112.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 309.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 42.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 79.50399999999998, "minX": 1.58876898E12, "maxY": 79.50399999999998, "series": [{"data": [[1.58876898E12, 79.50399999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58876898E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 34.0, "minX": 1.0, "maxY": 19096.45698924731, "series": [{"data": [[2.0, 340.0], [3.0, 206.0], [4.0, 964.0], [5.0, 1480.0], [6.0, 34.0], [7.0, 4254.0], [8.0, 1622.0], [9.0, 3201.666666666667], [10.0, 1545.5], [11.0, 1904.0], [12.0, 2067.0], [13.0, 505.0], [14.0, 1967.0], [15.0, 266.0], [16.0, 179.0], [17.0, 6378.0], [18.0, 462.0], [19.0, 2251.0], [20.0, 207.0], [21.0, 2445.5], [22.0, 3126.0], [23.0, 980.0], [24.0, 2952.0], [25.0, 3255.0], [26.0, 966.0], [27.0, 1544.0], [28.0, 1722.0], [29.0, 4381.0], [30.0, 521.0], [31.0, 1232.0], [33.0, 3553.5], [32.0, 332.0], [35.0, 612.0], [34.0, 1026.0], [37.0, 3996.666666666667], [36.0, 1549.0], [39.0, 168.0], [38.0, 172.0], [41.0, 1707.5], [40.0, 2886.25], [43.0, 4519.0], [42.0, 1408.6666666666667], [45.0, 2875.0], [44.0, 1426.0], [47.0, 933.0], [46.0, 877.3333333333333], [49.0, 6114.0], [48.0, 718.0], [51.0, 2064.5], [50.0, 2165.1666666666665], [53.0, 940.0], [52.0, 2080.0], [55.0, 637.0], [54.0, 99.0], [57.0, 3738.6], [56.0, 172.0], [59.0, 4769.0], [58.0, 3736.7999999999997], [61.0, 3432.0], [63.0, 2740.0], [62.0, 3353.0], [67.0, 3511.6], [66.0, 5616.5], [65.0, 3976.0], [64.0, 3062.0], [71.0, 2588.0], [70.0, 2015.8181818181818], [69.0, 738.0], [68.0, 436.5], [75.0, 4197.5], [74.0, 1955.0], [73.0, 5224.0], [72.0, 1961.0], [79.0, 1410.0], [78.0, 4998.8], [77.0, 1176.0], [76.0, 4985.142857142857], [83.0, 4061.5], [82.0, 3919.0], [81.0, 512.0], [80.0, 1664.5], [87.0, 2910.333333333333], [86.0, 3387.3333333333335], [85.0, 3460.2], [84.0, 3924.25], [91.0, 2964.157894736842], [90.0, 3492.0], [89.0, 2675.6666666666665], [88.0, 1011.0], [95.0, 3757.4999999999995], [94.0, 3573.7272727272725], [93.0, 3680.5714285714284], [92.0, 649.0], [99.0, 638.0], [98.0, 1757.1000000000004], [97.0, 1811.5000000000002], [96.0, 815.0], [100.0, 19096.45698924731], [1.0, 357.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[79.50399999999998, 8806.481999999995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1000.0, "minX": 1.58876898E12, "maxY": 5182.6, "series": [{"data": [[1.58876898E12, 5182.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58876898E12, 1000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58876898E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 8806.481999999995, "minX": 1.58876898E12, "maxY": 8806.481999999995, "series": [{"data": [[1.58876898E12, 8806.481999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58876898E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 8806.363999999992, "minX": 1.58876898E12, "maxY": 8806.363999999992, "series": [{"data": [[1.58876898E12, 8806.363999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58876898E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 2.1460000000000004, "minX": 1.58876898E12, "maxY": 2.1460000000000004, "series": [{"data": [[1.58876898E12, 2.1460000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58876898E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 34.0, "minX": 1.58876898E12, "maxY": 39466.0, "series": [{"data": [[1.58876898E12, 39466.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58876898E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58876898E12, 31206.300000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58876898E12, 38611.67999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58876898E12, 33474.99999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58876898E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
    data: {"result": {"minY": 1344.0, "minX": 1.0, "maxY": 31235.5, "series": [{"data": [[32.0, 6108.5], [33.0, 3782.0], [37.0, 1828.0], [19.0, 1444.5], [39.0, 1344.0], [40.0, 3021.0], [22.0, 5357.5], [27.0, 2241.0], [62.0, 31235.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 20453.0], [2.0, 20328.5], [4.0, 30438.0], [10.0, 30439.0], [11.0, 30488.0], [6.0, 20488.0], [3.0, 30433.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1344.0, "minX": 1.0, "maxY": 31235.5, "series": [{"data": [[32.0, 6108.5], [33.0, 3782.0], [37.0, 1828.0], [19.0, 1444.5], [39.0, 1344.0], [40.0, 3021.0], [22.0, 5357.5], [27.0, 2241.0], [62.0, 31235.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 20452.5], [2.0, 20328.5], [4.0, 30437.0], [10.0, 30439.0], [11.0, 30487.0], [6.0, 20484.0], [3.0, 30433.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.58876892E12, "maxY": 6.666666666666667, "series": [{"data": [[1.58876898E12, 6.666666666666667], [1.58876892E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58876898E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.7, "minX": 1.58876898E12, "maxY": 7.633333333333334, "series": [{"data": [[1.58876898E12, 7.633333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.58876898E12, 0.7]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58876898E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.7, "minX": 1.58876898E12, "maxY": 7.633333333333334, "series": [{"data": [[1.58876898E12, 0.7]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.58876898E12, 7.633333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58876898E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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
        data: {"result": {"minY": 0.7, "minX": 1.58876898E12, "maxY": 7.633333333333334, "series": [{"data": [[1.58876898E12, 7.633333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.58876898E12, 0.7]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58876898E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 32400000);
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

