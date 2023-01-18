let editor;

window.onload = function() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/terminal");
    editor.session.setMode("ace/mode/javascript");
    // console.log(editor);
}


// window.addEventListener('keydown', (e) => {
//     if(e.ctrlKey && e.key === 'Enter'){
//         console.log(editor.session.getTextRange(editor.getSelectionRange()));
//     } 
// });

// let editor = document.querySelector("#editor");
// ace.edit(editor,{
//     mode: "ace/mode/javascript",
//     theme: "ace/theme/terminal"
// })

// window.onkeydown= function(gfg){
//     if(gfg.keyCode === 32){
//         console.log(window.getSelection());
//     };
// };

// window.onkeydown= function(gfg){
//     if(gfg.keyCode === 17 && gfg.keyCode === 13){
//         console.log(editor.getSelection().toString());
//     };
// };