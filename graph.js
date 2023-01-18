let wrapper = document.querySelector(".graph_plot");
//let editor = document.querySelector("#editor");
let code = "EnterTextHere";

wrapper.addEventListener('resize', function(){
    console.log(wrapper.clientWidth + " - " + wrapper.clientHeight);
})

function preload() {
    font = loadFont('TrenchThin.ttf');
}

function setup() {
    var canvas = createCanvas( wrapper.clientWidth,wrapper.clientHeight);
    canvas.parent(wrapper);

    textFont(font);
    textSize(35);
    textAlign(CENTER, CENTER);
}
  
function draw() {
    background(0,25);

    printText(code);
    // console.log(code);
}

function printText(x){
    push ();
    noFill();
    stroke(255,0,0);
    translate (width/2,height/2);
    rotate (cos(0.02 *frameCount));
    text(x,0,0);
    pop ();
}


window.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.key === 'Enter'){
        code = editor.getSelectedText();
        console.log(code);
        //console.log(editor.session.getTextRange(editor.getSelectionRange()));
    } 
});

window.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.key === '.'){
        code = editor.session.getTextRange(editor.getSelectionRange());
        console.log(code);
        //console.log(editor.session.getTextRange(editor.getSelectionRange()));
    } 
});