import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


const Books = () => 
<div> 
Hey you!
Thanks for joining Icebreaker!
Please help us find your ideal matches by filling out your info!
<form method="post" action="/register">
  <label>
    First Name:
    <input type="text" name="first_name" />
  </label>
  <label>
    Last Name:
    <input type="text" name="last_name" />
  </label>
  <label>
    Age:
    <input type="text" name="age" />
  </label>
  <label>
    Gender:
    	<select>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
  </label>
  <input type="submit" value="Submit" />
	</form>
</div>


export default Books


