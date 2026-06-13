// import React from 'react'
// import {Chip} from "@mui/material"
// import styles from "./Card.module.css";

// function Card({data}) {
//   const {image , follows , title} = data;
//   return (
//     <>
//       <div className={styles.wrapper}>
//         <div className={styles.card}>
//           <img src={image} alt={title}  className={styles.image} />
//           <div className={styles.banner}>
//             {/* className={styles.banner} :: Creates a small background banner wrapper sitting at the bottom edge of the image frame to house the status badge. */}
//             <Chip label={`${follows} Follows`} size="small" className={styles.chip}/>
//           </div>
//         </div>
//       <div className={styles.titleWrapper}>
//         <p>{title}</p>
//       </div>
//        </div>
//     </>
//   )
// }
// export default Card


// Milestone - 4
import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const { image, title } = data;

  switch (type) {
    case "album": {
      const { follows, songs } = data;
      return (
        <Tooltip title={`${songs?.length || 0} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="album" loading="lazy" />
              <div className={styles.banner}>
                <Chip label={`${follows} Follows`} size="small" className={styles.chip} />
              </div>
            </div>
            <div className={styles.titleWrapper}><p>{title}</p></div>
          </div>
        </Tooltip>
      );
    }
    // 🔹 MILESTONE 4 CHANGE: Added support for handling song type parameters cleanly
    case "song": {
      const { likes } = data;
      return (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="song" loading="lazy" />
            <div className={styles.banner}>
              {/* 🔹 MILESTONE 4 CHANGE: Render individual total number of Likes instead of Follows badge */}
              <Chip label={`${likes} Likes`} size="small" className={styles.chip} />
            </div>
          </div>
          <div className={styles.titleWrapper}><p>{title}</p></div>
        </div>
      );
    }
    default:
      return null;
  }
};

export default Card;