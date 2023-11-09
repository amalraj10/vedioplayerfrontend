import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function HomePage() {
  return (
    <>
        <div className='container d-flex  alighn-items-center  ' style={{justifyContent:'space-between'}}>
        <Add/>
        <Link className='' to={'/watch-History'} style={{textDecoration:'none',color:'white '}}> <h5>Watch History</h5></Link>
        </div>
        <div  className=' container-fluid d-flex    ' style={{justifyContent:'space-between'}}>
            <View/>
            <Category/>
        </div>
        </>
  )
}

export default HomePage


