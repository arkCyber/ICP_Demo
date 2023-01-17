import React, { useState } from "react";
import { Box, Flex, Input, Container, Button } from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../../assets/main.css";
import { kontribute_dapp_example_backend } from "../../../../declarations/kontribute_dapp_example_backend/index";

const Create = () => {
  const [storyBody, setStoryBody] = useState("");
  const [storyTitle, setStoryTitle] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [uploadedResult, setUploadedResult] = useState("");

  // We imported the backend smart contract and upload the newly created story to it:
  const uploadStory = async () => {
    setButtonClicked(true);

    const storyObject = {
      title: storyTitle,
      story: storyBody,
      address: [],
    };

    const uploaded = await kontribute_dapp_example_backend.add(storyObject);

    setButtonClicked(false);

    if ("ok" in uploaded) {
      return setUploadedResult(`Story uploaded successfully with ID: ${uploaded.ok}`);
    } else {
      return setUploadedResult(`Story failed to upload!`);
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
          {uploadedResult}
          <Input
            placeholder="Title"
            variant="outline"
            textAlign="center"
            size="lg"
            fontSize="34px"
            fontFamily="'Times New Roman', Times, serif"
            fontWeight="bold"
            onChange={(e) => setStoryTitle(e.target.value)}
            my={3}
          />
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: ["Heading", "bold", "italic", "|", "undo", "redo"],
              placeholder:
                "In the Celestial Empire, there are laws that must be obeyed, laws which bind all mankind into one great and inexhaustible force. None can defeat the boundless spirit and drive of the peoples of this great empire.",
              heading: {
                options: [
                  {
                    model: "heading2",
                    view: "h3",
                    title: "Heading",
                    class: "ck-heading_heading2",
                  },
                  {
                    model: "paragraph",
                    title: "Paragraph",
                    class: "ck-heading_paragraph",
                  },
                ],
              },
            }}
            onChange={(event, editor) => {
              setStoryBody(editor.getData());
            }}
          />
          <Button
            onClick={() => uploadStory()}
            isLoading={buttonClicked}
            size="lg"
            my={3}
          >
            Upload story
          </Button>
        </Container>
      </Flex>
    </Box>
  );
};

export default Create;
