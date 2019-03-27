import React, { Component } from 'react';
import studentData from '../dummy_data/student_list';

class StudentsTable extends Component {
    state = {
        students: []
    }

    componentDidMount() { //we need to componentDidMount to call our render method.
        this.getStudentData();
    }

    getStudentData() {
        //call server here

        this.setState({
            students: studentData
        });
    }

    render() {
        const { students } = this.state; //this is the same as const students = this.state.students;

        const studentElements = students.map((student) => {
            return(
                //for things to work properly, we need to have "key"
                 <tr key={student.id}> 
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            )
        });

        return (
            <div className="col s12 m8">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentElements}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentsTable;