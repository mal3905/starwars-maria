import React from 'react'

export default function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>StarWars Character Search</h1>
            </header>            
        </div>
    )
}


const headerStyle = {
    background: '#333',
    textAlign:'center',
    color:'#fff',
    padding:'10px'
}

