const apiKey = "4e8ea4c48fc1caa38029a76e8f4dcc2b"
const apiUrl = "api.openweathermap.org/data/2.5/weather?q=London&appid=" + apiKey;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
        console.log("is this working?")
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].local_names.ja);
        }
    });