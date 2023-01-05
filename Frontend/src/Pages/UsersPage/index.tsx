
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import Users from '../../Components/Users'
import Pagination from '../../Components/Pagination';
import { USERS_PER_PAGE } from '../../utils/constants';
import Search from '../../Components/Search';
import Header from '../../Components/Header';

const initialUser = [{
    email: '',
    login: {
        uuid: '',
        username: '',
    },
    name: {
        title: '',
        first: '',
        last: '',
    },
    dob: {
        age: '',
    },
    picture: {
        large: '',
        medium: '',
        thumbnail: '',
    },
}]

function UsersPage() {
    const [users, setUsers] = useState(initialUser);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?page=1&results=20&seed=abc')
            const results = response.data.results
            setUsers(results)
            setTotalPages(Math.ceil(results.length / USERS_PER_PAGE));
            setIsLoading(false);

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getUsers()
    }, []);

    const handleClick = (number: number) => {
        setPage(number);
    };

    return (
        <div>
            {isLoading ?
                    <div className='flex justify-center h-screen w-full'>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#00A2A2"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            visible={true}
                        />
                    </div>
                :
                    <>
                        <Header searchButton />
                        <Search users={users} />
                        <Users users={users} page={page} />
                        <Pagination
                            totalPages={totalPages}
                            handleClick={handleClick}
                            page={page}
                        />
                    </>
                }
        </div>
    );
};



export default UsersPage



