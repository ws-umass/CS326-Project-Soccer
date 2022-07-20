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
}

function renderSurvey() {
   mainBox.innerHTML = "";
   let html = `
      <label for="courseTitle">Course:</label>
      <select name="" id="courseTitle">
         <option value="none" selected disabled hidden>Select a Course</option>
   `;
   const courseList = ["cs121", "cs186", "cs187", "cs198c", "cs220", "cs230", "cs240", "cs250", "cs311", "cs320", "cs325", "cs326", "cs345", "cs377", "cs383"];
   courseList.forEach(
      (x) => {
         html += `<option value="${x}">${x.toUpperCase()}</option>`
      }
   );
   html += "</select>";
   mainBox.innerHTML = html;
}

function showCourse() {
   console.log("course");
}

function main() {
   renderCourse();
   surveyButton.addEventListener("click", renderSurvey);
}

main();
