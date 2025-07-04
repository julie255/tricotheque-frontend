import * as React from "react";
import {
    Box,
    Container,
    Heading,
    Text,
} from '@chakra-ui/react';
import Navigation from '../composants/Navigation';

export default function Contact() {
    return (
        <Box
            fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            bg="orange.50"
            minH="100vh"
        >
            <Navigation />

            <Container maxW="700px" mt={12} px={4}>
                <Box
                    bg="white"
                    p={8}
                    borderRadius="xl"
                    boxShadow="lg"
                >
                    <Heading
                        as="h2"
                        size="lg"
                        color="pink.700"
                        mb={6}
                        textAlign="center"
                        fontWeight="700"
                    >
                        Un soucis ? Contactez nous par :
                    </Heading>

                    <Text
                        fontSize="lg"
                        color="gray.700"
                        lineHeight="1.6"
                    ><p>
                            Mail : filcreation@gmail.com <br />
                            Service clients :+336xxxxxxxx

                        </p>


                    </Text>
                </Box>
            </Container>
        </Box>
    );
}
