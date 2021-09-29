module.exports = function (Array)
{   
    var  n = Array.length, a = Math.abs(Array[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(Array[ i ]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*Array[ i ])/(a+b);
     }
    return a;
}