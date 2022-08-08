import { React, useState, useEffect } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import axios from "axios";
export default function StudentList() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/listStudents")
      .then(response => setStudent(response.data))
      .catch(error => alert(error))
  })
  let deleterecord = (id)=>{  
    axios.delete("http://localhost:8080/student/"+id)
   .then(response=>{
    if(response.data!=null)
    {
      alert("Deleted Succeessfully")
    }
   })
  }
  return (
    <div className="my-3">
      <Container>
        <Card.Header><h3>Students List</h3></Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Student Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {student.map(student => (
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.address}</td>
                  <td><Button variant="info">Edit</Button>{' '}<Button variant="info" onClick={deleterecord(student.id)}>Delete</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}

{/*  */ }