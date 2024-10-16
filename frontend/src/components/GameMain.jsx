import { useState, useEffect } from 'react'
import { Center, Stack, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useTrendsValue } from '../contexts/TrendsContextHooks'
import useSessionStorage from '../hooks/useSessionStorage'

import ErrorAlert from './ErrorAlert'
import Canvas from './Canvas'
import GameConfig from './GameConfig'
import PreviousTrendle from './PreviousTrendle'
import NextTrendle from './NextTrendle'
import Result from './Result'

const GameMain = () => {
    const [error, setError] = useState('')
    const [resultOpened, { open, close }] = useDisclosure(false)
    const trends = useTrendsValue()
    const setupSessionState = useSessionStorage()

    useEffect(() => {
        setupSessionState(setErrorMessage)
    }, [])

    useEffect(() => {
        trends.result.score ? open() : close()
    }, [trends.result.score, open, close])

    const setErrorMessage = (message) => {
        setError(message)
        setTimeout(() => setError(''), 3000)
    }

    const gameStyle = {
        position: 'relative',
        transitionProperty: 'right',
        transitionDuration: '200ms',
        transitionTimingFunction: 'ease',
        right: (resultOpened ? '10vw' : 0),
        zIndex: 2,
    }

    return (
        <Center style={{ height: "80vh", gap: '2em' }}>
            <ErrorAlert message={error} />

            <Group style={gameStyle}>
                <PreviousTrendle setErrorMessage={setErrorMessage} />
                <Stack>
                    <GameConfig />
                    <Canvas />
                </Stack>
                <NextTrendle setErrorMessage={setErrorMessage} />
            </Group>

            <Result open={resultOpened} onClose={close} />
        </Center>
    )
}

export default GameMain