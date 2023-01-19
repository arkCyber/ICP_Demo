import React from "react";
import {
  Box,
  Flex,
  Center,
  SimpleGrid,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

// static home page for information and links to resources
const Home = () => {
  return (
    <Box>
      <Flex
        width={"100vw"}
        height={{ base: "auto", lg: "100vh" }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            gap={{ base: 3, md: 6 }}
            px={3}
            mt={{ base: 10, md: 0 }}
            maxW="1200px"
          >
            <Box boxShadow="md" borderRadius="lg" p={5}>
              <Heading>
                Welcome to the Kontribute Example application 👋🏻
              </Heading>
              <Text mt={5}>
                A starter template to clone for new developers entering the ICP
                eco-system. Clone the repo here:{" "}
                <Link
                  href="https://github.com/teambonsai/kontribute_example"
                  color="blue.500"
                  isExternal
                >
                  Kontribute example code
                </Link>
              </Text>
            </Box>
            <Box boxShadow="md" borderRadius="lg" p={5}>
              <Heading>
                Clone this project and learn how to integrate 🏗️
              </Heading>
              <UnorderedList mt={5}>
                <ListItem>
                  <Link href="https://reactjs.org/" color="blue.500" isExternal>
                    React JS
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://chakra-ui.com/"
                    color="blue.500"
                    isExternal
                  >
                    Chakra UI
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://docs.nftanvil.com/"
                    color="blue.500"
                    isExternal
                  >
                    NFT Anvil React API
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/"
                    color="blue.500"
                    isExternal
                  >
                    Motoko
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box boxShadow="md" borderRadius="lg" p={5}>
              <Heading>
                Learn how to build intermediate features such as ✅
              </Heading>
              <OrderedList mt={5}>
                <ListItem>Story creation and upload via a text editor</ListItem>
                <ListItem>
                  Story storage and querying in a Motoko backend
                </ListItem>
                <ListItem>
                  Basic Identity and NFT marketplace via NFT Anvil React tools
                </ListItem>
              </OrderedList>
            </Box>
          </SimpleGrid>
        </Center>
      </Flex>
      <Center>
        <Box boxShadow="md" borderRadius="lg" mx={3} my={5} p={5}>
          <Heading>Helpful resources 📚</Heading>
          <Text mt={5}>General information about the ICP blockchain:</Text>
          <Link
            href="https://internetcomputer.org/developers"
            color="blue.500"
            isExternal
          >
            IC Orientation
          </Link>
          <Text mt={5}>DFX - ICP's command line development tool:</Text>
          <Link
            href="https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove"
            color="blue.500"
            isExternal
          >
            Install the SDK
          </Link>
          <Text mt={5}>Try out the Motoko playground:</Text>
          <Link
            href="https://m7sm4-2iaaa-aaaab-qabra-cai.raw.ic0.app/"
            color="blue.500"
            isExternal
          >
            Motoko playground
          </Link>
          <Text mt={5}>Ask questions in the Internet Computer forums</Text>
          <Link href="https://forum.dfinity.org/" color="blue.500" isExternal>
            Forums
          </Link>
        </Box>
      </Center>
      <Center my={5}>
        <Text as="kbd" size="sm">
          Developed by Team Bonsai
        </Text>
      </Center>
    </Box>
  );
};

export default Home;
