var x = require('readline');
var prompts = x.createInterface(process.stdin, process.stdout);
prompts.question("Enter no of Rows", function(n)
{ 

var y,q,x;
var str="";

                for ( y = 0; y < n; y++)
                {
                    var c = 1;
                    for ( q = 0; q < n - y; q++)
                    {
                        str=str+"  ";
                    }

                    for ( x = 0; x <= y; x++)
                    {
                        if(c<=9)
			    str=str+"   "+c;
                        else
			    str=str+"  "+c;
                          
                        c = c * (y - x) / (x + 1);
                    }
		    console.log(str);
		    str="";
                    console.log();
                    console.log();
                }
});