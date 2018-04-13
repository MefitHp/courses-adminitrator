import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';


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
      this.props.actions.createCourse(this.state.course)
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

CoursesPage.propTypes ={
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch){
  return {
  //createCourse: (course) => dispatch(courseActions.createCourse(course))
  actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);