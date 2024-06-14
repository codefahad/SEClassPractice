
var result=document.getElementById("result");

function display(number)
{
    result.value+=number;
}

function calculate()
{
    var finalnumber=result.value;
    var finalresult=eval(finalnumber);
    result.value=finalresult;
}

function clearscreen()
{
    result.value="";
}

function del()
{
    result.value=result.value.slice(0,-1);
}

function sin() {
    var angle = result.value;
    result.value = Math.sin(parseFloat(angle) * (Math.PI / 180)).toFixed(3);
  }
  
  function cos() {
    var angle = result.value;
    result.value = Math.cos(parseFloat(angle) * (Math.PI / 180)).toFixed(3);
  }
  
  function tan() {
    var angle = result.value;
    result.value = Math.tan(parseFloat(angle) * (Math.PI / 180)).toFixed(3);
  }

  function square() {
    var num = parseFloat(result.value);
    result.value = (num * num);
  }

  function squareroot() {
    var num = parseFloat(result.value);
    if (num >= 0) {
      result.value = Math.sqrt(num).toFixed(3);
    } else {
      result.value = "Invalid Input";
    }
  }
  
  