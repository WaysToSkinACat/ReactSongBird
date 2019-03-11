import React from 'react'
 
const SearchBar = props => {
  return(
    <div>
      <input className="searchBar" type="text" placeholder="Search for a Song" onChange={props.searchFunc}/>
    </div>
  )
}
 
export default SearchBar