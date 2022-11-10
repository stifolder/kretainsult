function copyText() {

    var Text = document.getElementById("box");
    Text.select();

    navigator.clipboard.writeText(Text.value);
}