
import React, { useState } from 'react'

interface DropdownItemProps {
    httpStatus: string;
    httpStatusList: number[];
    getCat: (http: number) => {}
}

function DropdownItem({ httpStatus, httpStatusList, getCat }: DropdownItemProps) {

    const [isOpen, setOpen] = useState(false);

    const handleDropdown = () => {
        setOpen(!isOpen)
    }

    function handleClick(e: any, code: number) {
        e.preventDefault()
        getCat(code)
    }

    return (
        <div className='overflow-y-auto w-22'>
            <button onClick={handleDropdown} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-accentColor hover:opacity-70  focus:outline-none font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center w-full" type="button">

                {httpStatus}

                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>

            </button>

            {httpStatusList.map(code => {
                return <div key={code} id="dropdown" className={`z-10 bg-light divide-y divide-gray rounded shadow w-full dark:bg-gray-700 text-left ${isOpen ? "block" : "hidden"}`}>
                    <ul className=" text-sm" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" onClick={(e) => handleClick(e, code )} className="block px-4 py-2 hover:bg-accentYellowColor hover:opacity-80  hover:font-medium">{code}</a>
                        </li>
                    </ul>
                </div>
            })}

        </div>
    )
}

export default DropdownItem