import minesweeperGif from "../../images/minesweeper.gif"
import litteitalypizzaGif from "../../images/littleitalypizza.gif"

const ProjectList = [
    {
        name: "Little Italy Pizza",
        about: "Litlle Italy Pizza is a MEN-stack web application for a fictitious pizza shop. Created as a week-long pair programming project at GA Software Engineering Immersive Bootcamp.",
        tech: ["Node.js","Express","Mongoose","MongoDB","Bootstrap","HTML", "CSS", "JavaScript"],
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


