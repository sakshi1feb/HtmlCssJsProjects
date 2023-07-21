const url = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd348ee860fmshe5ae52f88beea73p1f5762jsn61f838dc4382',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const searchBar =document.getElementById('search-city');
const searchBtn =document.getElementById('Search-btn');
const cardHeader =document.querySelector('.card-header');
const cardTitle=document.querySelector('.card-title');
const temperature =document.querySelector('.temp');
const minTemperature=document.querySelector('.temp_min');
const maxTemperature=document.querySelector('.temp_max');





searchBtn.addEventListener('click', ()=>{
    fetch(`${url}${searchBar.value}`,options)
.then(response => response.json())
.then(response => {
    console.log(response);
    cardHeader.innerHTML=`<h4>${response.name}</h4>`;
    cardTitle.innerHTML=response.weather[0].main;
    temperature.innerHTML+=`<span>${response.main.temp}<sup>°</sup>F</span>`
    minTemperature.innerHTML+=`<span>${response.main.temp_min}<sup>°</sup>F</span>`
    maxTemperature.innerHTML+=`<span>${response.main.temp_max}<sup>°</sup>F</span>`
})
.catch(err => console.log(err))

})
console.log(city);



// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


console.log()


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
