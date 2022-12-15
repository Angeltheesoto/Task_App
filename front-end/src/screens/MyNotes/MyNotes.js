import React, { useState, useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");

    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Angel Soto">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        // <Accordion>
        <Card style={{ margin: 10 }} key={note._id}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {/* <Accordion.Toggle as={Card.Text} variant="link" eventKey="0"> */}
              {note.title}
              {/* </Accordion.Toggle> */}
            </span>
            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          {/* <Accordion.Collapse eventKey="0"> */}
          <Card.Body>
            <h4>
              <Badge variant="success">Category - {note.category}</Badge>
            </h4>

            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">Created On - date</footer>
            </blockquote>
          </Card.Body>
          {/* </Accordion.Collapse> */}
        </Card>
        // </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
