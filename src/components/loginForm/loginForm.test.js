import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import LoginForm from './loginForm';


test('renders form', () => {

    const {container} = render(<LoginForm />);
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
  });
  
  test('renders form fields', () => {

    render(<LoginForm />);
    //const emailInput = screen.getByPlaceholderText('Email');
    //const passwordInput = screen.getByPlaceholderText('Password');

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

describe('Form field validation tests', () => {

    test('Both form fields should be invalid', async () => {

        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        
        //enter values that will cause error
        userEvent.type(emailInput, 'a');
        userEvent.type(passwordInput, 'a');
    
        //move focus out of text fields to trigger error
        userEvent.click(screen.getByRole('button', /Sign In/i));
        
    
        await waitFor(() => {
            expect(emailInput).toHaveClass("FormInputError");
            expect(passwordInput).toHaveClass("FormInputError");
        });
    
      });
    
      test('Only email should be invaid', async () => {
    
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        
        //enter values that will cause error
        userEvent.type(emailInput, 'a');
        //this will meet the 8 min character limit so it should be valid
        userEvent.type(passwordInput, 'aaaaaaaa');
    
        //move focus out of text fields to trigger error
        userEvent.click(screen.getByRole('button', /Sign In/i));
        
    
        await waitFor(() => {
            expect(emailInput).toHaveClass("FormInputError");
            expect(passwordInput).not.toHaveClass("FormInputError");
        });
    
      });

      test('Only Password Invalid', async () => {
    
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        
        //valid email
        userEvent.type(emailInput, 'a@test.com');
        //not enough characters
        userEvent.type(passwordInput, 'aaaaaa');
    
        //move focus out of text fields to trigger error
        userEvent.click(screen.getByRole('button', /Sign In/i));
        
    
        await waitFor(() => {
            expect(emailInput).not.toHaveClass("FormInputError");
            expect(passwordInput).toHaveClass("FormInputError");
        });
    
      });

      test('No Errors', async () => {
    
        render(<LoginForm />);
        const emailInput = screen.getByLabelText(/email/i)
        const passwordInput = screen.getByLabelText(/password/i)
        
        //valid email
        userEvent.type(emailInput, 'a@test.com');
        //not enough characters
        userEvent.type(passwordInput, 'aaaaaaaaaaaaaaa');
    
        //move focus out of text fields to trigger error
        userEvent.click(screen.getByRole('button', /Sign In/i));
        
    
        await waitFor(() => {
            expect(emailInput).not.toHaveClass("FormInputError");
            expect(passwordInput).not.toHaveClass("FormInputError");
        });
    
      });

});
