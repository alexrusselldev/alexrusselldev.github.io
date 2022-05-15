import { NavlinkProps } from '../../components/navlink/types'
import { Navlink } from '../../components/navlink'

export const generateNavlinks = (
    navlinks: NavlinkProps[],
    className?: string
) => {
    return navlinks.map((navlink: NavlinkProps) => {
        return (
            <Navlink
                key={navlink.label || Math.random()}
                label={navlink.label || ''}
                to={navlink.to || '#'}
                className={className || ''}
            />
        )
    })
}
