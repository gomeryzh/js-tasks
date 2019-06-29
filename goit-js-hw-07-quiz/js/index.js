import data from '../data/quiz-data.js';
import { formSubmit } from '../utils/form.js';

const form = document.querySelector('form');

const createPageMarkup = ({ title, questions }) => {
  const markup = `<h3 class="form__title">${title}</h3> ${createListMarkup(
    questions
  )}`;
  form.innerHTML = markup + form.innerHTML;
};

const createListMarkup = questions => {
  return questions.reduce(
    (acc, singleQuestion, index) =>
      acc + createSectionMarkup(singleQuestion, index),
    ''
  );
};

const createSectionMarkup = (singleQuestion, index) => {
  const markup =
    `${createQuestion(singleQuestion.question)}` +
    `${createChoises(singleQuestion.choices, index)}`;

  return `<section>${markup}</section>`;
};

const createQuestion = question => {
  return `<h3>${question}</h3>`;
};

const createChoises = (choises, index) => {
  const listItems = choises.reduce(
    (acc, choise) =>
      acc +
      `<li><label><input type="radio" name="question-${index}" value="${choise}" class="form__input" />${choise}</label></li>`,
    ''
  );

  return `<ol class="form__section-list">${listItems}</ol>`;
};

const attachEvents = () => {
  form.addEventListener('submit', formSubmit);
};

const deleteEvents = () =>
  (window.onbeforeunload = e => form.removeEventListener('submit', formSubmit));

const initialize = (function() {
  createPageMarkup(data);
  attachEvents();
  deleteEvents();
})();
