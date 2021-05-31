import React from 'react';

const OrderForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    {/*const coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
    const listCoffees = coffees.map(coffee => 
        <option value={coffee}>{coffee}</option>    
    )*/}
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
                    {/*Poner los valores de una futura DB, por ahora 3 de prueba*/}
                    <option className="Form-Option" value="americano">Americano</option>
                    <option className="Form-Option" value="flat white">Flat White</option>
                    <option className="Form-Option" value="capuccino">Capuccino</option>
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