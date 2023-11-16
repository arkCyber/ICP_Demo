# ICP Example application

This repo contains the code for a simplified version of the main [Kontribute dapp](https://3ezq7-iqaaa-aaaal-aaacq-cai.raw.ic0.app/). Clone this repo and learn how to build an app on the Internet Computer blockchain with text-based story uploading and a basic NFT marketplace. You can find the frontend deployed here: https://k2i6w-qaaaa-aaaap-aayiq-cai.ic0.app/

### The tech stack
* [React.js](https://reactjs.org/)
* [Motoko](https://internetcomputer.org/docs/current/developer-docs/build/languages/motoko/)
* [Anvil react tools](https://www.npmjs.com/package/@vvv-interactive/nftanvil-react)
* [Chakra UI](https://www.npmjs.com/package/@vvv-interactive/nftanvil-react)

### Dependencies
* [npm](https://nodejs.org/en/download/)
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [dfx](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent/)

# Basic Concepts

### What is the Internet Computer (ICP)?

A new cryptocurrency technology that allows developers to build applications on top of it. It is faster and cheaper than other programmable blockchain alternatives.

### What are canisters?

Canisters are special smart contracts that run WebAssembly. Smart contracts are programs stored on a blockchain that run when predetermined conditions are met. Our files of code are uploaded into canisters and powered by the ICP blockchain.

This repository uses React for the frontend running in the browser, and the backend is written in Motoko.

You will build and deploy the following _2 canisters_:

- `kontribute_dapp_example_frontend` is a regular modern React app, transferred into a `frontend asset` canister.
- `kontribute_dapp_example_backend` is written in Motoko, and will hold the story creation/storage logic of the dapp.

### What is Motoko?

Motoko is a new programming language designed for the Internet Computer - it is a type-safe language for creating backend smart contracts on ICP and bears a resemblance to `Rust` and `C++`. To learn more about the language, check out the [SDK](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/).

If you're using Visual Studio Code it is recommended to use the [Motoko extension](https://marketplace.visualstudio.com/items?itemName=dfinity-foundation.vscode-motoko).

### What is Internet Identity?

Internet Identity is a new authentication framework similar to Github or Google login, but providing complete anonimity to the users. We will be generating anonymous addresses based on a user’s specific device or biometric scanner - an example of a biometric scanner is a modern mobile phones fingerprint scanner or facial recognition (face ID). To learn more about Internet Identity check out the [documentation](https://internetcomputer.org/docs/current/tokenomics/identity-auth/what-is-ic-identity).

# Get started

## Make sure you have the dependencies installed

Navigate to a terminal on your machine and...

Run `node --version` to check if you have [node.js](https://nodejs.org/) installed (v16.17.0 is recommended).

Run `git --version` to check if you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.

In this example we are using [dfx](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent/) v0.11.2. You can install the correct version by running:

```
DFX_VERSION=0.11.2 sh -ci "$(curl -sSL https://internetcomputer.org/install.sh)"
```


## Clone this repo

Run the following command:

```
git clone https://github.com/teambonsai/kontribute_example.git
```


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
