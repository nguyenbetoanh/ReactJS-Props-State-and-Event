import React, { Component } from 'react'
import Student from './Student'

export default class ListStudents extends Component {

  render() {
    let {students}=this.props;
    let elementStudent=students.map((student,index)=>{
        return <Student key={student.studentId} studentInfo={student} stt={index}/>
    })
    return (
        <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Stt</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Sinh nhật</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
              </tr>
            </thead>
              {elementStudent}
          </table>
        </div>
      </div>
    )
  }
}
