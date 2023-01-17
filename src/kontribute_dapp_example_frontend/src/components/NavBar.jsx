import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box h="4rem">
      <Box
        as="section"
        py={3}
        px={"1rem"}
        boxShadow="lg"
        position="fixed"
        bg="white"
        width="100%"
        top="0"
        zIndex="2"
      >
        <Flex align="center" justify="center">
          <NavLink to={"/"}>
            <Flex align="center" me={5}>
              <Text fontSize={20} as="samp">
                Kontribute Example
              </Text>
            </Flex>
          </NavLink>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Menu
            </MenuButton>
            <MenuList>
              <MenuGroup title="Features">
                <NavLink to="/create">
                  <MenuItem>1. Story upload</MenuItem>
                </NavLink>
                <NavLink to="/stories">
                  <MenuItem>2. View stories</MenuItem>
                </NavLink>
                <NavLink to="/marketplace">
                  <MenuItem>3. NFT marketplace</MenuItem>
                </NavLink>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;
