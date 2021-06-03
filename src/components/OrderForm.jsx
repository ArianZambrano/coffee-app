import React from 'react';
import useCoffeeHooks from '../hooks/useCoffeeHooks';

const OrderForm = () => {
    const coffees = useCoffeeHooks();
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div className="Form-Container">
            <h2 className="Form-Title">Put the order here</h2>
            <form onSubmit={e => {handleSubmit(e)}}>
                <label className="Form-Label">
                    Name
                </label>
                <input
                    className="Form-Input"
                    name="name" 
                    type="text" 
                />
                <label className="Form-Label">
                    Quantity
                </label>
                <input
                    className="Form-Input"
                    name="quantity" 
                    type="text" 
                />
                <select className="Form-Select" name="type">
                    {coffees.map((coffee, index) =>(
                        <option value={coffee.name}
                                className="Form-Option"
                                key={index}>
                            {coffee.name}
                        </option>   
                    ))}
                </select>
                <input
                    className="Form-Submit" 
                    type="submit"
                    value="Add Order" 
                />
            </form>
        </div>
    )
}

export default OrderForm;