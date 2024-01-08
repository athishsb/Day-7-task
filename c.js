var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v2/all");
request3.send();
request3.onload = function () {
    var result = JSON.parse(request3.response);
    result.forEach(country => {
        console.log('Name:', country.name);
        console.log('Capital:', country.capital);
        console.log('Flag:', country.flag);
        console.log('----------------------');
    });
};


//Output:
/*
Name: Afghanistan
c.js:8 Capital: Kabul
c.js:9 Flag: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
c.js:10 ----------------------
c.js:7 Name: Åland Islands
c.js:8 Capital: Mariehamn
c.js:9 Flag: https://flagcdn.com/ax.svg
c.js:10 ----------------------
c.js:7 Name: Albania
c.js:8 Capital: Tirana
c.js:9 Flag: https://flagcdn.com/al.svg
c.js:10 ----------------------
c.js:7 Name: Algeria
c.js:8 Capital: Algiers
c.js:9 Flag: https://flagcdn.com/dz.svg
c.js:10 ----------------------
c.js:7 Name: American Samoa
c.js:8 Capital: Pago Pago
c.js:9 Flag: https://flagcdn.com/as.svg
c.js:10 ----------------------
c.js:7 Name: Andorra
c.js:8 Capital: Andorra la Vella
c.js:9 Flag: https://flagcdn.com/ad.svg
c.js:10 ----------------------
c.js:7 Name: Angola
c.js:8 Capital: Luanda
c.js:9 Flag: https://flagcdn.com/ao.svg
c.js:10 ----------------------
c.js:7 Name: Anguilla
c.js:8 Capital: The Valley
c.js:9 Flag: https://flagcdn.com/ai.svg
c.js:10 ----------------------
c.js:7 Name: Antarctica
c.js:8 Capital: undefined
c.js:9 Flag: https://flagcdn.com/aq.svg
c.js:10 ----------------------
c.js:7 Name: Antigua and Barbuda
c.js:8 Capital: Saint John's
c.js:9 Flag: https://flagcdn.com/ag.svg
c.js:10 ----------------------
c.js:7 Name: Argentina
c.js:8 Capital: Buenos Aires
c.js:9 Flag: https://flagcdn.com/ar.svg
c.js:10 ----------------------
c.js:7 Name: Armenia
c.js:8 Capital: Yerevan
c.js:9 Flag: https://flagcdn.com/am.svg
c.js:10 ----------------------
c.js:7 Name: Aruba
c.js:8 Capital: Oranjestad
c.js:9 Flag: https://flagcdn.com/aw.svg
c.js:10 ----------------------
c.js:7 Name: Australia
c.js:8 Capital: Canberra
c.js:9 Flag: https://flagcdn.com/au.svg
c.js:10 ----------------------
c.js:7 Name: Austria
c.js:8 Capital: Vienna
c.js:9 Flag: https://flagcdn.com/at.svg
c.js:10 ----------------------
c.js:7 Name: Azerbaijan
c.js:8 Capital: Baku
c.js:9 Flag: https://flagcdn.com/az.svg
c.js:10 ----------------------
c.js:7 Name: Bahamas
c.js:8 Capital: Nassau
c.js:9 Flag: https://flagcdn.com/bs.svg
c.js:10 ----------------------
c.js:7 Name: Bahrain
c.js:8 Capital: Manama
c.js:9 Flag: https://flagcdn.com/bh.svg
c.js:10 ----------------------
c.js:7 Name: Bangladesh
c.js:8 Capital: Dhaka
c.js:9 Flag: https://flagcdn.com/bd.svg
c.js:10 ----------------------
c.js:7 Name: Barbados
c.js:8 Capital: Bridgetown
c.js:9 Flag: https://flagcdn.com/bb.svg
c.js:10 ----------------------
c.js:7 Name: Belarus
c.js:8 Capital: Minsk
c.js:9 Flag: https://flagcdn.com/by.svg
c.js:10 ----------------------
c.js:7 Name: Belgium
c.js:8 Capital: Brussels
c.js:9 Flag: https://flagcdn.com/be.svg
c.js:10 ----------------------
c.js:7 Name: Belize
c.js:8 Capital: Belmopan
c.js:9 Flag: https://flagcdn.com/bz.svg
c.js:10 ----------------------
c.js:7 Name: Benin
c.js:8 Capital: Porto-Novo
c.js:9 Flag: https://flagcdn.com/bj.svg
c.js:10 ----------------------
c.js:7 Name: Bermuda
c.js:8 Capital: Hamilton
c.js:9 Flag: https://flagcdn.com/bm.svg
c.js:10 ----------------------
c.js:7 Name: Bhutan
c.js:8 Capital: Thimphu
c.js:9 Flag: https://flagcdn.com/bt.svg
c.js:10 ----------------------
c.js:7 Name: Bolivia (Plurinational State of)
c.js:8 Capital: Sucre
c.js:9 Flag: https://flagcdn.com/bo.svg
c.js:10 ----------------------
c.js:7 Name: Bonaire, Sint Eustatius and Saba
c.js:8 Capital: Kralendijk
c.js:9 Flag: https://flagcdn.com/bq.svg
c.js:10 ----------------------
c.js:7 Name: Bosnia and Herzegovina
c.js:8 Capital: Sarajevo
c.js:9 Flag: https://flagcdn.com/ba.svg
c.js:10 ----------------------
c.js:7 Name: Botswana
c.js:8 Capital: Gaborone
c.js:9 Flag: https://flagcdn.com/bw.svg
c.js:10 ----------------------
c.js:7 Name: Bouvet Island
c.js:8 Capital: undefined
c.js:9 Flag: https://flagcdn.com/bv.svg
c.js:10 ----------------------
c.js:7 Name: Brazil
c.js:8 Capital: Brasília
c.js:9 Flag: https://flagcdn.com/br.svg
c.js:10 ----------------------
c.js:7 Name: British Indian Ocean Territory
c.js:8 Capital: Diego Garcia
c.js:9 Flag: https://flagcdn.com/io.svg
c.js:10 ----------------------
c.js:7 Name: United States Minor Outlying Islands
c.js:8 Capital: undefined
c.js:9 Flag: https://flagcdn.com/um.svg
c.js:10 ----------------------
c.js:7 Name: Virgin Islands (British)
c.js:8 Capital: Road Town
c.js:9 Flag: https://flagcdn.com/vg.svg
c.js:10 ----------------------
c.js:7 Name: Virgin Islands (U.S.)
c.js:8 Capital: Charlotte Amalie
c.js:9 Flag: https://flagcdn.com/vi.svg
c.js:10 ----------------------
c.js:7 Name: Brunei Darussalam
c.js:8 Capital: Bandar Seri Begawan
c.js:9 Flag: https://flagcdn.com/bn.svg
c.js:10 ----------------------
c.js:7 Name: Bulgaria
c.js:8 Capital: Sofia
c.js:9 Flag: https://flagcdn.com/bg.svg
c.js:10 ----------------------
c.js:7 Name: Burkina Faso
c.js:8 Capital: Ouagadougou
c.js:9 Flag: https://flagcdn.com/bf.svg
c.js:10 ----------------------
c.js:7 Name: Burundi
c.js:8 Capital: Gitega
c.js:9 Flag: https://flagcdn.com/bi.svg
c.js:10 ----------------------
c.js:7 Name: Cambodia
c.js:8 Capital: Phnom Penh
c.js:9 Flag: https://flagcdn.com/kh.svg
c.js:10 ----------------------
c.js:7 Name: Cameroon
c.js:8 Capital: Yaoundé
c.js:9 Flag: https://flagcdn.com/cm.svg
c.js:10 ----------------------
c.js:7 Name: Canada
c.js:8 Capital: Ottawa
c.js:9 Flag: https://flagcdn.com/ca.svg
c.js:10 ----------------------
c.js:7 Name: Cabo Verde
c.js:8 Capital: Praia
c.js:9 Flag: https://flagcdn.com/cv.svg
c.js:10 ----------------------
c.js:7 Name: Cayman Islands
c.js:8 Capital: George Town
c.js:9 Flag: https://flagcdn.com/ky.svg
c.js:10 ----------------------
c.js:7 Name: Central African Republic
c.js:8 Capital: Bangui
c.js:9 Flag: https://flagcdn.com/cf.svg
c.js:10 ----------------------
c.js:7 Name: Chad
c.js:8 Capital: N'Djamena
c.js:9 Flag: https://flagcdn.com/td.svg
c.js:10 ----------------------
c.js:7 Name: Chile
c.js:8 Capital: Santiago
c.js:9 Flag: https://flagcdn.com/cl.svg
c.js:10 ----------------------
c.js:7 Name: China
c.js:8 Capital: Beijing
c.js:9 Flag: https://flagcdn.com/cn.svg
c.js:10 ----------------------
c.js:7 Name: Christmas Island
c.js:8 Capital: Flying Fish Cove
c.js:9 Flag: https://flagcdn.com/cx.svg
c.js:10 ----------------------
c.js:7 Name: Cocos (Keeling) Islands
c.js:8 Capital: West Island
c.js:9 Flag: https://flagcdn.com/cc.svg
c.js:10 ----------------------
c.js:7 Name: Colombia
c.js:8 Capital: Bogotá
c.js:9 Flag: https://flagcdn.com/co.svg
c.js:10 ----------------------
c.js:7 Name: Comoros
c.js:8 Capital: Moroni
c.js:9 Flag: https://flagcdn.com/km.svg
c.js:10 ----------------------
c.js:7 Name: Congo
c.js:8 Capital: Brazzaville
c.js:9 Flag: https://flagcdn.com/cg.svg
c.js:10 ----------------------
c.js:7 Name: Congo (Democratic Republic of the)
c.js:8 Capital: Kinshasa
c.js:9 Flag: https://flagcdn.com/cd.svg
c.js:10 ----------------------
c.js:7 Name: Cook Islands
c.js:8 Capital: Avarua
c.js:9 Flag: https://flagcdn.com/ck.svg
c.js:10 ----------------------
c.js:7 Name: Costa Rica
c.js:8 Capital: San José
c.js:9 Flag: https://flagcdn.com/cr.svg
c.js:10 ----------------------
c.js:7 Name: Croatia
c.js:8 Capital: Zagreb
c.js:9 Flag: https://flagcdn.com/hr.svg
c.js:10 ----------------------
c.js:7 Name: Cuba
c.js:8 Capital: Havana
c.js:9 Flag: https://flagcdn.com/cu.svg
c.js:10 ----------------------
c.js:7 Name: Curaçao
c.js:8 Capital: Willemstad
c.js:9 Flag: https://flagcdn.com/cw.svg
c.js:10 ----------------------
c.js:7 Name: Cyprus
c.js:8 Capital: Nicosia
c.js:9 Flag: https://flagcdn.com/cy.svg
c.js:10 ----------------------
c.js:7 Name: Czech Republic
c.js:8 Capital: Prague
c.js:9 Flag: https://flagcdn.com/cz.svg
c.js:10 ----------------------
c.js:7 Name: Denmark
c.js:8 Capital: Copenhagen
c.js:9 Flag: https://flagcdn.com/dk.svg
c.js:10 ----------------------
c.js:7 Name: Djibouti
c.js:8 Capital: Djibouti
c.js:9 Flag: https://flagcdn.com/dj.svg
c.js:10 ----------------------
c.js:7 Name: Dominica
c.js:8 Capital: Roseau
c.js:9 Flag: https://flagcdn.com/dm.svg
c.js:10 ----------------------
c.js:7 Name: Dominican Republic
c.js:8 Capital: Santo Domingo
c.js:9 Flag: https://flagcdn.com/do.svg
c.js:10 ----------------------
c.js:7 Name: Ecuador
c.js:8 Capital: Quito
c.js:9 Flag: https://flagcdn.com/ec.svg
c.js:10 ----------------------
c.js:7 Name: Egypt
c.js:8 Capital: Cairo
c.js:9 Flag: https://flagcdn.com/eg.svg
c.js:10 ----------------------
c.js:7 Name: El Salvador
c.js:8 Capital: San Salvador
c.js:9 Flag: https://flagcdn.com/sv.svg
c.js:10 ----------------------
c.js:7 Name: Equatorial Guinea
c.js:8 Capital: Malabo
c.js:9 Flag: https://flagcdn.com/gq.svg
c.js:10 ----------------------
c.js:7 Name: Eritrea
c.js:8 Capital: Asmara
c.js:9 Flag: https://flagcdn.com/er.svg
c.js:10 ----------------------
c.js:7 Name: Estonia
c.js:8 Capital: Tallinn
c.js:9 Flag: https://flagcdn.com/ee.svg
c.js:10 ----------------------
c.js:7 Name: Ethiopia
c.js:8 Capital: Addis Ababa
c.js:9 Flag: https://flagcdn.com/et.svg
c.js:10 ----------------------
c.js:7 Name: Falkland Islands (Malvinas)
c.js:8 Capital: Stanley
c.js:9 Flag: https://flagcdn.com/fk.svg
c.js:10 ----------------------
c.js:7 Name: Faroe Islands
c.js:8 Capital: Tórshavn
c.js:9 Flag: https://flagcdn.com/fo.svg
c.js:10 ----------------------
c.js:7 Name: Fiji
c.js:8 Capital: Suva
c.js:9 Flag: https://flagcdn.com/fj.svg
c.js:10 ----------------------
c.js:7 Name: Finland
c.js:8 Capital: Helsinki
c.js:9 Flag: https://flagcdn.com/fi.svg
c.js:10 ----------------------
c.js:7 Name: France
c.js:8 Capital: Paris
c.js:9 Flag: https://flagcdn.com/fr.svg
c.js:10 ----------------------
c.js:7 Name: French Guiana
c.js:8 Capital: Cayenne
c.js:9 Flag: https://flagcdn.com/gf.svg
c.js:10 ----------------------
c.js:7 Name: French Polynesia
c.js:8 Capital: Papeetē
c.js:9 Flag: https://flagcdn.com/pf.svg
c.js:10 ----------------------
c.js:7 Name: French Southern Territories
c.js:8 Capital: Port-aux-Français
c.js:9 Flag: https://flagcdn.com/tf.svg
c.js:10 ----------------------
c.js:7 Name: Gabon
c.js:8 Capital: Libreville
c.js:9 Flag: https://flagcdn.com/ga.svg
c.js:10 ----------------------
c.js:7 Name: Gambia
c.js:8 Capital: Banjul
c.js:9 Flag: https://flagcdn.com/gm.svg
c.js:10 ----------------------
c.js:7 Name: Georgia
c.js:8 Capital: Tbilisi
c.js:9 Flag: https://flagcdn.com/ge.svg
c.js:10 ----------------------
c.js:7 Name: Germany
c.js:8 Capital: Berlin
c.js:9 Flag: https://flagcdn.com/de.svg
c.js:10 ----------------------
c.js:7 Name: Ghana
c.js:8 Capital: Accra
c.js:9 Flag: https://flagcdn.com/gh.svg
c.js:10 ----------------------
c.js:7 Name: Gibraltar
c.js:8 Capital: Gibraltar
c.js:9 Flag: https://flagcdn.com/gi.svg
c.js:10 ----------------------
c.js:7 Name: Greece
c.js:8 Capital: Athens
c.js:9 Flag: https://flagcdn.com/gr.svg
c.js:10 ----------------------
c.js:7 Name: Greenland
c.js:8 Capital: Nuuk
c.js:9 Flag: https://flagcdn.com/gl.svg
c.js:10 ----------------------
c.js:7 Name: Grenada
c.js:8 Capital: St. George's
c.js:9 Flag: https://flagcdn.com/gd.svg
c.js:10 ----------------------
c.js:7 Name: Guadeloupe
c.js:8 Capital: Basse-Terre
c.js:9 Flag: https://flagcdn.com/gp.svg
c.js:10 ----------------------
c.js:7 Name: Guam
c.js:8 Capital: Hagåtña
c.js:9 Flag: https://flagcdn.com/gu.svg
c.js:10 ----------------------
c.js:7 Name: Guatemala
c.js:8 Capital: Guatemala City
c.js:9 Flag: https://flagcdn.com/gt.svg
c.js:10 ----------------------
c.js:7 Name: Guernsey
c.js:8 Capital: St. Peter Port
c.js:9 Flag: https://flagcdn.com/gg.svg
c.js:10 ----------------------
c.js:7 Name: Guinea
c.js:8 Capital: Conakry
c.js:9 Flag: https://flagcdn.com/gn.svg
c.js:10 ----------------------
c.js:7 Name: Guinea-Bissau
c.js:8 Capital: Bissau
c.js:9 Flag: https://flagcdn.com/gw.svg
c.js:10 ----------------------
c.js:7 Name: Guyana
c.js:8 Capital: Georgetown
c.js:9 Flag: https://flagcdn.com/gy.svg
c.js:10 ----------------------
c.js:7 Name: Haiti
c.js:8 Capital: Port-au-Prince
c.js:9 Flag: https://flagcdn.com/ht.svg
c.js:10 ----------------------
c.js:7 Name: Heard Island and McDonald Islands
c.js:8 Capital: undefined
c.js:9 Flag: https://flagcdn.com/hm.svg
c.js:10 ----------------------
c.js:7 Name: Vatican City
c.js:8 Capital: Vatican City
c.js:9 Flag: https://flagcdn.com/va.svg
c.js:10 ----------------------
c.js:7 Name: Honduras
c.js:8 Capital: Tegucigalpa
c.js:9 Flag: https://flagcdn.com/hn.svg
c.js:10 ----------------------
c.js:7 Name: Hungary
c.js:8 Capital: Budapest
c.js:9 Flag: https://flagcdn.com/hu.svg
c.js:10 ----------------------
c.js:7 Name: Hong Kong
c.js:8 Capital: City of Victoria
c.js:9 Flag: https://flagcdn.com/hk.svg
c.js:10 ----------------------
c.js:7 Name: Iceland
c.js:8 Capital: Reykjavík
c.js:9 Flag: https://flagcdn.com/is.svg
c.js:10 ----------------------
c.js:7 Name: India
c.js:8 Capital: New Delhi
c.js:9 Flag: https://flagcdn.com/in.svg
c.js:10 ----------------------
c.js:7 Name: Indonesia
c.js:8 Capital: Jakarta
c.js:9 Flag: https://flagcdn.com/id.svg
c.js:10 ----------------------
c.js:7 Name: Ivory Coast
c.js:8 Capital: Yamoussoukro
c.js:9 Flag: https://flagcdn.com/ci.svg
c.js:10 ----------------------
c.js:7 Name: Iran (Islamic Republic of)
c.js:8 Capital: Tehran
c.js:9 Flag: https://flagcdn.com/ir.svg
c.js:10 ----------------------
c.js:7 Name: Iraq
c.js:8 Capital: Baghdad
c.js:9 Flag: https://flagcdn.com/iq.svg
c.js:10 ----------------------
c.js:7 Name: Ireland
c.js:8 Capital: Dublin
c.js:9 Flag: https://flagcdn.com/ie.svg
c.js:10 ----------------------
c.js:7 Name: Isle of Man
c.js:8 Capital: Douglas
c.js:9 Flag: https://flagcdn.com/im.svg
c.js:10 ----------------------
c.js:7 Name: Israel
c.js:8 Capital: Jerusalem
c.js:9 Flag: https://flagcdn.com/il.svg
c.js:10 ----------------------
c.js:7 Name: Italy
c.js:8 Capital: Rome
c.js:9 Flag: https://flagcdn.com/it.svg
c.js:10 ----------------------
c.js:7 Name: Jamaica
c.js:8 Capital: Kingston
c.js:9 Flag: https://flagcdn.com/jm.svg
c.js:10 ----------------------
c.js:7 Name: Japan
c.js:8 Capital: Tokyo
c.js:9 Flag: https://flagcdn.com/jp.svg
c.js:10 ----------------------
c.js:7 Name: Jersey
c.js:8 Capital: Saint Helier
c.js:9 Flag: https://flagcdn.com/je.svg
c.js:10 ----------------------
c.js:7 Name: Jordan
c.js:8 Capital: Amman
c.js:9 Flag: https://flagcdn.com/jo.svg
c.js:10 ----------------------
c.js:7 Name: Kazakhstan
c.js:8 Capital: Nur-Sultan
c.js:9 Flag: https://flagcdn.com/kz.svg
c.js:10 ----------------------
c.js:7 Name: Kenya
c.js:8 Capital: Nairobi
c.js:9 Flag: https://flagcdn.com/ke.svg
c.js:10 ----------------------
c.js:7 Name: Kiribati
c.js:8 Capital: South Tarawa
c.js:9 Flag: https://flagcdn.com/ki.svg
c.js:10 ----------------------
c.js:7 Name: Kuwait
c.js:8 Capital: Kuwait City
c.js:9 Flag: https://flagcdn.com/kw.svg
c.js:10 ----------------------
c.js:7 Name: Kyrgyzstan
c.js:8 Capital: Bishkek
c.js:9 Flag: https://flagcdn.com/kg.svg
c.js:10 ----------------------
c.js:7 Name: Lao People's Democratic Republic
c.js:8 Capital: Vientiane
c.js:9 Flag: https://flagcdn.com/la.svg
c.js:10 ----------------------
c.js:7 Name: Latvia
c.js:8 Capital: Riga
c.js:9 Flag: https://flagcdn.com/lv.svg
c.js:10 ----------------------
c.js:7 Name: Lebanon
c.js:8 Capital: Beirut
c.js:9 Flag: https://flagcdn.com/lb.svg
c.js:10 ----------------------
c.js:7 Name: Lesotho
c.js:8 Capital: Maseru
c.js:9 Flag: https://flagcdn.com/ls.svg
c.js:10 ----------------------
c.js:7 Name: Liberia
c.js:8 Capital: Monrovia
c.js:9 Flag: https://flagcdn.com/lr.svg
c.js:10 ----------------------
c.js:7 Name: Libya
c.js:8 Capital: Tripoli
c.js:9 Flag: https://flagcdn.com/ly.svg
c.js:10 ----------------------
c.js:7 Name: Liechtenstein
c.js:8 Capital: Vaduz
c.js:9 Flag: https://flagcdn.com/li.svg
c.js:10 ----------------------
c.js:7 Name: Lithuania
c.js:8 Capital: Vilnius
c.js:9 Flag: https://flagcdn.com/lt.svg
c.js:10 ----------------------
c.js:7 Name: Luxembourg
c.js:8 Capital: Luxembourg
c.js:9 Flag: https://flagcdn.com/lu.svg
c.js:10 ----------------------
c.js:7 Name: Macao
c.js:8 Capital: undefined
c.js:9 Flag: https://flagcdn.com/mo.svg
c.js:10 ----------------------
c.js:7 Name: North Macedonia
c.js:8 Capital: Skopje
c.js:9 Flag: https://flagcdn.com/mk.svg
c.js:10 ----------------------
c.js:7 Name: Madagascar
c.js:8 Capital: Antananarivo
c.js:9 Flag: https://flagcdn.com/mg.svg
c.js:10 ----------------------
c.js:7 Name: Malawi
c.js:8 Capital: Lilongwe
c.js:9 Flag: https://flagcdn.com/mw.svg
c.js:10 ----------------------
c.js:7 Name: Malaysia
c.js:8 Capital: Kuala Lumpur
c.js:9 Flag: https://flagcdn.com/my.svg
c.js:10 ----------------------
c.js:7 Name: Maldives
c.js:8 Capital: Malé
c.js:9 Flag: https://flagcdn.com/mv.svg
c.js:10 ----------------------
c.js:7 Name: Mali
c.js:8 Capital: Bamako
c.js:9 Flag: https://flagcdn.com/ml.svg
c.js:10 ----------------------
c.js:7 Name: Malta
c.js:8 Capital: Valletta
c.js:9 Flag: https://flagcdn.com/mt.svg
c.js:10 ----------------------
c.js:7 Name: Marshall Islands
c.js:8 Capital: Majuro
c.js:9 Flag: https://flagcdn.com/mh.svg
c.js:10 ----------------------
c.js:7 Name: Martinique
c.js:8 Capital: Fort-de-France
c.js:9 Flag: https://flagcdn.com/mq.svg
c.js:10 ----------------------
c.js:7 Name: Mauritania
c.js:8 Capital: Nouakchott
c.js:9 Flag: https://flagcdn.com/mr.svg
c.js:10 ----------------------
c.js:7 Name: Mauritius
c.js:8 Capital: Port Louis
c.js:9 Flag: https://flagcdn.com/mu.svg
c.js:10 ----------------------
c.js:7 Name: Mayotte
c.js:8 Capital: Mamoudzou
c.js:9 Flag: https://flagcdn.com/yt.svg
c.js:10 ----------------------
c.js:7 Name: Mexico
c.js:8 Capital: Mexico City
c.js:9 Flag: https://flagcdn.com/mx.svg
c.js:10 ----------------------
c.js:7 Name: Micronesia (Federated States of)
c.js:8 Capital: Palikir
c.js:9 Flag: https://flagcdn.com/fm.svg
c.js:10 ----------------------
c.js:7 Name: Moldova (Republic of)
c.js:8 Capital: Chișinău
c.js:9 Flag: https://flagcdn.com/md.svg
c.js:10 ----------------------
c.js:7 Name: Monaco
c.js:8 Capital: Monaco
c.js:9 Flag: https://flagcdn.com/mc.svg
c.js:10 ----------------------
c.js:7 Name: Mongolia
c.js:8 Capital: Ulan Bator
c.js:9 Flag: https://flagcdn.com/mn.svg
c.js:10 ----------------------
c.js:7 Name: Montenegro
c.js:8 Capital: Podgorica
c.js:9 Flag: https://flagcdn.com/me.svg
c.js:10 ----------------------
c.js:7 Name: Montserrat
c.js:8 Capital: Plymouth
c.js:9 Flag: https://flagcdn.com/ms.svg
c.js:10 ----------------------
c.js:7 Name: Morocco
c.js:8 Capital: Rabat
c.js:9 Flag: https://flagcdn.com/ma.svg
c.js:10 ----------------------
c.js:7 Name: Mozambique
c.js:8 Capital: Maputo
c.js:9 Flag: https://flagcdn.com/mz.svg
c.js:10 ----------------------
c.js:7 Name: Myanmar
c.js:8 Capital: Naypyidaw
c.js:9 Flag: https://flagcdn.com/mm.svg
c.js:10 ----------------------
c.js:7 Name: Namibia
c.js:8 Capital: Windhoek
c.js:9 Flag: https://flagcdn.com/na.svg
c.js:10 ----------------------
c.js:7 Name: Nauru
c.js:8 Capital: Yaren
c.js:9 Flag: https://flagcdn.com/nr.svg
c.js:10 ----------------------
c.js:7 Name: Nepal
c.js:8 Capital: Kathmandu
c.js:9 Flag: https://flagcdn.com/np.svg
c.js:10 ----------------------
c.js:7 Name: Netherlands
c.js:8 Capital: Amsterdam
c.js:9 Flag: https://flagcdn.com/nl.svg
c.js:10 ----------------------
c.js:7 Name: New Caledonia
c.js:8 Capital: Nouméa
c.js:9 Flag: https://flagcdn.com/nc.svg
c.js:10 ----------------------
c.js:7 Name: New Zealand
c.js:8 Capital: Wellington
c.js:9 Flag: https://flagcdn.com/nz.svg
c.js:10 ----------------------
c.js:7 Name: Nicaragua
c.js:8 Capital: Managua
c.js:9 Flag: https://flagcdn.com/ni.svg
c.js:10 ----------------------
c.js:7 Name: Niger
c.js:8 Capital: Niamey
c.js:9 Flag: https://flagcdn.com/ne.svg
c.js:10 ----------------------
c.js:7 Name: Nigeria
c.js:8 Capital: Abuja
c.js:9 Flag: https://flagcdn.com/ng.svg
c.js:10 ----------------------
c.js:7 Name: Niue
c.js:8 Capital: Alofi
c.js:9 Flag: https://flagcdn.com/nu.svg
c.js:10 ----------------------
c.js:7 Name: Norfolk Island
c.js:8 Capital: Kingston
c.js:9 Flag: https://flagcdn.com/nf.svg
c.js:10 ----------------------
c.js:7 Name: Korea (Democratic People's Republic of)
c.js:8 Capital: Pyongyang
c.js:9 Flag: https://flagcdn.com/kp.svg
c.js:10 ----------------------
c.js:7 Name: Northern Mariana Islands
c.js:8 Capital: Saipan
c.js:9 Flag: https://flagcdn.com/mp.svg
c.js:10 ----------------------
c.js:7 Name: Norway
c.js:8 Capital: Oslo
c.js:9 Flag: https://flagcdn.com/no.svg
c.js:10 ----------------------
c.js:7 Name: Oman
c.js:8 Capital: Muscat
c.js:9 Flag: https://flagcdn.com/om.svg
c.js:10 ----------------------
c.js:7 Name: Pakistan
c.js:8 Capital: Islamabad
c.js:9 Flag: https://flagcdn.com/pk.svg
c.js:10 ----------------------
c.js:7 Name: Palau
c.js:8 Capital: Ngerulmud
c.js:9 Flag: https://flagcdn.com/pw.svg
c.js:10 ----------------------
c.js:7 Name: Palestine, State of
c.js:8 Capital: Ramallah
c.js:9 Flag: https://flagcdn.com/ps.svg
c.js:10 ----------------------
c.js:7 Name: Panama
c.js:8 Capital: Panama City
c.js:9 Flag: https://flagcdn.com/pa.svg
c.js:10 ----------------------
c.js:7 Name: Papua New Guinea
c.js:8 Capital: Port Moresby
c.js:9 Flag: https://flagcdn.com/pg.svg
c.js:10 ----------------------
c.js:7 Name: Paraguay
c.js:8 Capital: Asunción
c.js:9 Flag: https://flagcdn.com/py.svg
c.js:10 ----------------------
c.js:7 Name: Peru
c.js:8 Capital: Lima
c.js:9 Flag: https://flagcdn.com/pe.svg
c.js:10 ----------------------
c.js:7 Name: Philippines
c.js:8 Capital: Manila
c.js:9 Flag: https://flagcdn.com/ph.svg
c.js:10 ----------------------
c.js:7 Name: Pitcairn
c.js:8 Capital: Adamstown
c.js:9 Flag: https://flagcdn.com/pn.svg
c.js:10 ----------------------
c.js:7 Name: Poland
c.js:8 Capital: Warsaw
c.js:9 Flag: https://flagcdn.com/pl.svg
c.js:10 ----------------------
c.js:7 Name: Portugal
c.js:8 Capital: Lisbon
c.js:9 Flag: https://flagcdn.com/pt.svg
c.js:10 ----------------------
c.js:7 Name: Puerto Rico
c.js:8 Capital: San Juan
c.js:9 Flag: https://flagcdn.com/pr.svg
c.js:10 ----------------------
c.js:7 Name: Qatar
c.js:8 Capital: Doha
c.js:9 Flag: https://flagcdn.com/qa.svg
c.js:10 ----------------------
c.js:7 Name: Republic of Kosovo
c.js:8 Capital: Pristina
c.js:9 Flag: https://flagcdn.com/xk.svg
c.js:10 ----------------------
c.js:7 Name: Réunion
c.js:8 Capital: Saint-Denis
c.js:9 Flag: https://flagcdn.com/re.svg
c.js:10 ----------------------
c.js:7 Name: Romania
c.js:8 Capital: Bucharest
c.js:9 Flag: https://flagcdn.com/ro.svg
c.js:10 ----------------------
c.js:7 Name: Russian Federation
c.js:8 Capital: Moscow
c.js:9 Flag: https://flagcdn.com/ru.svg
c.js:10 ----------------------
c.js:7 Name: Rwanda
c.js:8 Capital: Kigali
c.js:9 Flag: https://flagcdn.com/rw.svg
c.js:10 ----------------------
c.js:7 Name: Saint Barthélemy
c.js:8 Capital: Gustavia
c.js:9 Flag: https://flagcdn.com/bl.svg
c.js:10 ----------------------
c.js:7 Name: Saint Helena, Ascension and Tristan da Cunha
c.js:8 Capital: Jamestown
c.js:9 Flag: https://flagcdn.com/sh.svg
c.js:10 ----------------------
c.js:7 Name: Saint Kitts and Nevis
c.js:8 Capital: Basseterre
c.js:9 Flag: https://flagcdn.com/kn.svg
c.js:10 ----------------------
c.js:7 Name: Saint Lucia
c.js:8 Capital: Castries
c.js:9 Flag: https://flagcdn.com/lc.svg
c.js:10 ----------------------
c.js:7 Name: Saint Martin (French part)
c.js:8 Capital: Marigot
c.js:9 Flag: https://flagcdn.com/mf.svg
c.js:10 ----------------------
c.js:7 Name: Saint Pierre and Miquelon
c.js:8 Capital: Saint-Pierre
c.js:9 Flag: https://flagcdn.com/pm.svg
c.js:10 ----------------------
c.js:7 Name: Saint Vincent and the Grenadines
c.js:8 Capital: Kingstown
c.js:9 Flag: https://flagcdn.com/vc.svg
c.js:10 ----------------------
c.js:7 Name: Samoa
c.js:8 Capital: Apia
c.js:9 Flag: https://flagcdn.com/ws.svg
c.js:10 ----------------------
c.js:7 Name: San Marino
c.js:8 Capital: City of San Marino
c.js:9 Flag: https://flagcdn.com/sm.svg
c.js:10 ----------------------
c.js:7 Name: Sao Tome and Principe
c.js:8 Capital: São Tomé
c.js:9 Flag: https://flagcdn.com/st.svg
c.js:10 ----------------------
c.js:7 Name: Saudi Arabia
c.js:8 Capital: Riyadh
c.js:9 Flag: https://flagcdn.com/sa.svg
c.js:10 ----------------------
c.js:7 Name: Senegal
c.js:8 Capital: Dakar
c.js:9 Flag: https://flagcdn.com/sn.svg
c.js:10 ----------------------
c.js:7 Name: Serbia
c.js:8 Capital: Belgrade
c.js:9 Flag: https://flagcdn.com/rs.svg
c.js:10 ----------------------
c.js:7 Name: Seychelles
c.js:8 Capital: Victoria
c.js:9 Flag: https://flagcdn.com/sc.svg
c.js:10 ----------------------
c.js:7 Name: Sierra Leone
c.js:8 Capital: Freetown
c.js:9 Flag: https://flagcdn.com/sl.svg
c.js:10 ----------------------
c.js:7 Name: Singapore
c.js:8 Capital: Singapore
c.js:9 Flag: https://flagcdn.com/sg.svg
c.js:10 ----------------------
c.js:7 Name: Sint Maarten (Dutch part)
c.js:8 Capital: Philipsburg
c.js:9 Flag: https://flagcdn.com/sx.svg
c.js:10 ----------------------
c.js:7 Name: Slovakia
c.js:8 Capital: Bratislava
c.js:9 Flag: https://flagcdn.com/sk.svg
c.js:10 ----------------------
c.js:7 Name: Slovenia
c.js:8 Capital: Ljubljana
c.js:9 Flag: https://flagcdn.com/si.svg
c.js:10 ----------------------
c.js:7 Name: Solomon Islands
c.js:8 Capital: Honiara
c.js:9 Flag: https://flagcdn.com/sb.svg
c.js:10 ----------------------
c.js:7 Name: Somalia
c.js:8 Capital: Mogadishu
c.js:9 Flag: https://flagcdn.com/so.svg
c.js:10 ----------------------
c.js:7 Name: South Africa
c.js:8 Capital: Pretoria
c.js:9 Flag: https://flagcdn.com/za.svg
c.js:10 ----------------------
c.js:7 Name: South Georgia and the South Sandwich Islands
c.js:8 Capital: King Edward Point
c.js:9 Flag: https://flagcdn.com/gs.svg
c.js:10 ----------------------
c.js:7 Name: Korea (Republic of)
c.js:8 Capital: Seoul
c.js:9 Flag: https://flagcdn.com/kr.svg
c.js:10 ----------------------
c.js:7 Name: Spain
c.js:8 Capital: Madrid
c.js:9 Flag: https://flagcdn.com/es.svg
c.js:10 ----------------------
c.js:7 Name: Sri Lanka
c.js:8 Capital: Sri Jayawardenepura Kotte
c.js:9 Flag: https://flagcdn.com/lk.svg
c.js:10 ----------------------
c.js:7 Name: Sudan
c.js:8 Capital: Khartoum
c.js:9 Flag: https://flagcdn.com/sd.svg
c.js:10 ----------------------
c.js:7 Name: South Sudan
c.js:8 Capital: Juba
c.js:9 Flag: https://flagcdn.com/ss.svg
c.js:10 ----------------------
c.js:7 Name: Suriname
c.js:8 Capital: Paramaribo
c.js:9 Flag: https://flagcdn.com/sr.svg
c.js:10 ----------------------
c.js:7 Name: Svalbard and Jan Mayen
c.js:8 Capital: Longyearbyen
c.js:9 Flag: https://flagcdn.com/sj.svg
c.js:10 ----------------------
c.js:7 Name: Swaziland
c.js:8 Capital: Mbabane
c.js:9 Flag: https://flagcdn.com/sz.svg
c.js:10 ----------------------
c.js:7 Name: Sweden
c.js:8 Capital: Stockholm
c.js:9 Flag: https://flagcdn.com/se.svg
c.js:10 ----------------------
c.js:7 Name: Switzerland
c.js:8 Capital: Bern
c.js:9 Flag: https://flagcdn.com/ch.svg
c.js:10 ----------------------
c.js:7 Name: Syrian Arab Republic
c.js:8 Capital: Damascus
c.js:9 Flag: https://flagcdn.com/sy.svg
c.js:10 ----------------------
c.js:7 Name: Taiwan
c.js:8 Capital: Taipei
c.js:9 Flag: https://flagcdn.com/tw.svg
c.js:10 ----------------------
c.js:7 Name: Tajikistan
c.js:8 Capital: Dushanbe
c.js:9 Flag: https://flagcdn.com/tj.svg
c.js:10 ----------------------
c.js:7 Name: Tanzania, United Republic of
c.js:8 Capital: Dodoma
c.js:9 Flag: https://flagcdn.com/tz.svg
c.js:10 ----------------------
c.js:7 Name: Thailand
c.js:8 Capital: Bangkok
c.js:9 Flag: https://flagcdn.com/th.svg
c.js:10 ----------------------
c.js:7 Name: Timor-Leste
c.js:8 Capital: Dili
c.js:9 Flag: https://flagcdn.com/tl.svg
c.js:10 ----------------------
c.js:7 Name: Togo
c.js:8 Capital: Lomé
c.js:9 Flag: https://flagcdn.com/tg.svg
c.js:10 ----------------------
c.js:7 Name: Tokelau
c.js:8 Capital: Fakaofo
c.js:9 Flag: https://flagcdn.com/tk.svg
c.js:10 ----------------------
c.js:7 Name: Tonga
c.js:8 Capital: Nuku'alofa
c.js:9 Flag: https://flagcdn.com/to.svg
c.js:10 ----------------------
c.js:7 Name: Trinidad and Tobago
c.js:8 Capital: Port of Spain
c.js:9 Flag: https://flagcdn.com/tt.svg
c.js:10 ----------------------
c.js:7 Name: Tunisia
c.js:8 Capital: Tunis
c.js:9 Flag: https://flagcdn.com/tn.svg
c.js:10 ----------------------
c.js:7 Name: Turkey
c.js:8 Capital: Ankara
c.js:9 Flag: https://flagcdn.com/tr.svg
c.js:10 ----------------------
c.js:7 Name: Turkmenistan
c.js:8 Capital: Ashgabat
c.js:9 Flag: https://flagcdn.com/tm.svg
c.js:10 ----------------------
c.js:7 Name: Turks and Caicos Islands
c.js:8 Capital: Cockburn Town
c.js:9 Flag: https://flagcdn.com/tc.svg
c.js:10 ----------------------
c.js:7 Name: Tuvalu
c.js:8 Capital: Funafuti
c.js:9 Flag: https://flagcdn.com/tv.svg
c.js:10 ----------------------
c.js:7 Name: Uganda
c.js:8 Capital: Kampala
c.js:9 Flag: https://flagcdn.com/ug.svg
c.js:10 ----------------------
c.js:7 Name: Ukraine
c.js:8 Capital: Kyiv
c.js:9 Flag: https://flagcdn.com/ua.svg
c.js:10 ----------------------
c.js:7 Name: United Arab Emirates
c.js:8 Capital: Abu Dhabi
c.js:9 Flag: https://flagcdn.com/ae.svg
c.js:10 ----------------------
c.js:7 Name: United Kingdom of Great Britain and Northern Ireland
c.js:8 Capital: London
c.js:9 Flag: https://flagcdn.com/gb.svg
c.js:10 ----------------------
c.js:7 Name: United States of America
c.js:8 Capital: Washington, D.C.
c.js:9 Flag: https://flagcdn.com/us.svg
c.js:10 ----------------------
c.js:7 Name: Uruguay
c.js:8 Capital: Montevideo
c.js:9 Flag: https://flagcdn.com/uy.svg
c.js:10 ----------------------
c.js:7 Name: Uzbekistan
c.js:8 Capital: Tashkent
c.js:9 Flag: https://flagcdn.com/uz.svg
c.js:10 ----------------------
c.js:7 Name: Vanuatu
c.js:8 Capital: Port Vila
c.js:9 Flag: https://flagcdn.com/vu.svg
c.js:10 ----------------------
c.js:7 Name: Venezuela (Bolivarian Republic of)
c.js:8 Capital: Caracas
c.js:9 Flag: https://flagcdn.com/ve.svg
c.js:10 ----------------------
c.js:7 Name: Vietnam
c.js:8 Capital: Hanoi
c.js:9 Flag: https://flagcdn.com/vn.svg
c.js:10 ----------------------
c.js:7 Name: Wallis and Futuna
c.js:8 Capital: Mata-Utu
c.js:9 Flag: https://flagcdn.com/wf.svg
c.js:10 ----------------------
c.js:7 Name: Western Sahara
c.js:8 Capital: El Aaiún
c.js:9 Flag: https://flagcdn.com/eh.svg
c.js:10 ----------------------
c.js:7 Name: Yemen
c.js:8 Capital: Sana'a
c.js:9 Flag: https://flagcdn.com/ye.svg
c.js:10 ----------------------
c.js:7 Name: Zambia
c.js:8 Capital: Lusaka
c.js:9 Flag: https://flagcdn.com/zm.svg
c.js:10 ----------------------
c.js:7 Name: Zimbabwe
c.js:8 Capital: Harare
c.js:9 Flag: https://flagcdn.com/zw.svg
c.js:10 ----------------------
*/