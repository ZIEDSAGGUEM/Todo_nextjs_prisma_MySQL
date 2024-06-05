import { todoStatus } from "@/app/actions/route";
import Form from "@/app/components/Form";
import { todoType } from "@/app/types/todoTypes";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />
      <button type="submit" className="btn btn-info">
        Done
      </button>
    </Form>
  );
};

export default ChangeTodo;
