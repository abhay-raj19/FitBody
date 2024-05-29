import React, { useState } from "react";
import "../../styles/Register.css";// Import your CSS file

export const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Do something with the form data, such as sending it to an API
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Full Name" 
                    required 
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="youremail@gmail.com" 
                    required 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="********" 
                    required 
                />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    );
}


// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
       
        
//         <div className="auth-form-container">
//             <h2>Register</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Full name</label>
//                 <input  value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
//                 <label htmlFor="email">Email</label>
//                 <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">Password</label>
//                 <input  value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Register</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//         </div>
//             );
// }
