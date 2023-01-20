# kontribute Example dapp

This dapp is a basic/simplified version of the main [Kontribute dapp](https://3ezq7-iqaaa-aaaal-aaacq-cai.raw.ic0.app/), Developers can clone this repo and learn how to build a decentralised app with text-based story uploading, storage, querying and a basic NFT marketplace. You can find the Example dapp frontend by visiting https://k2i6w-qaaaa-aaaap-aayiq-cai.ic0.app/

## The tech stack
You can find more information on the main tools used to create this dapp here:
* [React.js](https://reactjs.org/)
* [Motoko](https://internetcomputer.org/docs/current/developer-docs/build/languages/motoko/)
* [Anvil react tools](https://www.npmjs.com/package/@vvv-interactive/nftanvil-react)
* [Chakra UI](https://www.npmjs.com/package/@vvv-interactive/nftanvil-react)

## Dependencies
* [dfx](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent/)
* [npm](https://nodejs.org/en/download/)

## Basic Concepts

### What is the Internet Computer?

A new cryptocurrency technology launched in May 2021 that allows developers to build applications on top of it. It is faster and cheaper than other programmable blockchain alternatives.

### What are canisters?

Dapps on the Internet Computer live in canisters, which are special smart contracts that run WebAssembly. Smart contracts are programs stored on a blockchain that run when predetermined conditions are met. They are typically used to automate the execution of an agreement. Our files of code are uploaded to and powered by the ICP blockchain.

This repository uses React for the frontend running in the browser, and the backend is written in Motoko, it serves as the business logic of the dapp.

You will build and deploy the following _canisters_:

- `kontribute_dapp_example_frontend` is a regular modern React app, transferred into a `frontend asset` canister.
- `kontribute_dapp_example_backend` is written in Motoko, and will hold the story creation/storage logic of the dapp.

### What is Motoko?

Motoko is a new language designed for the Internet Computer. Easy to learn for JavaScript and Solidity developers. Created by the Motoko team at the DFINITY Foundation, led by WebAssembly co-creator Andreas Rossberg. To learn more about the language, check out the [SDK](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/).

### What is Internet Identity?

Internet Identity is a new authentication framework similar to Github or Google login, but providing complete anonimity to the users. We will be generating anonymous addresses based on a user’s specific device or biometric scanner - an example of a biometric scanner is a modern mobile phones fingerprint scanner or facial recognition (face ID). To learn more about Internet Identity check out the [documentation](https://internetcomputer.org/docs/current/tokenomics/identity-auth/what-is-ic-identity).

## Install dependencies

### How to get this repo

Make sure you have [node.js](https://nodejs.org/) installed - v16.17.0 is recommended.

Install the SDK -> `dfx` version v0.11.2, by running:

```
DFX_VERSION=0.11.2 sh -ci "$(curl -sSL https://internetcomputer.org/install.sh)"
```


### How to get this repo
Run `git --version` to check if you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.

To clone this repo, run the following command:

```
git clone https://github.com/teambonsai/kontribute_example.git
```

### Motoko backend

If you're using Visual Studio Code it is recommended to use the [Motoko extension](https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko) developed by the DFINITY Foundation.



## Build & Deploy

```bash
# make sure you are in the root directory with the src/ files
cd kontribute_example/

# install all the node dependencies
npm install

# Start the ICP local development server
dfx start --background --clean

# Upload the files to the local canisters
dfx deploy

# Start the node development server
npm start
```

Now you can navigate to `http://localhost:8080/` and explore the local application UI