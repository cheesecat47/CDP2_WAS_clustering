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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 9169.0, "series": [{"data": [[0.0, 20.0], [0.1, 20.0], [0.2, 29.0], [0.3, 29.0], [0.4, 64.0], [0.5, 64.0], [0.6, 64.0], [0.7, 80.0], [0.8, 110.0], [0.9, 110.0], [1.0, 133.0], [1.1, 133.0], [1.2, 150.0], [1.3, 150.0], [1.4, 159.0], [1.5, 159.0], [1.6, 186.0], [1.7, 186.0], [1.8, 192.0], [1.9, 192.0], [2.0, 199.0], [2.1, 199.0], [2.2, 202.0], [2.3, 202.0], [2.4, 212.0], [2.5, 212.0], [2.6, 222.0], [2.7, 222.0], [2.8, 222.0], [2.9, 234.0], [3.0, 234.0], [3.1, 239.0], [3.2, 239.0], [3.3, 245.0], [3.4, 245.0], [3.5, 260.0], [3.6, 260.0], [3.7, 265.0], [3.8, 265.0], [3.9, 280.0], [4.0, 280.0], [4.1, 281.0], [4.2, 281.0], [4.3, 285.0], [4.4, 285.0], [4.5, 297.0], [4.6, 297.0], [4.7, 322.0], [4.8, 322.0], [4.9, 326.0], [5.0, 326.0], [5.1, 336.0], [5.2, 336.0], [5.3, 361.0], [5.4, 361.0], [5.5, 363.0], [5.6, 363.0], [5.7, 373.0], [5.8, 373.0], [5.9, 376.0], [6.0, 376.0], [6.1, 414.0], [6.2, 414.0], [6.3, 448.0], [6.4, 448.0], [6.5, 457.0], [6.6, 457.0], [6.7, 459.0], [6.8, 459.0], [6.9, 460.0], [7.0, 460.0], [7.1, 469.0], [7.2, 469.0], [7.3, 477.0], [7.4, 477.0], [7.5, 481.0], [7.6, 481.0], [7.7, 493.0], [7.8, 493.0], [7.9, 499.0], [8.0, 499.0], [8.1, 507.0], [8.2, 507.0], [8.3, 515.0], [8.4, 515.0], [8.5, 517.0], [8.6, 517.0], [8.7, 526.0], [8.8, 539.0], [8.9, 539.0], [9.0, 543.0], [9.1, 543.0], [9.2, 557.0], [9.3, 557.0], [9.4, 560.0], [9.5, 560.0], [9.6, 562.0], [9.7, 562.0], [9.8, 569.0], [9.9, 569.0], [10.0, 573.0], [10.1, 573.0], [10.2, 581.0], [10.3, 581.0], [10.4, 589.0], [10.5, 589.0], [10.6, 590.0], [10.7, 590.0], [10.8, 594.0], [10.9, 594.0], [11.0, 596.0], [11.1, 596.0], [11.2, 604.0], [11.3, 604.0], [11.4, 629.0], [11.5, 629.0], [11.6, 633.0], [11.7, 633.0], [11.8, 637.0], [11.9, 637.0], [12.0, 638.0], [12.1, 638.0], [12.2, 644.0], [12.3, 644.0], [12.4, 652.0], [12.5, 652.0], [12.6, 665.0], [12.7, 665.0], [12.8, 679.0], [12.9, 679.0], [13.0, 683.0], [13.1, 683.0], [13.2, 686.0], [13.3, 686.0], [13.4, 689.0], [13.5, 689.0], [13.6, 690.0], [13.7, 690.0], [13.8, 694.0], [13.9, 694.0], [14.0, 699.0], [14.1, 699.0], [14.2, 700.0], [14.3, 700.0], [14.4, 704.0], [14.5, 704.0], [14.6, 707.0], [14.7, 707.0], [14.8, 732.0], [14.9, 732.0], [15.0, 735.0], [15.1, 735.0], [15.2, 736.0], [15.3, 736.0], [15.4, 753.0], [15.5, 753.0], [15.6, 756.0], [15.7, 756.0], [15.8, 768.0], [15.9, 768.0], [16.0, 784.0], [16.1, 784.0], [16.2, 794.0], [16.3, 794.0], [16.4, 801.0], [16.5, 801.0], [16.6, 818.0], [16.7, 818.0], [16.8, 849.0], [16.9, 849.0], [17.0, 850.0], [17.1, 850.0], [17.2, 854.0], [17.3, 854.0], [17.4, 857.0], [17.5, 857.0], [17.6, 858.0], [17.7, 858.0], [17.8, 858.0], [17.9, 858.0], [18.0, 858.0], [18.1, 858.0], [18.2, 878.0], [18.3, 878.0], [18.4, 893.0], [18.5, 893.0], [18.6, 898.0], [18.7, 898.0], [18.8, 899.0], [18.9, 899.0], [19.0, 900.0], [19.1, 900.0], [19.2, 913.0], [19.3, 913.0], [19.4, 915.0], [19.5, 915.0], [19.6, 919.0], [19.7, 919.0], [19.8, 925.0], [19.9, 925.0], [20.0, 931.0], [20.1, 931.0], [20.2, 939.0], [20.3, 939.0], [20.4, 959.0], [20.5, 959.0], [20.6, 962.0], [20.7, 962.0], [20.8, 967.0], [20.9, 967.0], [21.0, 968.0], [21.1, 968.0], [21.2, 968.0], [21.3, 968.0], [21.4, 983.0], [21.5, 983.0], [21.6, 995.0], [21.7, 995.0], [21.8, 1003.0], [21.9, 1003.0], [22.0, 1014.0], [22.1, 1014.0], [22.2, 1021.0], [22.3, 1021.0], [22.4, 1028.0], [22.5, 1028.0], [22.6, 1029.0], [22.7, 1029.0], [22.8, 1043.0], [22.9, 1043.0], [23.0, 1078.0], [23.1, 1078.0], [23.2, 1083.0], [23.3, 1083.0], [23.4, 1086.0], [23.5, 1086.0], [23.6, 1088.0], [23.7, 1088.0], [23.8, 1090.0], [23.9, 1090.0], [24.0, 1098.0], [24.1, 1098.0], [24.2, 1098.0], [24.3, 1098.0], [24.4, 1110.0], [24.5, 1110.0], [24.6, 1112.0], [24.7, 1112.0], [24.8, 1116.0], [24.9, 1116.0], [25.0, 1124.0], [25.1, 1124.0], [25.2, 1125.0], [25.3, 1125.0], [25.4, 1135.0], [25.5, 1135.0], [25.6, 1138.0], [25.7, 1138.0], [25.8, 1156.0], [25.9, 1156.0], [26.0, 1160.0], [26.1, 1160.0], [26.2, 1163.0], [26.3, 1163.0], [26.4, 1165.0], [26.5, 1165.0], [26.6, 1179.0], [26.7, 1179.0], [26.8, 1186.0], [26.9, 1186.0], [27.0, 1198.0], [27.1, 1198.0], [27.2, 1213.0], [27.3, 1213.0], [27.4, 1221.0], [27.5, 1221.0], [27.6, 1223.0], [27.7, 1223.0], [27.8, 1228.0], [27.9, 1228.0], [28.0, 1233.0], [28.1, 1233.0], [28.2, 1242.0], [28.3, 1242.0], [28.4, 1256.0], [28.5, 1256.0], [28.6, 1264.0], [28.7, 1264.0], [28.8, 1266.0], [28.9, 1266.0], [29.0, 1271.0], [29.1, 1271.0], [29.2, 1276.0], [29.3, 1276.0], [29.4, 1277.0], [29.5, 1277.0], [29.6, 1278.0], [29.7, 1278.0], [29.8, 1279.0], [29.9, 1279.0], [30.0, 1281.0], [30.1, 1281.0], [30.2, 1306.0], [30.3, 1306.0], [30.4, 1308.0], [30.5, 1308.0], [30.6, 1311.0], [30.7, 1311.0], [30.8, 1317.0], [30.9, 1317.0], [31.0, 1322.0], [31.1, 1322.0], [31.2, 1325.0], [31.3, 1325.0], [31.4, 1348.0], [31.5, 1348.0], [31.6, 1351.0], [31.7, 1351.0], [31.8, 1356.0], [31.9, 1356.0], [32.0, 1363.0], [32.1, 1363.0], [32.2, 1369.0], [32.3, 1369.0], [32.4, 1377.0], [32.5, 1377.0], [32.6, 1384.0], [32.7, 1384.0], [32.8, 1392.0], [32.9, 1392.0], [33.0, 1405.0], [33.1, 1405.0], [33.2, 1414.0], [33.3, 1414.0], [33.4, 1415.0], [33.5, 1415.0], [33.6, 1433.0], [33.7, 1433.0], [33.8, 1438.0], [33.9, 1438.0], [34.0, 1441.0], [34.1, 1441.0], [34.2, 1447.0], [34.3, 1447.0], [34.4, 1455.0], [34.5, 1455.0], [34.6, 1458.0], [34.7, 1458.0], [34.8, 1466.0], [34.9, 1466.0], [35.0, 1488.0], [35.1, 1488.0], [35.2, 1505.0], [35.3, 1505.0], [35.4, 1507.0], [35.5, 1507.0], [35.6, 1510.0], [35.7, 1510.0], [35.8, 1521.0], [35.9, 1521.0], [36.0, 1525.0], [36.1, 1525.0], [36.2, 1548.0], [36.3, 1548.0], [36.4, 1552.0], [36.5, 1552.0], [36.6, 1555.0], [36.7, 1555.0], [36.8, 1562.0], [36.9, 1562.0], [37.0, 1566.0], [37.1, 1566.0], [37.2, 1567.0], [37.3, 1567.0], [37.4, 1568.0], [37.5, 1568.0], [37.6, 1572.0], [37.7, 1572.0], [37.8, 1572.0], [37.9, 1572.0], [38.0, 1581.0], [38.1, 1581.0], [38.2, 1596.0], [38.3, 1596.0], [38.4, 1596.0], [38.5, 1609.0], [38.6, 1609.0], [38.7, 1630.0], [38.8, 1630.0], [38.9, 1635.0], [39.0, 1635.0], [39.1, 1639.0], [39.2, 1639.0], [39.3, 1644.0], [39.4, 1644.0], [39.5, 1652.0], [39.6, 1652.0], [39.7, 1658.0], [39.8, 1658.0], [39.9, 1659.0], [40.0, 1659.0], [40.1, 1666.0], [40.2, 1666.0], [40.3, 1668.0], [40.4, 1668.0], [40.5, 1668.0], [40.6, 1668.0], [40.7, 1680.0], [40.8, 1680.0], [40.9, 1695.0], [41.0, 1695.0], [41.1, 1716.0], [41.2, 1716.0], [41.3, 1717.0], [41.4, 1717.0], [41.5, 1725.0], [41.6, 1725.0], [41.7, 1737.0], [41.8, 1737.0], [41.9, 1738.0], [42.0, 1738.0], [42.1, 1741.0], [42.2, 1741.0], [42.3, 1772.0], [42.4, 1772.0], [42.5, 1778.0], [42.6, 1778.0], [42.7, 1781.0], [42.8, 1781.0], [42.9, 1794.0], [43.0, 1794.0], [43.1, 1795.0], [43.2, 1795.0], [43.3, 1796.0], [43.4, 1796.0], [43.5, 1810.0], [43.6, 1810.0], [43.7, 1817.0], [43.8, 1817.0], [43.9, 1831.0], [44.0, 1831.0], [44.1, 1850.0], [44.2, 1850.0], [44.3, 1857.0], [44.4, 1857.0], [44.5, 1864.0], [44.6, 1864.0], [44.7, 1880.0], [44.8, 1880.0], [44.9, 1923.0], [45.0, 1923.0], [45.1, 1926.0], [45.2, 1926.0], [45.3, 1933.0], [45.4, 1933.0], [45.5, 1940.0], [45.6, 1940.0], [45.7, 1962.0], [45.8, 1962.0], [45.9, 1966.0], [46.0, 1966.0], [46.1, 1990.0], [46.2, 1990.0], [46.3, 2022.0], [46.4, 2022.0], [46.5, 2025.0], [46.6, 2025.0], [46.7, 2027.0], [46.8, 2027.0], [46.9, 2045.0], [47.0, 2045.0], [47.1, 2048.0], [47.2, 2048.0], [47.3, 2064.0], [47.4, 2064.0], [47.5, 2070.0], [47.6, 2070.0], [47.7, 2078.0], [47.8, 2078.0], [47.9, 2099.0], [48.0, 2099.0], [48.1, 2104.0], [48.2, 2104.0], [48.3, 2123.0], [48.4, 2123.0], [48.5, 2126.0], [48.6, 2126.0], [48.7, 2131.0], [48.8, 2131.0], [48.9, 2132.0], [49.0, 2132.0], [49.1, 2134.0], [49.2, 2134.0], [49.3, 2152.0], [49.4, 2152.0], [49.5, 2155.0], [49.6, 2155.0], [49.7, 2155.0], [49.8, 2155.0], [49.9, 2166.0], [50.0, 2166.0], [50.1, 2175.0], [50.2, 2175.0], [50.3, 2176.0], [50.4, 2176.0], [50.5, 2199.0], [50.6, 2199.0], [50.7, 2201.0], [50.8, 2201.0], [50.9, 2221.0], [51.0, 2221.0], [51.1, 2237.0], [51.2, 2237.0], [51.3, 2248.0], [51.4, 2248.0], [51.5, 2252.0], [51.6, 2252.0], [51.7, 2269.0], [51.8, 2269.0], [51.9, 2291.0], [52.0, 2291.0], [52.1, 2294.0], [52.2, 2294.0], [52.3, 2299.0], [52.4, 2299.0], [52.5, 2308.0], [52.6, 2308.0], [52.7, 2311.0], [52.8, 2311.0], [52.9, 2326.0], [53.0, 2326.0], [53.1, 2332.0], [53.2, 2332.0], [53.3, 2336.0], [53.4, 2336.0], [53.5, 2339.0], [53.6, 2339.0], [53.7, 2399.0], [53.8, 2399.0], [53.9, 2419.0], [54.0, 2419.0], [54.1, 2421.0], [54.2, 2421.0], [54.3, 2423.0], [54.4, 2423.0], [54.5, 2424.0], [54.6, 2424.0], [54.7, 2429.0], [54.8, 2429.0], [54.9, 2442.0], [55.0, 2442.0], [55.1, 2446.0], [55.2, 2446.0], [55.3, 2446.0], [55.4, 2446.0], [55.5, 2446.0], [55.6, 2446.0], [55.7, 2447.0], [55.8, 2447.0], [55.9, 2457.0], [56.0, 2457.0], [56.1, 2481.0], [56.2, 2481.0], [56.3, 2487.0], [56.4, 2487.0], [56.5, 2494.0], [56.6, 2494.0], [56.7, 2500.0], [56.8, 2500.0], [56.9, 2500.0], [57.0, 2500.0], [57.1, 2501.0], [57.2, 2501.0], [57.3, 2506.0], [57.4, 2506.0], [57.5, 2510.0], [57.6, 2510.0], [57.7, 2519.0], [57.8, 2519.0], [57.9, 2549.0], [58.0, 2549.0], [58.1, 2551.0], [58.2, 2551.0], [58.3, 2553.0], [58.4, 2553.0], [58.5, 2558.0], [58.6, 2558.0], [58.7, 2568.0], [58.8, 2568.0], [58.9, 2575.0], [59.0, 2575.0], [59.1, 2578.0], [59.2, 2578.0], [59.3, 2594.0], [59.4, 2594.0], [59.5, 2603.0], [59.6, 2603.0], [59.7, 2608.0], [59.8, 2608.0], [59.9, 2618.0], [60.0, 2618.0], [60.1, 2629.0], [60.2, 2629.0], [60.3, 2632.0], [60.4, 2632.0], [60.5, 2638.0], [60.6, 2638.0], [60.7, 2642.0], [60.8, 2642.0], [60.9, 2649.0], [61.0, 2649.0], [61.1, 2667.0], [61.2, 2667.0], [61.3, 2678.0], [61.4, 2678.0], [61.5, 2679.0], [61.6, 2679.0], [61.7, 2679.0], [61.8, 2679.0], [61.9, 2679.0], [62.0, 2679.0], [62.1, 2687.0], [62.2, 2687.0], [62.3, 2690.0], [62.4, 2690.0], [62.5, 2697.0], [62.6, 2697.0], [62.7, 2707.0], [62.8, 2707.0], [62.9, 2714.0], [63.0, 2714.0], [63.1, 2739.0], [63.2, 2739.0], [63.3, 2764.0], [63.4, 2764.0], [63.5, 2768.0], [63.6, 2768.0], [63.7, 2778.0], [63.8, 2778.0], [63.9, 2803.0], [64.0, 2803.0], [64.1, 2812.0], [64.2, 2812.0], [64.3, 2812.0], [64.4, 2812.0], [64.5, 2817.0], [64.6, 2817.0], [64.7, 2818.0], [64.8, 2818.0], [64.9, 2825.0], [65.0, 2825.0], [65.1, 2835.0], [65.2, 2835.0], [65.3, 2836.0], [65.4, 2836.0], [65.5, 2840.0], [65.6, 2840.0], [65.7, 2857.0], [65.8, 2857.0], [65.9, 2859.0], [66.0, 2859.0], [66.1, 2871.0], [66.2, 2871.0], [66.3, 2873.0], [66.4, 2873.0], [66.5, 2892.0], [66.6, 2892.0], [66.7, 2907.0], [66.8, 2907.0], [66.9, 2909.0], [67.0, 2909.0], [67.1, 2916.0], [67.2, 2916.0], [67.3, 2930.0], [67.4, 2930.0], [67.5, 2934.0], [67.6, 2934.0], [67.7, 2974.0], [67.8, 2974.0], [67.9, 2980.0], [68.0, 2980.0], [68.1, 3058.0], [68.2, 3058.0], [68.3, 3069.0], [68.4, 3069.0], [68.5, 3072.0], [68.6, 3072.0], [68.7, 3075.0], [68.8, 3075.0], [68.9, 3091.0], [69.0, 3091.0], [69.1, 3100.0], [69.2, 3100.0], [69.3, 3102.0], [69.4, 3102.0], [69.5, 3110.0], [69.6, 3110.0], [69.7, 3122.0], [69.8, 3122.0], [69.9, 3124.0], [70.0, 3124.0], [70.1, 3128.0], [70.2, 3128.0], [70.3, 3139.0], [70.4, 3139.0], [70.5, 3151.0], [70.6, 3151.0], [70.7, 3173.0], [70.8, 3173.0], [70.9, 3173.0], [71.0, 3173.0], [71.1, 3174.0], [71.2, 3174.0], [71.3, 3188.0], [71.4, 3188.0], [71.5, 3192.0], [71.6, 3192.0], [71.7, 3208.0], [71.8, 3208.0], [71.9, 3211.0], [72.0, 3211.0], [72.1, 3226.0], [72.2, 3226.0], [72.3, 3227.0], [72.4, 3227.0], [72.5, 3232.0], [72.6, 3232.0], [72.7, 3243.0], [72.8, 3243.0], [72.9, 3272.0], [73.0, 3272.0], [73.1, 3280.0], [73.2, 3280.0], [73.3, 3283.0], [73.4, 3283.0], [73.5, 3293.0], [73.6, 3293.0], [73.7, 3297.0], [73.8, 3297.0], [73.9, 3341.0], [74.0, 3341.0], [74.1, 3346.0], [74.2, 3346.0], [74.3, 3366.0], [74.4, 3366.0], [74.5, 3368.0], [74.6, 3368.0], [74.7, 3391.0], [74.8, 3391.0], [74.9, 3392.0], [75.0, 3392.0], [75.1, 3432.0], [75.2, 3432.0], [75.3, 3447.0], [75.4, 3447.0], [75.5, 3452.0], [75.6, 3452.0], [75.7, 3513.0], [75.8, 3513.0], [75.9, 3514.0], [76.0, 3514.0], [76.1, 3552.0], [76.2, 3552.0], [76.3, 3572.0], [76.4, 3572.0], [76.5, 3584.0], [76.6, 3584.0], [76.7, 3600.0], [76.8, 3600.0], [76.9, 3601.0], [77.0, 3601.0], [77.1, 3631.0], [77.2, 3631.0], [77.3, 3647.0], [77.4, 3647.0], [77.5, 3650.0], [77.6, 3650.0], [77.7, 3652.0], [77.8, 3652.0], [77.9, 3656.0], [78.0, 3656.0], [78.1, 3675.0], [78.2, 3675.0], [78.3, 3697.0], [78.4, 3697.0], [78.5, 3710.0], [78.6, 3710.0], [78.7, 3715.0], [78.8, 3715.0], [78.9, 3731.0], [79.0, 3731.0], [79.1, 3746.0], [79.2, 3746.0], [79.3, 3747.0], [79.4, 3747.0], [79.5, 3751.0], [79.6, 3751.0], [79.7, 3784.0], [79.8, 3784.0], [79.9, 3795.0], [80.0, 3795.0], [80.1, 3813.0], [80.2, 3813.0], [80.3, 3834.0], [80.4, 3834.0], [80.5, 3848.0], [80.6, 3848.0], [80.7, 3856.0], [80.8, 3856.0], [80.9, 3857.0], [81.0, 3857.0], [81.1, 3884.0], [81.2, 3884.0], [81.3, 3889.0], [81.4, 3889.0], [81.5, 3900.0], [81.6, 3900.0], [81.7, 3918.0], [81.8, 3918.0], [81.9, 3956.0], [82.0, 3956.0], [82.1, 3991.0], [82.2, 3991.0], [82.3, 3992.0], [82.4, 3992.0], [82.5, 4001.0], [82.6, 4001.0], [82.7, 4025.0], [82.8, 4025.0], [82.9, 4026.0], [83.0, 4026.0], [83.1, 4029.0], [83.2, 4029.0], [83.3, 4031.0], [83.4, 4031.0], [83.5, 4057.0], [83.6, 4057.0], [83.7, 4060.0], [83.8, 4060.0], [83.9, 4070.0], [84.0, 4070.0], [84.1, 4075.0], [84.2, 4075.0], [84.3, 4099.0], [84.4, 4099.0], [84.5, 4105.0], [84.6, 4105.0], [84.7, 4117.0], [84.8, 4117.0], [84.9, 4148.0], [85.0, 4148.0], [85.1, 4185.0], [85.2, 4185.0], [85.3, 4187.0], [85.4, 4187.0], [85.5, 4189.0], [85.6, 4189.0], [85.7, 4227.0], [85.8, 4227.0], [85.9, 4238.0], [86.0, 4238.0], [86.1, 4241.0], [86.2, 4241.0], [86.3, 4245.0], [86.4, 4245.0], [86.5, 4247.0], [86.6, 4247.0], [86.7, 4251.0], [86.8, 4251.0], [86.9, 4274.0], [87.0, 4274.0], [87.1, 4310.0], [87.2, 4310.0], [87.3, 4327.0], [87.4, 4327.0], [87.5, 4389.0], [87.6, 4389.0], [87.7, 4430.0], [87.8, 4430.0], [87.9, 4485.0], [88.0, 4485.0], [88.1, 4485.0], [88.2, 4485.0], [88.3, 4521.0], [88.4, 4521.0], [88.5, 4531.0], [88.6, 4531.0], [88.7, 4582.0], [88.8, 4582.0], [88.9, 4609.0], [89.0, 4609.0], [89.1, 4642.0], [89.2, 4642.0], [89.3, 4670.0], [89.4, 4670.0], [89.5, 4688.0], [89.6, 4688.0], [89.7, 4828.0], [89.8, 4828.0], [89.9, 4836.0], [90.0, 4836.0], [90.1, 4837.0], [90.2, 4837.0], [90.3, 4863.0], [90.4, 4863.0], [90.5, 4915.0], [90.6, 4915.0], [90.7, 4920.0], [90.8, 4920.0], [90.9, 4955.0], [91.0, 4955.0], [91.1, 4959.0], [91.2, 4959.0], [91.3, 5018.0], [91.4, 5018.0], [91.5, 5049.0], [91.6, 5049.0], [91.7, 5062.0], [91.8, 5062.0], [91.9, 5092.0], [92.0, 5092.0], [92.1, 5137.0], [92.2, 5137.0], [92.3, 5171.0], [92.4, 5171.0], [92.5, 5200.0], [92.6, 5200.0], [92.7, 5228.0], [92.8, 5228.0], [92.9, 5268.0], [93.0, 5268.0], [93.1, 5296.0], [93.2, 5296.0], [93.3, 5320.0], [93.4, 5320.0], [93.5, 5368.0], [93.6, 5368.0], [93.7, 5377.0], [93.8, 5377.0], [93.9, 5419.0], [94.0, 5419.0], [94.1, 5420.0], [94.2, 5420.0], [94.3, 5550.0], [94.4, 5550.0], [94.5, 5587.0], [94.6, 5587.0], [94.7, 5601.0], [94.8, 5601.0], [94.9, 5609.0], [95.0, 5609.0], [95.1, 5632.0], [95.2, 5632.0], [95.3, 5668.0], [95.4, 5668.0], [95.5, 5732.0], [95.6, 5732.0], [95.7, 5733.0], [95.8, 5733.0], [95.9, 5734.0], [96.0, 5734.0], [96.1, 5741.0], [96.2, 5741.0], [96.3, 5792.0], [96.4, 5792.0], [96.5, 5801.0], [96.6, 5801.0], [96.7, 5857.0], [96.8, 5857.0], [96.9, 5892.0], [97.0, 5892.0], [97.1, 6011.0], [97.2, 6011.0], [97.3, 6161.0], [97.4, 6161.0], [97.5, 6254.0], [97.6, 6254.0], [97.7, 6440.0], [97.8, 6440.0], [97.9, 6494.0], [98.0, 6494.0], [98.1, 6549.0], [98.2, 6549.0], [98.3, 6636.0], [98.4, 6636.0], [98.5, 6756.0], [98.6, 6756.0], [98.7, 6775.0], [98.8, 6775.0], [98.9, 6937.0], [99.0, 6937.0], [99.1, 7098.0], [99.2, 7098.0], [99.3, 7499.0], [99.4, 7499.0], [99.5, 7925.0], [99.6, 7925.0], [99.7, 9152.0], [99.8, 9152.0], [99.9, 9169.0], [100.0, 9169.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 16.0, "series": [{"data": [[0.0, 4.0], [600.0, 15.0], [700.0, 11.0], [800.0, 13.0], [900.0, 14.0], [1000.0, 13.0], [1100.0, 14.0], [1200.0, 15.0], [1300.0, 14.0], [1400.0, 11.0], [1500.0, 16.0], [1600.0, 13.0], [1700.0, 12.0], [1800.0, 7.0], [1900.0, 7.0], [2000.0, 9.0], [2100.0, 13.0], [2200.0, 9.0], [2300.0, 7.0], [2400.0, 14.0], [2500.0, 14.0], [2600.0, 16.0], [2800.0, 14.0], [2700.0, 6.0], [2900.0, 7.0], [3000.0, 5.0], [3100.0, 13.0], [3200.0, 11.0], [3300.0, 6.0], [3400.0, 3.0], [3500.0, 5.0], [3700.0, 8.0], [3600.0, 9.0], [3800.0, 7.0], [3900.0, 5.0], [4000.0, 10.0], [4100.0, 6.0], [4200.0, 7.0], [4300.0, 3.0], [4500.0, 3.0], [4400.0, 3.0], [4600.0, 4.0], [4800.0, 4.0], [5100.0, 2.0], [4900.0, 4.0], [5000.0, 4.0], [5200.0, 4.0], [5300.0, 3.0], [5500.0, 2.0], [5600.0, 4.0], [5400.0, 2.0], [5700.0, 5.0], [5800.0, 3.0], [6100.0, 1.0], [6000.0, 1.0], [6200.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6400.0, 2.0], [6700.0, 2.0], [6900.0, 1.0], [7000.0, 1.0], [7400.0, 1.0], [7900.0, 1.0], [9100.0, 2.0], [100.0, 7.0], [200.0, 12.0], [300.0, 7.0], [400.0, 10.0], [500.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 324.0, "series": [{"data": [[0.0, 40.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 136.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 324.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 56.236000000000004, "minX": 1.5887691E12, "maxY": 56.236000000000004, "series": [{"data": [[1.5887691E12, 56.236000000000004]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5887691E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.0, "maxY": 5444.666666666667, "series": [{"data": [[2.0, 557.0], [3.0, 581.0], [4.0, 1547.5], [5.0, 202.0], [6.0, 1256.0], [7.0, 1078.0], [8.0, 576.5], [9.0, 934.3333333333334], [10.0, 265.0], [11.0, 291.5], [12.0, 493.0], [13.0, 360.25], [14.0, 2816.6666666666665], [15.0, 2396.0], [16.0, 888.6666666666666], [17.0, 882.3333333333334], [18.0, 383.0], [19.0, 1523.5], [20.0, 451.0], [21.0, 575.5], [22.0, 900.0], [23.0, 497.0], [24.0, 782.0], [25.0, 1415.5], [26.0, 1375.5], [27.0, 1113.0], [28.0, 1175.4], [29.0, 301.5], [30.0, 895.125], [31.0, 1266.181818181818], [32.0, 1134.142857142857], [33.0, 973.6666666666666], [35.0, 675.5], [34.0, 3105.5], [36.0, 1033.5], [37.0, 1462.0], [38.0, 2126.0], [39.0, 1852.3333333333333], [40.0, 1267.0], [41.0, 932.2], [42.0, 2706.0], [43.0, 1552.6999999999998], [44.0, 3957.25], [45.0, 1398.5], [46.0, 2467.8], [47.0, 2661.285714285714], [48.0, 2727.0], [49.0, 1601.75], [50.0, 1561.3333333333333], [51.0, 1554.0], [52.0, 2012.857142857143], [53.0, 2045.4], [54.0, 2488.2], [55.0, 3242.0], [57.0, 2870.6], [56.0, 3273.25], [58.0, 2025.8], [59.0, 1769.6666666666667], [60.0, 3289.875], [61.0, 2716.25], [62.0, 3850.3333333333335], [63.0, 2557.6666666666665], [64.0, 2828.733333333333], [65.0, 2588.1], [66.0, 3248.3333333333335], [67.0, 2634.1666666666665], [68.0, 3053.5], [69.0, 3062.578947368421], [70.0, 3410.0], [71.0, 3327.8], [72.0, 5444.666666666667], [74.0, 3075.0], [75.0, 2489.6], [73.0, 4250.249999999999], [76.0, 2501.625], [77.0, 3098.3333333333335], [78.0, 2897.0], [79.0, 2928.75], [80.0, 4254.125], [83.0, 3021.1764705882356], [82.0, 3440.4], [81.0, 3389.0], [84.0, 2619.7], [86.0, 2764.285714285714], [85.0, 2434.0], [1.0, 526.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[56.236000000000004, 2438.4399999999982]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 86.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1000.0, "minX": 1.5887691E12, "maxY": 5275.0, "series": [{"data": [[1.5887691E12, 5275.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5887691E12, 1000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5887691E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2438.4399999999982, "minX": 1.5887691E12, "maxY": 2438.4399999999982, "series": [{"data": [[1.5887691E12, 2438.4399999999982]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5887691E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2438.368, "minX": 1.5887691E12, "maxY": 2438.368, "series": [{"data": [[1.5887691E12, 2438.368]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5887691E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.6599999999999975, "minX": 1.5887691E12, "maxY": 2.6599999999999975, "series": [{"data": [[1.5887691E12, 2.6599999999999975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5887691E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.5887691E12, "maxY": 9169.0, "series": [{"data": [[1.5887691E12, 9169.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5887691E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5887691E12, 4836.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5887691E12, 7096.390000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5887691E12, 5630.849999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5887691E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 322.0, "minX": 7.0, "maxY": 3604.0, "series": [{"data": [[32.0, 782.5], [35.0, 2649.0], [36.0, 3604.0], [10.0, 3141.5], [41.0, 1098.0], [12.0, 886.5], [16.0, 960.5], [17.0, 2817.0], [18.0, 2696.5], [20.0, 2894.5], [22.0, 1518.0], [23.0, 3211.0], [24.0, 2508.0], [26.0, 3592.0], [7.0, 322.0], [29.0, 2131.0], [30.0, 1238.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 322.0, "minX": 7.0, "maxY": 3604.0, "series": [{"data": [[32.0, 782.5], [35.0, 2649.0], [36.0, 3604.0], [10.0, 3141.5], [41.0, 1098.0], [12.0, 886.5], [16.0, 960.0], [17.0, 2817.0], [18.0, 2696.5], [20.0, 2894.0], [22.0, 1518.0], [23.0, 3211.0], [24.0, 2508.0], [26.0, 3592.0], [7.0, 322.0], [29.0, 2131.0], [30.0, 1238.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.5887691E12, "maxY": 8.333333333333334, "series": [{"data": [[1.5887691E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5887691E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.5887691E12, "maxY": 8.333333333333334, "series": [{"data": [[1.5887691E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5887691E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.5887691E12, "maxY": 8.333333333333334, "series": [{"data": [[1.5887691E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5887691E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.5887691E12, "maxY": 8.333333333333334, "series": [{"data": [[1.5887691E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5887691E12, "title": "Total Transactions Per Second"}},
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

