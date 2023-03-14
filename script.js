import { coursesArray } from "./data.js";

function getCoursesHtml() {
    let coursesHtml = ''
    coursesArray.forEach(function (info){
        coursesHtml += `
            <div class="course-block">
                <div class="course-inner">
                    <p class="course-level">${info.level}</p>
                        <div class="course-center">
                            <h1 class="course-name">${info.name}</h1>
                        </div>
                        
                    <p class="course-info">${info.info} <br></br>
                    <span style=font-size:12px>with</span> 
                    <span class="course-teacher" style=font-weight:700; font-size:13px;>${info.teacher}</span>
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