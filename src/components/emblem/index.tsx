import * as React from 'react'
import { EmblemProps } from './types'
import './styles.css'

export const Emblem = (props: EmblemProps) => {
    const title = props.title || 'alex russell'
    const tagline = Array.from(props.title || 'full stack developer')
    const className = `tagline ${props.size || 'normal'} ${props.className}`

    return (
        <div className={className}>
            <h1>{title}</h1>
            <div className="tagline-container">
                {tagline.map((char) => {
                    return (
                        <p className="tagline-char" key={char}>
                            {char}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}
