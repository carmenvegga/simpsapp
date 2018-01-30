//Javascript//
$(document).ready(loadPage);

//timeline-view//

//traer elementos del html
var $buttonPublish = $("#btn");
var $inputUser = $("#text");

function loadPage() {
    $inputUser.keyup(ablePublish);
}

function ablePublish() {// con esta función se habilita el botón en caso de que el usuario ingrese algo
    if ($("#text").val().trim().length === 0) {
        $buttonPublish.attr("disabled", true);
    } else {
        $buttonPublish.removeAttr("disabled");
        // se llama la función de click en el botón que agrega lo publicado por el usuario en el html
        $buttonPublish.click(post);
    }

}

function post() {
    var $containerPost = $("#container-post");
    var $input = $inputUser.val();
    var $entry = $("<p />", {
        "class": "new-boxes"
    });
    $entry.text($input);
    $containerPost.prepend($input);
    $("#publications").append($containerPost);
    $buttonPublish.attr("disabled", true);



}