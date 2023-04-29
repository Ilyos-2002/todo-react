import { Button } from "../Button";
import { Input } from "../Input";
import "./form.css"
export function Form({ userData, setData }) {
    const addTasks = (evt) => {
        evt.preventDefault()
        let { todo } = evt.target.elements;
        let newObj = {
            id: userData ? userData.length + 1 : 1,
            task: todo.value,
        }

        console.log(newObj);
        console.log(setData([newObj, ...userData]));
        todo.value = null;
    }
    return <form className="form" onSubmit={addTasks}>
        <Input type={"text"} placeholder={"Add task"} name={"todo"} />
        <Button type={"submit"}>Add</Button>
    </form>


}