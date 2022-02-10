import { useCallback } from 'react';

import config from '../api.json';
 
 
const useFormHandler = () => {

    const submitForm = (val) => {
        if(!val.email || !val.password) {
            console.log('Login values missing, exiting.');
            return false;
        }
        return fetch(`${config.baseURL}/api/login`, {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(val)
        })
        .then(res => {
            if(!res.ok){
                throw new Error(`Error: login failed. Please contact an administrator`);
            }
            console.log('Form Submitted');
            return res.json()
        })
    }

    
    const handleSubmit = useCallback(
      (formValues) => {
        return submitForm(formValues)
        .catch(error => {
            alert(`There has been an error logging in: ${error}`)
        });
      },
      [],
    );
    const initialValues = {
      email: '',
      password: '',
      rememberme: false
    };
    return {
      handleSubmit,
      initialValues,
    };
}
 
export default useFormHandler;