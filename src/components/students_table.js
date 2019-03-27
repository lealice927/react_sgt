import React, { Component } from 'react';

class StudentsTable extends Component {


    render() {
        const { col = 's12', list } = this.props; //if the value is undefined, col will set it, otherwise it'll keep the default value

        const studentElements = list.map((student) => {
            return (
                //for things to work properly, we need to have "key"
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                    <td>{student.grade}</td>
                </tr>
            )
        });

        return (
            <div className={`col ${col}`}>
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