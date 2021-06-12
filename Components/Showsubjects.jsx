import React from "react";
import axios from "axios";

export default class Showsubjects extends React.Component{
constructor(props) {
    super(props);
    this.state ={
     subjects:"",
        courses:[]
    }
}
async componentDidMount() {
   const response = await  axios.get(`http://localhost:5000/Subjects/getSubject/${this.props.match.params.id}`)
    this.setState({subjects:response.data})
       this.setState({courses:response.data.courses})
}

    render() {
     const {subjects} =this.state;

        return (
            <div>
                <center><h1 float = "center">Courses</h1></center>
                <div className="container">

                            <div className="card mb-3" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{subjects.name}</li>
                                    <li className="list-group-item">{subjects.description}</li>
                                    <li className="list-group-item">{subjects.amount}</li>
                                    {
                                         this.state.courses.map(cs =>{
                                            return <li key = {cs._id} className="list-group-item">{ cs.name}</li>
                                        })
                                    }

                                </ul>
                            </div>
                </div>
            </div>
        )
}

}