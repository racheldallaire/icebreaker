import React from 'react'

navigator.geolocation.getCurrentPosition(showPosition)

function showPosition(pos) {
  console.log(pos);
}

const Signup = () => 
<div> 
Hey you!
Thanks for joining Icebreaker!
Please help us find your ideal matches by filling out your info!
<form method="post" action="/signup">
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


export default Signup