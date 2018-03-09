import React, { Component } from 'react';

export const checkEmail= (email)=>{
    if (email.toString().length ===0)
    {
        return 'The field is not empty.'
    }
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
    {
        return ''
    }
    return 'Email is not valid'
}

export const checkLengthInput = (context, length)=>{
    if (context.match (/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi))
        return 'The Field is not contained special words' 
    else if (context.toString().length ===0)
    {
        return 'The field is not empty.'
    }
    else if (context.toString().length < length)
    {
        return `The length must be more than ${length}.`
    }
    return ''
}


export const checkOnlyNumber = (context) =>{
    if (context.toString().length ===0)
    {
        return 'The field is not empty.'
    }
    else if (!context.toString().match(/^[0-9]+$/))
    {
        return 'The field must be number'
    }
    return ''
}

export const checkVerifyPassword = (first,last) =>{
    if (last.toString().length ===0)
    {
        return 'The field is not empty.'
    }
    else if (first !== last)
    {
        return 'Verify Password is not the same as Password'
    }
    return ''

}
