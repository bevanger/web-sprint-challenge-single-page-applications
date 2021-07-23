import React from 'react';

export default function pizzaForm (props) {
    const {
        values, 
        submit, 
        change, 
        disabled, 
        errors, 
    } = props;

const onSubmit = evt => {
    evt.preventDefault()
    submit()
};

const onChange = evt => {
    const {name, value, type, checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked: value
    change(name, valueToUse)
};

return (
<form id = "pizza-form" onSubmit={onSubmit}>
    <div className="form-group-submit">
        <h2>Build Your Own Pizza</h2>

       {/* Rendered the validation errors */}
       <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.instructions}</div>
        </div>
    </div>

    {/* Inputs  */}
    <div className="form-group-inputs">
        <h3>Build Your Own Pizza</h3>

        {/* Text Inputs */}
        <h4>Your Name</h4>
        <label>Name
            <input
                id="name-input"
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
            />
        </label>
        <h4>Special Instructions</h4>
        <label>Special Instructions
            <input
                id="special-text"
                value={values.instructions}
                onChange={onChange}
                name="instructions"
                type="text"
            />
        </label>

        {/* Dropdown */}
        <h4>Choose Your Size</h4>
        <label>Size
            <select
                id="size-dropdown"
                onChange={onChange}
                value={values.size}
                name="size"
            >
                <option value = ''>Select An Option</option>
                <option value = 'small'>Small</option>
                <option value = 'medium'>Medium</option>
                <option value = 'large'>Large</option>
                <option value = 'xl'>Extra Large</option>
            </select>
        </label>

        {/* Checkboxes */}
        <h4>Choose Your Toppings</h4>
        <label>Cheese
            <input
                type="checkbox"
                name="cheese"
                onChange={onChange}
                checked={values.cheese}
            />
        </label>

        <label>Pepperoni
            <input
                type="checkbox"
                name="pepperoni"
                onChange={onChange}
                checked={values.pepperoni}
            />
        </label>

        <label>Bacon
            <input
                type="checkbox"
                name="Bacon"
                onChange={onChange}
                checked={values.bacon}
            />
        </label>

        <label>Sausage
            <input
                type="checkbox"
                name="sausage"
                onChange={onChange}
                checked={values.sausage}
            />
        </label>

        {/* Disabled the button */}
        <button disabled={disabled}>Order</button>
    </div>
</form>
)

};