import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function VideoCard() {
  return (
    
    <div  className='mt-3 '>
        <h5>All Videos</h5>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pbs.twimg.com/media/FV1fvYUagAYksYh.jpg:large" />
      <Card.Body  >
        <Card.Title className=' d-flex  alighn-items-center  ' style={{justifyContent:'space-between'}}>Vedio Caption <button className='  btn btn-danger' ><i class="fa-solid fa-trash"></i></button> </Card.Title>
        
      
      </Card.Body>
    </Card>

    </div>
  )
}

export default VideoCard
