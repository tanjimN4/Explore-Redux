
import AddTaskModal from '@/components/module/tasks/AddTaskModal';
import TaskCard from '@/components/module/tasks/TsakCard';
import { useGetTasksQuery } from '@/redux/api/baseApi';
import { selectTasks, updateFilter } from '@/redux/features/task/taskSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import type { ITask } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';


const Task = () => {
    const { data, isError, isLoading } = useGetTasksQuery(undefined);
    console.log(data, isError, isLoading);


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading tasks</div>;

    // const task = useAppSelector(selectTasks);
    // const filter=useAppSelector(selectFilter);
    // console.log('task', task);
    // console.log('filter', filter);

    // const dispatch = useAppDispatch();

    return (
        <Tabs defaultValue="all" className="w-full">
            <div>
                <div className='flex justify-between mx-10 my-5'>
                    <h1 className="text-2xl font-bold mb-4">Tasks</h1>
                    <div className='flex items-center gap-2'>
                        <div>
                            <TabsList>
                                <TabsTrigger
                                    type="button"
                                    value="all"
                                    onClick={() => dispatch(updateFilter("all"))}
                                    className="mr-2 border-2 border-b-emerald-800 p-2 rounded-xl data-[state=active]:bg-fuchsia-700 data-[state=inactive]:bg-green-700"
                                >
                                    All
                                </TabsTrigger>
                                <TabsTrigger
                                    type="button"
                                    value="low"
                                    onClick={() => dispatch(updateFilter("low"))}
                                    className="mr-2 border-2 border-b-emerald-800 p-2 rounded-xl data-[state=active]:bg-fuchsia-700 data-[state=inactive]:bg-green-700"
                                >
                                    Low
                                </TabsTrigger>
                                <TabsTrigger
                                    type="button"
                                    value="medium"
                                    onClick={() => dispatch(updateFilter("medium"))}
                                    className="mr-2 border-2 border-b-emerald-800 p-2 rounded-xl data-[state=active]:bg-fuchsia-700 data-[state=inactive]:bg-green-700"
                                >
                                    Medium
                                </TabsTrigger>
                                <TabsTrigger
                                    type="button"
                                    value="high"
                                    onClick={() => dispatch(updateFilter("high"))}
                                    className="mr-2 border-2 border-b-emerald-800 p-2 rounded-xl data-[state=active]:bg-fuchsia-700 data-[state=inactive]:bg-green-700"
                                >
                                    High
                                </TabsTrigger>
                            </TabsList>

                        </div>
                        <AddTaskModal />
                    </div>
                </div>
                <TabsContent value="account">
                    <p className="mt-4">This is your account settings tab.</p>
                </TabsContent>

                <TabsContent value="password">
                    <p className="mt-4">This is your password settings tab.</p>
                </TabsContent>
                <div className='mx-5'>
                    {data.tasks.map((task: ITask) => (
                        <TaskCard key={task._id} task={task} />
                    ))}

                </div>
            </div>
        </Tabs>
    );
};

export default Task;