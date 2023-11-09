import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function WatchHistory() {
  return (
  <>
        
        <div className='container'>
        <div className='container d-flex  alighn-items-center  ' style={{justifyContent:'space-between', }}>
            <h3>Watch History</h3> 
          <Link to={'/home'} style={{textDecoration:'none'}}><h5><i class="fa-solid fa-arrow-left"></i> Back to Home</h5></Link>  
</div>
        
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            </tbody>
           </Table>
        </div>
  </>
  )
}

export default WatchHistory