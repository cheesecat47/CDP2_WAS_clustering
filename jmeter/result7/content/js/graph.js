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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 4632.0, "series": [{"data": [[0.0, 13.0], [0.1, 18.0], [0.2, 27.0], [0.3, 37.0], [0.4, 42.0], [0.5, 50.0], [0.6, 51.0], [0.7, 54.0], [0.8, 57.0], [0.9, 62.0], [1.0, 63.0], [1.1, 64.0], [1.2, 67.0], [1.3, 70.0], [1.4, 75.0], [1.5, 76.0], [1.6, 77.0], [1.7, 78.0], [1.8, 82.0], [1.9, 84.0], [2.0, 87.0], [2.1, 91.0], [2.2, 94.0], [2.3, 96.0], [2.4, 98.0], [2.5, 103.0], [2.6, 105.0], [2.7, 107.0], [2.8, 113.0], [2.9, 114.0], [3.0, 115.0], [3.1, 119.0], [3.2, 120.0], [3.3, 123.0], [3.4, 127.0], [3.5, 129.0], [3.6, 132.0], [3.7, 135.0], [3.8, 139.0], [3.9, 142.0], [4.0, 144.0], [4.1, 146.0], [4.2, 147.0], [4.3, 148.0], [4.4, 149.0], [4.5, 155.0], [4.6, 157.0], [4.7, 157.0], [4.8, 159.0], [4.9, 160.0], [5.0, 163.0], [5.1, 167.0], [5.2, 169.0], [5.3, 171.0], [5.4, 173.0], [5.5, 175.0], [5.6, 177.0], [5.7, 177.0], [5.8, 179.0], [5.9, 180.0], [6.0, 183.0], [6.1, 184.0], [6.2, 185.0], [6.3, 186.0], [6.4, 187.0], [6.5, 190.0], [6.6, 192.0], [6.7, 194.0], [6.8, 195.0], [6.9, 199.0], [7.0, 202.0], [7.1, 203.0], [7.2, 206.0], [7.3, 207.0], [7.4, 209.0], [7.5, 210.0], [7.6, 213.0], [7.7, 214.0], [7.8, 215.0], [7.9, 216.0], [8.0, 217.0], [8.1, 219.0], [8.2, 222.0], [8.3, 224.0], [8.4, 227.0], [8.5, 230.0], [8.6, 231.0], [8.7, 232.0], [8.8, 233.0], [8.9, 235.0], [9.0, 237.0], [9.1, 239.0], [9.2, 240.0], [9.3, 242.0], [9.4, 244.0], [9.5, 246.0], [9.6, 247.0], [9.7, 248.0], [9.8, 251.0], [9.9, 252.0], [10.0, 255.0], [10.1, 255.0], [10.2, 256.0], [10.3, 259.0], [10.4, 262.0], [10.5, 265.0], [10.6, 266.0], [10.7, 268.0], [10.8, 270.0], [10.9, 272.0], [11.0, 274.0], [11.1, 276.0], [11.2, 278.0], [11.3, 280.0], [11.4, 281.0], [11.5, 282.0], [11.6, 283.0], [11.7, 284.0], [11.8, 286.0], [11.9, 287.0], [12.0, 289.0], [12.1, 291.0], [12.2, 292.0], [12.3, 293.0], [12.4, 295.0], [12.5, 297.0], [12.6, 299.0], [12.7, 299.0], [12.8, 301.0], [12.9, 302.0], [13.0, 305.0], [13.1, 306.0], [13.2, 307.0], [13.3, 309.0], [13.4, 312.0], [13.5, 313.0], [13.6, 314.0], [13.7, 315.0], [13.8, 316.0], [13.9, 317.0], [14.0, 318.0], [14.1, 320.0], [14.2, 320.0], [14.3, 321.0], [14.4, 323.0], [14.5, 325.0], [14.6, 326.0], [14.7, 328.0], [14.8, 329.0], [14.9, 330.0], [15.0, 332.0], [15.1, 334.0], [15.2, 337.0], [15.3, 338.0], [15.4, 339.0], [15.5, 342.0], [15.6, 343.0], [15.7, 345.0], [15.8, 346.0], [15.9, 347.0], [16.0, 349.0], [16.1, 350.0], [16.2, 351.0], [16.3, 351.0], [16.4, 353.0], [16.5, 355.0], [16.6, 356.0], [16.7, 357.0], [16.8, 358.0], [16.9, 359.0], [17.0, 360.0], [17.1, 362.0], [17.2, 363.0], [17.3, 365.0], [17.4, 365.0], [17.5, 367.0], [17.6, 369.0], [17.7, 369.0], [17.8, 372.0], [17.9, 373.0], [18.0, 375.0], [18.1, 378.0], [18.2, 379.0], [18.3, 382.0], [18.4, 383.0], [18.5, 384.0], [18.6, 385.0], [18.7, 386.0], [18.8, 387.0], [18.9, 389.0], [19.0, 390.0], [19.1, 390.0], [19.2, 392.0], [19.3, 395.0], [19.4, 397.0], [19.5, 398.0], [19.6, 400.0], [19.7, 402.0], [19.8, 402.0], [19.9, 403.0], [20.0, 405.0], [20.1, 406.0], [20.2, 407.0], [20.3, 409.0], [20.4, 409.0], [20.5, 411.0], [20.6, 412.0], [20.7, 413.0], [20.8, 414.0], [20.9, 415.0], [21.0, 417.0], [21.1, 419.0], [21.2, 421.0], [21.3, 421.0], [21.4, 423.0], [21.5, 424.0], [21.6, 425.0], [21.7, 425.0], [21.8, 427.0], [21.9, 429.0], [22.0, 431.0], [22.1, 431.0], [22.2, 432.0], [22.3, 433.0], [22.4, 435.0], [22.5, 436.0], [22.6, 437.0], [22.7, 438.0], [22.8, 439.0], [22.9, 440.0], [23.0, 441.0], [23.1, 443.0], [23.2, 444.0], [23.3, 446.0], [23.4, 448.0], [23.5, 449.0], [23.6, 449.0], [23.7, 450.0], [23.8, 451.0], [23.9, 453.0], [24.0, 453.0], [24.1, 455.0], [24.2, 457.0], [24.3, 459.0], [24.4, 460.0], [24.5, 461.0], [24.6, 461.0], [24.7, 463.0], [24.8, 466.0], [24.9, 467.0], [25.0, 468.0], [25.1, 470.0], [25.2, 473.0], [25.3, 474.0], [25.4, 475.0], [25.5, 476.0], [25.6, 478.0], [25.7, 479.0], [25.8, 481.0], [25.9, 482.0], [26.0, 483.0], [26.1, 485.0], [26.2, 486.0], [26.3, 487.0], [26.4, 488.0], [26.5, 489.0], [26.6, 491.0], [26.7, 494.0], [26.8, 495.0], [26.9, 496.0], [27.0, 498.0], [27.1, 498.0], [27.2, 499.0], [27.3, 499.0], [27.4, 500.0], [27.5, 502.0], [27.6, 503.0], [27.7, 504.0], [27.8, 505.0], [27.9, 507.0], [28.0, 508.0], [28.1, 509.0], [28.2, 510.0], [28.3, 511.0], [28.4, 512.0], [28.5, 513.0], [28.6, 515.0], [28.7, 517.0], [28.8, 519.0], [28.9, 520.0], [29.0, 520.0], [29.1, 522.0], [29.2, 524.0], [29.3, 525.0], [29.4, 527.0], [29.5, 528.0], [29.6, 529.0], [29.7, 530.0], [29.8, 532.0], [29.9, 533.0], [30.0, 534.0], [30.1, 535.0], [30.2, 537.0], [30.3, 539.0], [30.4, 540.0], [30.5, 542.0], [30.6, 542.0], [30.7, 544.0], [30.8, 545.0], [30.9, 547.0], [31.0, 549.0], [31.1, 551.0], [31.2, 553.0], [31.3, 553.0], [31.4, 555.0], [31.5, 556.0], [31.6, 559.0], [31.7, 560.0], [31.8, 561.0], [31.9, 561.0], [32.0, 562.0], [32.1, 563.0], [32.2, 564.0], [32.3, 566.0], [32.4, 567.0], [32.5, 569.0], [32.6, 570.0], [32.7, 571.0], [32.8, 571.0], [32.9, 574.0], [33.0, 576.0], [33.1, 578.0], [33.2, 579.0], [33.3, 581.0], [33.4, 583.0], [33.5, 584.0], [33.6, 586.0], [33.7, 587.0], [33.8, 588.0], [33.9, 590.0], [34.0, 592.0], [34.1, 593.0], [34.2, 594.0], [34.3, 595.0], [34.4, 598.0], [34.5, 599.0], [34.6, 600.0], [34.7, 602.0], [34.8, 604.0], [34.9, 605.0], [35.0, 606.0], [35.1, 607.0], [35.2, 609.0], [35.3, 610.0], [35.4, 612.0], [35.5, 613.0], [35.6, 614.0], [35.7, 616.0], [35.8, 618.0], [35.9, 618.0], [36.0, 620.0], [36.1, 621.0], [36.2, 622.0], [36.3, 623.0], [36.4, 624.0], [36.5, 626.0], [36.6, 627.0], [36.7, 629.0], [36.8, 631.0], [36.9, 633.0], [37.0, 634.0], [37.1, 636.0], [37.2, 636.0], [37.3, 638.0], [37.4, 640.0], [37.5, 642.0], [37.6, 643.0], [37.7, 645.0], [37.8, 646.0], [37.9, 647.0], [38.0, 648.0], [38.1, 648.0], [38.2, 650.0], [38.3, 650.0], [38.4, 651.0], [38.5, 652.0], [38.6, 654.0], [38.7, 655.0], [38.8, 656.0], [38.9, 658.0], [39.0, 659.0], [39.1, 660.0], [39.2, 661.0], [39.3, 662.0], [39.4, 664.0], [39.5, 666.0], [39.6, 668.0], [39.7, 670.0], [39.8, 671.0], [39.9, 672.0], [40.0, 673.0], [40.1, 676.0], [40.2, 677.0], [40.3, 678.0], [40.4, 679.0], [40.5, 680.0], [40.6, 681.0], [40.7, 683.0], [40.8, 685.0], [40.9, 686.0], [41.0, 687.0], [41.1, 689.0], [41.2, 690.0], [41.3, 691.0], [41.4, 693.0], [41.5, 694.0], [41.6, 696.0], [41.7, 697.0], [41.8, 699.0], [41.9, 699.0], [42.0, 701.0], [42.1, 704.0], [42.2, 706.0], [42.3, 706.0], [42.4, 707.0], [42.5, 708.0], [42.6, 711.0], [42.7, 712.0], [42.8, 714.0], [42.9, 716.0], [43.0, 717.0], [43.1, 717.0], [43.2, 718.0], [43.3, 719.0], [43.4, 720.0], [43.5, 723.0], [43.6, 723.0], [43.7, 725.0], [43.8, 725.0], [43.9, 727.0], [44.0, 728.0], [44.1, 729.0], [44.2, 731.0], [44.3, 731.0], [44.4, 732.0], [44.5, 733.0], [44.6, 735.0], [44.7, 736.0], [44.8, 737.0], [44.9, 738.0], [45.0, 739.0], [45.1, 740.0], [45.2, 741.0], [45.3, 744.0], [45.4, 747.0], [45.5, 748.0], [45.6, 750.0], [45.7, 751.0], [45.8, 753.0], [45.9, 756.0], [46.0, 757.0], [46.1, 759.0], [46.2, 760.0], [46.3, 763.0], [46.4, 765.0], [46.5, 766.0], [46.6, 767.0], [46.7, 768.0], [46.8, 770.0], [46.9, 771.0], [47.0, 773.0], [47.1, 774.0], [47.2, 775.0], [47.3, 777.0], [47.4, 779.0], [47.5, 780.0], [47.6, 782.0], [47.7, 782.0], [47.8, 783.0], [47.9, 784.0], [48.0, 785.0], [48.1, 785.0], [48.2, 786.0], [48.3, 788.0], [48.4, 789.0], [48.5, 791.0], [48.6, 792.0], [48.7, 793.0], [48.8, 794.0], [48.9, 795.0], [49.0, 796.0], [49.1, 798.0], [49.2, 800.0], [49.3, 801.0], [49.4, 801.0], [49.5, 803.0], [49.6, 805.0], [49.7, 806.0], [49.8, 807.0], [49.9, 808.0], [50.0, 810.0], [50.1, 812.0], [50.2, 813.0], [50.3, 816.0], [50.4, 817.0], [50.5, 818.0], [50.6, 820.0], [50.7, 820.0], [50.8, 821.0], [50.9, 824.0], [51.0, 826.0], [51.1, 828.0], [51.2, 830.0], [51.3, 833.0], [51.4, 835.0], [51.5, 837.0], [51.6, 840.0], [51.7, 842.0], [51.8, 844.0], [51.9, 846.0], [52.0, 847.0], [52.1, 848.0], [52.2, 849.0], [52.3, 851.0], [52.4, 852.0], [52.5, 853.0], [52.6, 855.0], [52.7, 856.0], [52.8, 857.0], [52.9, 859.0], [53.0, 861.0], [53.1, 863.0], [53.2, 865.0], [53.3, 867.0], [53.4, 869.0], [53.5, 870.0], [53.6, 871.0], [53.7, 872.0], [53.8, 873.0], [53.9, 876.0], [54.0, 877.0], [54.1, 879.0], [54.2, 881.0], [54.3, 882.0], [54.4, 883.0], [54.5, 884.0], [54.6, 886.0], [54.7, 886.0], [54.8, 887.0], [54.9, 888.0], [55.0, 890.0], [55.1, 891.0], [55.2, 893.0], [55.3, 896.0], [55.4, 897.0], [55.5, 899.0], [55.6, 900.0], [55.7, 902.0], [55.8, 904.0], [55.9, 905.0], [56.0, 907.0], [56.1, 909.0], [56.2, 911.0], [56.3, 913.0], [56.4, 914.0], [56.5, 915.0], [56.6, 917.0], [56.7, 918.0], [56.8, 919.0], [56.9, 921.0], [57.0, 922.0], [57.1, 925.0], [57.2, 927.0], [57.3, 930.0], [57.4, 932.0], [57.5, 933.0], [57.6, 935.0], [57.7, 936.0], [57.8, 938.0], [57.9, 940.0], [58.0, 941.0], [58.1, 942.0], [58.2, 944.0], [58.3, 945.0], [58.4, 948.0], [58.5, 951.0], [58.6, 952.0], [58.7, 953.0], [58.8, 954.0], [58.9, 957.0], [59.0, 959.0], [59.1, 960.0], [59.2, 963.0], [59.3, 964.0], [59.4, 966.0], [59.5, 967.0], [59.6, 969.0], [59.7, 970.0], [59.8, 973.0], [59.9, 974.0], [60.0, 976.0], [60.1, 977.0], [60.2, 979.0], [60.3, 980.0], [60.4, 982.0], [60.5, 983.0], [60.6, 984.0], [60.7, 985.0], [60.8, 987.0], [60.9, 989.0], [61.0, 990.0], [61.1, 992.0], [61.2, 994.0], [61.3, 995.0], [61.4, 995.0], [61.5, 997.0], [61.6, 998.0], [61.7, 999.0], [61.8, 1000.0], [61.9, 1002.0], [62.0, 1002.0], [62.1, 1003.0], [62.2, 1004.0], [62.3, 1006.0], [62.4, 1008.0], [62.5, 1009.0], [62.6, 1013.0], [62.7, 1015.0], [62.8, 1016.0], [62.9, 1019.0], [63.0, 1021.0], [63.1, 1022.0], [63.2, 1024.0], [63.3, 1026.0], [63.4, 1027.0], [63.5, 1029.0], [63.6, 1033.0], [63.7, 1034.0], [63.8, 1037.0], [63.9, 1039.0], [64.0, 1040.0], [64.1, 1042.0], [64.2, 1045.0], [64.3, 1047.0], [64.4, 1049.0], [64.5, 1051.0], [64.6, 1053.0], [64.7, 1054.0], [64.8, 1056.0], [64.9, 1058.0], [65.0, 1060.0], [65.1, 1064.0], [65.2, 1067.0], [65.3, 1070.0], [65.4, 1073.0], [65.5, 1075.0], [65.6, 1077.0], [65.7, 1078.0], [65.8, 1081.0], [65.9, 1082.0], [66.0, 1085.0], [66.1, 1089.0], [66.2, 1090.0], [66.3, 1094.0], [66.4, 1096.0], [66.5, 1099.0], [66.6, 1100.0], [66.7, 1101.0], [66.8, 1102.0], [66.9, 1103.0], [67.0, 1107.0], [67.1, 1109.0], [67.2, 1111.0], [67.3, 1114.0], [67.4, 1118.0], [67.5, 1120.0], [67.6, 1122.0], [67.7, 1124.0], [67.8, 1125.0], [67.9, 1128.0], [68.0, 1130.0], [68.1, 1132.0], [68.2, 1134.0], [68.3, 1137.0], [68.4, 1139.0], [68.5, 1140.0], [68.6, 1142.0], [68.7, 1143.0], [68.8, 1146.0], [68.9, 1148.0], [69.0, 1149.0], [69.1, 1151.0], [69.2, 1152.0], [69.3, 1152.0], [69.4, 1154.0], [69.5, 1156.0], [69.6, 1158.0], [69.7, 1159.0], [69.8, 1162.0], [69.9, 1165.0], [70.0, 1166.0], [70.1, 1170.0], [70.2, 1171.0], [70.3, 1172.0], [70.4, 1173.0], [70.5, 1175.0], [70.6, 1176.0], [70.7, 1178.0], [70.8, 1181.0], [70.9, 1182.0], [71.0, 1184.0], [71.1, 1186.0], [71.2, 1186.0], [71.3, 1188.0], [71.4, 1191.0], [71.5, 1192.0], [71.6, 1194.0], [71.7, 1197.0], [71.8, 1199.0], [71.9, 1200.0], [72.0, 1204.0], [72.1, 1205.0], [72.2, 1207.0], [72.3, 1210.0], [72.4, 1211.0], [72.5, 1214.0], [72.6, 1218.0], [72.7, 1220.0], [72.8, 1222.0], [72.9, 1227.0], [73.0, 1231.0], [73.1, 1232.0], [73.2, 1235.0], [73.3, 1239.0], [73.4, 1241.0], [73.5, 1245.0], [73.6, 1248.0], [73.7, 1250.0], [73.8, 1252.0], [73.9, 1255.0], [74.0, 1255.0], [74.1, 1260.0], [74.2, 1262.0], [74.3, 1265.0], [74.4, 1266.0], [74.5, 1268.0], [74.6, 1271.0], [74.7, 1276.0], [74.8, 1279.0], [74.9, 1280.0], [75.0, 1281.0], [75.1, 1282.0], [75.2, 1283.0], [75.3, 1285.0], [75.4, 1287.0], [75.5, 1290.0], [75.6, 1292.0], [75.7, 1293.0], [75.8, 1297.0], [75.9, 1299.0], [76.0, 1302.0], [76.1, 1304.0], [76.2, 1305.0], [76.3, 1310.0], [76.4, 1314.0], [76.5, 1316.0], [76.6, 1321.0], [76.7, 1322.0], [76.8, 1324.0], [76.9, 1326.0], [77.0, 1328.0], [77.1, 1331.0], [77.2, 1333.0], [77.3, 1337.0], [77.4, 1341.0], [77.5, 1344.0], [77.6, 1346.0], [77.7, 1351.0], [77.8, 1354.0], [77.9, 1355.0], [78.0, 1357.0], [78.1, 1361.0], [78.2, 1363.0], [78.3, 1365.0], [78.4, 1367.0], [78.5, 1371.0], [78.6, 1374.0], [78.7, 1377.0], [78.8, 1380.0], [78.9, 1384.0], [79.0, 1385.0], [79.1, 1391.0], [79.2, 1394.0], [79.3, 1398.0], [79.4, 1401.0], [79.5, 1405.0], [79.6, 1408.0], [79.7, 1410.0], [79.8, 1413.0], [79.9, 1418.0], [80.0, 1420.0], [80.1, 1422.0], [80.2, 1427.0], [80.3, 1430.0], [80.4, 1432.0], [80.5, 1437.0], [80.6, 1439.0], [80.7, 1441.0], [80.8, 1443.0], [80.9, 1448.0], [81.0, 1451.0], [81.1, 1455.0], [81.2, 1457.0], [81.3, 1458.0], [81.4, 1460.0], [81.5, 1463.0], [81.6, 1464.0], [81.7, 1466.0], [81.8, 1469.0], [81.9, 1475.0], [82.0, 1479.0], [82.1, 1482.0], [82.2, 1483.0], [82.3, 1486.0], [82.4, 1489.0], [82.5, 1492.0], [82.6, 1497.0], [82.7, 1499.0], [82.8, 1499.0], [82.9, 1501.0], [83.0, 1505.0], [83.1, 1508.0], [83.2, 1511.0], [83.3, 1515.0], [83.4, 1519.0], [83.5, 1523.0], [83.6, 1525.0], [83.7, 1529.0], [83.8, 1533.0], [83.9, 1536.0], [84.0, 1540.0], [84.1, 1547.0], [84.2, 1553.0], [84.3, 1558.0], [84.4, 1563.0], [84.5, 1566.0], [84.6, 1569.0], [84.7, 1571.0], [84.8, 1573.0], [84.9, 1575.0], [85.0, 1580.0], [85.1, 1589.0], [85.2, 1592.0], [85.3, 1593.0], [85.4, 1597.0], [85.5, 1601.0], [85.6, 1605.0], [85.7, 1609.0], [85.8, 1611.0], [85.9, 1615.0], [86.0, 1616.0], [86.1, 1618.0], [86.2, 1623.0], [86.3, 1630.0], [86.4, 1635.0], [86.5, 1640.0], [86.6, 1642.0], [86.7, 1649.0], [86.8, 1653.0], [86.9, 1657.0], [87.0, 1658.0], [87.1, 1664.0], [87.2, 1665.0], [87.3, 1673.0], [87.4, 1676.0], [87.5, 1679.0], [87.6, 1687.0], [87.7, 1689.0], [87.8, 1692.0], [87.9, 1697.0], [88.0, 1700.0], [88.1, 1705.0], [88.2, 1710.0], [88.3, 1714.0], [88.4, 1721.0], [88.5, 1725.0], [88.6, 1733.0], [88.7, 1737.0], [88.8, 1744.0], [88.9, 1749.0], [89.0, 1751.0], [89.1, 1754.0], [89.2, 1758.0], [89.3, 1762.0], [89.4, 1767.0], [89.5, 1771.0], [89.6, 1778.0], [89.7, 1782.0], [89.8, 1788.0], [89.9, 1798.0], [90.0, 1800.0], [90.1, 1804.0], [90.2, 1812.0], [90.3, 1815.0], [90.4, 1821.0], [90.5, 1823.0], [90.6, 1826.0], [90.7, 1831.0], [90.8, 1838.0], [90.9, 1847.0], [91.0, 1851.0], [91.1, 1858.0], [91.2, 1859.0], [91.3, 1868.0], [91.4, 1870.0], [91.5, 1879.0], [91.6, 1888.0], [91.7, 1893.0], [91.8, 1897.0], [91.9, 1902.0], [92.0, 1906.0], [92.1, 1911.0], [92.2, 1913.0], [92.3, 1922.0], [92.4, 1927.0], [92.5, 1932.0], [92.6, 1936.0], [92.7, 1939.0], [92.8, 1948.0], [92.9, 1955.0], [93.0, 1966.0], [93.1, 1974.0], [93.2, 1981.0], [93.3, 1988.0], [93.4, 1999.0], [93.5, 2011.0], [93.6, 2017.0], [93.7, 2023.0], [93.8, 2033.0], [93.9, 2035.0], [94.0, 2047.0], [94.1, 2058.0], [94.2, 2075.0], [94.3, 2078.0], [94.4, 2084.0], [94.5, 2089.0], [94.6, 2098.0], [94.7, 2109.0], [94.8, 2120.0], [94.9, 2129.0], [95.0, 2137.0], [95.1, 2143.0], [95.2, 2149.0], [95.3, 2153.0], [95.4, 2164.0], [95.5, 2174.0], [95.6, 2183.0], [95.7, 2187.0], [95.8, 2201.0], [95.9, 2218.0], [96.0, 2224.0], [96.1, 2233.0], [96.2, 2239.0], [96.3, 2246.0], [96.4, 2265.0], [96.5, 2293.0], [96.6, 2306.0], [96.7, 2317.0], [96.8, 2338.0], [96.9, 2354.0], [97.0, 2368.0], [97.1, 2382.0], [97.2, 2390.0], [97.3, 2406.0], [97.4, 2418.0], [97.5, 2440.0], [97.6, 2450.0], [97.7, 2464.0], [97.8, 2481.0], [97.9, 2510.0], [98.0, 2542.0], [98.1, 2544.0], [98.2, 2563.0], [98.3, 2585.0], [98.4, 2609.0], [98.5, 2632.0], [98.6, 2697.0], [98.7, 2735.0], [98.8, 2763.0], [98.9, 2797.0], [99.0, 2857.0], [99.1, 2904.0], [99.2, 2932.0], [99.3, 2996.0], [99.4, 3117.0], [99.5, 3198.0], [99.6, 3287.0], [99.7, 3510.0], [99.8, 3591.0], [99.9, 3838.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 390.0, "series": [{"data": [[0.0, 120.0], [600.0, 366.0], [700.0, 362.0], [800.0, 318.0], [900.0, 310.0], [1000.0, 243.0], [1100.0, 262.0], [1200.0, 205.0], [1300.0, 172.0], [1400.0, 173.0], [1500.0, 131.0], [100.0, 226.0], [1600.0, 127.0], [1700.0, 98.0], [1800.0, 95.0], [1900.0, 78.0], [2000.0, 60.0], [2100.0, 59.0], [2200.0, 38.0], [2300.0, 36.0], [2400.0, 29.0], [2500.0, 25.0], [2600.0, 14.0], [2700.0, 16.0], [2800.0, 8.0], [2900.0, 11.0], [3000.0, 4.0], [3100.0, 6.0], [200.0, 290.0], [3200.0, 5.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 6.0], [3700.0, 2.0], [3600.0, 2.0], [3800.0, 1.0], [3900.0, 3.0], [4600.0, 1.0], [300.0, 342.0], [400.0, 390.0], [500.0, 362.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 857.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2772.0, "series": [{"data": [[0.0, 1371.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2772.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 857.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 83.4503849443969, "minX": 1.58859432E12, "maxY": 90.28399699474058, "series": [{"data": [[1.58859438E12, 83.4503849443969], [1.58859432E12, 90.28399699474058]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859438E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 37.5, "minX": 1.0, "maxY": 1670.0, "series": [{"data": [[2.0, 61.0], [3.0, 57.0], [4.0, 99.0], [5.0, 151.0], [6.0, 160.72727272727272], [7.0, 163.33333333333334], [8.0, 191.0], [9.0, 159.57142857142856], [10.0, 243.75], [11.0, 181.42857142857142], [12.0, 245.25], [13.0, 162.99999999999997], [14.0, 245.33333333333334], [15.0, 209.52], [16.0, 251.99999999999997], [17.0, 193.0], [18.0, 159.88888888888889], [19.0, 217.54545454545453], [20.0, 243.42857142857142], [21.0, 273.14285714285717], [22.0, 238.15], [23.0, 284.4], [24.0, 303.57142857142856], [25.0, 278.3529411764706], [26.0, 371.3333333333333], [27.0, 472.16666666666663], [28.0, 374.55555555555554], [29.0, 442.75], [30.0, 244.66666666666669], [31.0, 444.82758620689657], [32.0, 344.1666666666667], [33.0, 449.375], [34.0, 324.61538461538464], [35.0, 344.7692307692308], [36.0, 276.09999999999997], [37.0, 444.38888888888886], [38.0, 517.75], [39.0, 398.8125], [40.0, 677.5], [41.0, 494.68], [42.0, 468.55555555555554], [43.0, 604.9473684210526], [44.0, 573.3333333333333], [45.0, 521.0], [46.0, 800.5], [47.0, 650.9166666666666], [48.0, 497.59999999999997], [49.0, 586.1785714285714], [50.0, 645.5999999999999], [51.0, 705.142857142857], [52.0, 809.0], [53.0, 405.9545454545455], [54.0, 566.0], [55.0, 615.125], [56.0, 654.9999999999999], [57.0, 805.695652173913], [58.0, 1082.8461538461538], [59.0, 1073.388888888889], [60.0, 1252.222222222222], [61.0, 877.5333333333333], [62.0, 837.7692307692307], [63.0, 905.25], [65.0, 738.4705882352941], [66.0, 1670.0], [67.0, 1255.2222222222224], [64.0, 748.7777777777776], [68.0, 1316.0000000000002], [69.0, 1158.8999999999996], [70.0, 1176.2], [71.0, 929.6666666666669], [72.0, 1460.2222222222224], [73.0, 652.6250000000001], [74.0, 552.1578947368422], [75.0, 1004.8124999999999], [76.0, 747.7105263157897], [77.0, 1076.2156862745103], [78.0, 649.7500000000001], [79.0, 662.3125000000001], [80.0, 879.0000000000001], [81.0, 1021.8888888888891], [82.0, 1057.9333333333334], [83.0, 1093.214285714286], [84.0, 890.6153846153848], [85.0, 964.26582278481], [86.0, 750.6666666666669], [87.0, 710.2941176470588], [88.0, 882.855421686747], [89.0, 1118.7058823529412], [90.0, 1095.477272727273], [91.0, 721.7931034482759], [92.0, 1125.0], [93.0, 975.6031746031746], [94.0, 1009.3], [95.0, 530.4000000000001], [96.0, 897.255395683453], [97.0, 1181.8484848484848], [98.0, 976.3820598006639], [99.0, 988.9949494949498], [100.0, 1074.5950871632313], [1.0, 37.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[87.08859999999994, 939.2888000000005]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4676.0, "minX": 1.58859432E12, "maxY": 28084.1, "series": [{"data": [[1.58859438E12, 24665.9], [1.58859432E12, 28084.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58859438E12, 4676.0], [1.58859432E12, 5324.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859438E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 853.1603934987194, "minX": 1.58859432E12, "maxY": 1014.9342599549217, "series": [{"data": [[1.58859438E12, 853.1603934987194], [1.58859432E12, 1014.9342599549217]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859438E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 853.1497005988018, "minX": 1.58859432E12, "maxY": 1014.899323816679, "series": [{"data": [[1.58859438E12, 853.1497005988018], [1.58859432E12, 1014.899323816679]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859438E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.6082121471343023, "minX": 1.58859432E12, "maxY": 0.7791134485349355, "series": [{"data": [[1.58859438E12, 0.6082121471343023], [1.58859432E12, 0.7791134485349355]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859438E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.58859432E12, "maxY": 4632.0, "series": [{"data": [[1.58859438E12, 3545.0], [1.58859432E12, 4632.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58859438E12, 13.0], [1.58859432E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58859438E12, 1640.1999999999998], [1.58859432E12, 1923.7000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58859438E12, 2558.4700000000034], [1.58859432E12, 3101.2499999999973]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58859438E12, 1927.0499999999997], [1.58859432E12, 2263.7999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859438E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 64.0, "minX": 12.0, "maxY": 1279.5, "series": [{"data": [[34.0, 1279.5], [56.0, 298.5], [63.0, 1230.0], [68.0, 236.5], [71.0, 927.5], [75.0, 328.0], [72.0, 1028.0], [79.0, 1274.0], [81.0, 873.0], [84.0, 815.5], [87.0, 1034.5], [85.0, 945.0], [86.0, 805.0], [90.0, 949.5], [88.0, 1105.0], [91.0, 941.0], [95.0, 999.0], [93.0, 940.0], [94.0, 811.0], [92.0, 235.5], [99.0, 725.0], [97.0, 851.5], [98.0, 810.5], [100.0, 796.5], [103.0, 711.0], [101.0, 679.0], [104.0, 952.0], [106.0, 860.0], [109.0, 1033.0], [108.0, 745.0], [111.0, 712.0], [113.0, 810.0], [114.0, 760.0], [119.0, 910.0], [12.0, 64.0], [13.0, 159.0], [31.0, 900.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 119.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 64.0, "minX": 12.0, "maxY": 1279.5, "series": [{"data": [[34.0, 1279.5], [56.0, 298.5], [63.0, 1230.0], [68.0, 236.5], [71.0, 927.5], [75.0, 328.0], [72.0, 1028.0], [79.0, 1274.0], [81.0, 873.0], [84.0, 815.5], [87.0, 1034.5], [85.0, 945.0], [86.0, 805.0], [90.0, 949.5], [88.0, 1105.0], [91.0, 941.0], [95.0, 999.0], [93.0, 940.0], [94.0, 811.0], [92.0, 235.5], [99.0, 725.0], [97.0, 851.5], [98.0, 810.5], [100.0, 796.5], [103.0, 711.0], [101.0, 679.0], [104.0, 952.0], [106.0, 860.0], [109.0, 1033.0], [108.0, 745.0], [111.0, 712.0], [113.0, 810.0], [114.0, 760.0], [119.0, 910.0], [12.0, 64.0], [13.0, 159.0], [31.0, 900.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 119.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 37.3, "minX": 1.58859432E12, "maxY": 46.03333333333333, "series": [{"data": [[1.58859438E12, 37.3], [1.58859432E12, 46.03333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859438E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 38.96666666666667, "minX": 1.58859432E12, "maxY": 44.36666666666667, "series": [{"data": [[1.58859438E12, 38.96666666666667], [1.58859432E12, 44.36666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58859438E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 38.96666666666667, "minX": 1.58859432E12, "maxY": 44.36666666666667, "series": [{"data": [[1.58859438E12, 38.96666666666667], [1.58859432E12, 44.36666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859438E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 38.96666666666667, "minX": 1.58859432E12, "maxY": 44.36666666666667, "series": [{"data": [[1.58859438E12, 38.96666666666667], [1.58859432E12, 44.36666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58859438E12, "title": "Total Transactions Per Second"}},
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

