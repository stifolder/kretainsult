function copy() {
    var insult = document.getElementById("generated")

    navigator.clipboard.writeText("Te " + insult).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  }