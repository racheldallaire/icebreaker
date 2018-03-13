import React from 'react';
import { Button, Card, CardImg, CardText, CardHeader, CardFooter, CardBody, CardTitle, CardSubtitle, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, FormText, Row  } from 'reactstrap';

navigator.geolocation.getCurrentPosition(showPosition);
let position = "";
function showPosition(pos) {
  position = pos;
  console.log(pos);
}

const Signup = () =>

  <div>
    <Container fluid>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody className="card-body">
              <h3>Details</h3>
            </CardBody>

            <CardFooter>
              <p>Help us find your new best friends by entering the following details 💕</p>

              <Form method="post" action="/signup">

              <FormGroup row>
                <Label sm={2}>First Name</Label>
                <Col sm={10}>
                  <Input type="text" name="first_name" required />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Last Name</Label>
                <Col sm={10}>
                 <Input type="text" name="last_name" required />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Age</Label>
                <Col sm={10}>
                  <Input type="select" name="age" required>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                    <option>46</option>
                    <option>47</option>
                    <option>48</option>
                    <option>49</option>
                    <option>50</option>
                    <option>51</option>
                    <option>52</option>
                    <option>53</option>
                    <option>54</option>
                    <option>55</option>
                    <option>56</option>
                    <option>57</option>
                    <option>58</option>
                    <option>59</option>
                    <option>60+</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup tag="fieldset">
                <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="gender" value="female" />{' '}
                  Female
                </Label>
                </FormGroup>

                <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="gender" value="male" />{' '}
                  Male
                </Label>
                </FormGroup>

                <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="gender" value="other" />{' '}
                  Other
                </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup row>
              <Label sm={2}>Description</Label>
              <Col sm={10}>
              <Input type="textarea" name="description" placeholder="Tell us a little about you." required />
              </Col>
              </FormGroup>

              <p/><Button className="cool-button2">Submit</Button>
              </Form>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>


export default Signup