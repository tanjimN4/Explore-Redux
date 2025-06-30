import { selectFilter, selectTasks } from '@/redux/features/task/taskSlice';
import { useAppSelector } from '@/redux/hook';


const Task = () => {
    const task=useAppSelector(selectTasks);
    const filter=useAppSelector(selectFilter);
    console.log('task', task);
    console.log('filter', filter);
    
    return (
        <div>
            all tasks
        </div>
    );
};

export default Task;