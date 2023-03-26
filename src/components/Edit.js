import React, {useState, useEeffect} from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuidv4 } from 'uuid';
import {Link, useNavigate} from "react-router-dom";

function Edit(){
    const [name, setName]= useState("");
    const [age, setAge]= useState("");
    const [id, setId]=useState("");
    let history= useNavigate();

    var index = Employees.map(function(e){
        return e.id;
    }).indexOf(id);

    const handleSubmit =(e)=>{
        e.preventDefault();
        let a= Employees[index];
        a.Name=name;
        a.Age=age;
        history("/");
    }
    useEeffect((()=>{
        setId(localStorage.getItem('Id'))
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
    },[]))
    return(
        <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control type="text" placehpolder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
            </Form.Control>
            <Form.Control type="text" placehpolder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
            </Form.Control>
            </Form.Group> 
            <Button onClick={(e)=>handleSubmit(e)}type="submit">Update</Button>

        </Form>
        </div>
    )
    }
export default Edit;