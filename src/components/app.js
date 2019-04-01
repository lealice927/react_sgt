import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import AddStudent from './add_student';
import StudentsTable from './students_table';
import studentData from '../dummy_data/student_list';

let id = 100; //this would not be done in real practice, this is just for testing!


class App extends Component {
    state = {
        students: []
    }

    addStudent = (student) => {
        student.id = id++; //this would NOT be done in real practice, this is just for testing!

        this.setState({
            students: [...this.state.students, student]
        });
    }

    deleteStudent = (id) => {
        const studentsCopy = this.state.students.slice();
        
        const index = studentsCopy.findIndex((student) => {
            return student.id === id;
        });

        if(index >= 0){
            studentsCopy.splice(index, 1); //will remove student from the index @ position 1

            this.setState({
                students: [...studentsCopy]
            });
        }

        // console.log('Found Index:', index);
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
        return (
            <div>
                <h1 className="center">React SGT</h1>

                <div className="row">
                    <StudentsTable col="s12 m8" delete={this.deleteStudent} list={this.state.students} />
                    <AddStudent col="s12 m4" add={this.addStudent} />
                </div>
            </div>
        );
    }
}

export default App;
