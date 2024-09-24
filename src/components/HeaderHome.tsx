import React from 'react'

type Props = {}

const HeaderHome = (props: Props) => {
    return (
        <header className=' sticky top-0 left-0 right-0 flex justify-between items-center shadow-sm p-4 bg-white '>
            <div className='flex items-center'>
                <img className='w-10' src="src\assets\img\logoX.png" alt="" />
                <h2 className='ml-2 text-xl font-lightbold'>SurveryX</h2>
            </div>
            <nav className='flex space-x-4 items-center'>
                <span>Create</span>
                <span>Surverys</span>
                <span>Pricing</span>
                <span>How It Works</span>
                <button>Start Now </button>
            </nav>

        </header>
    )
}

export default HeaderHome