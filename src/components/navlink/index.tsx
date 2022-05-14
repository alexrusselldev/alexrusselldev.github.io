import * as React from 'react'
import { NavlinkProps } from './types'
import './styles.css'
import { Link } from 'react-router-dom'

export const Navlink = (props: NavlinkProps) => {
    const className = `navlink ${props.size || 'normal'} ${
        props.className || ''
    }`
    const to = { pathname: props.to || '#' }
    const label = props.label || 'PLACEHOLDER'

    return (
        <div className={className}>
            {to.pathname.charAt(0) === '/' ? (
                <Link to={to}>
                    <p>{label}</p>
                </Link>
            ) : (
                <a href={to.pathname}>
                    <p>{label}</p>
                </a>
            )}
        </div>
    )
}
