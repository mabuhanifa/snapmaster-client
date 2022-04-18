
import React from 'react';
import usePackages from '../hooks/usePackages';
import Item from '../Item/Item';
import './Services.css';

const Services = () => {
    const [packages, setPackages] = usePackages();
    

    return (
        
            <div className='pack'>
           { packages.map( (pack) => <Item 
           key={pack.id}
           pack={pack}
            />)}
        </div>

        
    );
};

export default Services;