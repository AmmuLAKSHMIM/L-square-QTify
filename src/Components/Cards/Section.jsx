 import React, { useEffect , useState } from 'react'
 import axios from "axios"
 import Card from './Card'
import styles from "./Section.module.css";

 
 const Section = ({title , apiEndPoint}) => {
    const [data,setData] = useState([]);
    const [isCollapsed , setIsCollapsed] = useState(false)
    useEffect(()=>{
        axios.get(apiEndPoint)
        .then((res) => {
            setData(res.data)
            // setData(response.data): Extends into the payload package (response.data) containing the raw array of 13 albums, and saves it into our data state via setData.
        })
        .catch((err) => {
          console.log("Error fetching data:",err)
        })
    },[apiEndPoint])
    // this dependency array tells that ,in parent comopnent fetches a new data it clears the old data and updates the new one
   return (
     <>
     <div className={styles.sectionWrapper}>
      <div className={styles.header}>
       <h3>{title}</h3>
       <button onClick={ () => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Show All" : "Collapse"}
       </button>
      </div>

      {!isCollapsed && ( 
        <div className={styles.gridContainer}>
          {data.map((item) => (
            <Card key={item.id} data={item}/>
          ))}
        </div>
      )}
     </div>
     </>
   )
 }
 
 export default Section
 