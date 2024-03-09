import React, {useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";

function LoginAsAdmin() {   

    const [uid, setUserId]  = useState("admin");
    const [pwd, setPassword]  = useState("admin123");
    const [result, setResult]  = useState(""); 

    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params

    function loginButton_click()
    {      
      
       const queryString = location.search; // returns the query string from the current url
      // let strReturnUrl  =  new URLSearchParams(search).get('key');
       let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');

      
       if(strReturnUrl == null)
       {
        strReturnUrl = "/";
       }
      
        if(uid == "admin" && pwd == "admin123")
        {   
          // In real-time apps, we will get the token from the server
          // JWT token is the popular token generation library          
           let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
           sessionStorage.setItem('user-token', token);
          //   navigate("/Emps");
           navigate(strReturnUrl);
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }


  return (
    <>
    <div style={{backgroundColor:'#ffe9ec',width:'100%',display:'flex',justifyContent:'center'}}>
    <div className="container mt-5" >
        
        <div className="row justify-content-center" style={{marginLeft:'40px'}}>
          <div className="col-md-6">
          <div>
                <img style={{width:'450px',height:'200px'}} src='./Images/Login.png'/>
          </div>
            <div className="card" style={{width:'450px',height:'250px',borderRadius: '0'}}>
              <div className="card-body" >
                <h2 className="card-title" style={{fontFamily:'Times New Roman',fontWeight:'bold'}}>Login</h2>
      <fieldset>
        
                <legend>User Login</legend>

                <label>User Id  : </label>
                <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
                <br/><br/>

                <label>Password  : </label>
                <input type="password"  value={pwd}  onChange={(args) => setPassword(args.target.value)} />
                <br/><br/>

                <input type="button"  onClick={loginButton_click}  value="Login"  style={{backgroundColor:'#ed2866',borderRadius: '0',borderColor: '#ed2866'}}   />
                <p  style={{color : "purple"}}>{result}</p>   
                
       </fieldset>
       </div>
       </div>
       </div>
       </div>
       </div>
       </div>     
    </>
  );

}

export default LoginAsAdmin;