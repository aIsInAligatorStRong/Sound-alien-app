function play() { navigator.mediaDevices.getUserMedia({ audio: true});
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady); }

 function modelReady(){ classifier.classify( gotResults); }

 function gotResults(error,results)
{
    if(error)
    {console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("confidence").innerHTML="accuracy-"+results[0].confidence;

        img1=document.getElementById('alien1');
        img2=document.getElementById('alien2');
        img3=document.getElementById('alien3');
        img4=document.getElementById("alien4");
        
        
if(results[0].label=="Clap")
{
    img1='aliens-01.gif';
    img2='aliens-02.png';
    img3='aliens-03.png';
    img4='aliens-04.png';
}
else if(results[0].label=="Bell")
{
    img1='aliens-01.png';
    img2='aliens-02.gif';
    img3='aliens-03.png';
    img4='aliens-04.png';
}
else if(results[0].label=="Snapping")
{
    img1='aliens-01.png';
    img2='aliens-02.png';
    img3='aliens-03.gif';
    img4='aliens-04.png';
}
else
{
    img1='aliens-01.png';
    img2='aliens-02.png';
    img3='aliens-03.png';
    img4='aliens-04.gif';
}
    }
}
