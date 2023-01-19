import React, { useState } from "react";
import {
  Box,
  Flex,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Input,
  Container,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { kontribute_dapp_example_backend } from "../../../../declarations/kontribute_dapp_example_backend/index";

const Stories = () => {
  const [storyId, setStoryId] = useState(null);
  const [storyResult, setStoryResult] = useState({ title: "", body: "" });

  /* In this example we implement a simple search function to query one of our uploaded stories,
  in a production application you may want to automatically query multiple stories at a time */
  const SearchStory = async () => {
    if (!storyId && storyId !== 0) { // guard clause
      return;
    }

    const result = await kontribute_dapp_example_backend.get(storyId);

    if ("ok" in result) {
      return setStoryResult(result.ok.story);
    } else {
      return setStoryResult({ title: "Story not found!", body: "" });
    }
  };

  return (
    <Box className="story">
      <Flex
        width={"100vw"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Container mt={10} align={"center"} className="story">
          <InputGroup mb={3}>
            <InputLeftAddon children="Story ID:" />
            <Input
              onKeyPress={(e) => (e.key === "Enter" ? SearchStory() : null)}
              onChange={(e) => setStoryId(Number(e.target.value))}
              type="number"
              placeholder="Search a story ID e.g 0"
            />
            <InputRightElement zIndex={1}>
              <Button height="100%" size="md" onClick={() => SearchStory()}>
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Heading as={"h3"}>
            {storyResult.title}
          </Heading>
          <Text
            size="md"
            dangerouslySetInnerHTML={{ __html: storyResult.story }}
          />
        </Container>
      </Flex>
    </Box>
  );
};

export default Stories;
