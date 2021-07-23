import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Components/Home';
import schema from './Validation/formSchema';
import { reach } from 'yup';
import axios from 'axios';
import Order from './Components/Order';





const initialFormValues= {
  //text//
  name: '',
  instructions: '',
  //dropdown//
  size: '',
  //checkboxes//
  cheese: false,
  pepperoni: false,
  bacon: false,
  sausage: false,
};

const initialFormErrors = {
  name: '',
  instructions: '',
  size:'',
};

const initialOrder = [];


const App = () => {
  //States//
  const [orders, setOrders] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
 

const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([res.data, ...orders])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
};

const validate = (name, value) => {
  reach(schema, name)
   .validate(value)
   .then(() => setFormErrors({ ...formErrors, [name]: ''}))
   .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
};

 //Event handlers//
 const inputChange = (name, value) => {
   validate(name, value)
   setFormValues({
     ...formValues,
     [name]: value
   })
 }

 const formSubmit = () => {
   const newOrder ={
     name: formValues.name.trim(),
     instructions: formValues.instructions.trim(),
     size: formValues.size.trim(),
     toppings: ['cheese', 'pepperoni', 'bacon', 'sausage'].filter(top => formValues[top])
   };
   postNewOrder(newOrder)
 };
 
  return (
    <div id="order-pizza">
      <nav className="navigation">
        <h1 className="website-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to = '/'>Home</Link>
          <Link to = '/pizza-order'>Pizza Form</Link>
        </div>
      </nav>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />

      {
        orders.map(orderInfo => {
          return(
            <Order key={orderInfo.id} details={orderInfo}/>
          )
        })
        
      }
      <Switch>
        <Route path = '/pizzaForm'>
          <Order />
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </div>
    
  );
};
export default App;
