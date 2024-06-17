import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor")
    this.state = {
        userInfo : {
            name: "Dummy",
            location: "default",
        }
    };
  }
     async componentDidMount() {


        // console.log("component did mount");


    // console.log(" Component did mount");
        const data = await fetch("https://api.github.com/users/AshayKadu");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
  }

  componentDidUpdate(){
    // console.log("component did update")
  }

  componentWillUnmount(){
    // console.log("component will unmount")
  }

  render() {
    const {name, location, avatar_url} = this.state.userInfo;
    // console.log(" render")
    return (
      <div className="user-card">
        <img src={avatar_url}  />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : ashaykadu95@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
