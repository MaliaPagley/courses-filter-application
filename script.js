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
                    <p class="course-info">${info.info}</p>
                    <p class="course-teacher">${info.teacher}</p>
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