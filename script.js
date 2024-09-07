const schedule = {
  Monday: [
    {
      time: "7 AM",
      code: "COMA 100",
      subject: "Purposive Communication",
      duration: "7:00 AM - 8:30 AM",
    },
    {
      time: "9 AM",
      code: "IT 111",
      subject: "Computer Programming (C++)",
      duration: "9:00 AM - 12:00 PM",
    },
    {
      time: "1 PM",
      code: "IT 110",
      subject: "Introduction to Computing",
      duration: "1:00 PM - 3:00 PM",
    },
    {
      time: "3 PM",
      code: "SSP 100",
      subject: "Philippine Indigenous Communities",
      duration: "3:00 PM - 4:00 PM",
    },
  ],
  Tuesday: [
    {
      time: "7 AM",
      code: "MATH 100",
      subject: "Mathematics in the Modern World",
      duration: "7:00 AM - 8:30 AM",
    },
    {
      time: "8 AM",
      code: "PSYCH 100",
      subject: "Understanding the Self",
      duration: "8:30 AM - 10:00 AM",
    },
    {
      time: "10 AM",
      code: "PATHFit 1",
      subject: "Movement Competency Training",
      duration: "10:00 AM - 12:00 PM",
    },
    {
      time: "2 PM",
      code: "COMA 100",
      subject: "Purposive Communication",
      duration: "2:30 PM - 4:00 PM",
    },
  ],
  Wednesday: [
    {
      time: "7 AM",
      code: "MATH 100",
      subject: "Mathematics in the Modern World",
      duration: "7:00 AM - 8:30 AM",
    },
    {
      time: "8 AM",
      code: "PSYCH 100",
      subject: "Understanding the Self",
      duration: "8:30 AM - 10:00 AM",
    },
    {
      time: "1 PM",
      code: "IT 111",
      subject: "Computer Programming (C++)",
      duration: "1:00 PM - 3:00 PM",
    },
    {
      time: "3 PM",
      code: "SSP 100",
      subject: "Philippine Indigenous Communication",
      duration: "3:00 PM - 4:00 PM",
    },
  ],
  Thursday: [],
  Friday: [
    {
      time: "9 AM",
      code: "IT 110",
      subject: "Introduction to Computing",
      duration: "9:00 AM - 12:00 PM",
    },
    {
      time: "2 PM",
      code: "SSP 100",
      subject: "Philippine Indigenous Communication",
      duration: "2:30 PM - 3:30 PM",
    },
  ],
  Saturday: [
    {
      time: "8 AM",
      code: "NSTP 1b",
      subject: "CWTS",
      duration: "8:00 AM - 5:00 PM",
    },
  ],
  Sunday: [],
};

function generateSchedule() {
  const times = [
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const tableBody = document.querySelector("#schedule-table tbody");

  times.forEach((time) => {
    const row = document.createElement("tr");
    const timeCell = document.createElement("td");
    timeCell.textContent = time;
    row.appendChild(timeCell);

    days.forEach((day) => {
      const cell = document.createElement("td");
      const subjectInfo = schedule[day].find((s) => s.time === time);

      if (subjectInfo) {
        const codeSpan = document.createElement("span");
        codeSpan.textContent = subjectInfo.code;
        codeSpan.className = "subject-code";

        const subjectInfoDiv = document.createElement("div");
        subjectInfoDiv.className = "subject-info";
        subjectInfoDiv.innerHTML = `<strong>${subjectInfo.subject}</strong><br>${subjectInfo.duration}`;

        cell.appendChild(codeSpan);
        cell.appendChild(subjectInfoDiv);
      }

      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

function highlightCurrentTime() {
  let now = new Date();
  let currentDay = now.getDay(); // 0 for Sunday, 1 for Monday, etc.
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

window.onload = function () {
  generateSchedule();
  highlightCurrentTime();
};
