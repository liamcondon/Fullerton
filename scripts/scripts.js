
/*****************************************************/
/********* M O C K  U P   2   S C R I P T S **********/
/*******           Two Exercises           ***********/
/*******           Exercise 1              ***********/
/*******           Exercise              ***********/
/*****************************************************/



$(document).ready(function() {
    addMyEventListeners();

    /* Exercise 1: Read More / Show Less
    In the index file, I gave the paragraph to show/hide an id of “morecomp”.
    To hide the paragraph on downloading page, I used ‘display: none’ on
    id #morecomp in CSS file.
    So, the user has the option to click a button to read more about the company
    while staying on the same page.
    The script is executed if the user clicks on the button ‘Read more about
    our Company’, which is quite verbose but it gives the user information
    about the button, and so they can decide if it is an action they want to take.
    I have included an optional speed parameter in show() and hide() methods.
    This is measured in milliseconds (ms). It takes 500ms to show and hide the
    paragraph.
    */
    $(document).ready(function() {

      $('#show').click(function() {
        showMore('#morecomp');
      });
      $('#hide').click(function() {
        hideMore('#morecomp');
      });

    });

    function showMore(moreId){
      $(moreId).show(500);
    }

    function hideMore(moreId){
      $(moreId).hide(500);
    }

});

/*  Exercise 8: Popup
    A button on homepage indicates that there is a special offer(s). On clicking
    this button, a modal or pop-up window is displayed on top of the homepage
    showing what offer(s) is avaiable. The homepage below is greyed out
    (transparency set in CSS).
    There is a close button on modal box in top right corner that closes modal and
    returns user to homepage.
    If the user clicks anywhere outside the modal, they will also close the modal
    and return to the homepage.

*/
function addMyEventListeners(){

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var elSpan = document.getElementsByClassName("close")[0];

console.log(modal);
console.log(btn);
console.log(elSpan);

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
elSpan.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}
