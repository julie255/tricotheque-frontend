import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import Navigation from '../composants/Navigation';

export default function Apropos() {
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
                        À propos de FIL & CRÉATION
                    </Heading>
                    
                    <Text
                        fontSize="lg"
                        color="gray.700"
                        lineHeight="1.6"
                    >
                        FIL & CRÉATION est un espace convivial pour tous les passionnés de tricot et crochet.
                        Vous pouvez partager vos créations, découvrir de nouveaux modèles, et vous inspirer de la communauté.
                        Notre objectif est de créer un lieu chaleureux et créatif, où chaque fil raconte une histoire.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
}
