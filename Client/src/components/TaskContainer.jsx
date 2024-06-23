import { Alert, Col, ListGroup, Row } from "react-bootstrap";
import { getTasks } from "../axious/taskAxious";
import AddTaskForm from "./AddTaskForm";
import { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";

const TAskContainer = () => {
  const [taskList, setTaskList] = useState([]);
  //fetch data /task from database
  const fetchTasks = async () => {
    const result = await getTasks();
    if (result.status === "success") {
      setTaskList(result.data);
    }
  };

  //use effect
  useEffect(() => {
    fetchTasks();
  }, []);
  //Entry task
  const entryTask = taskList.filter((task) => task.type === "entry");
  //unwanted task
  const unwantedTask = taskList.filter((task) => task.type === "unwanted");
  return (
    <>
      {/* form */}
      <AddTaskForm fetchTasks={fetchTasks} />
      {/* tasklist */}
      <Row>
        <Col>
          {/* alltask */}
          <Alert>All task</Alert>
          <ListGroup>
            {entryTask.map((task) => (
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <TaskListItem task={task} fetchTasks={fetchTasks} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          {/* unwanted task */}
          <Alert variant="success"> unwanted task</Alert>
          <ListGroup>
            {unwantedTask.map((task) => (
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <TaskListItem task={task} fetchTasks={fetchTasks} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default TAskContainer;
