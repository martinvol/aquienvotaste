actual = 1;
errores = [];

cont = 0;
var tiempoEspera = 0;
function cierre(){
	
	MostrarMensaje();

	$('.candidatos').slideUp('fast');
	$(".seccionesContainer").slideUp('fast');

}

function MostrarMensaje () {
	setTimeout(function () {    
		if(mensajes[cont])
		{
			$($(".mensajeSeccion")[cont]).html(mensajes[cont]);
			$($(".mensajeSeccion")[cont]).parent().stop(true, false).fadeIn(800);
			tiempoEspera += 2000;
		}
		else
			$($(".mensajeSeccion")[cont]).html('');

	  	cont++;
		if (cont < $(".mensajeSeccion").length) {
			MostrarMensaje();
		}
		else {
			MostrarPDR();
		}
	}, 700)
}

function MostrarPDR()
{
	setTimeout(function(){
		$('#about').addClass('highlightInvert');
		$('#foot').addClass('highlightInvert');
		$("#c5").stop(true, true).css('display','block').animate({top:0},700, 'easeOutBounce', function(){
			$("#texto1").stop(true, true).fadeIn(1200,'linear', function(){
				$("#texto2").stop(true, true).fadeIn(1200,'linear', function(){
					$('#video').fadeIn(400,'linear', function(){
						$('#video').attr('src', 'http://www.youtube.com/embed/GpBBqMkDVGQ?&autoplay=1&fs=0&theme=light&showinfo=0&hd=1&autohide=1');
						$('#botonesNetwork').fadeIn(400);
					});
				});
			});
		});
	},tiempoEspera);
}

function listo() {
		//$("#c"+actual).css("display", "inherit");
		$("#c"+actual).fadeIn();
}


var mensajes = new Array(3);
function hola() {
	$('.highlight').removeClass('highlight');
	$($('.seccionesContainer > .seccionIcon')[actual]).addClass('highlight');
	
	$("#c"+actual).fadeOut().promise().done(listo); // Animate
	
	if(this.id == "botonOtro")
	{
		
	}
	else if (this.id == "botonNoMeAcuerdo")
	{
		mensajes[actual-1] = "¡No te acordás!";
	}
	else if ($(this).find('.img-cand').attr("explic")){
		mensajes[actual-1] = $(this).find('.img-cand').attr("nm") + ": " + $(this).find('.img-cand').attr("explic");
	}

	actual += 1;
	if (actual == 4){
		cierre();
	}

;
}

var aboutVisible = false;
$(document).ready(function() {

	$(".horizontal-style li").click(hola);
	$("button").click(hola);
	$("#c5").css('top','-100%');
	
	$('#about').click(function(e) {
		if(aboutVisible)
			OcultarAbout();
		else
			MostrarAbout();
		aboutVisible = !aboutVisible;
	});

});


function MostrarAbout()
{
	$('#foot').addClass('visible');
}

function OcultarAbout()
{
	$('#foot').removeClass('visible');
}