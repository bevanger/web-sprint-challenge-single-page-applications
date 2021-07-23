import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Home() {
    const history = useHistory();
    const routeToForm = () => {
        history.push('/pizza-form')
    };
return (
    <div className="home-wrapper">
    </div>
)
}