document.addEventListener("DOMContentLoaded", function() {
    hide_mkdocs_footer();
});


function hide_mkdocs_footer() {
    document.querySelectorAll('.md-footer-meta.md-typeset')[0].remove();
    //document.querySelectorAll('.md-footer-nav')[0].remove();
}


/* function hide_sidebar_left(){
    document.querySelectorAll('.md-nav.md-nav--primary')[0].setAttribute("style", "visibility: hidden;")
    document.querySelectorAll('.md-nav .md-nav--secondary label')[0].remove()
} */


// <nav class="md-nav md-nav--primary" aria-label="Navigation" data-md-level="0">
// <nav class="md-nav md-nav--secondary" aria-label="Table of contents">
//<label class="md-nav__title"> ('label.md-nav__title')