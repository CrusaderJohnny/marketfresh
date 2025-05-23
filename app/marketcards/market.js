"use client";
import Image from "next/image"
import { Button, Text, Card, Spoiler, Container, Flex, Grid } from "@mantine/core";
import Link from "next/link";
//market card for listing markets, utilizes container to set size of card, grid to align items and a spoiler to hide information for a more info button
export default function Market() {
    const profpic = require("../assets/CFMLogo.png");
    return(
        <Container size="sm" my="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Grid align="center">
                    <Grid.Col span={3}>
                        <Image src={profpic} height={160} width={160} alt="CFM Logo"/>
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Text size="xl">Calgary Farmers Market</Text>
                    </Grid.Col>
                </Grid>     
                    <Spoiler maxHeight={60} showLabel="Show more" hideLabel="Hide">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce vitae eros et eros egestas suscipit. Nunc sed ultricies lacus, sed dapibus nisi.
                            Donec non enim eget metus varius viverra ac ullamcorper lorem. Cras sit amet tempor nulla.
                            Quisque faucibus dolor ut felis aliquet molestie. Duis consectetur mi eu interdum congue.
                            Etiam a egestas urna. Sed a varius magna, in interdum ligula.
                            Praesent sagittis varius turpis, quis ullamcorper justo. Donec pellentesque dapibus dictum.
                    </Spoiler>
                    <Flex justify="flex-end">
                        <Button component={Link} href="/">Directions</Button>
                    </Flex>
            </Card>
        </Container>
    );
};