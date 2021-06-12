import React from 'react'
import axios from "axios";
export default class GetAllCourses extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courses:[]
        }
    }
    componentDidMount() {
       axios.get('http://localhost:5000/courses/getAllCourses').then(res => {
               this.setState({courses: res.data});
           }
       ).catch(e => {
           alert(e.message)
       })

   }

   calculate_total(id){
        axios.get(`http://localhost:5000/courses/calculateTotal/${id}`).then(
            res=>{ alert(res.data)}
        )
}

    subjectHandlers(id){
        window.location = `/${id}`
    }
     render() {
        const {courses} = this.state
        return (
            <div>
                    <h1>Courses</h1>
                <div className="container">
                    {courses.map(c =>{
                        return (
                            <div className="card mb-3" key ={c._id}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{c.name}</li>
                                    <li className="list-group-item">{c.code}</li>
                                    <li className="list-group-item">{c.lecturerInCharge}</li>
                                    <li className="list-group-item">{c.passmark}</li>
                                    {c.subjects.map((subs)=>{
                                        return (<li key = {subs._id} className="list-group-item" onClick={()=>{this.subjectHandlers(subs._id)}}> {subs.name}  </li>)
                                    })}
                                    <li onClick= {()=>this.calculate_total(c._id)}>  Click here for total amount </li>
                                </ul>
                            </div>

                        )
                    })}
                    </div>
            </div>
        )
    }

}