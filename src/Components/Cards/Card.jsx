import React from 'react'
import {Chip} from "@mui/material"
import styles from "./Card.module.css";


function Card({data}) {
  const {image , follows , title} = data;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={image} alt={title}  className={styles.image} />
          <div className={styles.banner}>
            {/* className={styles.banner} :: Creates a small background banner wrapper sitting at the bottom edge of the image frame to house the status badge. */}
            <Chip label={`${follows} Follows`} size="small" className={styles.chip}/>
          </div>
        </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
       </div>
    </>
  )
}

export default Card
