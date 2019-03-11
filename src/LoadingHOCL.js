import React from 'react'
import LoadingHOC from './LoadingHOC'
import './App.css';
 
const List = (props) =>{
  const{usernames} = props
  return(
    <ul>
      {usernames.map(person => <li key={person.songId}>{person.songId} {person.songName}  {person.bPM}  {person.description} {person.tubeLink}</li>)}
    </ul>
  )
}
 
export default LoadingHOC(List)