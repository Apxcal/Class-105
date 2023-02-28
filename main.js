Webcam.set({
    width:300,
    height:250,
    image_format:'png',
    png_quality:90
});

Webcam=document.getElementById("webcam");
Webcam.attach("#Webcam");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img src='"+data_uri+"' id='capturedimg'>";
    });
}

function check(){
    image=document.getElementById("capturedimg");
    classifer.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("person").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTMl=results[0].confidence.toFixed(3);
    }
}