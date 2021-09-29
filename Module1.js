module.exports =  function (Array)
{   
    let n = Array.length, x = Math.abs(Array[0]);
   
    for (let i = 1; i < n; i++)
     { let y = Math.abs(Array[ i ]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
        }
     
    return x;
   
}