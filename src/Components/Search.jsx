import React from 'react'
// import {TextField} from "@mui/material"
import styles from "../CSS/Search.module.css"

const Search = () => {
  return (
    <>

    <form className={styles.wrapper}>
      <input 
    //   id="outlined-basic"
      className={styles.search}
      placeholder='search'
    //    label="Outlined" 
    //   variant="outlined" 
      />
      <button className={styles.searchButton} type="submit">Search</button>
    </form>
    </>
  )
}

export default Search
