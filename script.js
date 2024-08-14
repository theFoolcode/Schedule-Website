const schedule = {
  "Monday": [
      { time: "7 AM", subject: "COMA 100", duration: "7:00 AM - 8:30 AM" },
      { time: "9 AM", subject: "IT 111", duration: "9:00 AM - 12:00 PM" },
      { time: "1 PM", subject: "IT 110", duration: "1:00 PM - 3:00 PM" },
      { time: "3 PM", subject: "SSP 100", duration: "3:00 PM - 4:00 PM" }
  ],
  "Tuesday": [
      { time: "7 AM", subject: "MATH 100", duration: "7:00 AM - 8:30 AM" },
      { time: "8 AM", subject: "PSYCH 100", duration: "8:30 AM - 10:00 AM" },
      { time: "10 AM", subject: "PATHFit 1", duration: "10:00 AM - 12:00 PM" },
      { time: "2 PM", subject: "COMA 100", duration: "2:30 PM - 4:00 PM" }
  ],
  "Wednesday": [
      { time: "7 AM", subject: "MATH 100", duration: "7:00 AM - 8:30 AM" },
      { time: "8 AM", subject: "PSYCH 100", duration: "8:30 AM - 10:00 AM" },
      { time: "1 PM", subject: "IT 111", duration: "1:00 PM - 3:00 PM" }
  ],
  "Thursday": [
      { time: "10 AM", subject: "SSP 100", duration: "10:00 AM - 12:00 PM" }
  ],
  "Friday": [
      { time: "9 AM", subject: "IT 110", duration: "9:00 AM - 12:00 PM" }
  ],
  "Saturday": [
      { time: "8 AM", subject: "NSTP 1b", duration: "8:00 AM - 5:00 PM" }
  ],
  "Sunday": []
};

function generateSchedule() {
  const times = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const tableBody = document.querySelector("#schedule-table tbody");

  times.forEach(time => {
      const row = document.createElement("tr");
      const timeCell = document.createElement("td");
      timeCell.textContent = time;
      row.appendChild(timeCell);

      days.forEach(day => {
          const cell = document.createElement("td");
          const subject = schedule[day].find(s => s.time === time);

          if (subject) {
              cell.innerHTML = `${subject.subject}<br>${subject.duration}`;
          }

          row.appendChild(cell);
      });

      tableBody.appendChild(row);
  });
}

function highlightCurrentTime() {
  let now = new Date();
  let currentDay = now.getDay(); // 0 for Sunday, 1 for Monday,
  let currentHour = now.getHours();
  let table = document.querySelector("table");

  if (currentDay === 0) currentDay = 7; // Adjust for Sunday being the last column

  let rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].cells;
      let timeText = cells[0].innerText;
      let [hour, ampm] = timeText.split(" ");
      hour = parseInt(hour);
      if (ampm === "PM" && hour !== 12) hour += 12;

      if (hour === currentHour) {
          cells[currentDay].classList.add("highlight");
      }
  }
}

window.onload = function() {
  generateSchedule();
  highlightCurrentTime();
};
