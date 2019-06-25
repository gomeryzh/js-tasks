import data from '../quiz-data.js';

const form = document.querySelector('form');

createPageMarkup(data);

function createPageMarkup({ title, questions }) {
  const markup = `<h3 class="form__title">${title}</h3> ${createListMarkup(
    questions
  )}`;
  form.innerHTML = markup + form.innerHTML;
}

function createListMarkup(questions) {
  return questions.reduce(
    (acc, singleQuestion) => acc + createSectionMarkup(singleQuestion),
    ''
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
      `<li><label><input type="radio" name="${Math.random()}" value="${choise}" class="form__input" />${choise}</label></li>`,
    ''
  );

  return `<ol class="form__section-list">${listItems}</ol>`;
}

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  let userAnswers = [];

  formData.forEach(value => {
    userAnswers.push(value);
  });

  const result = checkAnswers(userAnswers);

  if (result.length >= 5) {
    alert('Поздравляю, правильных овтетов больше 80%');
  } else {
    alert('Херовый из тебя js ninja)');
  }
});

function getCorrectAnswers(questions) {
  const answers = questions.map(question => {
    const answer = question.choices.find((choise, index) => {
      if (index === question.answer) return choise;
    });

    return answer;
  });

  return answers;
}

const correctAnswers = getCorrectAnswers(data.questions);

function checkAnswers(userAnswers) {
  return correctAnswers.filter(answer => userAnswers.includes(answer));
}

window.onbeforeunload = function(e) {
  document.querySelector('form').removeEventListener('click', formSubmit);
};
