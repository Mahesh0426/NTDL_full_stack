import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { createTask } from "../axious/taskAxious.js";

const initialFormData = {
  name: "",
  time: 1,
  difficulty: "easy",
  priority: "low",
};

const AddTaskForm = (props) => {
  const { fetchTasks } = props;
  const [formData, setFormData] = useState(initialFormData);
  const { name, time, difficulty, priority } = formData; // destructure

  //handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // handle form submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // create task -- call an api to create task to database
    //netwoek request

    const result = await createTask(formData);
    if (result.status === "success") {
      setFormData(initialFormData);
      fetchTasks();
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          {/* Taskname */}
          <Form.Group>Task Name</Form.Group>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter the task name"
            value={name}
            onChange={handleOnChange}
            required
          ></Form.Control>
        </Col>

        <Col>
          {/* TaskTime */}
          <Form.Group>Task Taken</Form.Group>
          <Form.Control
            type="number"
            name="time"
            placeholder="Enter the time taken in hrs "
            value={time}
            onChange={handleOnChange}
            min={1}
            max={24}
            required
          ></Form.Control>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* difficulty   */}
          <Form.Label>Difficulty</Form.Label>
          <Form.Select
            name="difficulty"
            value={difficulty}
            onChange={handleOnChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
        </Col>

        <Col>
          {/* priority  */}
          <Form.Label>Priority</Form.Label>
          <Form.Select
            name="priority"
            value={priority}
            onChange={handleOnChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Form.Select>
        </Col>
      </Row>
      <Button variant="primary" type="submit" className="d-block max-auto my-4">
        Add Task
      </Button>
    </Form>
  );
};

export default AddTaskForm;
