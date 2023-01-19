import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  GridItem,
  Skeleton,
  VStack,
  Flex,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { useAnvilDispatch, nft_fetch } from "@vvv-interactive/nftanvil-react";
import { tokenToText } from "@vvv-interactive/nftanvil-tools/cjs/token.js";
import { itemQuality } from "@vvv-interactive/nftanvil-tools/cjs/items.js";
import { e8sToIcp } from "@vvv-interactive/nftanvil-tools/cjs/accountidentifier.js";

// A single NFT box that retrieves an NFTs meta data
const MarketplaceNft = ({ tokenId }) => {
  const [Loaded, setLoaded] = useState(false);
  const [nftData, setNftData] = useState({});
  const anvilDispatch = useAnvilDispatch();

  let isMounted = true;
  // token IDs orignally are stored as numbers eg. 114567
  // however the system uses them in the format of nfta6b9yxhhqt95wh6g8,
  // this is to identify the standard (NFTA), so we change the ID to this format.
  const token = tokenToText(tokenId);

  const Load = async () => {
    const meta = await anvilDispatch(nft_fetch(token));
    // NFT meta is packed with metadata uncomment out this line of code to view it
    // console.log(meta);

    if (isMounted) {
      // for this example we only need the following NFT metadata:
      setNftData({
        id: token,
        name: meta.name,
        colorLight: itemQuality.light[meta.quality].color,
        price: meta.price.amount,
        thumb: meta.thumb.internal
          ? meta.thumb.internal.url
          : meta.thumb.external,
      });
      setLoaded(true);
    }
  };

  useEffect(() => {
    Load();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <GridItem>
      <Box
        role={"group"}
        w={["160px", null, "280px"]}
        rounded={"md"}
        boxShadow="md"
      >
        <Box rounded={"lg"} pos={"relative"} overflow="hidden">
          <ChakraImage
            bg="#fff"
            height={["160px", null, "280px"]}
            width={"auto"}
            objectFit={"cover"}
            src={nftData.thumb}
            fallback={<Skeleton height={["160px", null, "280px"]} />}
          />
        </Box>
        <Box p={{ base: 2, md: 3 }}>
          <VStack align={"center"}>
            {Loaded ? (
              <>
                <Heading
                  fontSize={{ base: "sm", md: "md" }}
                  color={nftData.colorLight}
                  noOfLines={1}
                >
                  {nftData.name}
                </Heading>
                <Flex align="center" pt={1}>
                  <Text fontWeight="bold">ICP:&nbsp;</Text>
                  <Text fontWeight="bold" fontSize={"md"}>
                    {e8sToIcp(nftData.price)}
                  </Text>
                </Flex>
              </>
            ) : (
              <>
                <Skeleton height="15px" width={"100px"} my={2} />
                <Skeleton height="15px" width={"70px"} mt={2} />
              </>
            )}
          </VStack>
        </Box>
      </Box>
    </GridItem>
  );
};

export default MarketplaceNft;
