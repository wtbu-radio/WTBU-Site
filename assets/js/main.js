/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showLinks(id) {
    console.log("test");
    console.log(id);
    document.getElementById(id).classList.toggle("show");
    console.log(document.getElementById(id).classList);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown__button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* Toggle between adding and removing the "responsive" class to topBar when the user clicks on the hamburger button */
function mobileDropdown() {
    var x = document.getElementById("topBar");
    if (x.className === "topBar") {
      x.className += " responsive";
    } else {
      x.className = "topBar";
    }
  } 