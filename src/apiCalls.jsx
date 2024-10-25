




/*export default function rssApi() {
    const RSSApi = ;
}

export default function searchApi() {
    const searchApi = "";
}*/

export default function weatherApi() {
    const locationApi = `http://ip-api.com/json/`;
    fetch(locationApi)
        .then(response => response.json())
        .then(data => {
            const lat = data.lat;
            const lon = data.lon;
            const apiKey = "29bcfee88bbb18ea0dd7455f1e5f4e4d"
            const weatherApi = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        })
        .then(
            fetch(weatherApi)
                .then(response => response.json())
                .then(data => console.log(data))
        )
}