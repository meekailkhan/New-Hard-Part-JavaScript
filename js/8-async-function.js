async function studentData(){
    console.log("me first");
    const data = (await fetch("../json/student_data.json")).json();
    data.then((res)=>{
        console.log(res[0].city)
    })
}

studentData()

console.log("me second")