// Please note running this script without changing the Infinity value will cause the browser to slow to a crawl and or stop all function pending a manual script termination.
function infinity() {
    document.getElementById("output-header").innerHTML="Simulator Output";
    var outputs = new Array();
    var n = 0;
    do {
        n++;
        var i = Math.random() * Infinity + 1;
        i = Math.floor(i);
        var text = "Pass number " + n + " is equal to " + i;
        outputs.push(text);
    }
    while (i != 2);

    for (n = 0; n < outputs.length; n++) {
        document.write(outputs[n] + "</br>");
    }
}

function fixed() {
    document.getElementById("output-header").innerHTML="Simulator Output";
    var outputs = new Array();
    var n = 0;
    do {
        n++;
        var i = Math.random() * 1000000 + 1;
        i = Math.floor(i);
        var text = "Pass number " + n + " is equal to " + i;
        outputs.push(text);
    }
    while (i != 2);

    for (n = 0; n < outputs.length; n++) {
        document.write(outputs[n] + "</br>");
    }
}