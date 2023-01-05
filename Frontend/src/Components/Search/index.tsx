import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react'
import { Users } from '../../types/users';
import SearchList from '../SearchList';


interface SearchProps {
    users: Users[];
}

function Search({ users }: SearchProps) {

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    const filteredPersons = users.filter(user => {
        return (
            user.name.first.toLowerCase().includes(searchField.toLowerCase())
            ||
            user.name.last.toLowerCase().includes(searchField.toLowerCase())
            ||
            user.name.title.toLowerCase().includes(searchField.toLowerCase())
            ||
            user.email.toLowerCase().includes(searchField.toLowerCase())
            ||
            user.login.username.toLowerCase().includes(searchField.toLowerCase())
        );
    }
    );

    const handleChange = (e: any) => {
        const search = e.target.value
        setSearchField(search)
    }

    useEffect(() => {
        if (searchField === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    }, [searchField])


    function searchList() {
        if (searchShow) {
            return (
                <SearchList filteredUsers={filteredPersons} />
            );
        }
    }

    return (
        <section>
            <div className='w-full -mt-11 mb-8 pr-16 flex justify-end'>
                <div className="w-24 flex items-center border border-accentColor rounded-full relative focus-within:border-accentYellowColor">
                    <div className='absolute px-2 '>
                        <MagnifyingGlass color='#6c757d' />
                    </div>

                    <input
                        id='search'
                        className="w-full rounded-full pl-8 outline-none placeholder-gray"
                        type="search"
                        placeholder="Buscar"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='px-4'>
                {searchList()}
            </div>
        </section>
    );
}

export default Search;

