import React from 'react';
import { USERS_PER_PAGE } from '../../utils/constants'
import { Users as UsersInterface } from '../../types/users';
import ProfileCard from '../ProfileCard';

interface UsersProps {
  users: UsersInterface[];
  page: number;
}

function Users({ users, page }: UsersProps) {
  const startIndex = (page - 1) * USERS_PER_PAGE;
  const selectedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);
  return (
    <div  className='w-full mt-20 px-5 flex justify-around'>
      {selectedUsers.map(user => (
        <ProfileCard key={user.login.uuid} {...user} />
      ))}
    </div>
  );
};

export default Users;