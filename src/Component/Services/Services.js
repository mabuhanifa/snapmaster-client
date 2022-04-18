import emailjs from 'emailjs-com';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import usePackages from '../hooks/usePackages';
import Item from '../Item/Item';
import './Services.css';

const Services = () => {
    const [packages, setPackages] = usePackages();
    const mailer =()=>{
        function sendEmail(e){
            e.preventDefault();
            emailjs.sendform('service_3bag9yh','service_3bag9yh',e.target, 'user_xqxqxqxqx')
            .then((result) => {
                
            });
        }
        
        
    }

    return (
        <>
        <div className='pack'>
           { packages.map( (pack) => <Item 
           key={pack.id}
           pack={pack}
            />)}
        </div>
        <div className='m-5 border' >
            <h2 className='text-center'>
                Mail me to book my services.
            </h2>
        <Form className='w-50 d-blcok mx-auto m-2'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control  type="text" placeholder="Your Name" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          
          <Form.Control  placeholder="Your Email" required />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Your Message</Form.Label>
          
          <Form.Control className="form"   placeholder="Message" required />
         
        </Form.Group>
        <Button onClick={mailer} variant="primary" type="submit">Submit</Button>

    
      </Form>
        </div>
        </>
    );
};

export default Services;