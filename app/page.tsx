import { PrismaClient } from "@prisma/client";
import AddTodo from "@/app/components/AddTodo";
import Todo from "@/app/components/Todo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <h1 className=" text-3xl font-extrabold mb-5">
        Next.js 14 Todo Server Actions
      </h1>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full card bg-base-100 shadow-xl" key={id}>
              <div className="card-body">
                <Todo todo={todo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
