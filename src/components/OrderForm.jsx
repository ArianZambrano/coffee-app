import React from 'react';
import styled from 'styled-components';
import useCoffeeHooks from '../hooks/useCoffeeHooks';

const FormContainer = styled.div`
    margin: 0 2.5rem;
    width: 30%;
    font-family: 'Viaoda Libre', cursive;
`;
const FormTitle = styled.h2`
    font-size: 1.8rem;
`;
const FormLabel = styled.label`
    display: block; 
    margin: 1.3rem 0;
    font-weight: bold;
`;

const FormInput = styled.input`
    display: block;
    margin: 1.3rem 0;
    width: 90%;
    height: 1.5rem;
`;

const FormSelect = styled.select`
    display: block;
    margin: 1.3rem 0;
`;

const FormSubmit = styled.a`
    margin-left: 70%;
    width: 8rem;
    padding: .6rem;
    background-color: #62F4A4;
    border-color: #62F4A4;
    font-family: 'Viaoda Libre', cursive;
    font-size: 1.1rem;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
`;

const OrderForm = () => {
    const coffees = useCoffeeHooks();
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <FormContainer className="Form-Container">
            <FormTitle className="Form-Title">
                Put the order here
            </FormTitle>
            <form className="From-Content" 
                  onSubmit={e => {handleSubmit(e)}}>
                <FormLabel className="Form-Label">
                    Name
                </FormLabel>
                <FormInput
                    className="Form-Input"
                    name="name" 
                    type="text" 
                />
                <FormLabel className="Form-Label">
                    Quantity
                </FormLabel>
                <FormInput
                    className="Form-Input"
                    name="quantity" 
                    type="text" 
                />
                <FormLabel>
                    Select Type
                </FormLabel>
                <FormSelect className="Form-Select" name="type">
                    {coffees.map((coffee, index) =>(
                        <option value={coffee.name}
                                className="Form-Option"
                                key={index}>
                            {coffee.name}
                        </option>   
                    ))}
                </FormSelect>
                <FormSubmit className="Form-Submit"
                            href="">
                    Add Order
                </FormSubmit> 
            </form>
        </FormContainer>
    )
}

export default OrderForm;