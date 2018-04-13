import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti modi natus ullam repellat provident quibusdam dolores. Perspiciatis veritatis enim ipsum molestias maiores? Voluptate autem voluptatem commodi totam exercitationem maxime?</p>
        <Link to="/about" className="btn btn-primary btn-lg">Leer más</Link>   
      </div>
    )
  }
}

export default HomePage
