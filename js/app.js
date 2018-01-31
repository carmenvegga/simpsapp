//Javascript//
$(document).ready(loadPage);

//timeline-view//

//traer elementos del html
var $buttonPublish = $("#btn");
var $inputUser = $("#text");
var $follow = $("#follow");

function loadPage() {
    $inputUser.keyup(ablePublish);
    $follow.click(changeText);
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
    var containerPost = document.getElementById("container-post");
    var input = document.getElementById("text").value;
    var entry = document.createElement("p");

    entry.appendChild(document.createTextNode(input));
    containerPost.appendChild(entry);

    $buttonPublish.attr("disabled", true);
}

//función después de dar click en el follow cambia el texto a unfollow
function changeText(){
    $("#follow").text("unfollow");
}