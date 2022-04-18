import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../../../../App';

const Checkout = () => {
    const [services, setServices] = useContext(ServiceContext);
    const { id } = useParams();
    const service = services.find((service) => service.id == id);

    return (
        <div className='container mt-3 d-flex flex-column align-items-center'>
            <img className='w-75' src={service?.img} alt="" />
            <h1 className='text-info mt-3 w-75'>{service?.name}- {service?.duration}</h1>
            <div className='mt-4 w-75'>
                <p><span className='text-primary fs-5 text-uppercase'>Overview: </span>{service?.description}</p>

            </div>
        </div>
    );
};

export default Checkout;