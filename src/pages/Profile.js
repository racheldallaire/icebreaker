import React from 'react'
import axios from 'axios';
import { Button, Card, CardImg, CardText, CardHeader, CardFooter, CardBody, CardTitle, CardSubtitle, Col, Container, Form, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, FormText, Row  } from 'reactstrap';


export default class Profile extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        first_name: "",
        last_name: "",
        age: "", 
        gender: "",
        description: "",
        fb_pic: "hi"};
    }

    componentDidMount(e){
      axios.get('/api/profile')
      .then(response => {

        console.log(response.data[0].facebook_picture_url)
        this.setState({ 
            first_name: response.data[0].first_name,
            last_name: response.data[0].last_name,
            age: response.data[0].age, 
            gender: response.data[0].gender,
            description: response.data[0].description,
            fb_pic: response.data[0].facebook_picture_url });
      })
      .catch(function (error) {
      console.log(error);
      });

      // axios.get('/api/edit_filter')
      // .then(response => {

      //   console.log(response.data[0].facebook_picture_url)
      //   this.setState({ 
      //       first_name: response.data[0].first_name,
      //       last_name: response.data[0].last_name,
      //       age: response.data[0].age, 
      //       gender: response.data[0].gender,
      //       description: response.data[0].description,
      //       fb_pic: response.data[0].facebook_picture_url });
      // })
      // .catch(function (error) {
      // console.log(error);
      // });
    }
    
        


  render() {
  return (
    <div>

      <Container fluid>
      <Row>

        <Col md={{ size: 5, offset: 1 }}>
            <Card>
              <CardBody className="card-body">
              <CardImg top src={this.state.fb_pic} alt="Image Not Found" /><p/>
                <CardTitle>{this.state.first_name} {this.state.last_name}</CardTitle>
                <p>{this.state.age} | {this.state.gender}</p>
                <Button className="cool-button" href="/signup">Edit </Button>
              </CardBody>
              <CardFooter className="after-button">{this.state.description}</CardFooter>
            </Card>
        </Col>

        <Col md="5">
          <Card>
            <CardBody className="card-body">
            <h3>Preferences</h3>
            </CardBody>

            <CardFooter>
             <Form>

        <FormGroup>
          <legend>Age Range</legend>
          <Label for="exampleSelect">From</Label>
          <Input type="select" name="min_age" id="exampleSelect">
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
          <Label for="exampleSelect">To</Label>
          <Input type="select" name="max_age" id="exampleSelect">
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
        </FormGroup>

        <FormGroup>
        <legend>Distance</legend>
        <InputGroup>
        <Input placeholder="No more than" name="distance"/>
        <InputGroupAddon addonType="append">km away</InputGroupAddon>
        </InputGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Looking For</legend>
          <FormGroup check>
          <Label check>
            <Input type="checkbox" name="male" />{' '}
            Men
          </Label>
          <Label check>
            <Input type="checkbox" name="female" />{' '}
            Women
          </Label>
          <Label check>
            <Input type="checkbox" name="other" />{' '}
            Other
          </Label>
        </FormGroup>
        </FormGroup>

        <p/><Button className="cool-button2">Submit</Button>
      </Form>

            </CardFooter>
          </Card>
        </Col>

      </Row>
      </Container>
    </div>
    )
  }
}