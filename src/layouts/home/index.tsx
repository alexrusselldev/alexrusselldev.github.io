import * as React from 'react'
import { isMobile } from 'react-device-detect'
import { Emblem } from '../../components/emblem'
import { Navlink } from '../../components/navlink'
import { myPages } from './data'
import { generateNavlinks } from './functions'
import './styles.css'
import './styles.mobile.css'

export const Home = () => {
    if (!isMobile) {
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
            <div className="home-container mobile">
                <Emblem size="normal" className="main-emblem mobile" />
                <div className="link-container mobile">
                    {generateNavlinks(myPages, 'mobile')}
                </div>
            </div>
        )
    }
}
