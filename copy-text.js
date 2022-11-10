function copy() {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById('generated'));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById('generated'));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      alert("Text has been copied, now paste in the text-area")
    }
  }