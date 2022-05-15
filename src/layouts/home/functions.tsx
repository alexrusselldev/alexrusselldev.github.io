import { NavlinkProps } from '../../components/navlink/types'
import { Navlink } from '../../components/navlink'

export const generateNavlinks = (navlinks: NavlinkProps[]) => {
    return navlinks.map((navlink: NavlinkProps) => {
        return <Navlink label={navlink.label || ''} to={navlink.to || '#'} />
    })
}
