import minesweeperGif from "../../images/minesweeper.gif"
import litteitalypizzaGif from "../../images/littleitalypizza.gif"
import eventlyGif from "../../images/evently.gif"
import taskflowGif from "../../images/taskflow.gif"

const ProjectList = [
    {
        name: "Task Flow",
        about: "TaskFlow is an app to manage your team work. Team Leader can create tasks and assign them to team members based on their weekly availability. Team members can view their daily tasks on a gantt chart. Created in 10 days as a pair-programming project for the General Assembly Software Engineering Immersive Bootcamp.",
        tech: ["React","Django","PostgreSQL","Styled-Components", "Python", "JavaScript"],
        image: taskflowGif,
        github: "https://github.com/reddyfede/task-flow",
        link:"https://task-flow-prod.netlify.app/",
        class: "task"
    },
    {
        name: "event.ly",
        about: "event.ly is a map-based web application for finding and creating events to connect with people in your local community. Created in 10 days as a pair-programming project for the General Assembly Software Engineering Immersive Bootcamp.",
        tech: ["Node","Express","React","MongoDB","Tailwind", "Leaflet", "BingMap API", "Unsplash API", "JavaScript"],
        image: eventlyGif,
        github: "https://github.com/reddyfede/event-ly",
        link:"https://event-ly.netlify.app/",
        class: "event"
    },
    {
        name: "Little Italy Pizza",
        about: "Little Italy Pizza is a MEN-stack web application for a fictitious pizza shop. Created as a week-long pair programming project at GA Software Engineering Immersive Bootcamp.",
        tech: ["Node","Express","MongoDB","Bootstrap", "JavaScript"],
        image: litteitalypizzaGif,
        github: "https://github.com/reddyfede/little-italy-pizza",
        link:"https://littleitaly-e2a8e59785f8.herokuapp.com/",
        class: "pizza"
    },
    {
        name: "Minesweeper",
        about: "My take at recreating this classic game as the first solo project for the General Assembly Software Engineering Immersive Bootcamp.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: minesweeperGif,
        github: "https://github.com/reddyfede/minesweeper",
        link:"https://reddyfede.github.io/minesweeper/",
        class: "mine"
    },
]

export{
    ProjectList
}


