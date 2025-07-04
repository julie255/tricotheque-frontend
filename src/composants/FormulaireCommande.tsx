// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     Heading,
//     Input,
//     Select,
//     Textarea,
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

// type FormulaireCommandeProps = {
//     id: string;
// };

// export default function FormulaireCommande({ id }: FormulaireCommandeProps) {
//     const creation = creations.find((c) => c.id === id);
//     const toast = useToast();

//     const [nom, setNom] = useState("");
//     const [email, setEmail] = useState("");
//     const [adresse, setAdresse] = useState("");
//     const [taille, setTaille] = useState("");
//     const [livraison, setLivraison] = useState("standard");

//     if (!creation) {
//         return (
//             <Box p={10}>
//                 <Heading color="red.500">Création introuvable</Heading>
//             </Box>
//         );
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         toast({
//             title: "Commande reçue",
//             description: "Votre commande a été reçue avec succès.",
//             status: "success",
//             duration: 4000,
//             isClosable: true,
//             position: "top",
//         });
//         // Clear form
//         setNom("");
//         setEmail("");
//         setAdresse("");
//         setTaille("");
//         setLivraison("standard");
//     };

//     return (
//         <Box
//             maxW="600px"
//             mx="auto"
//             mt={10}
//             p={6}
//             bg="pink.50"
//             borderRadius="lg"
//             boxShadow="lg"
//         >
//             <Heading mb={6} color="pink.600">
//                 Commander : {creation.title}
//             </Heading>

//             <form onSubmit={handleSubmit}>
//                 <VStack spacing={4} align="stretch">
//                     <FormControl isRequired>
//                         <FormLabel>Nom complet</FormLabel>
//                         <Input
//                             placeholder="Votre nom"
//                             value={nom}
//                             onChange={(e) => setNom(e.target.value)}
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel>Adresse email</FormLabel>
//                         <Input
//                             type="email"
//                             placeholder="exemple@domaine.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel>Adresse de livraison</FormLabel>
//                         <Textarea
//                             placeholder="Rue, Code postal, Ville, Pays"
//                             value={adresse}
//                             onChange={(e) => setAdresse(e.target.value)}
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel>Taille ou personnalisation</FormLabel>
//                         <Input
//                             placeholder="Ex : Taille M, couleur rouge..."
//                             value={taille}
//                             onChange={(e) => setTaille(e.target.value)}
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel>Méthode de livraison</FormLabel>
//                         <Select
//                             value={livraison}
//                             onChange={(e) => setLivraison(e.target.value)}
//                         >
//                             <option value="standard">Standard (gratuite)</option>
//                             <option value="express">Express (5€)</option>
//                         </Select>
//                     </FormControl>

//                     <Button type="submit" colorScheme="pink" width="full">
//                         Valider la commande
//                     </Button>
//                 </VStack>
//             </form>
//         </Box>
//     );
// }