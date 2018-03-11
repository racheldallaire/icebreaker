import React from 'react'

navigator.geolocation.getCurrentPosition(showPosition);

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
      <select name='age'>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        <option value="51">51</option>
        <option value="52">52</option>
        <option value="53">53</option>
        <option value="54">54</option>
        <option value="55">55+</option>
      </select>
  </label>
  <label>
    Gender:
      <select name='gender'>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
  </label>
  <label>
    Description:
    <textarea name="description" />
  </label>
  <input type="submit" value="Submit" />
  </form>
</div>


export default Signup