import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("c constructor")
  }

  componentDidMount() {
    console.log("Child Component did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log("c render")
    return (
      <div className="user-card">
        <h2>Count = {count}</h2>
        <h2>Count2 = {count2}</h2>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1, count2 : this.state.count2 + 2 });
          }}
        >
          Count Increase
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : ashaykadu95@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
