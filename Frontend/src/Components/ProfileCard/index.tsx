
import React from 'react'
import { User, Envelope } from 'phosphor-react'
import { Users } from '../../types/users'
import Text from '../Text'


function ProfileCard(user: Users) {
  return (
    <div>
        <div className="w-60 h-fit pb-4 bg-white border-[#ccc] rounded-lg shadow-md hover:scale-110">
            <div className='bg-accentColor h-24 rounded-t-lg relative z-0'>
                <div className='absolute z-10 top-12 w-full flex justify-center  '>
                    <img className="w-24 h-24 mb-3 border-2 border-accentYellowColor rounded-full  shadow-lg" src={user.picture.large} />
                </div>
            </div>

            <div className='mt-16 w-full px-8'>
                <Text asChild size='md' className='text-headingColor font-semibold text-center'><h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2></Text>
                <Text size='sm' className=' font-medium text-headingColor text-center'>{user.dob.age}</Text>
            </div>

            <div className='flex justify-center mt-3 px-5'>
                <div className='w-fit flex flex-col items-start'>
                    <div className='w-fit flex justify-center items-center gap-1'>
                        <Envelope weight='fill' color='#cbd433' />
                        <Text size='sm' className='text-textColor'>{user.email}</Text>
                    </div>

                    <div className='w-fit flex justify-center items-center gap-1'>
                        <User weight='fill' color='#cbd433' />
                        <Text size='sm' className='text-textColor'>{user.login.username}</Text>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard