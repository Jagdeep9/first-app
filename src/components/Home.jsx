import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import banner_img from '../asset/slide-img1.png'
import {Link } from 'react-router-dom'


export const Home = () => {
  return (
   
    <>

  
   
<div className='banner'>
<Container>
<Row> 
  <Col md={6} className='flex-2'>
  {/* <div className='left_side'> */}
   <h1>Outstanding Web
  Service for you.
   </h1>
   <p>Starting at only <strong>$2.38/mo*</strong>
   </p>
   <button className='btn2'><Link to="/Tools">Tools</Link></button>
  {/* </div> */}
  </Col>
  <Col md={6}>
  {/* <div className='right_side'> */}
    <img src={banner_img} alt="imaage"></img>
    {/* </div> */}
    </Col>
    </Row>
    </Container>
</div>



    </>
  )
}
