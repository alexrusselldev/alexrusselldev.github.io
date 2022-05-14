import DefaultProps from '../../types/props/default'
import StyleProps from '../../types/props/style'

export interface NavlinkProps extends DefaultProps, StyleProps {
    label?: string
    to?: string
}
