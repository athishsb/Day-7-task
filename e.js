var request5 = new XMLHttpRequest();
request5.open("GET", "https://restcountries.com/v2/all");
request5.send();
request5.onload = function () {
    var result = JSON.parse(request5.response);
    var currency = result.filter(element => {
        for (let key in element.currencies) {
            if (element.currencies[key].code === "USD") {
                return element;
            }
        }
    })
    console.log('Countries that use US dollars:',currency);
}

//Output:
/*
Countries that use US dollars: 
(18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'American Samoa', topLevelDomain: Array(1), alpha2Code: 'AS', alpha3Code: 'ASM', callingCodes: Array(1), …}
1
: 
{name: 'Bonaire, Sint Eustatius and Saba', topLevelDomain: Array(2), alpha2Code: 'BQ', alpha3Code: 'BES', callingCodes: Array(1), …}
2
: 
{name: 'British Indian Ocean Territory', topLevelDomain: Array(1), alpha2Code: 'IO', alpha3Code: 'IOT', callingCodes: Array(1), …}
3
: 
{name: 'Virgin Islands (British)', topLevelDomain: Array(1), alpha2Code: 'VG', alpha3Code: 'VGB', callingCodes: Array(1), …}
4
: 
{name: 'Virgin Islands (U.S.)', topLevelDomain: Array(1), alpha2Code: 'VI', alpha3Code: 'VIR', callingCodes: Array(1), …}
5
: 
{name: 'Cambodia', topLevelDomain: Array(1), alpha2Code: 'KH', alpha3Code: 'KHM', callingCodes: Array(1), …}
6
: 
{name: 'Ecuador', topLevelDomain: Array(1), alpha2Code: 'EC', alpha3Code: 'ECU', callingCodes: Array(1), …}
7
: 
{name: 'El Salvador', topLevelDomain: Array(1), alpha2Code: 'SV', alpha3Code: 'SLV', callingCodes: Array(1), …}
8
: 
{name: 'Guam', topLevelDomain: Array(1), alpha2Code: 'GU', alpha3Code: 'GUM', callingCodes: Array(1), …}
9
: 
{name: 'Marshall Islands', topLevelDomain: Array(1), alpha2Code: 'MH', alpha3Code: 'MHL', callingCodes: Array(1), …}
10
: 
{name: 'Micronesia (Federated States of)', topLevelDomain: Array(1), alpha2Code: 'FM', alpha3Code: 'FSM', callingCodes: Array(1), …}
11
: 
{name: 'Northern Mariana Islands', topLevelDomain: Array(1), alpha2Code: 'MP', alpha3Code: 'MNP', callingCodes: Array(1), …}
12
: 
{name: 'Palau', topLevelDomain: Array(1), alpha2Code: 'PW', alpha3Code: 'PLW', callingCodes: Array(1), …}
13
: 
{name: 'Panama', topLevelDomain: Array(1), alpha2Code: 'PA', alpha3Code: 'PAN', callingCodes: Array(1), …}
14
: 
{name: 'Puerto Rico', topLevelDomain: Array(1), alpha2Code: 'PR', alpha3Code: 'PRI', callingCodes: Array(1), …}
15
: 
{name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
16
: 
{name: 'Turks and Caicos Islands', topLevelDomain: Array(1), alpha2Code: 'TC', alpha3Code: 'TCA', callingCodes: Array(1), …}
17
: 
{name: 'United States of America', topLevelDomain: Array(1), alpha2Code: 'US', alpha3Code: 'USA', callingCodes: Array(1), …}
length
: 
18
[[Prototype]]
: 
Array(0)
*/
