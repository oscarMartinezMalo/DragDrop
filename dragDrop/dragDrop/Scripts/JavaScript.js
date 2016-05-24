/// <reference path="_references.js" />
/// <reference path="jquery-2.2.3.js" />

$(document).ready(function () {
    $('.object').on('dragstart', dragging);
    $('.object').on('dragend', draggingEnded);
    $('.cover').on('dragenter', preventDefault);
    $('.cover').on('dragover', preventDefault);
    $('.cover').on('drop', droppingItem);
});

var $draggedItem;

function dragging(e) {
    $(e.target).addClass("draggingNow");
    $draggedItem = $(e.target);
}

function draggingEnded(e) {
    $(e.target).removeClass('draggingNow');
}

function preventDefault(e) {
    e.preventDefault();
}

function droppingItem(e) {

    var cover = $(e.target);    
    if (cover.hasClass('cover') && cover.children().length==0) {
        $draggedItem.detach(); 
        $draggedItem.appendTo($(e.target));
    }
}