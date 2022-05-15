import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { Emblem } from '../../components/emblem'
import { Navlink } from '../../components/navlink'
import { myPages } from './data'
import { generateNavlinks } from './functions'

export const Home = () => {
    if (!isMobile && process.env.REACT_APP_FORCE_MOBILE === '0') {
        require('./styles.css')
        return (
            <div className="home-container">
                <Emblem size="large" />
                <div className="link-container">
                    {generateNavlinks(myPages)}
                </div>
            </div>
        )
    } else {
        require('./styles.mobile.css')
        return (
            <div className="home-container">
                <Emblem size="normal" className="main-emblem" />
                <div className="link-container">
                    {generateNavlinks(myPages)}
                </div>
            </div>
        )
    }
}
