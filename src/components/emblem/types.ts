import StyleProps from '../../types/props/style'
import DefaultProps from '../../types/props/default'

export interface EmblemProps extends DefaultProps, StyleProps {
    title?: string
    tagline?: string
}
