import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../images/Bannar/bannar1.jpg';
import bannar2 from '../../../images/Bannar/bannar2.jpg';
import bannar3 from '../../../images/Bannar/bannar3.jpg';

const Bannar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h3>Health & Wellness</h3>
                        <p>Man working out with battle ropes and getting fit!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Beginners & Intermediate </h5>
                        <p>Full Week Gym Workout Plan For Muscle Gain</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Advanced workout</h5>
                        <p>Additional volume, Hanging leg raises</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Bannar;