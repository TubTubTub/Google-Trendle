import { IoIosArrowForward } from 'react-icons/io'
import { ToolIconButton } from './Buttons'
import useNextTrendle from '../hooks/useNextTrendle'

const NextTrendle = () => {
    const loadNextTrendle = useNextTrendle()
    return (
        <ToolIconButton label="Next trendle" onClick={loadNextTrendle} icon={<IoIosArrowForward />} tooltip />
    )
}

export default NextTrendle