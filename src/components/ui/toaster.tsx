"use client"

import { useToast, Box, Button } from "@chakra-ui/react"

export function toaster() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "Action réussie",
      description: "Votre opération a bien été réalisée.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    })
  }

  return (
    <Box>
      <Button onClick={showToast}>Afficher un toast</Button>
    </Box>
  )
}