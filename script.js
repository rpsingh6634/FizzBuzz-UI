function fn(){
var num=document.getElementById("input").value
for(i=1; i<=num; i++)
    {
        var ele=document.createElement("p")
        ele.innerText=i

        if(i%3==0 && i%5==0)
        {
            ele.innerText="fizzbuzz"
        }
        else if(i%3==0)
        {
            ele.innerText="fizz"
        }
        else if(i%5==0)
        {
            ele.innerText="buzz"
        }
        else{
            ele.innerText=i
        }
        var main=document.querySelector("div")
        main.append(ele)
    }
    }