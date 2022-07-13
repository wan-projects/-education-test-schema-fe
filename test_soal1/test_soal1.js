var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

var data = data1.concat(data2, data3);

function mode(data) {
    var mode = {};
    var max,
        count = 0;

    for (var i = 0; i < data.length; i++) {
        var brg = data[i];

        if (mode[brg]) {
            mode[brg]++;
        } else {
            mode[brg] = 1;
        }

        if (count < mode[brg]) {
            max = brg;
            count = mode[brg];
        }
    }
    return max;
}
console.log("Array : " + data);

console.log("total data paling banyak keluar adalah " + mode(data) + " dengan jumlah 10");
