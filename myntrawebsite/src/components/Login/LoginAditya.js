import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
 
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated user data (in a real app, this would come from a database)
    const registeredUsers = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      { email: 'pavan@gmail.com', password: 'pavan@123' },
      { email: 'example@example.com', password: 'Example@123' },
     
     
     
      // Add more registered users as needed
    ];
 
    // Check if provided email and password match any registered user
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
 
    if (user) {
      console.log('Login successful'); // For demonstration purposes
      navigate('/'); // Redirect to dashboard after successful login
    } else {
      setError('Invalid email or password');
    }
  };
 
  return (
    <div style={{backgroundColor:'#ffe9ec',width:'100%'}}>
    <div className="container mt-5" >
        
    <div className="row justify-content-center" style={{marginLeft:'40px'}}>
      <div className="col-md-6">
      <div>
            <img style={{width:'450px',height:'200px'}} src='./Images/Login.png'/>
        </div>
        <div className="card" style={{width:'450px',height:'250px',borderRadius: '0'}}>
          <div className="card-body">
            <h2 className="card-title" style={{fontFamily:'Times New Roman',fontWeight:'bold'}}>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{backgroundColor:'#ed2866',borderRadius: '0',borderColor: '#ed2866'}}>Login</button>
            </form>
           
            {error && <p className="text-danger mt-3">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
 
export default Login;