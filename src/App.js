import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import FormStudents from './components/FormStudents';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      students:[
        {
        studentId :"Sv01",
        studentName:"Nguyễn Văn A",
        age:24,
        sex:true,
        birthDate:"1999-07-29",
        birthPlace:"HP",
        address:"Hải phòng tp hoa phượng đỏ"
      },
      {
        studentId :"Sv02",
        studentName:"Nguyễn Văn C",
        age:20,
        sex:false,
        birthDate:"2003-06-10",
        birthPlace:"VT",
        address:"Việt Tiến "
      },
      {
        studentId :"Sv03",
        studentName:"Nguyễn Văn B",
        age:21,
        sex:false,
        birthDate:"2002-05-01",
        birthPlace:"TL",
        address:"Tiên lãng"
      }
    ],
    searchData:"",
    sortDir: "",
    sortBy:""
    }
  }
  handleSearch=(searchData)=>{
    this.setState({
      searchData : searchData
    })
  }
  handleSort=(sortDir,sortBy)=>{
    this.setState({
      sortDir:sortDir,
      sortBy:sortBy
    })

  }
  render() {
    let students=[];
    if(this.state.searchData!=""){
      this.state.students.forEach(student => {
        if(student.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())){
        students.push(student);
      }
      })
    }else{
      students=[...this.state.students];
    }
    if(this.state.sortDir=="studentName"){
      //Sắp xếp theo tên
      if(this.state.sortBy=="ASC"){
        //Tên SV tăng dần
        students.sort((a,b) => (a.studentName > b.studentName)?1:(a.studentName <b.studentName)?-1:0);
      }else{
                //Tên SV giảm dần
        students.sort((a,b) => (a.studentName > b.studentName)?-1:(a.studentName <b.studentName)?1:0);
      }

    }else{
      //Sắp xếp theo tuổi SV
    if(this.state.sortBy=="ASC"){
      //tuổi tăng dần
      students.sort((a,b) =>(a.age-b.age));
    }else{
      //tuổi giảm dần
      students.sort((a,b) =>(b.age-a.age));
    }

    }
    return (
      <div className="App">
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
      <Control handleSearchProps={this.handleSearch} handleSortProps={this.handleSort}></Control>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudents students={students}></ListStudents>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <FormStudents></FormStudents>
        {/* END FORM SINH VIÊN */}
      </div>
      
          </div>
    )
  }
}

