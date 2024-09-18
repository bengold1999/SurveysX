import React from 'react'

type Props = {}

const HeaderHome = (props: Props) => {
    return (
        <header className=' fixed top-0 left-0 right-0 flex justify-between items-center shadow p-4  '>
            <div>
                <h2>Logo</h2>
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