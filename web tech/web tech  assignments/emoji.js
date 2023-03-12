/*var h = document.querySelector('#sub');

function myfunc(){
    alert("you submitted the form!!");
    $('canvas').show()
    const canvas = document.querySelector("#canvas");
    const contex = canvas.getContext("2d");
    contex.font = '100px serif';
    contex.textAlign = "right";
    contex.textBaseline = "right";
    contex.fillText('💀', canvas.width / 2, canvas.height / 2)

}

h.addEventListener('click',myfunc,true);

$(document).ready(function(){
    
    $("button:first").click(function(){
    
        $("body").append( $("<p>").html("I love JQuery!!!").css("color","red") )
        $("body").append( $("<button>").html("Click to remove JQuery ").click(function(){
            
            $("p:last").remove()
            $("button:last").remove()
        }))
    })
    $("button:last").click(function(){
        $("h1:first").fadeToggle("slow")
    })
})
/*
var h = document.querySelector('#submit');
 
function myfunc()
{
    alert("you submitted the form!!");
    
    const canvas = document.querySelector("#canvas");
    const contex = canvas.getContext("2d");
    contex.font = '100px serif';
    contex.textAlign = "right";
    contex.textBaseline = "right";
    contex.fillText('💀', canvas.width / 2, canvas.height / 2);
    $('canvas').show(9000);
    $('canvas').show(9000);
    $('canvas').show(9000);
    $('canvas').show(9000);
    $('canvas').show(9000);
}
$('canvas').show(9000); 
h.addEventListener('click',myfunc,true);
*/
var h = document.querySelector('#sub');
$(document).ready(function(){
    
$("button:first").click(function(){
$("form input").hide()
$("body").append( $("<p>").html("I love JQuery!!!").css("color","blue","width","30%").css("width","30%") )
});
$("#btn1").click(function(){
$("div").fadeToggle(1000);
});

 $("#btn2").click(function(){
$("tr:odd").hide();
 } );
});


