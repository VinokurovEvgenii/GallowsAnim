var animals = ["кот", "собака", "птица"]; 
var it = ["компьютер", "программирование", "интернет"]; 
var fruits = ["яблоко", "банан", "груша"]; 
var other = ["дом", "книга", "стол"]; 

// Создание массива групп
var groups = [                                   
    { name: "Животные", words: animals }, 
    { name: "Информационные технологии", words: it }, 
    { name: "Фрукты", words: fruits }, 
    { name: "Другие слова", words: other } 
];

var group = groups[Math.floor(Math.random() * groups.length)];  // Выбор случайной группы из массива
var word = group.words[Math.floor(Math.random() * group.words.length)];  // Выбор случайного слова из выбранной группы
alert("Группа слова: " + group.name);  // Подсказка слова

var answerArray = Array(word.length).fill("_");  // Создание массива для угадываемого слова, заполненного символами подчеркивания
var remainingLetters = word.length;  // Инициализация счетчика оставшихся букв
var attempts = 6;  // Установка количества попыток
var guessedLetters = [];  // Создание массива для угаданных букв

while (remainingLetters > 0 && attempts > 0) { 
    alert(answerArray.join(" ")); // Вывод текущего состояния угадываемого слова

    var guesst = prompt("Угадайте букву или нажмите Отмена"); 
    var guess = guesst ? guesst.toLowerCase().trim() : null;  // Преобразование вводимого символа в нижний регистр и удаление пробелов

    if (guesst === null) {  // Проверка нажатия "Отмена"
        alert("Вы не хотите играть =("); 
        break; 
    } else if (guesst === "") {  // Проверка на нажатие ОК без символов
        alert("Пожалуйста, введите букву русскую букву"); 
        continue; 
    } else if (guesst === " ") {  // Проверка на ввод пробела
        alert("Введите букву, а не пробел"); 
        continue; 
    } else if (guess.length !== 1 || guessedLetters.includes(guess)) {  // Проверка на правильность ввода
        alert("Введите только одну букву и не повторяйте уже указанные буквы."); 
        continue; 
    } else if(!/[а-яА-ЯёЁ]/.test(guess)) {  // Проверка на валидность русской буквы 
        alert("Пожалуйста, введите русскую букву."); 
        continue; 
    }

    guessedLetters.push(guess); // Добавление угаданной буквы в массив угаданных букв
    var correctGuess = false;  // Инициализация переменной для отслеживания правильного угадывания

    for (var j = 0; j < word.length; j++) {  
        if (word[j] === guess) {  // Проверка на совпадение буквы
            if (answerArray[j] === "_") {  // Проверка, была ли буква уже угадана
                answerArray[j] = word[j];  // Обновление массива с угаданными буквами
                remainingLetters--;  // Уменьшение счетчика оставшихся букв
                correctGuess = true;  // Установка флага правильного угадывания
            }
        }
    }

    if (!correctGuess) {  // Проверка, угадал ли игрок букву
        attempts--;  // Уменьшение количества оставшихся попыток
        alert("Неправильно! У вас осталось попыток: " + attempts);
    }
}

if (remainingLetters === 0) {  // Проверка, угаданы ли все буквы
    alert("Поздравляю! Вы угадали слово: " + word); 
} else {  // Если игрок не угадал
    alert("Вы проиграли. Загаданное слово было: " + word); 
}

