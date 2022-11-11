import html2canvas from 'html2canvas';

function copy() {
    var insult = document.getElementById("generated")

    navigator.clipboard.writeText("Te " + insult.innerText).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }

function screenshot() {
    var card = document.getElementById("card");

    html2canvas(document.getElementById("card")).then(function(canvas){
        var img = new Image()
        img.src = canvas.toDataURL("image/jpeg", 0.9)
        img.height = card.clientHeight;
        img.width = card.clientWidth;
        window.open(img.src, 'Chart')
    });

}