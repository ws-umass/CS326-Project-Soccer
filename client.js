const htmlBody = document.getElementsByTagName("body");
const surveyBox = document.getElementById("surveyBox");
const mainBox = document.getElementById("mainBox");

/**
 * @param {HTMLElement} element 
 */
function renderCourse(element) {
   let html = `
      <div id="courseList">
         <div id="course-item">
            <input type="button" value="CS 121" id="cs121">
            <input type="button" value="CS 186" id="cs186">
            <input type="button" value="CS 187" id="cs187">
            <input type="button" value="CS 198C" id="cs198c">
         </div>
         <br>
         <div id="course-item">

            <input type="button" value="CS 220" id="cs220">
            <input type="button" value="CS 230" id="cs230">
            <input type="button" value="CS 240" id="cs240">
            <input type="button" value="CS 250" id="cs250">
         </div>
         <br>
         <div id="course-item">
            <input type="button" value="CS 311" id="cs311">
            <input type="button" value="CS 320" id="cs320">
            <input type="button" value="CS 325" id="cs325">
            <input type="button" value="CS 326" id="cs326">
            <input type="button" value="CS 345" id="cs345">
            <input type="button" value="CS 383" id="cs383">
         </div>
      </div>
   `;
   element.innerHTML = html;
}

function main() {
   renderCourse(mainBox);
}

main();
