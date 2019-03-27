import React, { Component } from 'react';

class AddStudent extends Component {
    state = {
        name: '',
        course: '',
        grade: ''

    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }    
        // ^^^this is making it more dynamic
    

    // const {name, course, grade} = this.state;
    // this.setState ({
    //     name: event.target.name === 'name' ? event.target.value: name,
    //     course: event.target.course === 'course' ? event.target.value: course,
    //     grade: event.target.grade === 'grade' ? event.target.value: grade,
    // }); 
    //if event.target.name === 'grade' then make grade = event.target.value else make it grade
    //^^^^^ this is another way to write a conditional (ternary) operator


    // switch (event.target.name) {
    //     case 'name':
    //         this.setState({
    //             name: event.target.value,
    //         });
    //         break;
    //     case 'course':
    //         this.setState({
    //             course: event.target.value,
    //         });
    //         break;
    //     case 'grade':
    //         this.setState({
    //             grade: event.target.value,
    //         });
    //         break;
    // }



    handleSubmit(event) {
        event.preventDefault();

        this.props.add({...this.state});

        this.setState({
            name: '',
            course: '',
            grade: ''
        });
    }

    render() {
        const { col = 's12' } = this.props;
        const { name, course, grade } = this.state;

        return (
            <form onSubmit={this.handleSubmit.bind(this)} className={`col ${col}`}>
                <div className="input-field">
                    <input name="name" autoComplete="off" id="name" type="text" value={name} onChange={this.handleInputChange} />
                    <label htmlFor="name">Student Name</label>
                </div>
                <div className="input-field">
                    <input name="course" autoComplete="off" id="course" type="text" value={course} onChange={this.handleInputChange} />
                    <label htmlFor="course">Student Course</label>
                </div>
                <div className="input-field">
                    <input name="grade" autoComplete="off" id="grade" type="text" value={grade} onChange={this.handleInputChange} />
                    <label htmlFor="grade">Student Grade</label>
                </div>
                <button className="btn green">Add Student</button>
            </form>
        );
    }
}

export default AddStudent;




