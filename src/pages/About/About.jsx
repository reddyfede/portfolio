import "./About.css"

export default function About() {
    return (
        <div id="about">
            <hr />
            <h1>About me</h1>
            
            <div className="subContainer">
                <h2> From <span className="fa-solid fa-screwdriver-wrench"></span></h2>
                <h2>To <span className="fa-solid fa-code"></span></h2>
            </div>

            <p>I am a Software Engineer with a background and work experience in Industrial Engineering.</p>
            
            <p>In my previous job experiences I worked closely with software suppliers doing Business Analysis and Quality Assurance to implement new software for the factory.</p>
            
            <p>This gave me the opportunity to experience the full life cycle of software and helped me to always be aware of clients’ needs.</p>
        </div>
    )
}