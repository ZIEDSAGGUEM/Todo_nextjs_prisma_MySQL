"use client";

import { deleteTodo } from "@/app/actions/route";
import Form from "@/app/components/Form";
import { todoType } from "@/app/types/todoTypes";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <button type="submit" className="btn btn-error">
        Delete
      </button>
    </Form>
  );
};

export default DeleteTodo;
