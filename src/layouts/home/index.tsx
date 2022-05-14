import * as React from 'react'
import { Emblem } from '../../components/emblem'
import { Navlink } from '../../components/navlink'
import './styles.css'

export const Home = () => {
    return (
        <div className="home-container">
            <Emblem size="large" />
            <div className="link-container">
                <Navlink
                    label="github"
                    to="https://github.com/alexrusselldev"
                />
                <Navlink
                    label="linkedin"
                    to="https://www.linkedin.com/in/alex-russell-a070a4234/"
                />
                <Navlink
                    label="fiverr"
                    to="https://www.fiverr.com/alexrusselldev"
                />
            </div>
        </div>
    )
}
