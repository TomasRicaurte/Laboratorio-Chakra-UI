import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        border="solid"
        height="40vh"
        width="200vh"
        margin="10"
        alignItems="center"
        justifyContent="center"
        bgImage="url('src/components/Banner-TR.png')"
        bgSize="200vh"
      >
        <Text fontSize="25" color="white">
          DOMINA EL TERRENO
        </Text>
        <Box>
          <Button mr="2" w="auto" border="solid white" bg="none">
            <Text color="white">VER DETALLES</Text>
          </Button>
          <Button ml="2" w="auto" border="solid white" bg="none">
            <Text color="white">VER VIDEO</Text>
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        border="solid"
        height="40vh"
        width="40vh"
        margin="10"
        alignItems="center"
        justifyContent="center"
        bgImage="url('src/components/Banner-TR.png')"
        bgSize="200vh"
      >
        <Text size="15" color="white">
          DOMINA EL TERRENO
        </Text>
        <Box display="flex" flexDirection="column">
          <Button mt="2" w="40" border="solid white" bg="none">
            <Text color="white">VER DETALLES</Text>
          </Button>
          <Button mt="2" w="40" border="solid white" bg="none">
            <Text color="white">VER VIDEO</Text>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
