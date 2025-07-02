import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { format } from "date-fns";
import UpdateTask from "./UpdateTask";
import { selectUsers } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITask
}
const TaskCard = ({ task }: IProps) => {
  const { title, description, dueDate, isCompleted, priority, assignedTo } = task;

  const users =useAppSelector(selectUsers)

  const assignedToName = users.find((u) => u.id === assignedTo);

  const dispatch = useAppDispatch();



  const priorityColors = {
    High: 'bg-red-100 text-red-600',
    Medium: 'bg-yellow-100 text-yellow-600',
    Low: 'bg-green-100 text-green-600',
  };

  return (
    <div className={cn(" border border-gray-200 shadow-md rounded-xl my-3 p-5 hover:shadow-lg transition duration-300",
      {
        "bg-white": priority === 'Low',
        "bg-emerald-500": priority === 'High',
        "bg-blue-400": priority === 'Medium',
      }
    )}>
      {/* Title & Priority */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className={`text-sm px-2 py-1 rounded-full ${priorityColors[priority] || 'bg-gray-100 text-gray-600'}`}>
          {priority}
        </span>
      </div>
      {
        /* Assigned To */
        assignedTo && (
          <div className="mb-2">
            <span className="text-sm text-gray-500">Assigned to: </span>
            <span className="font-medium text-gray-700">{assignedToName?.name}</span>
          </div>
        )
      }
      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          onClick={() => { dispatch(toggleCompleteState(task.id)) }}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">Mark as Completed</label>
      </div>
      <div>
        <Button onClick={() => { dispatch(deleteTask(task.id)) }}>Delete Task</Button>
      </div>
      <div>
        <UpdateTask task={task} />
      </div>

      {/* Footer with Due Date and Status */}
      <div className="flex items-center justify-between text-sm text-gray-500">

        <span>📅 Due: {dueDate ? format(new Date(dueDate), "EEE MMM yyyy") : "N/A"}</span>
        <span className={isCompleted ? 'text-green-600' : 'text-yellow-600'}>
          {isCompleted ? '✅ Completed' : '⏳ In Progress'}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
