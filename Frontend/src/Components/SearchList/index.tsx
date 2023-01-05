import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import ProfileCard from '../ProfileCard';
import Text from '../Text';
import { Users } from '../../types/users';

interface SearchListProps {
    filteredUsers: Users[]
}

function SearchList({ filteredUsers }: SearchListProps) {
    const filtered = filteredUsers.map(user => <ProfileCard key={user.login.uuid} {...user} />);
    
    return (
        <div className='w-full flex flex-col justify-center border border-accentYellowColor rounded-xl'>
            {filtered.length > 0 ? 
                <div className='px-12'>
                    {filtered.length === 1 ? 
                        <Text size='lg' className='text-headingColor font-semibold'>1 usuário encontrado</Text>
                    :
                        <Text size='lg' className='text-headingColor font-semibold'>{`${filtered.length} usuários encontrados`}</Text>
                    }
                    
                </div>
            : 
                <div className='px-12'>
                  <Text size='lg' className='text-headingColor font-semibold'>Nenhum usuário encontrado</Text>
                </div>
            }
            
            <div className='w-full flex justify-center '>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=" w-full"
                >
                    {filteredUsers.map(user =>
                        <SwiperSlide>

                            <div className='w-full pb-10 pt-4 flex justify-center '>
                                <ProfileCard key={user.login.uuid} {...user} />
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>
        </div>
    );
}

export default SearchList;