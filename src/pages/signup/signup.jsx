import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserSignUp } from "../../service/userservice";
const NameRegex = /^[A-Z]{1}[a-z]{2,}$/
const EmailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const PasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/

const Signup = () => {
    const [regexObj,setRegexObj] = React.useState({NameError:false,NameHelperText:'', EmailError: false,EmailHelperText:'',PasswordError:false,PasswordHelperText:''})
    const [signUpObj,setSignUpObj] = React.useState({firstName:'',lastName:'',email:'',password:''})
    function takeFirstName(event){
        setSignUpObj({...signUpObj,firstName:event.target.value})
        console.log(event.target.value);
    }
    function takeLastName(event){
        setSignUpObj({...signUpObj,lastName:event.target.value})
        console.log(event.target.value);
    }
    function takeEmail(event){
        setSignUpObj({...signUpObj,email:event.target.value})
        console.log(event.target.value);
    }
    function takePassword(event){
        setSignUpObj({...signUpObj,password:event.target.value})
        console.log(event.target.value);
    }
    
    function onSubmit(){
        let firstNameTest = NameRegex.test(signUpObj.firstName)
        let lastNameTest = NameRegex.test(signUpObj.lastName)
        let emailTest = EmailRegex.test(signUpObj.email)
        let passwordTest = PasswordRegex.test(signUpObj.password)
        if(firstNameTest == true){
            setRegexObj(prevState =>({...prevState,NameError:true,NameHelperText:''}))
        }
        else{
            setRegexObj(prevState =>({...prevState,NameError:false,NameHelperText:'Enter valid name'}))
        }

        if(lastNameTest == true){
            setRegexObj(prevState =>({...prevState,NameError:false,NameHelperText:''}))
        }
        else{
            setRegexObj(prevState =>({...prevState,NameError:true,NameHelperText:'Enter valid name'}))
        }

        if(emailTest == true){
            setRegexObj(prevState =>({...prevState,EmailError:false,EmailHelperText:''}))
        }
        else if(emailTest == false){
            setRegexObj(prevState =>({...prevState,EmailError:true,EmailHelperText:'Enter valid email'}))
        }

        if(passwordTest == true){
            setRegexObj(prevState =>({...prevState,PasswordError:false,PasswordHelperText:''}))
        }
        else{
            setRegexObj(prevState =>({...prevState,PasswordError:true,PasswordHelperText:'Enter valid password'}))
        }
        if(firstNameTest ===true && lastNameTest=== true && emailTest === true && passwordTest ===true){
            console.log(signUpObj);
            UserSignUp(signUpObj).then((res) => {
                console.log(res);
            }).catch((error) =>{
                console.log(error);
            })
        }
    }

    return (<div>
        <div className="SignUpmainbox">
            <div className="SignUpmainbox1">
                <div className="SignUpmainbox2">
                    <div className="SignUpmainbox4">
                        <div className="SignUpmainbox4a">
                            <b className="img1" style={{ color: 'blue' }}>F</b>
                            <b className="img1" style={{ color: 'red' }}>u</b>
                            <b className="img1" style={{ color: 'yellowgreen' }}>n</b>
                            <b className="img1" style={{ color: 'blue' }}>d</b>
                            <b className="img1" style={{ color: 'green' }}>o</b>
                            <b className="img1" style={{ color: 'red' }}>o</b>
                        </div>
                        <div className="mainbox4b">Create your Fundoo account</div>
                        <div className="mainbox4c">to continue to fundoo notes</div>
                        <div className="mainbox4d">
                        <TextField onChange={takeFirstName} className="mainbox4da" label="First Name" variant="outlined" size="small" error={regexObj.NameError}  helperText={regexObj.NameHelperText} />
                        <TextField onChange={takeLastName} className="mainbox4da" label="Last Name" variant="outlined" size="small" error={regexObj.NameError}  helperText={regexObj.NameHelperText}/>
                        </div>
                        <div className="mainbox4e">
                        <TextField onChange={takeEmail} className="mainbox4e1" label="Username" variant="outlined" size="small" error={regexObj.EmailError}  helperText={regexObj.EmailHelperText}/>
                        </div>
                        <div className="mainbox4f">You can use letter,numbers & periods</div>
                        <div className="mainbox4x">
                        <TextField onChange={takePassword} className="mainbox4xa" label="Password" variant="outlined" size="small" error={regexObj.PasswordError}  helperText={regexObj.PasswordHelperText}/>
                        <TextField onChange={takePassword} className="mainbox4xa" label="Confirm" variant="outlined" size="small" error={regexObj.PasswordError}  helperText={regexObj.PasswordHelperText}/>
                        </div>
                        <div className="mainbox4g">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                        <div className="mainbox4h">
                            <input type="checkbox" id="password" />
                            <label for="password">Show password</label><br />
                        </div>
                        <div className="mainbox4i">
                            <label className="account" style={{ color: 'blue' }}>Sign in instead</label>
                            <Button onClick={onSubmit} variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="mainbox3">
                    <div className="mainbox3a">
                        <div className="box3a1">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="260" height="250" className="image1" />
                        </div>
                        <div className="box3a2">One account. All of Google working for you.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Signup;