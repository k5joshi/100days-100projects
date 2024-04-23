const searchIcon = document.querySelector(".ri-search-2-line");
let place = document.querySelector("#Search");
let locationName = ""
searchIcon.addEventListener("click", function (params) { 
    locationName = place.value 
    console.log(locationName)

})