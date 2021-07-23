import React from 'react';


function Order({ details }) {
    if(!details) {
        return <h4>Working on fetching your order details</h4>
    }
    return (
        <div className = 'order-details'>
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            {
                !!details.toppings && !! details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((choice, idx) => <li key={idx}>{choice}</li>)}
                    </ul>
                </div>

            }
            <p>Special: {details.instructions}</p>

        </div>
    )
};
export default Order;