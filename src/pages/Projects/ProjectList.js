import minesweeperGif from "../../images/minesweeper.gif"
import litteitalypizzaGif from "../../images/littleitalypizza.gif"
import eventlyGif from "../../images/evently.gif"

const ProjectList = [
    {
        name: "event.ly",
        about: "event.ly is a map-based web application for finding and creating events to connect with people in your local community. Created in 10 days as a pair-programming project for the General Assembly Software Engineer Immersive Bootcamp.",
        tech: ["Node.js","Express","React","Mongoose","MongoDB","Tailwind", "JavaScript"],
        image: eventlyGif,
        github: "https://github.com/reddyfede/event-ly",
        link:"https://event-ly.netlify.app/",
        class: "event"
    },
    {
        name: "Little Italy Pizza",
        about: "Little Italy Pizza is a MEN-stack web application for a fictitious pizza shop. Created as a week-long pair programming project at GA Software Engineering Immersive Bootcamp.",
        tech: ["Node.js","Express","Mongoose","MongoDB","Bootstrap", "JavaScript"],
        image: litteitalypizzaGif,
        github: "https://github.com/reddyfede/little-italy-pizza",
        link:"https://little-italy-pizza.onrender.com/",
        class: "pizza"
    },
    {
        name: "Minesweeper",
        about: "My take at recreating this classic game as the first solo project for the General Assembly Software Engineer Immersive Bootcamp.",
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


