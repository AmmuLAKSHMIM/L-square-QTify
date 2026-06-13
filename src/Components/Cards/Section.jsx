// Milestone - 1
// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// // Change these:
// import Card from './Card';
// import Carousel from './Carousel';
// import styles from "./Section.module.css";

// const Section = ({ title, apiEndpoint }) => {
//   const [data, setData] = useState([]);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   useEffect(() => {
//     axios.get(apiEndpoint)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, [apiEndpoint]);

//   return (
//     <div className={styles.sectionWrapper}>
//       {/* Header Section */}
//       <div className={styles.header}>
//         <h3>{title}</h3>
//         <button onClick={() => setIsCollapsed(!isCollapsed)}>
//           {isCollapsed ? "Show All" : "Collapse"}
//         </button>
//       </div>

//       {/* Dynamic Content Toggle */}
//       {data.length === 0 ? (
//         <div className={styles.loading}>Loading albums...</div>
//       ) : isCollapsed ? (
//         /* 🎠 CAROUSEL VIEW: Shown when collapsed */
//         <Carousel 
//           data={data} 
//           renderComponent={(item) => <Card key={item.id} data={item} />} 
//         />
//       ) : (
//         /* 📱 GRID VIEW: Shown when expanded */
//         <div className={styles.gridContainer}>
//           {data.map((item) => (
//             <Card key={item.id} data={item} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default Section;

// Milestone - 3 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./Card";
// import Carousel from "../Carousel/Carousel";
// import styles from "./Section.module.css";

// const Section = ({ title, apiEndPoint, type }) => {
//   const [data, setData] = useState([]);
//   // Alternate approach: Use explicit layout modes instead of an abstract boolean flag
//   const [viewMode, setViewMode] = useState("carousel"); 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiEndPoint);
//         setData(response.data);
//       } catch (error) {
//         console.error(`Failed to fetch data for section: ${title}`, error);
//       }
//     };
//     fetchData();
//   }, [apiEndPoint, title]);

//   const toggleLayout = () => {
//     setViewMode((prevMode) => (prevMode === "carousel" ? "grid" : "carousel"));
//   };

//   return (
//     <section className={styles.sectionContainer}>
//       <div className={styles.sectionHeader}>
//         <h3>{title}</h3>
//         <button className={styles.toggleButton} onClick={toggleLayout}>
//           {viewMode === "carousel" ? "Show All" : "Collapse"}
//         </button>
//       </div>

//       {/* Render layout matching the chosen layout mode */}
//       {viewMode === "grid" ? (
//         <div className={styles.gridLayout}>
//           {data.map((album) => (
//             <Card key={album.id} data={album} type={type} />
//           ))}
//         </div>
//       ) : (
//         <Carousel 
//           items={data} 
//           renderItem={(album) => <Card key={album.id} data={album} type={type} />} 
//         />
//       )}
//     </section>
//   );
// };
// export default Section;

// Milestone - 4
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Carousel from "../Carousel/Carousel"
// 🔹 MILESTONE 4 CHANGE: Import Material-UI Tabs layout components
import { Tabs, Tab } from "@mui/material"; 
import styles from "./Section.module.css";

const Section = ({ title, apiEndPoint, type, filterSource }) => { // 🔹 MILESTONE 4 CHANGE: Added 'filterSource' prop
  const [data, setData] = useState([]);
  const [layoutMode, setLayoutMode] = useState("carousel");
  
  // 🔹 MILESTONE 4 CHANGE: Add states to hold active genres array and tracking tab selection index
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]); // Defaults with an 'All' option
  const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);

  // Core Data Fetching (Albums or Songs)
  useEffect(() => {
    axios.get(apiEndPoint)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(`Error fetching data for ${title}:`, err);
      });
  }, [apiEndPoint, title]);

  // 🔹 MILESTONE 4 CHANGE: Fetch filter categories/genres only if a filterSource API target is provided
  useEffect(() => {
    if (filterSource) {
      axios.get(filterSource)
        .then((res) => {
          // Keep the 'All' tab at index 0 and append incoming genres from backend API response payload
          setGenres([{ key: "all", label: "All" }, ...res.data.data]);
        })
        .catch((err) => {
          console.error("Error fetching filter tabs:", err);
        });
    }
  }, [filterSource]);

  const handleToggleLayout = () => {
    setLayoutMode((prevMode) => (prevMode === "carousel" ? "grid" : "carousel"));
  };

  // 🔹 MILESTONE 4 CHANGE: Handler to sync state when a user clicks on a different genre tab
  const handleTabChange = (event, newValue) => {
    setSelectedGenreIndex(newValue);
  };

  // 🔹 MILESTONE 4 CHANGE: Compute the active genre filter key, then conditionally filter down matching data cards
  const activeGenreKey = genres[selectedGenreIndex]?.key;
  const filteredData = activeGenreKey === "all"
    ? data
    : data.filter((item) => item.genre?.key === activeGenreKey);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {/* 🔹 MILESTONE 4 CHANGE: Hide the layout toggle button for sections using filters (e.g., Songs section should always stay a Carousel) */}
        {!filterSource && (
          <button className={styles.toggleBtn} onClick={handleToggleLayout}>
            {layoutMode === "carousel" ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {/* 🔹 MILESTONE 4 CHANGE: Declaratively render Material-UI filter rows if filterSource is present */}
      {filterSource && (
        <div className={styles.tabsWrapper}>
          <Tabs
            value={selectedGenreIndex}
            onChange={handleTabChange}
          >
            {genres.map((genre) => (
              <Tab 
                key={genre.key} 
                label={genre.label} 
                className={styles.tabItem} 
              />
            ))}
          </Tabs>
        </div>
      )}

      {/* 🔹 MILESTONE 4 CHANGE: Swapped out raw 'data' parameter for 'filteredData' matching tab logic rules */}
      {layoutMode === "grid" ? (
        <div className={styles.gridLayout}>
          {filteredData.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel 
          data={filteredData} 
          renderComponent={(item) => <Card key={item.id} data={item} type={type} />} 
        />
      )}
    </div>
  );
};

export default Section;






































// STEP 2::
// import React, { useState } from "react";
// import Card from "./Card";
// import Grid from "./Grid";
// import Carousel from "../Carousel/Carousel";
// import styles from "./Section.module.css";

// export default function Section({ title, data, type }) {
//   // Carousel mode is active by default (collapsed state)
//   const [isCarouselMode, setIsCarouselMode] = useState(true);

//   const handleToggle = () => {
//     setIsCarouselMode((prev) => !prev);
//   };

//   return (
//     <div className={styles.sectionWrapper}>
//       <div className={styles.header}>
//         <h3>{title}</h3>
//         <h4 className={styles.toggleText} onClick={handleToggle}>
//           {isCarouselMode ? "Show All" : "Collapse"}
//         </h4>
//       </div>
      
//       {data.length === 0 ? (
//         <div className={styles.loading}>Loading...</div>
//       ) : (
//         <div className={styles.cardsWrapper}>
//           {!isCarouselMode ? (
//             // Grid layout showing everything when expanded
//             <Grid data={data} type={type} />
//           ) : (
//             // Carousel layout showing slides when collapsed
//             <Carousel 
//               data={data} 
//               renderComponent={(item) => <Card data={item} type={type} />} 
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
