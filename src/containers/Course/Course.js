import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseData : null
    }

    render () {
        let course = <p>Select course</p>;

        if(this.props.course) {
        course = <div>
            <h1>{this.props.course.title}</h1>
            <p>You selected the Course with ID: {this.props.match.params.id}</p>
        </div>;
        }

        return (
            <div>
                {course}
            </div>
        );
    }
}

export default Course;