import { useEffect } from 'react'
import { Title, ScrollArea, Group, Stack, Center, Text } from '@mantine/core'

import { useHistory } from '../../contexts/HistoryContextHooks'
import { useProfileValue } from '../../contexts/ProfileContextHooks'
import statisticsService from '../../services/statistics'

import { HiOutlineRefresh } from 'react-icons/hi'
import { ToolIconButton } from '../Buttons'
import HistorySVG from '../../assets/history.svg?react'
import LoadingList from '../LoadingList'
import HistoryList from './HistoryList'

const History = () => {
    const [{ userHistory }, historyDispatch] = useHistory()
    const { profile } = useProfileValue()

    const refreshHistory = async () => {
        historyDispatch({ type: 'SET_USER_HISTORY', payload: null })
        const userHistory = await statisticsService.getHistory()
        historyDispatch({ type: 'SET_USER_HISTORY', payload: userHistory })
    }

    useEffect(() => {
        refreshHistory()
    }, [])

    if (userHistory === null) return <LoadingList />
    
    if (userHistory.length === 0) {
        const displayText = profile ? "No games found!" : "Sign in to view game history!"
        return (
            <Center h='100%'>
                <Text fw={500}>{displayText}</Text>
            </Center>
        )
    }
    
    return (
        <Stack>
            <Group h="4rem" justify="center">
                <HistorySVG style={{ width: '1.5rem', height: '1.5rem' }} />
                <Title order={2}>Game History</Title>
                <ToolIconButton onClick={refreshHistory} label="Refresh history" icon={<HiOutlineRefresh size="1.5rem" />} tooltip={true} />
            </Group>
            
            <ScrollArea type="auto" scrollbars="y">
                <HistoryList />
            </ScrollArea>
        </Stack>
    )
}

export default History