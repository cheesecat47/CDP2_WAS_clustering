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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 4491.0, "series": [{"data": [[0.0, 13.0], [0.1, 19.0], [0.2, 20.0], [0.3, 20.0], [0.4, 20.0], [0.5, 20.0], [0.6, 20.0], [0.7, 21.0], [0.8, 26.0], [0.9, 29.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 33.0], [1.4, 33.0], [1.5, 36.0], [1.6, 38.0], [1.7, 39.0], [1.8, 40.0], [1.9, 40.0], [2.0, 41.0], [2.1, 45.0], [2.2, 45.0], [2.3, 46.0], [2.4, 46.0], [2.5, 47.0], [2.6, 48.0], [2.7, 51.0], [2.8, 51.0], [2.9, 52.0], [3.0, 55.0], [3.1, 55.0], [3.2, 56.0], [3.3, 58.0], [3.4, 59.0], [3.5, 62.0], [3.6, 63.0], [3.7, 64.0], [3.8, 64.0], [3.9, 65.0], [4.0, 66.0], [4.1, 69.0], [4.2, 70.0], [4.3, 71.0], [4.4, 73.0], [4.5, 73.0], [4.6, 73.0], [4.7, 77.0], [4.8, 78.0], [4.9, 80.0], [5.0, 80.0], [5.1, 81.0], [5.2, 81.0], [5.3, 83.0], [5.4, 83.0], [5.5, 84.0], [5.6, 85.0], [5.7, 86.0], [5.8, 87.0], [5.9, 91.0], [6.0, 91.0], [6.1, 92.0], [6.2, 94.0], [6.3, 94.0], [6.4, 97.0], [6.5, 99.0], [6.6, 99.0], [6.7, 100.0], [6.8, 100.0], [6.9, 101.0], [7.0, 102.0], [7.1, 103.0], [7.2, 104.0], [7.3, 104.0], [7.4, 105.0], [7.5, 105.0], [7.6, 107.0], [7.7, 107.0], [7.8, 108.0], [7.9, 109.0], [8.0, 109.0], [8.1, 110.0], [8.2, 112.0], [8.3, 113.0], [8.4, 115.0], [8.5, 116.0], [8.6, 117.0], [8.7, 120.0], [8.8, 120.0], [8.9, 121.0], [9.0, 123.0], [9.1, 123.0], [9.2, 123.0], [9.3, 125.0], [9.4, 126.0], [9.5, 127.0], [9.6, 128.0], [9.7, 130.0], [9.8, 130.0], [9.9, 135.0], [10.0, 135.0], [10.1, 136.0], [10.2, 136.0], [10.3, 140.0], [10.4, 141.0], [10.5, 142.0], [10.6, 142.0], [10.7, 142.0], [10.8, 142.0], [10.9, 144.0], [11.0, 146.0], [11.1, 147.0], [11.2, 148.0], [11.3, 150.0], [11.4, 151.0], [11.5, 153.0], [11.6, 154.0], [11.7, 154.0], [11.8, 156.0], [11.9, 158.0], [12.0, 159.0], [12.1, 160.0], [12.2, 160.0], [12.3, 164.0], [12.4, 164.0], [12.5, 166.0], [12.6, 166.0], [12.7, 167.0], [12.8, 167.0], [12.9, 168.0], [13.0, 169.0], [13.1, 169.0], [13.2, 171.0], [13.3, 172.0], [13.4, 174.0], [13.5, 177.0], [13.6, 178.0], [13.7, 178.0], [13.8, 178.0], [13.9, 181.0], [14.0, 182.0], [14.1, 183.0], [14.2, 183.0], [14.3, 186.0], [14.4, 186.0], [14.5, 187.0], [14.6, 187.0], [14.7, 188.0], [14.8, 190.0], [14.9, 191.0], [15.0, 191.0], [15.1, 193.0], [15.2, 194.0], [15.3, 195.0], [15.4, 196.0], [15.5, 196.0], [15.6, 197.0], [15.7, 200.0], [15.8, 201.0], [15.9, 201.0], [16.0, 201.0], [16.1, 201.0], [16.2, 202.0], [16.3, 202.0], [16.4, 203.0], [16.5, 203.0], [16.6, 204.0], [16.7, 204.0], [16.8, 205.0], [16.9, 205.0], [17.0, 208.0], [17.1, 208.0], [17.2, 209.0], [17.3, 209.0], [17.4, 211.0], [17.5, 211.0], [17.6, 212.0], [17.7, 212.0], [17.8, 213.0], [17.9, 214.0], [18.0, 214.0], [18.1, 214.0], [18.2, 216.0], [18.3, 217.0], [18.4, 217.0], [18.5, 217.0], [18.6, 219.0], [18.7, 219.0], [18.8, 219.0], [18.9, 219.0], [19.0, 220.0], [19.1, 221.0], [19.2, 222.0], [19.3, 224.0], [19.4, 224.0], [19.5, 226.0], [19.6, 229.0], [19.7, 229.0], [19.8, 231.0], [19.9, 232.0], [20.0, 234.0], [20.1, 234.0], [20.2, 234.0], [20.3, 235.0], [20.4, 235.0], [20.5, 236.0], [20.6, 237.0], [20.7, 237.0], [20.8, 237.0], [20.9, 238.0], [21.0, 239.0], [21.1, 239.0], [21.2, 240.0], [21.3, 240.0], [21.4, 241.0], [21.5, 242.0], [21.6, 244.0], [21.7, 245.0], [21.8, 246.0], [21.9, 246.0], [22.0, 248.0], [22.1, 248.0], [22.2, 249.0], [22.3, 250.0], [22.4, 250.0], [22.5, 252.0], [22.6, 254.0], [22.7, 257.0], [22.8, 258.0], [22.9, 260.0], [23.0, 263.0], [23.1, 263.0], [23.2, 265.0], [23.3, 265.0], [23.4, 265.0], [23.5, 266.0], [23.6, 268.0], [23.7, 268.0], [23.8, 269.0], [23.9, 270.0], [24.0, 271.0], [24.1, 271.0], [24.2, 273.0], [24.3, 273.0], [24.4, 275.0], [24.5, 277.0], [24.6, 278.0], [24.7, 280.0], [24.8, 281.0], [24.9, 281.0], [25.0, 282.0], [25.1, 284.0], [25.2, 284.0], [25.3, 286.0], [25.4, 286.0], [25.5, 289.0], [25.6, 291.0], [25.7, 291.0], [25.8, 292.0], [25.9, 293.0], [26.0, 293.0], [26.1, 295.0], [26.2, 295.0], [26.3, 299.0], [26.4, 300.0], [26.5, 300.0], [26.6, 302.0], [26.7, 305.0], [26.8, 305.0], [26.9, 307.0], [27.0, 307.0], [27.1, 310.0], [27.2, 310.0], [27.3, 312.0], [27.4, 313.0], [27.5, 313.0], [27.6, 315.0], [27.7, 316.0], [27.8, 317.0], [27.9, 318.0], [28.0, 318.0], [28.1, 321.0], [28.2, 321.0], [28.3, 322.0], [28.4, 322.0], [28.5, 324.0], [28.6, 326.0], [28.7, 327.0], [28.8, 327.0], [28.9, 329.0], [29.0, 329.0], [29.1, 330.0], [29.2, 331.0], [29.3, 331.0], [29.4, 332.0], [29.5, 332.0], [29.6, 333.0], [29.7, 335.0], [29.8, 339.0], [29.9, 339.0], [30.0, 340.0], [30.1, 340.0], [30.2, 341.0], [30.3, 341.0], [30.4, 342.0], [30.5, 345.0], [30.6, 345.0], [30.7, 346.0], [30.8, 348.0], [30.9, 348.0], [31.0, 350.0], [31.1, 350.0], [31.2, 351.0], [31.3, 351.0], [31.4, 352.0], [31.5, 353.0], [31.6, 353.0], [31.7, 353.0], [31.8, 354.0], [31.9, 355.0], [32.0, 355.0], [32.1, 357.0], [32.2, 359.0], [32.3, 361.0], [32.4, 361.0], [32.5, 364.0], [32.6, 364.0], [32.7, 366.0], [32.8, 367.0], [32.9, 368.0], [33.0, 369.0], [33.1, 369.0], [33.2, 371.0], [33.3, 373.0], [33.4, 374.0], [33.5, 377.0], [33.6, 378.0], [33.7, 380.0], [33.8, 381.0], [33.9, 382.0], [34.0, 384.0], [34.1, 388.0], [34.2, 388.0], [34.3, 390.0], [34.4, 392.0], [34.5, 394.0], [34.6, 395.0], [34.7, 396.0], [34.8, 397.0], [34.9, 399.0], [35.0, 399.0], [35.1, 400.0], [35.2, 400.0], [35.3, 405.0], [35.4, 406.0], [35.5, 407.0], [35.6, 407.0], [35.7, 408.0], [35.8, 408.0], [35.9, 413.0], [36.0, 413.0], [36.1, 414.0], [36.2, 414.0], [36.3, 414.0], [36.4, 415.0], [36.5, 416.0], [36.6, 417.0], [36.7, 418.0], [36.8, 418.0], [36.9, 418.0], [37.0, 420.0], [37.1, 420.0], [37.2, 420.0], [37.3, 422.0], [37.4, 422.0], [37.5, 424.0], [37.6, 424.0], [37.7, 425.0], [37.8, 428.0], [37.9, 429.0], [38.0, 431.0], [38.1, 432.0], [38.2, 432.0], [38.3, 433.0], [38.4, 434.0], [38.5, 435.0], [38.6, 441.0], [38.7, 442.0], [38.8, 443.0], [38.9, 443.0], [39.0, 443.0], [39.1, 446.0], [39.2, 448.0], [39.3, 448.0], [39.4, 449.0], [39.5, 451.0], [39.6, 452.0], [39.7, 454.0], [39.8, 455.0], [39.9, 456.0], [40.0, 456.0], [40.1, 459.0], [40.2, 459.0], [40.3, 460.0], [40.4, 460.0], [40.5, 460.0], [40.6, 462.0], [40.7, 463.0], [40.8, 463.0], [40.9, 464.0], [41.0, 464.0], [41.1, 465.0], [41.2, 467.0], [41.3, 468.0], [41.4, 470.0], [41.5, 474.0], [41.6, 475.0], [41.7, 477.0], [41.8, 477.0], [41.9, 479.0], [42.0, 479.0], [42.1, 479.0], [42.2, 481.0], [42.3, 481.0], [42.4, 482.0], [42.5, 482.0], [42.6, 483.0], [42.7, 484.0], [42.8, 488.0], [42.9, 490.0], [43.0, 491.0], [43.1, 498.0], [43.2, 498.0], [43.3, 499.0], [43.4, 500.0], [43.5, 508.0], [43.6, 509.0], [43.7, 509.0], [43.8, 511.0], [43.9, 513.0], [44.0, 514.0], [44.1, 514.0], [44.2, 514.0], [44.3, 515.0], [44.4, 516.0], [44.5, 517.0], [44.6, 518.0], [44.7, 520.0], [44.8, 522.0], [44.9, 522.0], [45.0, 526.0], [45.1, 526.0], [45.2, 531.0], [45.3, 532.0], [45.4, 533.0], [45.5, 535.0], [45.6, 536.0], [45.7, 540.0], [45.8, 541.0], [45.9, 550.0], [46.0, 551.0], [46.1, 555.0], [46.2, 556.0], [46.3, 561.0], [46.4, 562.0], [46.5, 564.0], [46.6, 565.0], [46.7, 566.0], [46.8, 567.0], [46.9, 571.0], [47.0, 572.0], [47.1, 573.0], [47.2, 574.0], [47.3, 576.0], [47.4, 578.0], [47.5, 579.0], [47.6, 582.0], [47.7, 583.0], [47.8, 583.0], [47.9, 584.0], [48.0, 585.0], [48.1, 586.0], [48.2, 587.0], [48.3, 589.0], [48.4, 590.0], [48.5, 593.0], [48.6, 597.0], [48.7, 599.0], [48.8, 601.0], [48.9, 602.0], [49.0, 603.0], [49.1, 603.0], [49.2, 603.0], [49.3, 604.0], [49.4, 604.0], [49.5, 605.0], [49.6, 612.0], [49.7, 612.0], [49.8, 612.0], [49.9, 613.0], [50.0, 615.0], [50.1, 616.0], [50.2, 622.0], [50.3, 623.0], [50.4, 624.0], [50.5, 625.0], [50.6, 625.0], [50.7, 626.0], [50.8, 626.0], [50.9, 626.0], [51.0, 633.0], [51.1, 633.0], [51.2, 634.0], [51.3, 634.0], [51.4, 636.0], [51.5, 641.0], [51.6, 643.0], [51.7, 649.0], [51.8, 651.0], [51.9, 654.0], [52.0, 655.0], [52.1, 656.0], [52.2, 658.0], [52.3, 659.0], [52.4, 661.0], [52.5, 662.0], [52.6, 665.0], [52.7, 665.0], [52.8, 665.0], [52.9, 667.0], [53.0, 670.0], [53.1, 671.0], [53.2, 674.0], [53.3, 675.0], [53.4, 682.0], [53.5, 684.0], [53.6, 684.0], [53.7, 689.0], [53.8, 692.0], [53.9, 699.0], [54.0, 707.0], [54.1, 710.0], [54.2, 718.0], [54.3, 719.0], [54.4, 721.0], [54.5, 721.0], [54.6, 723.0], [54.7, 724.0], [54.8, 724.0], [54.9, 728.0], [55.0, 729.0], [55.1, 730.0], [55.2, 730.0], [55.3, 732.0], [55.4, 735.0], [55.5, 736.0], [55.6, 737.0], [55.7, 738.0], [55.8, 738.0], [55.9, 742.0], [56.0, 743.0], [56.1, 746.0], [56.2, 755.0], [56.3, 755.0], [56.4, 755.0], [56.5, 757.0], [56.6, 763.0], [56.7, 763.0], [56.8, 765.0], [56.9, 777.0], [57.0, 778.0], [57.1, 779.0], [57.2, 781.0], [57.3, 782.0], [57.4, 783.0], [57.5, 784.0], [57.6, 784.0], [57.7, 785.0], [57.8, 788.0], [57.9, 790.0], [58.0, 791.0], [58.1, 791.0], [58.2, 792.0], [58.3, 799.0], [58.4, 799.0], [58.5, 804.0], [58.6, 806.0], [58.7, 807.0], [58.8, 807.0], [58.9, 812.0], [59.0, 814.0], [59.1, 814.0], [59.2, 817.0], [59.3, 820.0], [59.4, 820.0], [59.5, 820.0], [59.6, 822.0], [59.7, 822.0], [59.8, 824.0], [59.9, 828.0], [60.0, 834.0], [60.1, 837.0], [60.2, 841.0], [60.3, 841.0], [60.4, 842.0], [60.5, 842.0], [60.6, 845.0], [60.7, 847.0], [60.8, 861.0], [60.9, 863.0], [61.0, 864.0], [61.1, 867.0], [61.2, 873.0], [61.3, 873.0], [61.4, 873.0], [61.5, 874.0], [61.6, 876.0], [61.7, 878.0], [61.8, 879.0], [61.9, 879.0], [62.0, 884.0], [62.1, 886.0], [62.2, 886.0], [62.3, 888.0], [62.4, 895.0], [62.5, 896.0], [62.6, 896.0], [62.7, 897.0], [62.8, 898.0], [62.9, 900.0], [63.0, 902.0], [63.1, 902.0], [63.2, 905.0], [63.3, 905.0], [63.4, 905.0], [63.5, 905.0], [63.6, 906.0], [63.7, 908.0], [63.8, 909.0], [63.9, 911.0], [64.0, 914.0], [64.1, 914.0], [64.2, 916.0], [64.3, 918.0], [64.4, 919.0], [64.5, 920.0], [64.6, 925.0], [64.7, 926.0], [64.8, 926.0], [64.9, 930.0], [65.0, 931.0], [65.1, 933.0], [65.2, 938.0], [65.3, 941.0], [65.4, 945.0], [65.5, 948.0], [65.6, 950.0], [65.7, 952.0], [65.8, 952.0], [65.9, 956.0], [66.0, 956.0], [66.1, 957.0], [66.2, 964.0], [66.3, 971.0], [66.4, 974.0], [66.5, 976.0], [66.6, 976.0], [66.7, 988.0], [66.8, 994.0], [66.9, 996.0], [67.0, 997.0], [67.1, 1000.0], [67.2, 1003.0], [67.3, 1004.0], [67.4, 1005.0], [67.5, 1006.0], [67.6, 1009.0], [67.7, 1010.0], [67.8, 1011.0], [67.9, 1017.0], [68.0, 1031.0], [68.1, 1033.0], [68.2, 1042.0], [68.3, 1044.0], [68.4, 1045.0], [68.5, 1055.0], [68.6, 1057.0], [68.7, 1060.0], [68.8, 1064.0], [68.9, 1068.0], [69.0, 1080.0], [69.1, 1082.0], [69.2, 1090.0], [69.3, 1091.0], [69.4, 1093.0], [69.5, 1095.0], [69.6, 1100.0], [69.7, 1100.0], [69.8, 1104.0], [69.9, 1104.0], [70.0, 1106.0], [70.1, 1106.0], [70.2, 1113.0], [70.3, 1116.0], [70.4, 1122.0], [70.5, 1124.0], [70.6, 1125.0], [70.7, 1126.0], [70.8, 1129.0], [70.9, 1132.0], [71.0, 1134.0], [71.1, 1135.0], [71.2, 1137.0], [71.3, 1139.0], [71.4, 1142.0], [71.5, 1149.0], [71.6, 1150.0], [71.7, 1152.0], [71.8, 1161.0], [71.9, 1161.0], [72.0, 1161.0], [72.1, 1170.0], [72.2, 1170.0], [72.3, 1174.0], [72.4, 1177.0], [72.5, 1188.0], [72.6, 1190.0], [72.7, 1196.0], [72.8, 1202.0], [72.9, 1210.0], [73.0, 1213.0], [73.1, 1216.0], [73.2, 1217.0], [73.3, 1219.0], [73.4, 1220.0], [73.5, 1221.0], [73.6, 1221.0], [73.7, 1228.0], [73.8, 1229.0], [73.9, 1232.0], [74.0, 1234.0], [74.1, 1240.0], [74.2, 1241.0], [74.3, 1247.0], [74.4, 1248.0], [74.5, 1249.0], [74.6, 1249.0], [74.7, 1250.0], [74.8, 1253.0], [74.9, 1258.0], [75.0, 1263.0], [75.1, 1264.0], [75.2, 1274.0], [75.3, 1277.0], [75.4, 1280.0], [75.5, 1284.0], [75.6, 1286.0], [75.7, 1300.0], [75.8, 1300.0], [75.9, 1301.0], [76.0, 1305.0], [76.1, 1306.0], [76.2, 1311.0], [76.3, 1315.0], [76.4, 1317.0], [76.5, 1317.0], [76.6, 1331.0], [76.7, 1337.0], [76.8, 1339.0], [76.9, 1344.0], [77.0, 1351.0], [77.1, 1352.0], [77.2, 1357.0], [77.3, 1363.0], [77.4, 1364.0], [77.5, 1364.0], [77.6, 1369.0], [77.7, 1377.0], [77.8, 1380.0], [77.9, 1392.0], [78.0, 1401.0], [78.1, 1401.0], [78.2, 1404.0], [78.3, 1406.0], [78.4, 1408.0], [78.5, 1423.0], [78.6, 1425.0], [78.7, 1427.0], [78.8, 1433.0], [78.9, 1434.0], [79.0, 1440.0], [79.1, 1442.0], [79.2, 1443.0], [79.3, 1443.0], [79.4, 1453.0], [79.5, 1454.0], [79.6, 1465.0], [79.7, 1467.0], [79.8, 1469.0], [79.9, 1469.0], [80.0, 1469.0], [80.1, 1471.0], [80.2, 1473.0], [80.3, 1493.0], [80.4, 1493.0], [80.5, 1500.0], [80.6, 1501.0], [80.7, 1511.0], [80.8, 1511.0], [80.9, 1519.0], [81.0, 1525.0], [81.1, 1537.0], [81.2, 1542.0], [81.3, 1543.0], [81.4, 1545.0], [81.5, 1545.0], [81.6, 1549.0], [81.7, 1559.0], [81.8, 1561.0], [81.9, 1579.0], [82.0, 1579.0], [82.1, 1580.0], [82.2, 1583.0], [82.3, 1585.0], [82.4, 1594.0], [82.5, 1598.0], [82.6, 1600.0], [82.7, 1605.0], [82.8, 1605.0], [82.9, 1614.0], [83.0, 1625.0], [83.1, 1629.0], [83.2, 1630.0], [83.3, 1634.0], [83.4, 1665.0], [83.5, 1667.0], [83.6, 1670.0], [83.7, 1674.0], [83.8, 1681.0], [83.9, 1691.0], [84.0, 1695.0], [84.1, 1730.0], [84.2, 1742.0], [84.3, 1743.0], [84.4, 1751.0], [84.5, 1751.0], [84.6, 1754.0], [84.7, 1779.0], [84.8, 1780.0], [84.9, 1805.0], [85.0, 1809.0], [85.1, 1814.0], [85.2, 1832.0], [85.3, 1839.0], [85.4, 1842.0], [85.5, 1846.0], [85.6, 1846.0], [85.7, 1850.0], [85.8, 1860.0], [85.9, 1863.0], [86.0, 1873.0], [86.1, 1879.0], [86.2, 1898.0], [86.3, 1915.0], [86.4, 1917.0], [86.5, 1923.0], [86.6, 1932.0], [86.7, 1933.0], [86.8, 1947.0], [86.9, 1949.0], [87.0, 1950.0], [87.1, 1953.0], [87.2, 1980.0], [87.3, 1980.0], [87.4, 1990.0], [87.5, 2003.0], [87.6, 2015.0], [87.7, 2022.0], [87.8, 2024.0], [87.9, 2030.0], [88.0, 2030.0], [88.1, 2045.0], [88.2, 2049.0], [88.3, 2050.0], [88.4, 2050.0], [88.5, 2065.0], [88.6, 2068.0], [88.7, 2071.0], [88.8, 2074.0], [88.9, 2097.0], [89.0, 2100.0], [89.1, 2100.0], [89.2, 2103.0], [89.3, 2118.0], [89.4, 2134.0], [89.5, 2142.0], [89.6, 2144.0], [89.7, 2145.0], [89.8, 2151.0], [89.9, 2160.0], [90.0, 2165.0], [90.1, 2195.0], [90.2, 2195.0], [90.3, 2201.0], [90.4, 2223.0], [90.5, 2233.0], [90.6, 2256.0], [90.7, 2269.0], [90.8, 2279.0], [90.9, 2294.0], [91.0, 2300.0], [91.1, 2339.0], [91.2, 2344.0], [91.3, 2357.0], [91.4, 2371.0], [91.5, 2407.0], [91.6, 2417.0], [91.7, 2441.0], [91.8, 2471.0], [91.9, 2472.0], [92.0, 2475.0], [92.1, 2478.0], [92.2, 2481.0], [92.3, 2488.0], [92.4, 2493.0], [92.5, 2502.0], [92.6, 2515.0], [92.7, 2524.0], [92.8, 2584.0], [92.9, 2584.0], [93.0, 2589.0], [93.1, 2593.0], [93.2, 2604.0], [93.3, 2612.0], [93.4, 2614.0], [93.5, 2615.0], [93.6, 2630.0], [93.7, 2633.0], [93.8, 2637.0], [93.9, 2659.0], [94.0, 2659.0], [94.1, 2669.0], [94.2, 2675.0], [94.3, 2676.0], [94.4, 2684.0], [94.5, 2705.0], [94.6, 2710.0], [94.7, 2714.0], [94.8, 2733.0], [94.9, 2741.0], [95.0, 2758.0], [95.1, 2759.0], [95.2, 2764.0], [95.3, 2792.0], [95.4, 2808.0], [95.5, 2808.0], [95.6, 2859.0], [95.7, 2869.0], [95.8, 2874.0], [95.9, 2877.0], [96.0, 2938.0], [96.1, 2959.0], [96.2, 2968.0], [96.3, 2973.0], [96.4, 2979.0], [96.5, 2986.0], [96.6, 3021.0], [96.7, 3044.0], [96.8, 3064.0], [96.9, 3064.0], [97.0, 3068.0], [97.1, 3080.0], [97.2, 3113.0], [97.3, 3115.0], [97.4, 3157.0], [97.5, 3176.0], [97.6, 3192.0], [97.7, 3211.0], [97.8, 3244.0], [97.9, 3318.0], [98.0, 3353.0], [98.1, 3386.0], [98.2, 3397.0], [98.3, 3445.0], [98.4, 3498.0], [98.5, 3522.0], [98.6, 3556.0], [98.7, 3564.0], [98.8, 3565.0], [98.9, 3589.0], [99.0, 3617.0], [99.1, 3685.0], [99.2, 3727.0], [99.3, 3808.0], [99.4, 3911.0], [99.5, 4095.0], [99.6, 4155.0], [99.7, 4209.0], [99.8, 4405.0], [99.9, 4491.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 106.0, "series": [{"data": [[0.0, 67.0], [600.0, 52.0], [700.0, 45.0], [800.0, 44.0], [900.0, 42.0], [1000.0, 25.0], [1100.0, 33.0], [1200.0, 29.0], [1300.0, 23.0], [1400.0, 25.0], [1500.0, 21.0], [100.0, 90.0], [1600.0, 15.0], [1700.0, 8.0], [1800.0, 14.0], [1900.0, 12.0], [2000.0, 15.0], [2100.0, 13.0], [2300.0, 5.0], [2200.0, 7.0], [2400.0, 10.0], [2500.0, 7.0], [2600.0, 13.0], [2700.0, 9.0], [2800.0, 6.0], [2900.0, 6.0], [3000.0, 6.0], [3100.0, 5.0], [200.0, 106.0], [3300.0, 4.0], [3200.0, 2.0], [3400.0, 2.0], [3500.0, 5.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [4400.0, 2.0], [300.0, 87.0], [400.0, 83.0], [500.0, 54.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 194.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 434.0, "series": [{"data": [[0.0, 434.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 372.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 194.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 51.458762886597974, "minX": 1.58859168E12, "maxY": 60.76307189542476, "series": [{"data": [[1.58859168E12, 51.458762886597974], [1.58859174E12, 60.76307189542476]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859174E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 37.5, "minX": 1.0, "maxY": 2205.0, "series": [{"data": [[2.0, 392.66666666666663], [3.0, 185.5], [4.0, 158.0], [5.0, 232.5], [6.0, 188.5], [7.0, 134.0], [8.0, 307.0], [9.0, 245.33333333333334], [10.0, 291.5], [11.0, 297.0], [12.0, 359.44444444444446], [13.0, 238.0], [14.0, 231.72727272727272], [15.0, 555.9999999999999], [16.0, 293.29999999999995], [17.0, 232.0], [18.0, 288.0], [19.0, 587.6], [20.0, 428.6], [21.0, 547.7142857142857], [22.0, 248.33333333333334], [23.0, 435.28571428571433], [24.0, 292.0], [25.0, 599.7], [26.0, 293.0], [27.0, 644.8], [28.0, 497.8], [29.0, 491.25], [30.0, 619.7142857142857], [31.0, 636.7142857142857], [32.0, 963.0], [33.0, 571.5], [34.0, 838.0], [35.0, 749.0000000000001], [36.0, 701.5454545454545], [37.0, 412.72727272727275], [38.0, 646.4285714285716], [39.0, 864.8000000000001], [40.0, 799.5], [41.0, 1012.5], [42.0, 446.05882352941177], [43.0, 645.2], [44.0, 686.5454545454545], [45.0, 669.0], [46.0, 736.1111111111112], [47.0, 694.1818181818181], [48.0, 971.0], [49.0, 689.3], [50.0, 658.1111111111111], [51.0, 720.4], [52.0, 723.0000000000001], [53.0, 791.0], [54.0, 853.3636363636363], [55.0, 1049.1000000000001], [56.0, 1050.0], [57.0, 474.8333333333333], [58.0, 896.4545454545456], [59.0, 907.9615384615386], [60.0, 752.8571428571428], [61.0, 1299.6666666666665], [62.0, 1118.2222222222222], [63.0, 1020.6875], [64.0, 783.2307692307693], [65.0, 755.9999999999999], [66.0, 1003.8666666666668], [67.0, 1244.2121212121215], [68.0, 1028.4285714285718], [69.0, 1005.15], [70.0, 1355.7647058823527], [71.0, 834.5454545454545], [72.0, 909.5384615384615], [73.0, 1056.5625], [74.0, 925.2857142857146], [75.0, 1421.6595744680853], [76.0, 1079.3333333333333], [77.0, 1442.3846153846157], [78.0, 806.72], [79.0, 1282.1785714285709], [80.0, 403.99999999999994], [81.0, 1265.9166666666667], [82.0, 884.8], [83.0, 1169.5600000000002], [84.0, 836.9374999999999], [85.0, 1446.7049180327872], [86.0, 2205.0], [1.0, 37.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[57.15300000000005, 912.4029999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 86.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 776.0, "minX": 1.58859168E12, "maxY": 6456.6, "series": [{"data": [[1.58859168E12, 4093.4], [1.58859174E12, 6456.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58859168E12, 776.0], [1.58859174E12, 1224.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859174E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 776.7912371134022, "minX": 1.58859168E12, "maxY": 998.3790849673203, "series": [{"data": [[1.58859168E12, 776.7912371134022], [1.58859174E12, 998.3790849673203]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859174E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 776.7036082474234, "minX": 1.58859168E12, "maxY": 998.3529411764706, "series": [{"data": [[1.58859168E12, 776.7036082474234], [1.58859174E12, 998.3529411764706]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859174E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.7728758169934639, "minX": 1.58859168E12, "maxY": 1.525773195876289, "series": [{"data": [[1.58859168E12, 1.525773195876289], [1.58859174E12, 0.7728758169934639]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859174E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.58859168E12, "maxY": 4491.0, "series": [{"data": [[1.58859168E12, 3556.0], [1.58859174E12, 4491.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58859168E12, 26.0], [1.58859174E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58859168E12, 1585.9], [1.58859174E12, 2521.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58859168E12, 2978.5600000000013], [1.58859174E12, 3897.6100000000006]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58859168E12, 2124.449999999998], [1.58859174E12, 3029.0500000000006]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859174E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 140.0, "minX": 9.0, "maxY": 1369.0, "series": [{"data": [[34.0, 288.5], [35.0, 805.5], [9.0, 178.0], [43.0, 459.0], [46.0, 727.5], [53.0, 1369.0], [57.0, 782.0], [59.0, 822.0], [60.0, 581.0], [67.0, 804.0], [70.0, 762.5], [71.0, 583.0], [76.0, 1257.0], [78.0, 738.0], [85.0, 351.0], [97.0, 763.0], [25.0, 140.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 140.0, "minX": 9.0, "maxY": 1369.0, "series": [{"data": [[34.0, 288.5], [35.0, 805.5], [9.0, 174.0], [43.0, 459.0], [46.0, 727.0], [53.0, 1369.0], [57.0, 782.0], [59.0, 822.0], [60.0, 581.0], [67.0, 804.0], [70.0, 762.5], [71.0, 583.0], [76.0, 1257.0], [78.0, 738.0], [85.0, 351.0], [97.0, 763.0], [25.0, 140.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 97.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.58859168E12, "maxY": 8.85, "series": [{"data": [[1.58859168E12, 7.816666666666666], [1.58859174E12, 8.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859174E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.58859168E12, "maxY": 10.2, "series": [{"data": [[1.58859168E12, 6.466666666666667], [1.58859174E12, 10.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859174E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.58859168E12, "maxY": 10.2, "series": [{"data": [[1.58859168E12, 6.466666666666667], [1.58859174E12, 10.2]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859174E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.466666666666667, "minX": 1.58859168E12, "maxY": 10.2, "series": [{"data": [[1.58859168E12, 6.466666666666667], [1.58859174E12, 10.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859174E12, "title": "Total Transactions Per Second"}},
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

