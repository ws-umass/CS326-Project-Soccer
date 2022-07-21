import { courseData } from "./courses.js";

const htmlBody = document.getElementsByTagName("body");
const surveyButton = document.getElementById("surveyButton");
const mainBox = document.getElementById("mainBox");

function renderCourse() {
   mainBox.innerHTML = "";
   let html = `
      <div id="courseList">
         <div id="course-item">
            <div class="course" id="cs121">CS 121</div>
            <div class="course" id="cs186">CS 186</div>
            <div class="course" id="cs187">CS 187</div>
            <div class="course" id="cs198c">CS 198C</div>
         </div>
         <br>
         <div id="course-item">
            <div class="course" id="cs220">CS 220</div>
            <div class="course" id="cs230">CS 230</div>
            <div class="course" id="cs240">CS 240</div>
            <div class="course" id="cs250">CS 250</div>
         </div>
         <br>
         <div id="course-item">
            <div class="course" id="cs311">CS 311</div>
            <div class="course" id="cs320">CS 320</div>
            <div class="course" id="cs325">CS 325</div>
            <div class="course" id="cs326">CS 326</div>
            <div class="course" id="cs345">CS 345</div>
            <div class="course" id="cs377">CS 377</div>
            <div class="course" id="cs383">CS 383</div>
         </div>
      </div>
   `;
   mainBox.innerHTML = html;

   const courseList = ["cs121", "cs186", "cs187", "cs198c", "cs220", "cs230", "cs240", "cs250", "cs311", "cs320", "cs325", "cs326", "cs345", "cs377", "cs383"];
   courseList.forEach((x) => document.getElementById(x).addEventListener("click", () => showCourse(x)));
}

function renderSurvey() {
   mainBox.innerHTML = "";
   let html = `
      <label for="courseTitle">Course:</label>
      <select name="" id="courseTitle">
         <option value="none" selected disabled hidden>Select a Course</option>
   `;
   const courseList = ["cs121", "cs186", "cs187", "cs198c", "cs220", "cs230", "cs240", "cs250", "cs311", "cs320", "cs325", "cs326", "cs345", "cs377", "cs383"];
   courseList.forEach((x) => html += `<option value="${x}">${x.toUpperCase()}</option>`);
   html += "</select><br><br>";

   html += `
      <label for="semester">Semester:</label>
      <select name="" id="semester">
         <option value="none" selected disabled hidden>Select a Semester</option>
   `;
   const semesterList = ["2019fall", "2020spring", "2020summer", "2020fall", "2021spring", "2021summer", "2021fall", "2022spring", "2022summer"];
   semesterList.forEach((x) => html += `<option value="${x}">${x.toUpperCase()}</option>`);
   html += "</select><br><br>";

   html += `
      <label for="professor">Professor:</label>
      <select name="" id="professor">
         <option value="none" selected disabled hidden>Select a Professor</option>
   `;
   let professorList = [];
   html += "</select><br><br>";

   html += `
      <label for="rate">Evaluation:</label>
      <select name="" id="rate">
         <option value="none" selected disabled hidden>Evaluate your Professor</option>
   `;
   const rateList = ["1(Poor)", "2(Fair)", "3(Good)", "4(Very Good)", "5(Excellent)"];
   rateList.forEach((x) => html += `<option value="${x[0]}">${x}</option>`);
   html += "</select><br><br>";

   html += `
      <label for="grade">Grade:</label>
      <select name="" id="grade">
         <option value="none" selected disabled hidden>Select your Grade</option>
   `;
   const gradeList = ["A=4", "A-=3.7", "B+=3.3", "B=3", "B-=2.7", "C+=2.3", "C=2", "C-=1.7", "D+=1.3", "D=1", "F=0"];
   gradeList.forEach((x) => html += `<option value="${x.split("=")[1]}">${x.split("=")[0]}</option>`);
   html += "</select><br><br>";

   html += `
      <div id="backpoint">
         <div id="backButton">Back</div>
         <div id="submitButton">Submit</div>
      </div>
   `;

   mainBox.innerHTML = html;

   const courseTitle = document.getElementById("courseTitle");
   const semester = document.getElementById("semester");
   const professor = document.getElementById("professor");
   const backButton = document.getElementById("backButton");
   const submitButton = document.getElementById("submitButton");

   backButton.addEventListener("click", renderCourse);
   submitButton.addEventListener("click", () => submitSurvey(professor.value));

   courseTitle.addEventListener(
      "change",
      () => {
         try {
            professorList = courseData[courseTitle.value][semester.value];
         }
         catch (error) {
            professorList = [];
         }
         let element = document.getElementById("professor");
         element.innerHTML = `<option value="none" selected disabled hidden>Select a Professor</option>`;
         if (professorList) {
            professorList.forEach((x) => element.innerHTML += `<option value="${x}">${x}</option>`);
         }
      }
   );

   semester.addEventListener(
      "change",
      () => {
         try {
            professorList = courseData[courseTitle.value][semester.value];
         }
         catch (error) {
            professorList = [];
         }
         let element = document.getElementById("professor");
         element.innerHTML = `<option value="none" selected disabled hidden>Select a Professor</option>`;
         if (professorList) {
            professorList.forEach((x) => element.innerHTML += `<option value="${x}">${x}</option>`);
         }
      }
   );
}

async function showCourse(course) {
   const data = courseData[course];

   mainBox.innerHTML = "";
   let html = `<h2>${course.toUpperCase()}: ${data.title}</h2>`

   html += `
      <div id="courseDiscription">
         <h3>Description</h3>
         <p>
            ${data.description}
         </p>
      </div>
   `;

   html += `
      <h3>Average Grade</h3>
      <div class="canvasBox">
         <canvas id="gradeCanvas"></canvas>
      </div>
   `;

   html += `
      <h3>Professor Evaluation</h3>
      <label for="semester">Semester:</label>
      <select name="" id="semester">
         <option value="none" selected disabled hidden>Select a Semester</option>
   `;
   const semesterList = ["2019fall", "2020spring", "2020summer", "2020fall", "2021spring", "2021summer", "2021fall", "2022spring", "2022summer"];
   semesterList.forEach((x) => html += `<option value="${x}">${x.toUpperCase()}</option>`);
   html += "</select><br><br>";

   html += `
      <label for="professor">Professor:</label>
      <select name="" id="professor">
         <option value="none" selected disabled hidden>Select a Professor</option>
   `;
   let professorList = [];
   html += "</select><br><br>";

   html += `
      <div class="canvasBox">
         <canvas id="professorCanvas"></canvas>
      </div>
   `;

   html += `
      <div id="backpoint">
         <div id="backButton">Back</div>
      </div>
   `;

   mainBox.innerHTML = html;

   const gc = document.getElementById("gradeCanvas");
   const pc = document.getElementById("professorCanvas");
   const semester = document.getElementById("semester");
   const professor = document.getElementById("professor");
   const backButton = document.getElementById("backButton");

   await drawGradeLine([3.5, 3.7, 3.5, 3.2, 3.1, 3.6, 3.2, 3.1, 3.3], gc);

   semester.addEventListener(
      "change",
      () => {
         try {
            professorList = courseData[course][semester.value];
         }
         catch (error) {
            professorList = [];
         }
         let element = document.getElementById("professor");
         element.innerHTML = `<option value="none" selected disabled hidden>Select a Professor</option>`;
         if (professorList) {
            professorList.forEach((x) => element.innerHTML += `<option value="${x}">${x}</option>`);
         }
      }
   );

   professor.addEventListener(
      "change",
      async () => {
         await drawProfessorLine([4.5, 4.7, 5, 4.2, 3.4, 4.1, 4.2, 4.1, 3.3], pc);
      }
   );

   backButton.addEventListener("click", renderCourse);
}

function submitSurvey(element) {
   console.log(element);
   renderCourse();
}

/**
 * @param {number[]} data 
 * @param {HTMLCanvasElement} canvas 
 */
async function drawGradeLine(data, canvas) {
   const ctx = canvas.getContext("2d");
   ctx.font = "12px Arial";
   ctx.lineWidth = 2;
   ctx.beginPath();
   data.forEach(
      (x, i) => {
         let lasty = canvas.height - Math.floor((x / 5) * canvas.height) - 25;
         let lastx = (Math.floor(canvas.width / data.length) * i) + 15;
         i === 0 && ctx.moveTo(lastx, lasty);
         ctx.lineTo(lastx, lasty);
         ctx.fillText(x, lastx - 10, lasty + 20);
         ctx.stroke();
      }
   );
}

/**
 * @param {number[]} data 
 * @param {HTMLCanvasElement} canvas 
 */
async function drawProfessorLine(data, canvas) {
   const ctx = canvas.getContext("2d");
   ctx.font = "12px Arial";
   ctx.lineWidth = 2;
   ctx.beginPath();
   data.forEach(
      (x, i) => {
         let lasty = canvas.height - Math.floor(((x - 1) / 5) * canvas.height) - 25;
         let lastx = (Math.floor(canvas.width / data.length) * i) + 15;
         i === 0 && ctx.moveTo(lastx, lasty);
         ctx.lineTo(lastx, lasty);
         ctx.fillText(x, lastx - 10, lasty + 20);
         ctx.stroke();
      }
   );
}

function main() {
   renderCourse();
   surveyButton.addEventListener("click", renderSurvey);
}

main();
