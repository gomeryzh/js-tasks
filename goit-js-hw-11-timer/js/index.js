'use strict';

import CountdownTimer from '../utils/CountdownTimer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019')
});

timer.initialize();
