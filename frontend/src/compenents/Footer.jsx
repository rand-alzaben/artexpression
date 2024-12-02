import React from 'react'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/*-----------Left side ----- */}
                <div>
                    <h2 className="text-custom-pink mb-5 w-40">ARTEXPRESSION</h2>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Whether you are a survivor, an art lover, or a volunteer dedicated to supporting healing through creative outlets, this platform invites you to explore, connect, and contribute. ArtExpression brings together individuals from all walks of life, fostering emotional connections that transcend borders and language. Discover artwork, read heartfelt poetry, or share a piece of your own story in a safe, compassionate space.</p>
                </div>
                {/*-----------center ----- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMMUNITY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>CONTACT US</li>
                        <li>PRIVACY POLICY</li>
                    </ul>
                </div>
                {/*-----------right section ----- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+4911111111</li>
                        <li>rand.alzaben99@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/*-----------copyright ----- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>© 2024 by Rand Alzaben - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer