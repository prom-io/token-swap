# Token Swap

## Table of contents

- [Description](#description)
- [License](#license)

## Description

This module will perform a token swap: a process by which PROM token is exchanged for the internal token of Distributed Data Storage (DDS).

Actually, current version of DDS is based on the fork of Sia. It has it’s own internal tokens, which circulate through the system. So anytime when we need to store the file into DDS, we need to pass some internal DDS tokens to the node, which we work with (to pay for the storage services). 

Prometeus would later consider other platforms for DDS, but either way, token swap procedure will be necessary during the data storage transactions.

## License

Prometeus Network is licensed under the Apache software license (see LICENSE [file](https://github.com/Prometeus-Network/prometeus/blob/master/LICENSE)). Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either \express or implied.

Prometeus Network makes no representation or guarantee that this software (including any third-party libraries) will perform as intended or will be free of errors, bugs or faulty code. The software may fail which could completely or partially limit functionality or compromise computer systems. If you use or implement it, you do so at your own risk. In no event will Prometeus Network be liable to any party for any damages whatsoever, even if it had been advised of the possibility of damage.

As such this codebase should be treated as experimental and does not contain all currently developed features. Prometeus Network will be delivering regular updates.

