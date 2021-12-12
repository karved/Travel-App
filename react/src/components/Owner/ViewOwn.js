import React, { useEffect, useState} from 'react'
import Table from "../Customer/Table";

const comonscol = [
    { title: "Owner Name", field: "owner_name" },
    { title: "Average Rating", field: "avg_rating" },
    { title: "Number of Properties Owned", field: "num_properties_owned" },
    { title: "Average Property Rating", field: "avg_property_rating" }
  ];

  function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vo")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          {Array.isArray(data) && data.map(group => group.avg_rating === null ? group.avg_rating = 0 : group.avg_rating)}
          {Array.isArray(data) && data.map(group => group.avg_property_rating === null ? group.avg_property_rating = 0 : group.avg_property_rating)}
          setData(data)
          console.log(data)
          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])

    

    
    return (
        <div className='container'>
      <Table col={comonscol} data={data} />

        </div>
    )
}

export default Dashboard