// document.body.textContent = "";

// let header = document.createElement('h1');
// header.textContent = "This page has been eaten";
// document.body.appendChild(header);

var styles = `
*, :before, :after {
 /*CSS transitions*/
 transition-property: none !important;
 /*CSS transforms*/
 transform: none !important;
 /*CSS animations*/
 animation: none !important;
 }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)


var id = window.setTimeout(function() {}, 0);

while (id--) {
    window.clearTimeout(id); // will do nothing if no timeout with id is present
}
