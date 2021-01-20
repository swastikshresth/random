function random() {
    var country = document.getElementById("countryId").value;
    var state = document.getElementById("stateId").value;
    var city = document.getElementById("cityId").value;
    if (country.length <= 0) {
        alert("country fields are required");
    }
    if (state.length <= 0) {
        alert("state field are required");
    }
    if (city.length <= 0) {
        alert("city field are required");

    } else {
        alert("you are successfully redirected");
        console.log(country);
        console.log(state);
        console.log(city);
    }
}