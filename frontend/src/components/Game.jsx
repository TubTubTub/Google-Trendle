import { useRef, useEffect } from 'react'
import { Button, Group, Stack, Text, useMantineTheme, useMantineColorScheme } from '@mantine/core'
import { ReactSketchCanvas } from 'react-sketch-canvas'
import { FaUndoAlt, FaRedoAlt } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import { PiLineVerticalBold } from 'react-icons/pi'
import { ToolIconButton } from './Buttons'

import { useTrends } from '../contexts/TrendsContextHooks'
import trendsService from '../services/trends'

const axisData = [
    {
        x: 0,
        y: 5
    },
    {
        x: 3,
        y: 2
    },
    {
        x: 5,
        y: 4
    }
]

const XAxis = ({ number }) => {
    return (
        <Group justify="space-between">
            {
                Array(number).fill(0).map((_, index) => (
                    <Stack key={index} gap={0}>
                        <PiLineVerticalBold style={{ marginTop: '-1px' }} color="gray" size="0.75em" />
                        <Text fw={500} c="dimmed">hi</Text>
                    </Stack>
                ))
            }
        </Group>
    )
}

const Game = () => {
    const canvas = useRef()
    const [trends, trendsDispatch] = useTrends()
    const theme = useMantineTheme()
    const { colorScheme, _ } = useMantineColorScheme()

    useEffect(() => {
        const keyDownHandler = (event) => {
            if (event.code == 'Enter') {
                console.log('Enter')
                exportCanvas()
            }
            else if (event.shiftKey && event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                console.log('Redo')
                redoCanvas()
            }
            else if (!event.shiftKey && event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                console.log('Undo')
                undoCanvas()
            }
            else if (event.code == 'KeyR' && (event.ctrlKey || event.metaKey)) {
                console.log('Clear')
                clearCanvas()
            }
    }
        document.addEventListener('keydown', (event) => keyDownHandler(event))
    }, [])

    const exportCanvas = async () => {
        try {
            const data_url = await canvas.current.exportImage('jpeg')
            console.log(data_url)
            // const result = await trendsService.submit(data_url, 'today 1-m')
            const result = 0.6
            const stats = {
                'accuracy': result * 100,
                'average': 39,
                'numberOfUsers': 349,
            }
            if (result) {
                trendsDispatch({ type: 'SET_DATA_URL', payload: data_url })
                trendsDispatch({ type: 'SET_SCORE', payload: result })
                trendsDispatch({ type: 'SET_STATS', payload: stats })
                console.log('Successfully received data!')
            }
        } catch(error) {
            console.log(error)
        }
    }
    const undoCanvas = () => canvas.current.undo()
    const redoCanvas = () => canvas.current.redo()
    const clearCanvas = () => canvas.current.clearCanvas()

    return (
        <Stack gap={0}>
            <ReactSketchCanvas
                width={800}
                height={400}
                strokeWidth={4}
                strokeColor={colorScheme === 'dark' ? 'white' : 'black' }
                canvasColor={colorScheme === 'dark' ? theme.colors.dark[4] : 'white' }
                ref={canvas}
            />
            <XAxis number={Number(trends.timeframe.match(/\d+/)) + 1} />

            <Group justify="space-between" py="xs">
                <Button onClick={exportCanvas} disabled={trends.score}>
                    Export
                </Button>
                <Group gap="0.75em">
                    <ToolIconButton label="Undo" onClick={undoCanvas} icon={<FaUndoAlt />} />
                    <ToolIconButton label="Redo" onClick={redoCanvas} icon={<FaRedoAlt />} />
                    <ToolIconButton label="Clear canvas" onClick={clearCanvas} icon={<FaRegTrashCan />} />
                </Group>
            </Group>
        </Stack>
    )
}

export default Game