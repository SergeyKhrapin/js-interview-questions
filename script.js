'use strict';


let arr = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];

function bubbleSort(arr) {
	function sort(end) {
		debugger;
		for (let i = 0; i < end; i++) {
			const el1 = arr[i],
				  el2 = arr[i + 1];
			if (el1 > el2) {
				arr.splice(i, 2, el2, el1);
			} else {
				continue;
			}
		}
		if (--end > 1) {	
			sort(end);
		}		
	}
	sort(arr.length - 1);
	return arr;
}

console.log(bubbleSort(arr));

function crib() {
	/*==================== ЧИСЛА start ========================*/

	var n = 5.8979;

	parseInt(1001, 2);
	parseInt('10.126d633');

	n.toFixed();
	n.toPrecision();

	Math.floor(n);
	Math.ceil(n);
	Math.round(n);
	Math.trunc(n);
	Math.random();

	Math.trunc(Math.random() * (100 - 10) + 10); // генерирует только двузначные числа

	/*==================== ЧИСЛА end ========================*/


	/*==================== СТРОКИ start ========================*/

	var str = 'Hello, world! I am glad to see you, world!';

	str.length; // длина строки (количество символов в строке)
	// укоротить строку, явно задав ей str.length, нельзя (это можно сделать только с массивами)

	str.toUpperCase();
	str.toLowerCase();

	str.charAt(); // или str[];

	str.indexOf('world', 0); // поиск подстроки в строке
	// ('world' - искомая подстрока; 0 - с какого индекса искать)
	// (если искомая подстрока не найдена - возвращает -1)

	str.split(', ', 3) // из строки сделать массив (исходная строка НЕ изменяется)
	// ', ' - разделитель, по которому делать элементы массива
	// 3 - количество элементов, которое должно быть в массиве

	str.slice(2, 7);
	// 2 - c какого символа взять, 7 - по какой символ взять
	// если значение отрицательное, то отчет ведется с конца строки

	str.substring(2, 7);
	// 2 - c какого символа взять, 7 - по какой символ взять (т.е. работает почти так же как и str.slice())

	str.substr(2, 7);
	// 2 - c какого символа взять, 7 - сколько символов взять

	String.fromCharCode(); // получить символ, зная его код

	str.charCodeAt(); // получить код из символа

	'str1'.localeCompare('str2'); // правильное сравнение строк

	('   hello      world     ').trim(); // обрезает пробелы с концов строки

	/*==================== СТРОКИ end ========================*/


	/*==================== МАССИВЫ start ========================*/

	/* Методы */

	var arr = ["Яблоко", "Апельсин", "Груша"];

	arr.pop(); // удаление последнего элемента массива (изменяется исходный массив; возвращает удаленный элемент)
	var last = arr.pop();

	arr.push('Банан'); // добавление элемента в конец массива (изменяется исходный массив; возвращает длину массива)
	arr[arr.length] = 'Банан'; // (альтернатива записи выше)
	arr.push('Банан', 15, '2'); // можно добавлять сразу несколько элементов

	arr.shift(); // удаление первого элемента массива (изменяется исходный массив; возвращает удаленный элемент)
	var first = arr.shift();

	arr.unshift('Банан'); // добавление элемента в начало массива (изменяется исходный массив; возвращает длину массива)
	arr.unshift('Банан', 15, '2'); // можно добавлять сразу несколько элементов

	arr.length = 2; // альтернативный способ укоротить массив - явно изменить его длину

	arr.indexOf('world', 0); // принцип работы такой же, как у str.indexOf()

	arr.join(' / '); // из массива сделать строку (исходный массив НЕ изменяется)
	// ' / ' - разделитель, которым будут отделены элементы массива в строке
	// (в отличие от str.split(), второй аргумент не поддерживается)

	arr.slice(); // принцип работы такой же, как у str.slice() (исходный массив НЕ изменяется)

	arr.splice(2, 3, 'hello', 150); // удаление/добавление элементов (изменяется исходный массив; возвращает удаленные элементы)
	// 2 - с какого элемента удалить (start)
	// 3 - сколько элементов удалить (deleteCount)
	// 'hello', 150 ... - какие элементы добавить (добавление начинается с позиции start)

	var arrNew = arr.concat(2, 'hello');
	// создание нового массива, в который копируются элементы из массива arr, а также добавляются новые элементы - 2, 'hello' и т.д. (исходный массив НЕ изменяется)

	arr.reverse(); // меняет порядок следования элементов в массиве на противоположный (изменяется исходный массив)

	arr.sort(); // сортирует массив по возрастанию (изменяется исходный массив)
	arr.sort(function(a, b) {
		                     // метод sort считает что a > b, если функция callback вернула +
		                     //                        a < b, если функция callback вернула -
	});


	/* Перебирающие методы */

	// 1. forEach
	// просто перебирает массив и выполняет для каждого элемента функцию callback
	// (ничего НЕ возвращает)
	arr.forEach(function(value, index, array) {

	});

	// 2. filter
	// создаёт новый массив, в который войдут только те ЭЛЕМЕНТЫ (именно value) массива array, для которых вызов функции callback возвратит true
	// (исходный массив НЕ изменяется)
	var arrNew = arr.filter(function(value, index, array) {

	});

	// 3. map
	// создаёт новый массив, который будет состоять из РЕЗУЛЬТАТОВ вызова функции callback для каждого элемента array
	// (исходный массив НЕ изменяется)
	var arrNew = arr.map(function(value, index, array) {

	});

	// 4. every/some
	// метод every возвращает true, если функция callback вернула true для каждого элемента
	var isEvery = arr.every(function() {

	});
	// метод some возвращает true, если функция callback вернула true хотя бы для одного элемента
	var isEvery = arr.some(function() {

	});

	// 5. reduce
	var res = arr.reduce(function(previousValue, currentItem) {

	}, 0);
	// previousValue - последний результат вызова функции (промежуточное значение)
	// currentItem - текущий элемент массива
	// 0 (initialValue) - второй параметр метода reduce (не обязателен). Если он есть, то на первом вызове значение previousValue будет равно initialValue; а если его нет, то оно равно первому элементу массива, а перебор начинается со второго.
	// метод reduce НЕ изменяет исходный массив и НЕ создает новый массив, а возвращает ОДНО итоговое значение, после того как закончатся все вызовы функции callback

	/*==================== МАССИВЫ end ========================*/


	/*==================== Примеры задач =======================*/

	// удаление элемента массива из середины (костыльная альтрнатива splice)
	var arr = ['Маша', 'Петя', 'Марина', 'Василий'],
		j = 1;
	delete arr[j]; // удаляем j-ый элемент массива
	for (i = j; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.pop();
	console.log(arr);


	// нахождение минимального элемента в массиве
	var arr = [5, 2, 3, 1, 20, -15];
	var min = arr[0];
	for (i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	console.log(min);



	// Способы сделать копию массива
	var arr = [1, 2, 'Марина', 'Василий'];

	// 1
	var arrNew = arr; // плохой вариант

	// 2
	var arrNew = [];
	for (var i = 0; i < arr.length; i++) { 
		arrNew[i] = arr[i];
	}

	// 3
	var arrNew = arr.splice(0, arr.length); // не подходит, т.к. удаляется исходный массив

	// 4
	var arrNew = arr.slice();

	// 5
	var arr = arr.concat();

	// 6
	var arrNew = arr.map(function(value) {
		return value;
	});

	// 7
	var arrNew = arr.filter(function() {
		return true;
	});


	// Оставить в массиве элементы длиной не более трех букв.
	var arr = ['Ася', 'Ян', 'Марина', 'Юля', 'Василий'];

	// 1 способ - arr.filter()
	var arrNew = arr.filter(function(value, i, array) {
		return value.length < 4;
	});
	console.log(arr);
	console.log(arrNew);

	// 2 способ - arr.forEach()
	var arrNEW = [];
	arr.forEach(function(value, i, array) {
		if (value.length < 4) arrNEW.push(value);
	});
	console.log(arr);
	console.log(arrNEW);

	// 3 способ - обычный цикл for
	function runArray(array) {
		var arrayNew = [],
		i = 0;
		for (i; i < array.length; i++) {
			if (array[i].length < 4) arrayNew.push(array[i]);
		}
		return arrayNew;
	}
	var arrNew = runArray(arr);
	console.log(arr);
	console.log(arrNew);


	/*==================== ОБЪЕКТЫ start ========================*/

	/* Функция конструктор start */

	// создание объекта
	var student = new Student('Sergey', 'Khrapin', 32, 15, 'energy');

	function Student(name1, name2, old, cour, spec) {
		// 1 - оператор new создает новый пустой объект
		// var Student = {};

		// 2 - в this копируется ссылка на этот новый объект
		// this = Student;

		// 3 - новому объекту добавляются свойства, методы
		this.name = name1;
		this.surname = name2;
		this.age = old;
		this.course = cour;
		this.fac = spec;

		// 4 - возвращает this
		// return this;
	}
	// пункты 1, 2, 4 - происходят по умолчанию благодаря оператору new
	console.log('student', student);

	// создание именно функции
	var func = new Function('a, b', 'return a + b');
	console.log(func(5, 10)); // 15

	/* Функция конструктор end */


	// Проверка существования свойств
	// 1
	'name' in student; // true - свойство name есть в объекте student
	'blabla' in student; // false - свойства blabla нет в объекте student
	'toString' in student; // true - свойство toString (хоть и унаследованное) есть в объекте student
	// 2
	student.hasOwnProperty('toString'); // false - свойства toString (собственного!) нет в объекте student
	student.hasOwnProperty('name'); // true - свойство name (собственное) есть в объекте student
	// 3
	student.propertyIsEnumerable('name'); // true - свойство name (собственное перечислимое) есть в объекте student


	// Цикл for..in
	// меняю название свойств
	for (var key in student) {
		student['student ' + key] = student[key];
		delete student[key];
	}
	console.log('student', student);


	// Перечисление свойств
	// 1
	for (var key in student) {
		console.log(key); // выведет собственные перечислимые свойства объекта
	}
	// 2
	Object.keys(student); // массив из названий собственных перечислимых свойств объекта
	// 3
	Object.getOwnPropertyNames(student); // массив из названий всех собственных свойств объекта


	// Полноценное клонирование объекта
	// 1
	var studentClone1 = {};
	for (var key in student) {
		studentClone1[key] = student[key];
	}
	console.log('studentClone1', studentClone1);

	// 2
	var studentClone2 = Object.assign({}, student);
	console.log('studentClone2', studentClone2);


	/* Object.defineProperty() start */

	Object.defineProperty(obj, 'property', {});
	// создаем новое свойство property у объекта obj (третий параметр (дескриптор) - массив с настройками этого свойства)

	// value - значение свойства (по умолчанию - undefined)
	// writable - можно ли менять значение (по умолчанию - false)
	// configurable - можно ли удалять свойство (по умолчанию - false)
	// enumerable - доступно ли это свойство в цикле for..in и Object.keys(obj) (по умолчанию - false)
	// get – функция, которая возвращает значение свойства (по умолчанию - undefined)
	// set – функция, которая записывает значение свойства (по умолчанию - undefined)

	Object.defineProperty(student, 'nickName', {
		writable: true,
		configurable: true,
		enumerable: true,
		value: 'superman',
		// get: function () {
			
		// },
		// set: function (value) {
			
		// }
	});

	// создаем сразу несколько свойств
	Object.defineProperties(student, {
		mathMark: {
			enumerable: true,
			configurable: true,
			value: 4.7
		},
		physicsMark: {
			writable: true,
			enumerable: true,
			configurable: true,
			value: 4.1
		},
		englishMark: {
			enumerable: true,
			configurable: true,
			value: 4.5
		}
	});

	/* Object.defineProperty() end */

	/* Явное указание this start */

	var user = {
		firstName: "Вася"
	};

	function showMessage(phrase) {
		console.log(phrase + ' ' + this.firstName);
	}
	showMessage('Hello'); // Hello undefined (т.к. this = Window)

	// метод call
	showMessage.call(user, 'Hello'); // Hello Вася (т.к. this = user)

	// метод apply
	showMessage.apply(user, ['Hello']); // Hello Вася (т.к. this = user)

	/* Явное указание this end */


	/*==================== ОБЪЕКТЫ end ========================*/

	/*
	http://www.asciitable.com/
	https://unicode-table.com/ru/
	https://regex101.com/
	*/
};

var activeLinkClass = 'active';

$('.nav a').click(function(e) {
	$('.nav a').each(function(i, a) {
		$(a).removeClass(activeLinkClass);
	});

	$('.questions-list').each(function(i, list) {
		if ($(list).attr('data-id') === $(e.target).attr('data-block')) {
			$(list).show();
			$(e.target).addClass(activeLinkClass);
		} else {
			$(list).hide();
		}
	});
});



var head = {
  glasses: 1
};

var table = {
  pen: 3,
  __proto__: head
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

var pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

function veryLongOperation() {
	var arr = [];
	for (var i = 0; i < 50000000; i++) {
		arr.push(i);
	}
	arr = arr.reverse();
}
// Async/await version
async function getName() {
	var guy;
	setTimeout(function() {
		guy = 'Morgan';
	}, 2000);
	return guy;
}
async function sayHi() {
	var person = await getName();
	return 'Hi, ' + person;
}
(async function () {
	var result = await sayHi();
	console.log(result);
})();

// Promise version
// var hi = sayHi().then(function(greating) {
// 	return greating;
// });


