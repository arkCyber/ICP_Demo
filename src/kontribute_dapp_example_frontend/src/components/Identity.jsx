import React from "react";
import {
  useAnvilSelector,
  useAnvilDispatch,
  user_login,
  user_logout,
} from "@vvv-interactive/nftanvil-react";
import { e8sToIcp } from "@vvv-interactive/nftanvil-tools/cjs/accountidentifier.js";
import { MenuItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

/* Here we integrate basic anvil identity to retrieve and register your own unique address and wallet */
const Identity = () => {
  const address = useAnvilSelector((state) => state.user.address);
  const anvilDispatch = useAnvilDispatch();

  // if you want to display your wallet balance you can use this code:
  // const user_icp = e8sToIcp(useAnvilSelector((state) => state.user.icp));

  /* you can build on this example and implement a fully featured wallet by adding the
  ICP balance and transfer functionality, see the code in the main dapp here:
  https://github.com/teambonsai/bonsai_dapp/blob/main/src/kontribute_dapp_assets/src/containers/navbar/SendingIcp.jsx */
  const Login = async () => {
    anvilDispatch(user_login());
  };

  const Logout = async () => {
    anvilDispatch(user_logout());
  };

  return (
    <>
      <MenuItem icon={<ExternalLinkIcon />} onClick={() => Login()}>
        Identity:{" "}
        {address
          ? `${address.substring(0, 5)}...${address.substring(59, 64)}`
          : "anonymous"}
      </MenuItem>
      {address ? <MenuItem onClick={() => Logout()}>Logout</MenuItem> : null}
    </>
  );
};

export default Identity;
