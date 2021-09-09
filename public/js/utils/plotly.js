function create_table(div, csv) {
    var csvData = JSON.parse(csv);

    console.log('csvData: ' + JSON.parse(csv));
    var header = Object.getOwnPropertyNames(csvData[0]);
    var value = new Array(header.length);

    for (var i = 0; i < header.length; i++) {
        value[i] = new Array(csvData.length);
    }

    for (var i = 0; i < header.length; i++) {
        var headerName = header[i];
        for (var j = 0; j < value[0].length; j++) {
            value[i][j] = csvData[j][headerName];
        }
    }

    var data = [{
        type: 'table',
        header: {
            values: header,
        },
        cells: {
            values: value
        },
    }]
    Plotly.plot(div, data)
}