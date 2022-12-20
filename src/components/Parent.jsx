import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Parent() {
    const location = useLocation()

    console.log('parent: ', location);
    console.log('10: ', location.search.split('&'));

    useEffect(() => {
        let link = location.search.split('&')
        console.log(14, link);

        for (let i = 0; i < link.length; i++) {
            if (link[i].split('=')[0] === 'start') {
                console.log(18, link[i].split('=')[1]);
            }
        }
    })

    return (
        <div>
            <Header></Header>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={'/'}>Home</Link>
                <Link to={'/children'}>Children</Link>
                <Link to={'/children2'}> Children2</Link>
            </div>
            <Outlet />

            <Footer />
        </div>
    )
}

export default Parent