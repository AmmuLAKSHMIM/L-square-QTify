import React from 'react'
// import {TextField} from "@mui/material"
import styles from "../Components/CSS/Search.module.css"

const Search = () => {
  return (
    <>
    <div className={styles.searchbar}>
    <form className={styles.wrapper}>
       <input placeholder="Search an album"   className={styles.search}/>
      <button className={styles.searchButton} type="submit">Search</button>
    </form>
    </div>
    </>
  )
}

export default Search
