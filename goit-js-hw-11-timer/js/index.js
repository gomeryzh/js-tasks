'use strict';

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const targetDate = new Date('Jul 17, 2019');

/**
 *
 * @param {Object} targetDate
 */

const timer = targetDate => {
  let countdown = setInterval(() => {
    const secondsLeft = targetDate.getTime() - new Date();

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
};

function displayTimeLeft(secondsLeft) {
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');

  daysElement.textContent = Math.floor(secondsLeft / (1000 * 60 * 60 * 24));
  hoursElement.textContent = Math.floor(
    (secondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutesElement.textContent = Math.floor(
    (secondsLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  secondsElement.textContent = Math.floor((secondsLeft % (1000 * 60)) / 1000);
}

timer(targetDate);
