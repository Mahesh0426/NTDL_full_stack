import { Badge, Button, Stack } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft, BsTrash } from "react-icons/bs";
import { updateTask, deleteTask } from "../axious/taskAxious";

const TaskListItem = (props) => {
  const { task, fetchTasks } = props;

  //function to switch task
  const handleOnSwitch = async (e) => {
    const updatedTaskType = task.type === "entry" ? "unwanted" : "entry";
    // call an api to update task
    const result = await updateTask(task._id, { type: updatedTaskType });
    if (result.status === "success") {
      fetchTasks();
    }
  };

  //  function handle on delete
  const handleOnDelete = async (e) => {
    //call an api to update task
    const result = await deleteTask(task._id);
    if (result.status === "success") {
      fetchTasks();
    }
  };
  return (
    <>
      <Stack gap={2}>
        <strong>
          {task.name} - {task.time}hrs
        </strong>
        <Stack direction="horizontal" gap={2}>
          <Badge bg="primary">{task.priority}</Badge>
          <Badge bg="info">{task.difficulty}</Badge>
        </Stack>
      </Stack>
      <Stack gap={2} direction="horizontal">
        <Button variant="warning" onClick={handleOnSwitch}>
          {task.type === "entry" && <BsArrowRight />}
          {task.type === "unwanted" && <BsArrowLeft />}
        </Button>
        <Button variant="danger" onClick={handleOnDelete}>
          <BsTrash />
        </Button>
      </Stack>
    </>
  );
};

export default TaskListItem;
