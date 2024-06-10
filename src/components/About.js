import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props){
        super(props);

        // console.log("p constructor")
    }

    componentDidMount() {
        // console.log("Parent Component did mount");
      }

    render(){
        // console.log("p render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name = {"Ashay Kadu (Class)"} location= {"Pulgaon, Maharashtra"}/>
                {/* <User name ={"Ashay Kadu (function)"} location ={"Pulgaon Town"} /> */}
            </div>
        );
    }
}


export default About;

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name = {"Ashay Kadu (Class)"} location= {"Pulgaon, Maharashtra"}/>
//             {/* <User name ={"Ashay Kadu (function)"} location ={"Pulgaon Town"} /> */}
//         </div>
//     );
// };