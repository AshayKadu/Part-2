import { useEffect, useState } from "react";

const User = ({name, location}) => {
    const [count] = useState(0);
    useEffect(() =>{
        const timer =setInterval(()=> {
                console.log("Ashay Kadu")
            }, 1000);
            console.log("useEffect")

        return () => {
            clearInterval(timer);
        console.log("return")
        }

    },[]);
    console.log("render");

    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : ashaykadu95@gmail.com</h4>
        </div>
    )
}

export default User;