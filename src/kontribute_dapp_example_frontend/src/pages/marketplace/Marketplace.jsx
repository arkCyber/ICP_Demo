import React, { useState, useEffect } from "react";
import { Center, SimpleGrid, Box, Stack, Button, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { MarketplaceNft } from "../../components";

// The minting address is the one used to retrieve data for the marketplace such as which NFTs are
// for sale from that address. For this example we are using the Bonsai Warriors minting address,
// you can change this to your own. such as the one from https://nftanvil.com/ or
// the address you get from the Anvil command line tool: https://www.npmjs.com/package/@vvv-interactive/nftanvil
const MINTINGADDRESS =
  "a006b7308ff262c78c50b3a20059229d30b818034a9f5186eec8e93a1dc15f77";

// This number can be changed to show a desired amount of NFTs on the UI
const NFTSDISPLAYED = 8;

const Marketplace = () => {
  const [Loaded, setLoaded] = useState(false);
  const [totalNfts, setTotalNfts] = useState([]);
  const [tokensForSale, setTokensForSale] = useState([]);
  const [page, setPage] = useState(0);

  const Load = async () => {
    // We fetch all NFT IDs with prices from the Anvil off-chain API
    const allNfts = await fetch(
      `https://nftpkg.com/api/v1/prices/${MINTINGADDRESS}`
    ).then((x) => x.json());

    // Filter so we get only NFTs with prices above 0
    const NftsForSale = allNfts.filter((singleNft) => singleNft[2] > 0);
    setTotalNfts(NftsForSale.length);

    // You can integrate any sorting algorithm here.
    // Such as by Rarity, lowest to highest or anything else,
    // in this example we implement lowest to highest by default
    const sortedNfts = NftsForSale.sort((a, b) => a[2] - b[2]);

    // we use pagination and show 20 NFTs at a time
    setTokensForSale(
      sortedNfts.slice(page * NFTSDISPLAYED, (page + 1) * NFTSDISPLAYED)
    );

    setLoaded(true);
  };

  useEffect(() => {
    Load();
  }, [page]);

  return (
    <Box mt={10}>
      {Loaded ? (
        <>
          <PaginationButtons
            setPage={setPage}
            page={page}
            totalNfts={totalNfts}
          />
          <Center mt={1}>
            <SimpleGrid
              columns={{ base: 2, md: 2, lg: 4 }}
              pb={5}
              gap={{ base: 3, md: 6 }}
              maxW="1250px"
            >
              {tokensForSale.map((item) => (
                <MarketplaceNft tokenId={item[0]} key={item[0]} />
              ))}
            </SimpleGrid>
          </Center>
          <PaginationButtons
            setPage={setPage}
            page={page}
            tokensLength={tokensForSale.length}
            totalNfts={totalNfts}
          />
        </>
      ) : (
        "loading marketplace"
      )}
    </Box>
  );
};

export default Marketplace;

const PaginationButtons = ({ setPage, page, totalNfts }) => {
  const [totalPages, setTotalPages] = useState(0);

  const loadPages = () => {
    // Show the total amount of pages
    if (totalNfts) {
      setTotalPages(Math.ceil(totalNfts / NFTSDISPLAYED));
    }
  };

  useEffect(() => {
    loadPages();
  }, [totalNfts]);

  return (
    <Center my={5}>
      <Stack direction="row" align="center">
        <Button
          size="sm"
          _hover={{ boxShadow: "base" }}
          leftIcon={<ArrowLeftIcon />}
          onClick={() => {
            setPage(page - 1);
          }}
          isDisabled={page === 0}
        >
          Previous
        </Button>
        <Button size="xs" rounded="full">
          {page + 1}
        </Button>
        <Text>...</Text>
        <Button
          size="xs"
          rounded="full"
          onClick={() => setPage(totalPages - 1)}
        >
          {totalPages}
        </Button>
        <Button
          size="sm"
          rightIcon={<ArrowRightIcon />}
          _hover={{ boxShadow: "base" }}
          onClick={() => {
            setPage(page + 1);
          }}
          isDisabled={page + 1 === totalPages}
        >
          Next
        </Button>
      </Stack>
    </Center>
  );
};
