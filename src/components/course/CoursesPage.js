import React, { Component } from 'react'

class CoursesPage extends Component {
    state = {
      course: {title: ''}
    }

    onTitleChange= (event) =>{
      const course = this.state.course;
      course.title = event.target.value;
      this.setState({course: course});
    }

    onClickSave = () =>{
      alert(`Saving ${this.state.course.title}`);
    }
  render() {
    return (
      <div>
        <h1>Courses Page </h1>
        <hr />
        <h2>Add course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="Submit" value="Save" onClick={this.onClickSave}/>
      </div>
    )
  }
}

export default CoursesPage;