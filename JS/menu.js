$(document).ready(function(){
    var buttons = document.getElementsByClassName('tablinks');
    var contents = document.getElementsByClassName('tabcontent');
    function showContent(id){
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            var id = this.textContent;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active1");
            }
            this.className += " active1";
            showContent(id);
        });
    }
    showContent('Lớp 10');

    var buttons = document.getElementsByClassName('tablinks');
    var contents = document.getElementsByClassName('tabcontent');
    function showContent(id){
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            var id = this.textContent;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active2");
            }
            this.className += " active2";
            showContent(id);
        });
    }
    showContent('New Releases');



})