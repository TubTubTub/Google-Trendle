import { Group, SegmentedControl, Slider, Text, Paper, useMantineTheme, useMantineColorScheme } from '@mantine/core'
import { useTrends } from '../contexts/TrendsContextHooks'
const GameSettings = () => {
    const [trends, dispatch] = useTrends()
    const theme = useMantineTheme()
    const { colorScheme, _ } = useMantineColorScheme()

    const setTimeframeSize = (value) => dispatch({ type: 'SET_TIMEFRAME_SIZE', payload: value })
    const setTimeframeValue = (value) => dispatch({ type: 'SET_TIMEFRAME_VALUE', payload: value })

    return (
        <Group align='stretch'>
            <Paper
                style={{
                    alignContent: 'center',
                    backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1]
                }}
                p="md"
            >
                <Text fw={500}>
                        {`Past ${trends.timeframe.match(/\d+/)} ${trends.timeframe.at(-1) === 'm' ? 'Months' : 'Years'}`}
                </Text>
            </Paper>
            <SegmentedControl
                orientation="vertical"
                onChange={setTimeframeSize}
                data={[
                    { label: 'Months',value:'m' },
                    { label: 'Years', value:'y' },
                ]}
            />
            <Slider
                defaultValue={6}
                max={12}
                label={(value) => value}
                step={1}
                onChangeEnd={setTimeframeValue}
                size="lg"
                style={{ flexGrow: 1, alignSelf: 'center' }}
            />
        </Group>
    )
}

export default GameSettings