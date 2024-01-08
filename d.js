var request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v2/all");
request4.send();
request4.onload = function () {
    var result = JSON.parse(request4.response);
    var totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);
};


//Output:
//Total population of countries: 7759438109