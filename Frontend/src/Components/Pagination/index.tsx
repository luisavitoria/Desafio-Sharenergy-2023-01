import React from 'react';

interface PaginationProps {
    totalPages: number;
    handleClick: (arg: number) => void;
    page: number;
}

function Pagination({ totalPages, handleClick, page }: PaginationProps) {
    const pages = [...Array(totalPages).keys()].map(number => number + 1);

    return (
        <nav className='w-full flex justify-center mt-16'>
            <ul className="inline-flex items-center -space-x-px">
                {pages.map(number => (
                    <li key={number}>
                        {page === number ?
                            <a href="#" onClick={() => handleClick(number)} className='px-3 py-2 text-accentColor text-lg font-semibold hover:text-accentYellowColor hover:text-xl'>{number}</a>
                            :
                            <a href="#" onClick={() => handleClick(number)} className='px-3 py-2 text-grayDark text-lg hover:text-accentYellowColor hover:text-xl'>{number}</a>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;