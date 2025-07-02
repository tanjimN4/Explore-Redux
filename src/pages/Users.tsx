import AddUsers from '@/components/module/users/AddUsers';
import { Button } from '@/components/ui/button';
import { removeUser, selectUsers } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

const Users = () => {
    const user =useAppSelector(selectUsers);

    const dispatch = useAppDispatch();

    return (
        <div>
            <div className='flex justify-end mr-10 mt-3'><AddUsers></AddUsers></div>
            <div className='grid grid-cols-2'>
                {user.map((u) => (
                    <div key={u.id} className="border flex justify-between p-4 m-2 rounded-lg shadow-md">
                        <h2 >{u.name}</h2>
                        <Button onClick={()=>dispatch(removeUser(u.id))}>Delete</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;