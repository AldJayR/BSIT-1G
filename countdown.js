function createWeeklyCountdown(targetDay, targetHour, targetMinute, targetElementId) {
  const targetTimezone = "Asia/Manila";
  const currentDate = new Date();
  
  // Calculate the days until the next upcoming target day
  let daysUntilTarget = (targetDay - currentDate.getDay() + 7) % 7;
  
  if (daysUntilTarget === 0 && currentDate.getHours() > targetHour) {
      daysUntilTarget = 7; // If it's already past the target time for today, set it for next week
  }
  
  const targetDate = new Date();
  targetDate.setDate(currentDate.getDate() + daysUntilTarget);
  targetDate.setHours(targetHour, targetMinute, 0, 0);
  
  const interval = setInterval(function() {
      const currentTime = new Date();
      const remainingTime = targetDate - currentTime;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      const countdownElement = document.getElementById(targetElementId);
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (remainingTime < 0) {
          clearInterval(interval);
          countdownElement.innerHTML = "Countdown Expired";
      }
  }, 1000);
}


// Monday
createWeeklyCountdown(1, 7, 30, "countdownMonday1");
createWeeklyCountdown(1, 13, 0, "countdownMonday2");

// Tuesday
createWeeklyCountdown(2, 9, 0, "countdownTuesday1");
createWeeklyCountdown(2, 13, 0, "countdownTuesday2");

// Wednesday
createWeeklyCountdown(3, 8, 0, "countdownWednesday1");
createWeeklyCountdown(3, 13, 0, "countdownWednesday2");
createWeeklyCountdown(3, 15, 0, "countdownWednesday3");

// Thursday
createWeeklyCountdown(4, 9, 0, "countdownThursday1");
createWeeklyCountdown(4, 10, 0, "countdownThursday2");
createWeeklyCountdown(4, 13, 0, "countdownThursday3");
createWeeklyCountdown(4, 15, 0, "countdownThursday4");

// Friday
createWeeklyCountdown(5, 9, 0, "countdownFriday1");

// Saturday
createWeeklyCountdown(6, 8, 0, "countdownSaturday");