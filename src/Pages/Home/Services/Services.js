import React, { useContext } from 'react';
import { ServiceContext } from '../../../App';
import useServices from '../../../customHooks/customHooks';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useContext(ServiceContext);
    return (
        <div id='services' className='container'>
            <h1 className="text-center text-info my-5">Our Services</h1>
            <div className='row'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;