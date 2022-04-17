import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, Length, duration, Days_Per_Week, price, Training_Type, description } = service;
    const navigate = useNavigate();
    const handleCheckout = id => {
        navigate(`service/${id}`)
    }
    return (
        <div id='service' className='col-md-6 col-lg-3 col-sm-6'>
            <Card className='.card-container'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>{Length} Program- {duration}</Card.Text>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Button onClick={() => handleCheckout(id)} variant="primary">Explore to Buy</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;