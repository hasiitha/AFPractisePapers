import React from 'react';
import Select from 'react-select'
import axios from "axios";


export default class extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name:"" ,
            code:"",
            passmark:"",
            lecturerInCharge:"",
            options:"",
            selected:""
        }
        this.onChange =this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        this.handlerChange= this.handlerChange.bind(this);
    }

    onChange(e){
        const{name,value} =e.target;
        this.setState({[name]:value});
    }


   componentDidMount() {
       axios.get('http://localhost:5000/Subjects/getAllSubjects').then(
           (res) => {
               const subs = [];
               res.data.map((obj, index) => {

                   const sub = {
                       value: obj._id,
                       label: obj.name
                   }
                   subs.push(sub);


               })
               this.setState({options: subs})

           }
       ).catch(e => console.log(e.message))
   }


    async onSubmit() {
        alert('selecteds are'+this.state.selected)
        const post = {
            name: this.state.name,
            code: this.state.code,
            passmark: this.state.passmark,
            lecturerInCharge: this.state.lecturerInCharge,
            subjects:this.state.selected
        }
        alert(post.name + post.code + post.passmark + post.lecturerInCharge);
        try {
            const result = await axios.post('http://localhost:5000/courses/createCourse',post);
    }catch(e){
        console.log(e.message);
    }
    }

    handlerChange(e){
        const sel =[]
        if(e){
            e.map(item =>{
                if(!sel.includes(item.value)){
                    sel.push(item.value)
                }
                }
            )
            this.setState({selected:sel})
        }
}



    render() {
        return(
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" className="form-control" name="name"
                               placeholder="name" onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">code</label>
                        <input type="text" className="form-control" name="code"
                               placeholder="code" onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Passmark</label>
                        <input type="number" className="form-control" name="passmark"
                               placeholder="Passmark" onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lecturerInCharge" className="form-label">Lecturer In Charge</label>
                        <input type="text" className="form-control" name="lecturerInCharge"
                               placeholder="lecturerInCharge" onChange={this.onChange} />
                    </div>
                    <div>
                        <Select
                            options={this.state.options} isMulti = "true"
                            onChange = {this.handlerChange}
                        />

                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" onClick={this.onSubmit}/>
                </div>
        )
        }


}