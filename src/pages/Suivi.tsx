// import React, { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import {
//     Box,
//     Heading,
//     Input,
//     Button,
//     VStack,
//     FormControl,
//     FormLabel,
//     useToast,
// } from "@chakra-ui/react";

// const creations = [
//     { id: 1, title: "Écharpe en laine douce" },
//     { id: 2, title: "Bonnet coloré" },
//     { id: 3, title: "Sac à main crocheté" },
//     { id: 4, title: "Robe au crochet" },
// ];

// export default function Suivi() {
//     const [searchParams] = useSearchParams();
//     const toast = useToast();
//     const id = Number(searchParams.get("id"));
//     const creation = creations.find((c) => c.id === id);

//     const [email, setEmail] = useState("");
//     const [orderNumber, setOrderNumber] = useState("");

//     if (!creation) {
//         return (
//             <Box p={10}>
//                 <Heading>Commande introuvable</Heading>
//             </Box>
//         );
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         toast({
//             title: "Demande reçue",
//             description: "Nous avons bien reçu votre demande de suivi.",
//             status: "success",
//             duration: 4000,
//             isClosable: true,
//             position: "top",
//         });
//     };

//     return (
//         <Box
//             maxW="600px"
//             mx="auto"
//             mt={10}
//             p={6}
//             bg="orange.50"
//             borderRadius="lg"
//             boxShadow="lg"
//         >
//             <Heading mb={6} color="orange.600">
//                 Suivi de commande : {creation.title}
//             </Heading>

//             <form onSubmit={handleSubmit}>
//                 <VStack spacing={4} align="stretch">
//                     <FormControl isRequired>
//                         <FormLabel>Adresse email utilisée lors de la commande</FormLabel>
//                         <Input
//                             type="email"
//                             placeholder="exemple@domaine.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </FormControl>

//                     <FormControl>
//                         <FormLabel>Numéro de commande (si connu)</FormLabel>
//                         <Input
//                             placeholder="ABC123456"
//                             value={orderNumber}
//                             onChange={(e) => setOrderNumber(e.target.value)}
//                         />
//                     </FormControl>

//                     <Button type="submit" colorScheme="orange" width="full">
//                         Lancer le suivi
//                     </Button>
//                 </VStack>
//             </form>
//         </Box>
//     );
// }