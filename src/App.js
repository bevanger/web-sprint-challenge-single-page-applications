import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Components/Form';
import Home from './Components/Home';
import { reach } from 'yup';
import { validate } from "@babel/types";


const initialFormValues= {
  //text//
  name: '',
  instructions: '',
  //dropdown//
  size: '',
  //checkboxes//
  cheese: '',
  pepperoni: '',
  bacon: '',
  sausage: '',
};

const initialFormErrors = {
  name: '',
  instructions: '',
  size:'',
};

const initialOrder = [];
const initialDisabled = true;

const App = () => {
  //States//
  const [pizzas, setPizzas] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
     instructions: formValues.name.trim(),
     toppings: ['cheese', 'pepperoni', 'bacon', 'sausage'].filter(top => formValues[top])
   };

 }

//  useEffect(() => {
//   schema.isValid(formValues).then(valid => setDisabled(!valid))
//  }, [formValues]);

  return (
    <div id="order-pizza">
      <nav>
        <h1 className="website-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to = '/'>Home</Link>
          <Link to = '/pizza'>Pizza Form</Link>
        </div>
      </nav>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        pizzas.map(orderInfo => {
          return(
            <p>{orderInfo.name}</p>
          )
        })
      }
      <Switch>
        <Route path = '/pizza-order'>
          <Form />
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
