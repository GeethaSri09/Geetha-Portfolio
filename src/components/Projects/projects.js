import React from 'react'
import './projects.css';
import rock from '../../assests/rock_game.png'
import weather from '../../assests/weather.jpg'
import BookStore from '../../assests/Bookstore.jpg'
import movie from '../../assests/movie.jpg'

const Projects = () => {
  return (
    <section id="projects">
      <div className="projectstitle">
        My Projects
      </div>
      <div className="projectsdiv">
        <div className="project project1">
          <div className="projectpic">
            <img src={BookStore} alt="BookStore" className="notepad book"/>
          </div>
          <div className="projectname Bookstore">
            <p>Book Store</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/GeethaSri09/BookStore" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="https://bookstore-frontend-4o97.onrender.com" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div> 
        <div className="project project1">
          <div className="projectpic">
            <img src={rock} alt="game"/>
          </div>
          <div className="projectname">
            <p>Rock Paper Scissors</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/GeethaSri09/Rock-Papper-Scissor" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="https://geethasri09.github.io/Rock-Papper-Scissor/" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div>
        <div className="project project2">
          <div className="projectpic">
            <img src={weather} alt="weather" className="weathera"/>
          </div>
          <div className="projectname weather">
            <p>Weather App</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/GeethaSri09/WEATHER-APP" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="https://geethasri09.github.io/WEATHER-APP/" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div>
        <div className="project project3">
          <div className="projectpic">
            <img src={movie} alt="movie" className="notepad"/>
          </div>
          <div className="projectname">
            <p>Movie App</p>
          </div>
          <div className="projectbtns">
            <a href="https://github.com/GeethaSri09/Movie-App" target="_blank" rel="noopener noreferrer" className="btns">GitHub</a>
            <a href="https://geethasri09.github.io/Movie-App/" target="_blank" rel="noopener noreferrer" className="btns">Live</a>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Projects;
