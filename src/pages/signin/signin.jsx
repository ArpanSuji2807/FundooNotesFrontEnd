import React from "react";
import './signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserSignIn } from "../../service/userservice";
import { useNavigate } from "react-router-dom";
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const Signin = () =>{
    const [regexObj,setRegexObj] = React.useState({EmailError: false,EmailHelperText:'',PasswordError:false,PasswordHelperText:''})
    const navigate = useNavigate();
    const[signinObj,setSignInObj] = React.useState({email:'',password:''})

    function takeEmail(event){
        setSignInObj({...signinObj,email:event.target.value})
        console.log(event.target.value);
    }
    function takePassword(event){
        setSignInObj({...signinObj,password:event.target.value})
        console.log(event.target.value);
    }
    function createAccount(){
        navigate('/signup')
    }
    function onSubmit(){
        let emailTest = EmailRegex.test(signinObj.email)
        let passwordTest = PasswordRegex.test(signinObj.password)
        console.log(emailTest);
        console.log(passwordTest);
        if(emailTest == true && passwordTest == false){
            setRegexObj(prevState =>({...prevState,EmailError:false,EmailHelperText:''}))
        }
        else if(emailTest == false && passwordTest == false){
            console.log("hello");
            setRegexObj(prevState =>({...prevState,EmailError:true,EmailHelperText:'Enter valid email'}))
        }
        if(passwordTest == true){
            setRegexObj(prevState =>({...prevState,PasswordError:false,PasswordHelperText:''}))
        }
        else{
            setRegexObj(prevState =>({...prevState,PasswordError:true,PasswordHelperText:'Enter valid password'}))
        }
        if(emailTest === true){
            console.log(signinObj);
            UserSignIn(signinObj).then((res) => {
                console.log(res);
                navigate('/dashboard')
                localStorage.setItem('token',res.data.data)
            }).catch((error) =>{
                console.log(error);
            })
        }
    }

    return(<div>
        <div className="mainbox1">
            <div className="mainbox2"> 
                <div className="mainbox2a">
                <b className="img1" style={{color:'blue'}}>F</b>
                <b className="img1" style={{color:'red'}}>u</b>
                <b className="img1" style={{color:'yellowgreen'}}>n</b>
                <b className="img1" style={{color:'blue'}}>d</b>
                <b className="img1" style={{color:'green'}}>o</b>
                <b className="img1" style={{color:'red'}}>o</b>
                </div>
                <div className="mainbox2b"> Sign in </div>
                <div className="mainbox2c">to continue to fundoo notes</div>
                <div className="mainbox2d">
                <TextField onChange={takeEmail} className="box2d" label="Email or Phone" variant="outlined" error={regexObj.EmailError}  helperText={regexObj.EmailHelperText}/>
                </div>
                <div className="mainbox2e" style={{color:'blue'}}>Forget email?</div>
                <div className="mainbox2d">
                <TextField type="password" onChange={takePassword} className="box2d" label="Password" variant="outlined" error={regexObj.PasswordHelperText}  helperText={regexObj.PasswordHelperText} />
                </div>
                <div className="mainbox2e" style={{color:'blue'}}>Forgot Password?</div>
                <div className="mainbox2f">Not your computer?Use Guest mode to sign in privately.</div>
                <div className="mainbox2g">Learn More</div>
                <div className="mainbox2h">
                    <Button onClick={createAccount} className="account" style={{color:'blue'}}>Create account</Button>
                    <Button onClick={onSubmit} variant="contained">Next</Button>
                </div>
            </div>
        </div>
    </div>)
}

export default Signin;