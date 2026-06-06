import React from 'react'
// import {TextField} from "@mui/material"
import styles from "../CSS/Search.module.css"

const Search = () => {
  return (
    <>
    <div className={styles.searchbar}>
    <form className={styles.wrapper}>
      <input 
      className={styles.search}
      placeholder="search"
      />
      <button className={styles.searchButton} type="submit">Search</button>
    </form>
    </div>
    </>
  )
}

export default Search
