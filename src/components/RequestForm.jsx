import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Multiselect from 'react-bootstrap/DropdownMenu'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";

export default function RequestForm({userData}) {
  const userID = userData.id;
  console.log(userID);
  const [serviceRequested, setServiceRequested] = useState("");
  const [regionsRequested, setRegionsRequested] = useState([]);
  const [entitiesStatus, setEntitiesStatus] = useState("");
  const [employeeNumbers, setEmployeeNumbers] = useState(0);
  const [comments, setComments] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log('submitting form...');
    console.log(serviceRequested, regionsRequested, entitiesStatus, employeeNumbers, comments);

    const currentSubmittedRequest = {
      referring_employee_id : userID,
      services_id: serviceRequested,
      regions_id: regionsRequested,
      employee_numbers: employeeNumbers,
      entities_existing: entitiesStatus,
      comments: comments,
      request_addressed: false,
    }
    console.log('printing currently submitted request...');
    console.log(currentSubmittedRequest);

    // axios.post('/request', {
      // referring_employee_id : userID,
      // employee_numbers: employeeNumbers,
      // entities_existing: entitiesStatus,
      // comments: comments,
      // request_addressed: false,
    // })
    // .then((response)=>{
    //   console.log('printing response from request submit...');
    //   console.log(response.data);
    // })
    // .catch((error)=> console.log(error));
  }
  return (
    <div>
      <h2>Logged In as Referring Employee! You can submit a request here:</h2>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="serviceRequested">
                <Form.Label>Service Requested:</Form.Label>
                <Form.Control
                  as="select"
                  value={serviceRequested}
                  onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setServiceRequested(e.target.value);
                  }}
                >
                  <option value="1">Entity Setup</option>
                  <option value="2">Payroll</option>
                  <option value="3">Venture Capital</option>
                  <option value="4">HR Consulting</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="regionsRequested">
                <Form.Label>Region Requested:</Form.Label>
                <Form.Control
                  as="select"
                  multiple value={regionsRequested}
                  onChange={e => setRegionsRequested([].slice.call(e.target.selectedOptions).map(item => item.value))}>

                  {/* onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setRegionsRequested(e.target.value);
                  }} */}
                
                  <option value="1">Southeast Asia (ASEAN)</option>
                  <option value="2">Japan</option>
                  <option value="3">Korea</option>
                  <option value="4">Hong Kong and Greater Bay Area (HK GBA)</option>
                  <option value="5">Australia and New Zealand (ANZ)</option>
                  <option value="6">Asia Pacific (APAC)</option>
                  <option value="7">Europe, Middle East and Africa (EMEA)</option>
                  <option value="8">North America (NA)</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="entitiesStatus">
                <Form.Label>Does your Prospect/Client possess entities in the Region Requested?</Form.Label>
                <Form.Control
                  as="select"
                  value={entitiesStatus}
                  onChange={e => {
                    console.log("e.target.value", e.target.value);
                    setEntitiesStatus(e.target.value);
                  }}
                >
                  <option value="All">Yes</option>
                  <option value="Some">In some locations only, but not all</option>
                  <option value="None">No</option>
                </Form.Control>
              </Form.Group>
              <Form.Group size="sm-3" controlId="employeeNumbers">
                <Form.Label>Number of Employees (if relevant):</Form.Label>
                <Form.Control
                  autoFocus
                  type="employeeNumbers"
                  value={employeeNumbers}
                  onChange={(e) => setEmployeeNumbers(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="comments">
                  <Form.Label>Please write as much detail as you can about your request below:
                  </Form.Label>
                  <Form.Control 
                    autoFocus
                    as="textarea" rows={3} 
                    value = {comments}
                    onChange = {(e) => setComments(e.target.value)}
                  />
              </Form.Group>
              <br></br>
              <Button block size="sm-3" type="submit" >
                Submit
              </Button>
            </Form>
          </Container>
    </div>
  );
}