import { coursesArray } from "./data.js";
const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keyup',(e) =>{
 const searchString = e.target.value


});
let coursesHtml = []
function getCoursesHtml() {
   
    coursesArray.map(function (content){
        coursesHtml += `
            <div class="course-block">
                <div class="course-inner">
                    <p class="course-level">${content.level}</p>
                        <div class="course-center">

                            <img class="course-image" src="images/${content.image}">                 
                                <h1 class="course-name">${content.name}</h1>
                        </div>
                        
                    <p class="course-info">${content.info} <br></br>
                        <span style=font-size:12px>with</span> 
                        <span class="course-teacher" 
                            style=font-weight:700; 
                            font-size:13px;>
                            ${content.teacher}
                        </span>
                    </p>
                   
                </div>
            </div>
            
        `
    })
    return coursesHtml
}

function renderCourse() {
    document.getElementById('courses').innerHTML = getCoursesHtml()
}
renderCourse()
// <p class="course-teacher"> <span style=font-size:12px>with</span> <span style=font-weight:700;font-size:13px>${info.teacher}</p>