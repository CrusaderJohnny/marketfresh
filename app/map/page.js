/*
Written by Mace Howald 05-20-2025
Used Gemini to assist in debugging



*/

"use client"
import React from 'react';
import Nav from '../_components/nav/Nav';
import MapComponent from '../_components/mapComponents/map';
import MarketAccordion from "../marketmap/marketList";
import { AppShell, Button, Flex, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


export default function App() {

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);



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
            <AppShell.Header>
                <h1>Example Header Here</h1>
            </AppShell.Header>
            <AppShell.Navbar>
                <ScrollArea>
                    <MarketAccordion/>
                </ScrollArea>
            </AppShell.Navbar>
            <AppShell.Main>
                <Button onClick={toggleDesktop} visibleFrom="sm" mb={'sm'}>
                    Toggle navbar
                </Button>
                <Button onClick={toggleMobile} hiddenFrom="sm">
                    Toggle navbar
                </Button>


                <MapComponent width="90%" height="500px"></MapComponent>


            </AppShell.Main>
        </AppShell>

    );
};
