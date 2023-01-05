import React, { useEffect, useState, useRef } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { ArrowClockwise } from 'phosphor-react'
import Header from '../../Components/Header'

function DogsPage() {

    const [dogs, setDogs] = useState([]);
    const [dog, setDog] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const getDogsList = async () => {
            try {
                const url = 'https://random.dog/doggos'
                const response = await fetch(url)
                const data = await response.json()

                setDogs(data)
                setIsLoading(false)

            } catch (err) {
                console.error(err)
            }
        }

        getDogsList()
    }, [])

    useEffect(() => {
        if (dogs.length !== 0) {
            setIsLoading(true)
            const getInitialDog = async () => {
                try {
                    const url = `https://random.dog/${dogs[0]}`
                    const response = await fetch(url)
                    setDog(response.url)
                    setIsLoading(false)

                } catch (err) {
                    console.error(err)
                }
            }
            getInitialDog()
        }
    }, [dogs]);

    const handleClick = async () => {
        setIsLoading(true);
        const randomNumber = Math.floor(Math.random() * dogs.length)
        try {
            const url = `https://random.dog/${dogs[randomNumber]}`
            const response = await fetch(url)
            setDog(response.url)
            setIsLoading(false)

        } catch (err) {
            console.error(err)
        }
    }

    let regex = /^([^\\]*)\.(\w+)$/
    let matches = dog.match(regex)

    return (
        <>
            <Header searchButton={false} />

            <div className='h-[calc(100vh-63px)]  flex flex-col justify-center items-center  gap-6'>
                {isLoading ?
                    <div className=' flex justify-center items-center w-80 h-80'>
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
                    <div>
                        {matches && (
                            matches[2] === 'mp4' ? 
                                <div className='w-80 h-80'>
                                    <video src={dog} controls className='w-full h-full object-cover rounded-xl' />
                                </div>
                            : 
                                <div className='w-80 h-80'>
                                    <img src={dog} className='w-full h-full object-cover rounded-xl hover:scale-110' />
                                </div>
                            )}
                    </div>
                    
                }



                <button onClick={handleClick}>
                    <ArrowClockwise weight='fill' color='#00A2A2' size={50} className="hover:fill-accentYellowColor" />
                </button>
            </div>
        </>
    )
}

export default DogsPage