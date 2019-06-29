import data from '../data/quiz-data.js';

const getCorrectAnswers = questions => {
  return questions.map(question => {
    return question.choices.find((choise, index) => {
      if (index === question.answer) return choise;
    });
  });
};

const correctAnswers = getCorrectAnswers(data.questions);

const checkAnswers = userAnswers =>
  correctAnswers.filter(answer => userAnswers.includes(answer));

export const formSubmit = e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  let userAnswers = [];

  formData.forEach(value => userAnswers.push(value));

  const result = checkAnswers(userAnswers);

  if (result.length >= 5) {
    alert('Поздравляю, правильных овтетов больше 80%');
    document.querySelector('form').reset();
  } else {
    alert('Херовый из тебя js ninja. Пробуй ещё');
    document.querySelector('form').reset();
  }
};
