// import data from '../quiz-data';
const data = {
  title: 'Тест на базовый уровень JavaScript.',
  questions: [
    {
      question: 'Что возвращает метод Array.prototype.filter()?',
      choices: [
        'Массив, если результат работы содержит более одного элемента',
        'Один элемент, если только он прошел фильтрацию',
        'Всегда массив',
      ],
      answer: 2,
    },
    {
      question: 'Как получить список всех ключей объекта obj?',
      choices: [
        'obj.keys()',
        'Object.keys(obj)',
        'obj.keys',
        'Object.getKeys(obj)',
      ],
      answer: 1,
    },
    {
      question: 'Что такое статическое свойство класса?',
      choices: [
        'Свойство доступное только экземплярам, но не классу',
        'Свойство доступное только классу, но не его экземплярам',
        'Свойство которое нельзя изменять после создания',
      ],
      answer: 1,
    },
    {
      question: 'Что такое обещание (promise)?',
      choices: [
        'Функция, представляющая конечный результат асинхронной операции',
        'Данные полученные в результате асинхронной операции',
        'Объект, представляющий конечный результат асинхронной операции',
      ],
      answer: 2,
    },
    {
      question: 'Выберите не существующий HTTP-метод.',
      choices: ['PUT', 'GET', 'GRAB', 'DELETE', 'PATCH'],
      answer: 2,
    },
    {
      question: 'Какой командой будет запускаться npm-скрипт с именем server?',
      choices: [
        'npm server',
        'npm start server',
        'npm execute server',
        'npm run server',
      ],
      answer: 3,
    },
  ],
};

const form = document.querySelector('form');

const markup = `<h3 class="form__title">${data.title}</h3> ${createPageMarkup(
  data.questions,
)}`;
form.innerHTML = markup + form.innerHTML;

function createPageMarkup(questions) {
  return questions.reduce(
    (acc, singleQuestion) => acc + createSectionMarkup(singleQuestion),
    '',
  );
}

function createSectionMarkup(singleQuestion) {
  const markup =
    `${createQuestion(singleQuestion.question)}` +
    `${createChoises(singleQuestion.choices)}`;

  return `<section>${markup}</section>`;
}

function createQuestion(question) {
  return `<h3>${question}</h3>`;
}

function createChoises(choises) {
  const listItems = choises.reduce(
    (acc, choise, index) =>
      acc +
      `<li><label><input type="radio" name="${index}" value="${choise}" class="form__input" />${choise}</label></li>`,
    '',
  );

  return `<ol class="form__section-list">${listItems}</ol>`;
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    console.log(`Value: ${value}, Name: ${name}`);
  });
});

window.onbeforeunload = function(e) {
  document.querySelector('form').removeEventListener('click', formSubmit);
};
