import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        let {studentInfo,stt}=this.props;
        return (
            <tbody>
                             <tr>
                    <td>{stt+1}</td>
                    <td>{studentInfo.studentId}</td>
                    <td>{studentInfo.studentName}</td>
                    <td>{studentInfo.age}</td>
                    <td>{studentInfo.birthDate}</td>
                    <td>{studentInfo.sex?"Nam":"Nữ"}</td>
                    <td>{studentInfo.address}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        )
    }
}
