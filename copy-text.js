function copy() {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById('box'));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById('box'));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      alert("Kimásolva!")
    }
  }