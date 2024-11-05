// import React from 'react'
// import {useState} from 'react'
// function Call(){
//     const[data,setdata]=useState({});
//     useEffect(()=>{
//        fetch("https://api.github.com/users/hiteshchoudhary")
//        .then(resp=>resp.json)
//        .then(data=>
//         {console.log(data)
//             setdata(data)})
//     },[])
//     return(
//         <>
//         <h1>Your github followers are:{data.followers}</h1>
//         <img src={data.avatar_url}/>
//         </>
//     )
// }
// export default Call
// import { useLoaderData } from 'react-router-dom';

// function Call() {
//     const data=useLoaderData();
//     // const [data, setData] = useState({});  // Initialize data as an object

//     // useEffect(() => {
//     //     fetch("https://api.github.com/users/hiteshchoudhary")  // Corrected URL
//     //         .then(resp => resp.json())  // Call .json() as a function
//     //         .then(data => {
//     //             console.log(data);
//     //             setData(data);
//     //         })
//     //         .catch(error => console.error("Error fetching data:", error));
//     // }, []);

//     return (
//         <>
//             <h1>Your GitHub followers are: {data.followers}</h1>
//             {data.avatar_url && <img src={data.avatar_url} alt="User avatar" />}
//         </>
//     );
// }
// export default Call
// export const loadergit=async()=>{
//     await fetch("https://api.github.com/users/hiteshchoudhary");
//     return response.json()
// }

import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Call() {
    const data = useLoaderData();  // Using useLoaderData to access data from the loader function

    return (
        <>
            <h1>Your GitHub followers are: {data.followers}</h1>
            {data.avatar_url && <img src={data.avatar_url} alt="User avatar" />}
        </>
    );
}

export default Call;

export const loadergit = async () => {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");  // Fetch the data
        if (!response.ok) {
            throw new Error("Network response was not ok");  // Error handling for failed request
        }
        return await response.json();  // Parse and return JSON data
    } catch (error) {
        console.error("Error fetching data:", error);
        return { followers: 0, avatar_url: "" };  // Provide a fallback object in case of error
    }
};

