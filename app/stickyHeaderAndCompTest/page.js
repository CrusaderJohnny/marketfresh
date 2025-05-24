/*
    Author: Daniel Asefa
    Page: Demo Mantine header with nav on page
    This page is an example implementation of how many components can be placed around the page
    
    References:
    Used official Mantine Documentation for creating headers

*/

"use client"
import NavMT from '../_components/nav/NavMT';
import { AppShell, useMantineTheme, Container, Title, Text, Box } from '@mantine/core';

import BoxComp from '../_components/otherComponents/boxComp'

export default function MantineNavPage() {
    const theme = useMantineTheme()
    const headerHeightVh = 14;

    return (
        <>
            <AppShell
                header={{ height: '14vh' }}
            >
                <NavMT />

                <AppShell.Main>
                    <Container size="lg" >

                        {/* Section 1 - Markets */}
                        <Container
                            id="section1"
                            style={{
                                minHeight: '86vh',
                                backgroundColor: theme.colors.green[3], // Color added to show size of Box (Delete later)
                                scrollMarginTop: `${headerHeightVh}vh`,
                            }}
                        >
                            {/* <Title order={2}>Section 1: Markets</Title>
                            <Text>
                                This section is for testing Market Components
                            </Text> */}
                            
                        </Container>

                        {/* Section 2 */}
                        <Box
                            id="section2"
                            style={{
                                minHeight: '86vh',
                                backgroundColor: theme.colors.green[0],
                                scrollMarginTop: `${headerHeightVh}vh`,
                            }}
                        >
                            {/* <Title order={2}>Section 2: Categories</Title> */}
                            {/* <BoxComp /> *   Removed BoxCompTest/}
                            {/* <Text>
                                This section is for testing Categories Components
                            </Text> */}
                        </Box>

                        {/* Section 3 */}
                        <Box
                            id="section3"
                            style={{
                                minHeight: '86vh',
                                backgroundColor: theme.colors.green[3],
                                scrollMarginTop: `${headerHeightVh}vh`,
                            }}
                        >
                            <Title order={2}>Section 3: News</Title>
                            <Text>
                                This section is for testing News Components
                            </Text>
                        </Box>

                        {/* Section 4 */}
                        <Box
                            id="section4"
                            style={{
                                minHeight: '86vh',
                                backgroundColor: theme.colors.green[0],
                                scrollMarginTop: `${headerHeightVh}vh`,
                            }}
                        >
                            <Title order={2}>Section 4: Vendors</Title>
                            <Text>
                                This section is for testing Vendor Components
                            </Text>
                        </Box>

                        {/* Section 5 */}
                        <Box
                            id="section5"
                            style={{
                                minHeight: '86vh',
                                backgroundColor: theme.colors.green[3],
                                scrollMarginTop: `${headerHeightVh}vh`,
                            }}
                        >
                            <Title order={2}>Section 5: Contact</Title>
                            <Text>
                                This section is for testing Contact Components
                            </Text>
                        </Box>
                    </Container>
                </AppShell.Main>

            </AppShell>
        </>
    );
}