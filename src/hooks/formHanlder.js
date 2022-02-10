import { useCallback } from 'react';

import config from '../api.json';
 
/*
* Hook: useFormHandler is a hook for all of our backend form logic.
*/
const useFormHandler = () => {

    /*
    * Function: submitForm
    * @param val = form values passed from handler function up to be transmitted to the server
    * @returns fetch Promise
    */
    const submitForm = (val) => {
        //Hard fail the call if we dont have the values from the form
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
            //Note this will NOT catch errors that happen before the call is returned IE: No backend server being there. Need .catch for that
            if(!res.ok){
                throw new Error(`Error: login failed. Please contact an administrator`);
            }
            console.log('Form Submitted');

            //This will never be hit in this example but returning the json version anyway to show that 
            //this is how we would get this value in the handleSubmit function to utilize the contents in the future.
            return res.json()
        })
    }

    /*
    * Function: handleSubmit
    * @param formValues = form values passed from formik form.
    * @calls submitForm(formValues) which returns a promise object.
    */
    const handleSubmit = useCallback(
      (formValues) => {
        return submitForm(formValues)
        .catch(error => {
            //Catches backend errors that will not trigger initial response.ok block
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