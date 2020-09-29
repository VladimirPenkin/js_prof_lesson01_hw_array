window.addEventListener("load", function () {

	const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];

	/*получаем список курсов из массива ITEA_COURSES и выводим списком на страницу*/

	let coursesList = "";

	for (let i = 0; i < ITEA_COURSES.length; i++) {
		coursesList +=`<li>${ITEA_COURSES[i]}</li>`
	};

	document.querySelector("#courses").innerHTML = `<ul>${coursesList}</ul>`;

	/*получаем длину строк каждого элемента массива ITEA_COURSES и сортируем в порядке убывания, 
	выводим полученный результат в консоль*/

	let arrayLength = [...ITEA_COURSES].map(item => item.length);

	const sortIncrease = (a, b) => b - a;
	arrayLength.sort(sortIncrease);
	console.log(arrayLength);

	/*Реализация функции поиска по массиву ITEA_COURSES*/

	let clickBtn = document.querySelector("#check");
	clickBtn.addEventListener("click", checkCourses);

	let newArray = [];

	function checkCourses() {

		let text = document.querySelector("#inputtext").value;
		let checkList = "";

		ITEA_COURSES.forEach((item) => {
			if (item == text) {
				newArray.push(item);
			};
		});

		for (let i = 0; i < newArray.length; i++) {
			checkList += "<li>" + newArray[i] + "</li>"
		};

		document.querySelector("#exists").innerHTML = `<ul>${checkList}</ul>`;
		document.querySelector("#inputtext").value = "";
	};
});

