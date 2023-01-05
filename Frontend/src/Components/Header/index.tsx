import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png'
import Text from '../Text';

interface HeaderProps {
    searchButton: boolean;
}

function Header({ searchButton }: HeaderProps) {

    const className = searchButton ? 'flex justify-between items-center pl-16 pr-48 bg-light' : 'flex justify-between items-center pl-16 pr-20 bg-light'

    return (
        <header className={className}>
            <div className='w-fit pt-1'>
                <img src={logo} width={200} alt="Logo" />
            </div>

            <div>
                <nav>
                    <ul className='flex gap-6'>
                        <li>
                            <Link to='/users'>
                                <Text className='text-headingColor font-semibold text-xl hover:text-accentColor uppercase'>Usuários</Text>
                            </Link>
                        </li>
                        <li>
                            <Link to='/cats'>
                                <Text className='text-headingColor font-semibold text-xl hover:text-accentColor uppercase'>Cats</Text>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dogs'>
                                <Text className='text-headingColor font-semibold text-xl hover:text-accentColor uppercase'>Dogs</Text>
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default Header