$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS

	//Start
	$(".startButton").on("click", function(event){
		$("#start").fadeOut(1000)
		$("#map").delay(500).fadeIn(1000)
		$("#navbar2").delay(1000).fadeIn(1000)
		$("#info").delay(1000).fadeIn(1000)
	})
	
	//Camera's on side
	$("#cameraButton").on("click", function(event){
		$("#info").fadeOut(1000)
		// $(".markers").delay(1000).fadeIn(1000)
	})

	//Film camera button
	$("#filmCamera").on("click", function(event){
		$(".digitalMarkers").fadeOut(1000)
		$(".filmMarkers").fadeIn(1000)
		$("#filmCamera").css({"border":"3px solid #f44336"})
		$("#digitalCamera").css({"border":"3px solid #fff"})
		
	})

	//Digital camera button
	$("#digitalCamera").on("click", function(event){
		$(".digitalMarkers").fadeIn(1000)
		$("#digitalCamera").css({"border":"3px solid #f44336"})
		$("#filmCamera").css({"border":"3px solid #fff"})
		$(".filmMarkers").fadeOut(1000)
	})




	//Modals
	$("#digitalPhotosTrain").on("click", function(event){
		$(".modal").colorbox({rel:'modal'});
		// $(".markers").delay(1000).fadeIn(1000)
	})

	$("#filmPhotosTrain").on("click", function(event){
		$(".modal").colorbox({rel:'modal'});
		// $(".markers").delay(1000).fadeIn(1000)
	})







	//Markers
	$("#markerTrain").on("click", function(event){
		$("#popupTrain").fadeIn(1000)
		$('#audioPlayer1').trigger("play");
	})

	$("#markerShip").on("click", function(event){
		$("#popupShip").fadeIn(1000)
		$('#audioPlayer2').trigger("play");
	})

	$("#markerPier").on("click", function(event){
		$("#popupPier").fadeIn(1000)
		$('#audioPlayer3').trigger("play");
	})

	$("#markerCrowd").on("click", function(event){
		$("#popupCrowd").fadeIn(1000)
		$('#audioPlayer4').trigger("play");
	})

	$("#markerCastle").on("click", function(event){
		$("#popupCastle").fadeIn(1000)
		$('#audioPlayer5').trigger("play");
	})



	$("#markerBoat").on("click", function(event){
		$("#popupBoat").fadeIn(1000)
		$('#audioPlayer6').trigger("play");
	})

	$("#markerChurch").on("click", function(event){
		$("#popupChurch").fadeIn(1000)
		$('#audioPlayer7').trigger("play");
	})

	$("#markerPier2").on("click", function(event){
		$("#popupPier2").fadeIn(1000)
		$('#audioPlayer9').trigger("play");
	})

	$("#markerCrowd2").on("click", function(event){
		$("#popupCrowd2").fadeIn(1000)
		$('#audioPlayer8').trigger("play");
	})

	$("#markerStreet").on("click", function(event){
		$("#popupStreet").fadeIn(1000)
		$('#audioPlayer10').trigger("play");
	})


	//Close button
	$(".close").on("click", function(event){
		$(".popup").fadeOut(1000);
		console.log("hit")
		$(".audioPlayer").trigger("pause");
	})








	// FUNCTIONS
	function initialize(){
		$(".page:nth-of-type(1)").fadeIn(1000)
	}

	function playPauseAudio(){
		if (songPlaying == false){
			$("#audioPlayer").trigger("play");
			songPlaying = true;
		} else {
			$("audioPlayer").trigger("pause");
			songPlaying = false;
		}
	}

	function fadeOutAudio(){
		//console.log("audio fading")
		if(songPlaying == true) {

		}
	}
	

	var f = function(){

    function eventHandler(event){
        var width = parseInt(window.getComputedStyle(this).width);
        var height = parseInt(window.getComputedStyle(this).height);
        var zoom = 40;

        if(event.wheelDelta > 0){
            this.style.width = Math.min(1500,width + zoom) + "px";
            this.style.height = Math.min(1500,height + zoom) + "px";
        }
        else{
            this.style.width = Math.max(200,width - zoom) + "px";
            this.style.height = Math.max(200,height - zoom) + "px";

        }
        event.preventDefault();
    }

    var imageElement = document.getElementsById("map");
    imageElement.addEventListener('mousewheel',eventHandler,false);


	};

	window.addEventListener('load',f,false);

	// function zoomin(){
 //        var myImg = document.getElementById("map");
 //        var currWidth = myImg.clientWidth;
 //        if(currWidth == 2500) return false;
 //         else{
 //            myImg.style.width = (currWidth + 100) + "px";
 //        } 
 //    }
    
 //    function zoomout(){
 //        var myImg = document.getElementById("map");
 //        var currWidth = myImg.clientWidth;
 //        if(currWidth == 100) return false;
	// 	 else{
 //            myImg.style.width = (currWidth - 100) + "px";
 //        }
 //    }

	// INITIALIZATION
	initialize()
	
});