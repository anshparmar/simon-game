var seq=[];
var i,level=1;
$(".start").click(function()
{
i=0;
var x=Math.floor(Math.random()*10)%4+1;
$("#a"+x).fadeIn(100).fadeOut(100).fadeIn(100);
seq.push(x);
console.log(seq);
$(".start").text("Level"+level);
  $("#a1").click(function()
  {
    if(seq[i]==1)
    {
      i++;
    }
    else
    {
      alert("YOU LEVEL LOSER BITCH! Could only pass Level "+(level-1) );
      seq=[];
      level=0;
      $(".start").text("Restart");
    }
    if(i==seq.length)
    {
      i=0;
      var x=Math.floor(Math.random()*10)%4+1;
      seq.push(x);
      console.log(seq);
      level++;
      $(".start").text("Level"+level);
      $("#a"+x).fadeIn(100).fadeOut(100).fadeIn(100);
    }
  });

  $("#a2").click(function()
  {
    if(seq[i]==2)
    {
      i++;
    }
    else
    {
  alert("YOU LEVEL LOSER BITCH! Could only pass Level "+(level-1) );
      seq=[];
      level=0;
      $(".start").text("Restart");
    }
    if(i==seq.length)
    {
      i=0;
      var x=Math.floor(Math.random()*4)+1;
      seq.push(x);
      console.log(seq);
      level++;
      $(".start").text("Level"+level);
      $("#a"+x).fadeIn(100).fadeOut(100).fadeIn(100);
    }
  });

  $("#a3").click(function()
  {
    if(seq[i]==3)
    {
      i++;
    }
    else
    {
    alert("YOU LEVEL LOSER BITCH! Could only pass Level "+(level-1) );
      seq=[];
      level=0;
      $(".start").text("Restart");
    }
    if(i==seq.length)
    {
      i=0;
      var x=Math.floor(Math.random()*10)%4+1;
      seq.push(x);
      console.log(seq);
      level++;
      $(".start").text("Level"+level);
      $("#a"+x).fadeIn(100).fadeOut(100).fadeIn(100);

    }
  });

  $("#a4").click(function()
  {
    if(seq[i]==4)
    {
      i++;
    }
    else
    {
      alert("YOU LEVEL LOSER BITCH! Could only pass Level "+(level-1) );
      seq=[];
      level=0;
      $(".start").text("Restart");
    }
    if(i==seq.length)
    {
      i=0;
      var x=Math.floor(Math.random()*10)%4+1;
      seq.push(x);
      console.log(seq);
      level++;
      $(".start").text("Level"+level);
      $("#a"+x).fadeOut(100).fadeIn(100);
    }
  });



});
