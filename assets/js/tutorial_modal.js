var modal = document.getElementById("edit_tutorial_modal");
var span = document.getElementsByClassName("close")[0];


var closeModalBtn = document.getElementById("closeModalBtn");

editBtn.addEventListener('click', function () {

 // Display the modal
if (modal) {
    modal.style.display = "block";
}

    return false;
});

span.onclick = function() {
    if (modal) {
        modal.style.display = "none";
    }
}