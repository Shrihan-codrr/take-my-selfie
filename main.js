 var SpeechRecognition = window.webkitSpeechRecognition;

 var spRecog = new SpeechRecognition();

 function my_start(){

    document.getElementById("tar").value = "";

    spRecog.start();
 
 }


 spRecog.onresult = function(event){
     console.log(event);

     document.getElementById("tar").value = event.results[0][0].transcript;
    
     my_speak();
 }


 function my_speak(){
    var synth = window.speechSynthesis;

   text_data = document.getElementById("tar").value;

    //SpeechSynthesisUtterance("text"); convert the Text to the speech

   var speak_data = new SpeechSynthesisUtterance(text_data);

   synth.speak(speak_data);

   Webcam.attach(my_cam);
    
    
 }

 Webcam.set({
     width:360,
     height:250,
     image_format : 'png',
     png_quality: 90
 });

 my_cam = document.getElementById("camera");
