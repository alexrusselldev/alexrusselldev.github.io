import * as React from 'react'
import './styles.css'
import { TopbarProps } from './types'

export const Topbar = (props: TopbarProps) => {
    const className = `topbar ${props.className || ''}`
    return (
        <div className={className}>
            <h1 className="topbar-title">alex russell</h1>
        </div>
    )
}
