var a, b, c, x1, x2, result;
document.getElementById("btn").onclick = function() {
    a = parseFloat(document.getElementById("inA").value);
    b = parseFloat(document.getElementById("inB").value);
    c = parseFloat(document.getElementById("inC").value);
    result = document.getElementById("result");
    if ((b * b - 4 * a * c) > 0) {
        x1 = ((-1 * b) + Math.sqrt((b * b - 4 * a * c))) / 2 * a;
        x2 = (b - Math.sqrt((b * b - 4 * a * c))) / 2 * a;
        result.textContent = "x1 = " + x1 + " and x2 = " + x2;
    } else if ((b * b - 4 * a * c) === 0) {
        x1 = ((-1 * b) + Math.sqrt((b * b - 4 * a * c))) / 2 * a;
        result.textContent = "x1 and x2 = " + x1;
    } else if ((b * b - 4 * a * c) < 0) {
        x1 = ((-1 * b) + Math.sqrt(Math.abs((b * b - 4 * a * c)))) / 2 * a;
        x2 = ((-1 * b) - Math.sqrt(Math.abs((b * b - 4 * a * c)))) / 2 * a;
        result.textContent = "No real solutions found!  (imaginary part: " + x1 + "i and " + x2 + "i)"
    }
}
