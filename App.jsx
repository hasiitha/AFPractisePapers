import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavBar from './Components/navBar'
import GetAllCourses from "./Components/GetAllCourses";
import AddCourse from "./Components/AddCourse";
import Showsubjects from "./Components/Showsubjects";
export default class App extends React.Component{

    render() {
        return(
            <Router>
                <NavBar/>
                <Switch>
                    <Route path='/getCourse' component={GetAllCourses}/>
                    <Route path='/AddCourse' component={AddCourse}/>
                    <Route path = '/:id' component={Showsubjects}/>
                </Switch>


            </Router>

        )
    }


}