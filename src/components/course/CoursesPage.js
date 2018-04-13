import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'


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
      this.props.dispatch(courseActions.createCourse(this.state.course))
    }

    courseRow = (course, index) => {
      return <div key={index}>{course.title}</div>
    }

    
  render() {
    return (
      <div>
        <h1>Courses Page </h1>
        {this.props.courses.map(this.courseRow)}
        <hr />
        <h2>Add course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <button type="submit" onClick={this.onClickSave}>Save</button>
      </div>
    )
  }
}


function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  }
}
export default connect(mapStateToProps)(CoursesPage);