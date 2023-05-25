import React from 'react'

class Form extends React.Component{

    // THERE ARE THREE STEPS TO STORE MULTIPLE VALUES OF INPUT FIELDS
    // 1.Take Inputs    2.Create Objects    3.Push object in an Array

    constructor(){
        super();
        this.state={
            nameIp:'',
            ageIp:'',
            expIp:'',
            myObj:{},
            users:[],
            isSubmitted:false
        }
    }


    render(){
        let myForm1 = {
            color:'black',
            fontSize:'15px',
            fontStyle:'bolder',
        }
        let myForm2 = {
            textAlign:'left',
            border:'2px solid green',
            backgroundColor:'cyan',
            display:'inline-block', 
        }

        const handleChange=(e)=>{
            console.log('typing...')
            // console.log(e.target.value);
            // this.setState ke andr hum value ko update krenge e.value.target se jo bhi value user type krega vo display ho jaegi
            // setState keys match krta hai state ke sath
            // Array isliye bnaya hai kyuki hmare pass multiple id's hai
            this.setState({
                [e.target.id]:e.target.value,
            })
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            let tempObj = this.state.myObj;
            tempObj={
                name:this.state.nameIp,
                age:this.state.ageIp,
                exp:this.state.expIp
            }
            console.log(tempObj);

            let tempArr = this.state.users
            tempArr.push(tempObj);

            this.setState({
                users:tempArr,
                isSubmitted:!this.state.isSubmitted
            })
            console.log(this.state.users);
        }
        const handleBack = () => {
            this.setState({
                isSubmitted:!this.state.isSubmitted
            })
        }

        return(
            // JSX Fragment --> Khali tag ko bolte hai
            <>                                            
                <h2>Welcome to React Session</h2>
                

                {!this.state.isSubmitted ?           
                <form style={{...myForm1, ...myForm2}}>
                    <lable>Name:</lable>
                    <input type='text' placeholder='Enter your Name' id='nameIp' onChange={handleChange} ></input>
                    <br/><br/>
                    <lable>Age:</lable>
                    <input type='number' placeholder='Enter your Age' id='ageIp' onChange={handleChange} ></input>
                    <br/><br/>
                    <lable>Experience:</lable>
                    <input type='number' placeholder='Enter Experience in Years' id='expIp' onChange={handleChange} ></input>
                    <br/><br/>
                    
                    <button onClick={handleSubmit} >Submit</button>
                </form>
                
                :

                <div>
                    {this.state.users.map((item,index)=>{
                        return(
                            
                            <div key={index}>
                                <h3>Name = {item.name} </h3>
                                <h3>Age = {item.age} </h3>
                                <h3>Exp = {item.exp} </h3>
                                <hr /> 
                            </div>
                            
                        )
                    })}
                    <button onClick={handleBack}>Go Back</button>
                </div>
            
                }         
            </>
            
        )
    }
}

export default Form