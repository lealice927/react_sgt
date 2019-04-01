import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './add_student';
import StudentsTable from './students_table';


class App extends Component {
    state = {
        students: [],
        error: ''
    }

    addStudent = async (student) => {
        console.log(student);
        await axios.post('/api/grades', student);

        this.getStudentData();
    }

    deleteStudent = async (id) => {
        await axios.delete(`/api/grades/${id}`);

        this.getStudentData();
    }

    componentDidMount() { //we need to componentDidMount to call our render method.
        this.getStudentData();
    }

    async getStudentData() {
        //call server here
        try {
            const resp = await axios.get('/api/grades');
            this.setState({
                students: resp.data.data
            });
        } catch (err) {
            console.log('Error getting data:', err.message);

            this.setState({
                error: 'Error retrieving student data'
            });
        }


        //============ A CLEANER WAY TO DO THE SAME BELOW... SHOWN ABOVE FOR ASYNC AWAIT WITH TRY CATCH BLOCKS ====================// 


        //======== PROMISE HANDLED WITH CATCH BELOW =========================//
        // axios.get('http://localhost:3001/api/grades').then((resp) => {
        //     console.log('1. Server Response:', resp);

        //     this.setState({
        //         students: resp.data.data
        //     });
        // }).catch((err) => { //catch only happens when the server throws an error
        //     console.log('Error getting student data:', err.message);

        //     this.setState({
        //         error: 'Error retrieving student data'
        //     });
        // });

        // console.log('2. After Axios Call');


    }

    render() {
        return (
            <div>
                <h1 className="center">React SGT</h1>

                <h5 className="red-text text-darken-2">{this.state.error}</h5>
                <div className="row">
                    <StudentsTable col="s12 m8" delete={this.deleteStudent} list={this.state.students} />
                    <AddStudent col="s12 m4" add={this.addStudent} />
                </div>
            </div>
        );
    }
}

export default App;
