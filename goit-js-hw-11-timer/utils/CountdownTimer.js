class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  createMarkup() {
    return `
    <div class="days-container">
      <div class="days"></div>
      <div class="days-label">days</div>
    </div>
  
    <div class="hours-container">
      <div class="hours"></div>
      <div class="hours-label">hours</div>
    </div>
  
    <div class="minutes-container">
      <div class="minutes"></div>
      <div class="minutes-label">minutes</div>
    </div>
  
    <div class="seconds-container">
      <div class="seconds"></div>
      <div class="seconds-label">seconds</div>
    </div>`;
  }

  appendTimerMarkup(selector) {
    document.querySelector(selector).innerHTML = this.createMarkup();
  }

  /**
   *
   *
   * @param {Object} targetDate
   * @memberof CountdownTimer
   */
  timer(targetDate) {
    let countdown = setInterval(() => {
      const secondsLeft = targetDate.getTime() - new Date();

      if (secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      }

      this.displayTimeLeft(secondsLeft);
    }, 1000);
  }

  /**
   *
   *
   * @param {Number} secondsLeft
   * @memberof CountdownTimer
   */
  displayTimeLeft(secondsLeft) {
    const d = document;

    d.querySelector('.days').textContent = Math.floor(
      secondsLeft / (1000 * 60 * 60 * 24)
    );
    d.querySelector('.hours').textContent = Math.floor(
      (secondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    d.querySelector('.minutes').textContent = Math.floor(
      (secondsLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    d.querySelector('.seconds').textContent = Math.floor(
      (secondsLeft % (1000 * 60)) / 1000
    );
  }

  initialize() {
    this.appendTimerMarkup('#timer-1');
    this.timer(this.targetDate);
  }
}

export default CountdownTimer;
