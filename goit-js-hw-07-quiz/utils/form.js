import data from '../data/quiz-data.js';

const getCorrectAnswers = questions => {
  const answers = questions.map(question => {
    const answer = question.choices.find((choise, index) => {
      if (index === question.answer) return choise;
    });

    return answer;
  });

  return answers;
};

const correctAnswers = getCorrectAnswers(data.questions);

const checkAnswers = userAnswers => {
  return correctAnswers.filter(answer => userAnswers.includes(answer));
};

export const formSubmit = e => {
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
};
