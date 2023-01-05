
import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner';
import gato from '../../assets/images/gato.jpg'
import imageError from '../../assets/images/404.jpg'
import Header from '../../Components/Header'
import HTTPDropdown from '../../Components/HTTPDropdown'
import Text from '../../Components/Text'

function CatsPage() {

    const [cat, setCat] = useState(gato);
    const [isLoading, setIsLoading] = useState(false);

    async function getCat(http: number) {
        setIsLoading(true);
        try {
            const url = `https://http.cat/${http}`
            const response = await fetch(url)

            setCat(response.url)
            setIsLoading(false)

            if (response.status === 404) setCat(imageError)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='h-screen'>
            <Header searchButton={false} />

            <div className='h-[calc(100vh-63px)] pt-10  px-40 flex align-middle'>
                <HTTPDropdown getCat={getCat} />

                <div className='w-full flex flex-col gap-10 items-center'>
                    <Text size='xl' className='text-headingColor font-semibold text-center'>Selecione um código de status HTTP ao lado!</Text>

                    <div className='justify-item-center justify-self-center'>

                        {isLoading ?
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color="#00A2A2"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                visible={true}
                            />
                            :
                            <img src={cat} width={380} className="rounded-xl hover:scale-110" />
                        }

                    </div>
                </div>

            </div>

        </div>
    )
}

export default CatsPage