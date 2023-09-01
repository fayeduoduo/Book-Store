import React from "react";
import { useForm} from 'react-hook-form';
import '../Styles/sign.css';

const SignIn = () => {
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='sign-wrapper'>
            <h1 className='sign-title'>Sign in</h1>
            <form className='form-wrapper' onSubmit={handleSubmit(onSubmit) }>
                <div className='form-content'>
                    <label>Name</label>
                    <input tye='text'
                        placeholder="Input name"
                        {...register("name", { required: true, maxLength: 10 })} />
                        {errors.name && <p className = 'error-message'>* Please input correct name</p>}
                </div>
                <div className='form-content'>
                    <label>Email</label>
                    <input tye='text'
                        placeholder="Input email"
                        {...register("email", {
                            required: true,
                            pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
                        })} />
                    {errors.email && <p className='error-message'>* Please input correct email</p>}
                </div>
                <div className='form-content'>
                    <label>Password</label>
                    <input tye='text'
                        placeholder="Input password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })} />
                    {errors.password && <p className='error-message'>* Please input password</p>}
                </div>
                <div className='form-content'>
                    <label>Re-enter Password</label>
                    <input tye='text'
                        placeholder="confirm password"
                        {...register("confirm_password", {required: true})}
                    />
                    {watch("confirm_password") !== watch("password") &&
                        getValues("confirm_password") ? (
                            <p className='error-message'>* password not match</p>
                        ) : null
                    }
                </div>
                <input type='submit' value='Submit'/>
            </form>        
        </div>
    )
}

export default SignIn;