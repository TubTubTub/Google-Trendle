import { AppShell } from '@mantine/core'
import Header from './components/Header'
import Game from './components/Game'
import History from './components/History'
import Rankings from './components/Rankings'
import Footer from './components/Footer'
import useMouseSidebar from './hooks/useMouseSidebar'

const mergeRefs = (...inputRefs) => {
    return (ref) => {
        inputRefs.forEach((inputRef) => {
            if (!inputRef) {
                return
            }

            if (typeof inputRef === 'function') {
                inputRef(ref)
            } else {
                inputRef.current = ref
            }
        })
    }
}

const App = () => {
    const [navbarRef, navbarOpened] = useMouseSidebar(300, 60, 'left')
    const [asideRef, asideOpened] = useMouseSidebar(300, 60, 'right')

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'md', collapsed: { desktop: !navbarOpened, mobile: true } }}
            aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: !asideOpened, mobile: true }}}
            padding="md"
            ref={mergeRefs(navbarRef, asideRef)}
        >
            <AppShell.Header px="md">
                <Header />
            </AppShell.Header>

            <AppShell.Main>
                <Game />
            </AppShell.Main>

            <AppShell.Navbar>
                <Rankings />
            </AppShell.Navbar>

            <AppShell.Aside>
                <History />
            </AppShell.Aside>

            <AppShell.Footer px="md" py="xs">
                <Footer />
            </AppShell.Footer>

        </AppShell>
    )
}

export default App