/*
Written by Mace Howald 05-20-2025
Used Gemini to assist in debugging
Header image from "https://letspasta.com/wp-content/uploads/2022/08/Alberta-farming.jpg"
Used Mantine component library

*/

"use client"
import React from 'react';
import Nav from '../_components/nav/Nav';
import MapComponent from '../_components/mapComponents/map';
import MarketAccordion from "../marketmap/marketList";
import { Text, AppShell, Button, Center, Flex, ScrollArea , AppShellMain, AppShellNavbar, AppShellHeader, BackgroundImage } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation'


export default function App() {

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    const router = useRouter()

    // Temp removed to use url for testing
    //const farmHeader = require("../assets/Alberta-farming.jpg")



    return (
        <AppShell
        padding="md"
        header={{ height: 100 }}
        navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        >
            <AppShellHeader>
                <BackgroundImage src="https://letspasta.com/wp-content/uploads/2022/08/Alberta-farming.jpg"
                style={{ height: '100%' }} component="button" onClick={() => router.push('/')}>
                    <Center style={{ height: '100%' }}>
                        <Text size='xl' c='white' fw='bold'>Example Header Here</Text>
                    </Center>
                </BackgroundImage>
            </AppShellHeader>
            <AppShellNavbar>
                <ScrollArea>
                    <MarketAccordion/>
                </ScrollArea>
            </AppShellNavbar>
            <AppShellMain>
                <Button onClick={toggleDesktop} visibleFrom="sm" mb={'sm'}>
                    Toggle navbar
                </Button>
                <Button onClick={toggleMobile} hiddenFrom="sm">
                    Toggle navbar
                </Button>

                <Center>
                    <MapComponent/>
                </Center>
                


            </AppShellMain>
        </AppShell>

    );
};
