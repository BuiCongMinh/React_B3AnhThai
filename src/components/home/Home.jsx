import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

function Home(props) {

  // console.log(12, props);
  
  return (
    <div>
      <div>
        <Link to={'/todolist'}>Todolist</Link><br />
        <Link to={'/wailet'}>wailet</Link><br />
        <Link to={'/sing-in'}>SingIn</Link><br />
        {props.count} <button onClick={props.ChangeCount}>click</button>
      </div>
    </div>
  )
}

export default Home