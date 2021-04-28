var seq=[];
var i;

function check( i )
{
  $("#a1").click(function()
{
  if(seq[i]==1)
  {
    return 1;
  }
  else
  {
    return 0;
  }
});
$("#a2").click(function()
{
if(seq[i]==2)
{
  return 1;
}
else
{
  return 0;
}
});
$("#a3").click(function()
{
if(seq[i]==3)
{
  return 1;
}
else
{
  return 0;
}
});
$("#a4").click(function()
{
if(seq[i]==4)
{
  return 1;
}
else
{
  return 0;
}
});
}


$(".start").click(function()
{
  var level=1;
  var k=1;

  {
    var x=Math.floor(Math.random()*10)%4+1;
    seq.push(x);
    var add="a"+x;
    $(add).click();
    for(i=0;i<seq.length;i++)
    while(k==1)
    {
      if(check(i)==0)
      {
        k=0;
        break;
      }
    }
    level++;


  }






});
