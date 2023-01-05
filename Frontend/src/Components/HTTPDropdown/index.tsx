
import React, { useState } from 'react'
import DropdownItem from '../DropdownItem'

interface HTTPDropdownProps {
    getCat: (http: number) => {}
}

function HTTPDropdown({ getCat }: HTTPDropdownProps) {

    return (
        <div className=' h-full flex flex-col pt-20'>
            <div className='overflow-y-auto flex flex-col justify-center'>
                <DropdownItem getCat={getCat} httpStatus='1XX' httpStatusList={[100, 101, 102, 103]} />
                <DropdownItem getCat={getCat} httpStatus='2XX' httpStatusList={[200, 201, 202, 203, 204, 205, 206, 207, 208, 226]} />
                <DropdownItem getCat={getCat} httpStatus='3XX' httpStatusList={[300, 301, 302, 303, 304, 305, 306, 307, 308]} />
                <DropdownItem getCat={getCat} httpStatus='4XX' httpStatusList={[400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499]} />
                <DropdownItem getCat={getCat} httpStatus='5XX' httpStatusList={[500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599]} />
            </div>
        </div>
    )
}

export default HTTPDropdown