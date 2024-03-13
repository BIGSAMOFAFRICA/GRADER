document.getElementById('scoreForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var score = parseFloat(document.getElementById('score').value);
    var result = '';

    if (score >= 90 && score <= 100) {
        result = 'Excellent' ;
        var snd = new Audio('MUSIC/ameno.mp3');
    snd.play();
    } else if (score >= 80 && score < 90) {
        result = 'Very Good';
        var snd = new Audio('MUSIC/ameno.mp3');
    snd.play();
    } else if (score >= 70 && score < 80) {
        result = 'Good';
        var snd = new Audio('MUSIC/AVENGERS.mp3');
    snd.play();
    } else if (score >= 60 && score < 70) {
        result = 'You Tried';
        var snd = new Audio('MUSIC/Are-you-playing.mp3');
    snd.play();
    } else if (score >= 40 && score < 60) {
        result = 'Not Bad';
        var snd = new Audio('MUSIC/whine.mp3');
    snd.play();
    } else if (score >= 30 && score < 40) {
        result = 'Pass';
        var snd = new Audio('MUSIC/whine.mp3');
    snd.play();
    } else if (score >= 0 && score < 30) {
        result = 'You Are a Total Failure';
        var snd = new Audio('MUSIC/MUMU.mp3');
    snd.play();
    }
    else if(score >=100){
        result = 'your mumu no too much, enter a score ranging from 0-100 '
    }
    
    document.getElementById('result').innerText = result
});