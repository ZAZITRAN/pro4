import React from "react";


const CourseID=()=>{
    console.log(typeof window.location.pathname);
    const Arr= window.location.pathname.split("/")
    console.log(Arr);
    let defaulKey=Arr[Arr.length-1]
    console.log(defaulKey);
    return(<>{defaulKey}
    </>)
}
export default CourseID;