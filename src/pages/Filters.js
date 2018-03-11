import React from 'react'

const Filters = () => 
<div> 
Awesome, nice to meet you!
Now, would you let us know what you're looking for?
<form method="post" action="/filters">
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


export default Filters