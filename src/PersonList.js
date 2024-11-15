import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container } from 'react-bootstrap';

class PersonList extends Component {
    // Define state default values
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <Container>
                <h2 className="text-center my-4">User List</h2>
                {this.state.persons.map((person, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Body style={{ backgroundColor: '#0097A7', color: 'white' }}>
                            <div className="d-flex align-items-center">
                                <img src={person.picture.large} alt={person.name.first} className="rounded-circle" style={{ width: '80px', height: '80px', marginRight: '15px' }} />
                                <div>
                                    <Card.Title>{person.name.title} {person.name.first} {person.name.last}</Card.Title>
                                    <Card.Text>
                                        <b>User Name:</b> {person.login.username} <br />
                                        <b>Gender:</b> {person.gender.toUpperCase()} <br />
                                        <b>Time Zone Description:</b> {person.location.timezone.description} <br />
                                        <b>Address:</b> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode} <br />
                                        <b>Email:</b> {person.email} <br />
                                        <b>Birth Date and Age:</b> {person.dob.date} ({person.dob.age}) <br />
                                        <b>Register Date:</b> {person.registered.date} <br />
                                        <b>Phone:</b> {person.phone} <br />
                                        <b>Cell:</b> {person.cell}
                                    </Card.Text>
                                    <Button variant="info">Details</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default PersonList;
