var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v2/all");
request1.send();
request1.onload = function () {
    var result = JSON.parse(request1.response);
    var asiaCountries = result.filter(country => country.region === 'Asia');
    console.log('Countries from Asia:', asiaCountries);
};

//Output:
/*
Countries from Asia: 
(50) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'Afghanistan', topLevelDomain: Array(1), alpha2Code: 'AF', alpha3Code: 'AFG', callingCodes: Array(1), …}
1
: 
{name: 'Armenia', topLevelDomain: Array(1), alpha2Code: 'AM', alpha3Code: 'ARM', callingCodes: Array(1), …}
2
: 
{name: 'Azerbaijan', topLevelDomain: Array(1), alpha2Code: 'AZ', alpha3Code: 'AZE', callingCodes: Array(1), …}
3
: 
{name: 'Bahrain', topLevelDomain: Array(1), alpha2Code: 'BH', alpha3Code: 'BHR', callingCodes: Array(1), …}
4
: 
{name: 'Bangladesh', topLevelDomain: Array(1), alpha2Code: 'BD', alpha3Code: 'BGD', callingCodes: Array(1), …}
5
: 
{name: 'Bhutan', topLevelDomain: Array(1), alpha2Code: 'BT', alpha3Code: 'BTN', callingCodes: Array(1), …}
6
: 
{name: 'Brunei Darussalam', topLevelDomain: Array(1), alpha2Code: 'BN', alpha3Code: 'BRN', callingCodes: Array(1), …}
7
: 
{name: 'Cambodia', topLevelDomain: Array(1), alpha2Code: 'KH', alpha3Code: 'KHM', callingCodes: Array(1), …}
8
: 
{name: 'China', topLevelDomain: Array(1), alpha2Code: 'CN', alpha3Code: 'CHN', callingCodes: Array(1), …}
9
: 
{name: 'Georgia', topLevelDomain: Array(1), alpha2Code: 'GE', alpha3Code: 'GEO', callingCodes: Array(1), …}
10
: 
{name: 'Hong Kong', topLevelDomain: Array(1), alpha2Code: 'HK', alpha3Code: 'HKG', callingCodes: Array(1), …}
11
: 
{name: 'India', topLevelDomain: Array(1), alpha2Code: 'IN', alpha3Code: 'IND', callingCodes: Array(1), …}
12
: 
{name: 'Indonesia', topLevelDomain: Array(1), alpha2Code: 'ID', alpha3Code: 'IDN', callingCodes: Array(1), …}
13
: 
{name: 'Iran (Islamic Republic of)', topLevelDomain: Array(1), alpha2Code: 'IR', alpha3Code: 'IRN', callingCodes: Array(1), …}
14
: 
{name: 'Iraq', topLevelDomain: Array(1), alpha2Code: 'IQ', alpha3Code: 'IRQ', callingCodes: Array(1), …}
15
: 
{name: 'Israel', topLevelDomain: Array(1), alpha2Code: 'IL', alpha3Code: 'ISR', callingCodes: Array(1), …}
16
: 
{name: 'Japan', topLevelDomain: Array(1), alpha2Code: 'JP', alpha3Code: 'JPN', callingCodes: Array(1), …}
17
: 
{name: 'Jordan', topLevelDomain: Array(1), alpha2Code: 'JO', alpha3Code: 'JOR', callingCodes: Array(1), …}
18
: 
{name: 'Kazakhstan', topLevelDomain: Array(2), alpha2Code: 'KZ', alpha3Code: 'KAZ', callingCodes: Array(2), …}
19
: 
{name: 'Kuwait', topLevelDomain: Array(1), alpha2Code: 'KW', alpha3Code: 'KWT', callingCodes: Array(1), …}
20
: 
{name: 'Kyrgyzstan', topLevelDomain: Array(1), alpha2Code: 'KG', alpha3Code: 'KGZ', callingCodes: Array(1), …}
21
: 
{name: "Lao People's Democratic Republic", topLevelDomain: Array(1), alpha2Code: 'LA', alpha3Code: 'LAO', callingCodes: Array(1), …}
22
: 
{name: 'Lebanon', topLevelDomain: Array(1), alpha2Code: 'LB', alpha3Code: 'LBN', callingCodes: Array(1), …}
23
: 
{name: 'Macao', topLevelDomain: Array(1), alpha2Code: 'MO', alpha3Code: 'MAC', callingCodes: Array(1), …}
24
: 
{name: 'Malaysia', topLevelDomain: Array(1), alpha2Code: 'MY', alpha3Code: 'MYS', callingCodes: Array(1), …}
25
: 
{name: 'Maldives', topLevelDomain: Array(1), alpha2Code: 'MV', alpha3Code: 'MDV', callingCodes: Array(1), …}
26
: 
{name: 'Mongolia', topLevelDomain: Array(1), alpha2Code: 'MN', alpha3Code: 'MNG', callingCodes: Array(1), …}
27
: 
{name: 'Myanmar', topLevelDomain: Array(1), alpha2Code: 'MM', alpha3Code: 'MMR', callingCodes: Array(1), …}
28
: 
{name: 'Nepal', topLevelDomain: Array(1), alpha2Code: 'NP', alpha3Code: 'NPL', callingCodes: Array(1), …}
29
: 
{name: "Korea (Democratic People's Republic of)", topLevelDomain: Array(1), alpha2Code: 'KP', alpha3Code: 'PRK', callingCodes: Array(1), …}
30
: 
{name: 'Oman', topLevelDomain: Array(1), alpha2Code: 'OM', alpha3Code: 'OMN', callingCodes: Array(1), …}
31
: 
{name: 'Pakistan', topLevelDomain: Array(1), alpha2Code: 'PK', alpha3Code: 'PAK', callingCodes: Array(1), …}
32
: 
{name: 'Palestine, State of', topLevelDomain: Array(1), alpha2Code: 'PS', alpha3Code: 'PSE', callingCodes: Array(1), …}
33
: 
{name: 'Philippines', topLevelDomain: Array(1), alpha2Code: 'PH', alpha3Code: 'PHL', callingCodes: Array(1), …}
34
: 
{name: 'Qatar', topLevelDomain: Array(1), alpha2Code: 'QA', alpha3Code: 'QAT', callingCodes: Array(1), …}
35
: 
{name: 'Saudi Arabia', topLevelDomain: Array(1), alpha2Code: 'SA', alpha3Code: 'SAU', callingCodes: Array(1), …}
36
: 
{name: 'Singapore', topLevelDomain: Array(1), alpha2Code: 'SG', alpha3Code: 'SGP', callingCodes: Array(1), …}
37
: 
{name: 'Korea (Republic of)', topLevelDomain: Array(1), alpha2Code: 'KR', alpha3Code: 'KOR', callingCodes: Array(1), …}
38
: 
{name: 'Sri Lanka', topLevelDomain: Array(1), alpha2Code: 'LK', alpha3Code: 'LKA', callingCodes: Array(1), …}
39
: 
{name: 'Syrian Arab Republic', topLevelDomain: Array(1), alpha2Code: 'SY', alpha3Code: 'SYR', callingCodes: Array(1), …}
40
: 
{name: 'Taiwan', topLevelDomain: Array(1), alpha2Code: 'TW', alpha3Code: 'TWN', callingCodes: Array(1), …}
41
: 
{name: 'Tajikistan', topLevelDomain: Array(1), alpha2Code: 'TJ', alpha3Code: 'TJK', callingCodes: Array(1), …}
42
: 
{name: 'Thailand', topLevelDomain: Array(1), alpha2Code: 'TH', alpha3Code: 'THA', callingCodes: Array(1), …}
43
: 
{name: 'Timor-Leste', topLevelDomain: Array(1), alpha2Code: 'TL', alpha3Code: 'TLS', callingCodes: Array(1), …}
44
: 
{name: 'Turkey', topLevelDomain: Array(1), alpha2Code: 'TR', alpha3Code: 'TUR', callingCodes: Array(1), …}
45
: 
{name: 'Turkmenistan', topLevelDomain: Array(1), alpha2Code: 'TM', alpha3Code: 'TKM', callingCodes: Array(1), …}
46
: 
{name: 'United Arab Emirates', topLevelDomain: Array(1), alpha2Code: 'AE', alpha3Code: 'ARE', callingCodes: Array(1), …}
47
: 
{name: 'Uzbekistan', topLevelDomain: Array(1), alpha2Code: 'UZ', alpha3Code: 'UZB', callingCodes: Array(1), …}
48
: 
{name: 'Vietnam', topLevelDomain: Array(1), alpha2Code: 'VN', alpha3Code: 'VNM', callingCodes: Array(1), …}
49
: 
{name: 'Yemen', topLevelDomain: Array(1), alpha2Code: 'YE', alpha3Code: 'YEM', callingCodes: Array(1), …}
length
: 
50
[[Prototype]]
: 
Array(0)
*/