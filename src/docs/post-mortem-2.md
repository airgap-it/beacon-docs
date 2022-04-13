---
title: Postmortem Incident 2
---

**Date:** 2022-04-12

**Authors:** Andreas Gassmann

**Status:** Complete, action items in progress

**Summary:** A security vulnerability was discovered in the beacon-sdk that would allow attackers in some circumstances to inject arbitrary Javascript into dApps.

**Impact:** If a dApp was opened in an iFrame on a malicious website, through a hyperlink from a malicious website, or if a malicious browser extension was installed, the attacker would have been able to inject arbitrary Javascript that would be executed in the dApp context. The vulnerability only affected dApps, it did not affect wallets or the Beacon network.

**Root Causes:** The beacon-sdk used `innerHTML` to display user provided data. The source of the user provided data was not checked, nor was the data sanitised before it was displayed. This made injection of Javascript into the website possible vis DOM based XSS (Cross Site Scripting).

**Resolution:** Two separate mitigations were implemented:

1. The origin of the data the SDK receives through the `postMessage` interface is now checked and messages from unsafe origins are ignored.
2. The UI no longer uses `innerHTML` to display data. Instead, only text is displayed, making it impossible to inject malicious Javascript.

**Detection:** The vulnerability was found by Maciej Domanski, Security Engineer at Trail of Bits, during a security review of another project. After discovering that the beacon-sdk was the cause of the issue, the Trail of Bits team privately reached out to us to disclose the vulnerabilty.

**Action Items:**
| Action Item | Type | Owner | State |
| -------------------------------------------------- | -------- | ------- | ----------- |
| Update beacon-sdk to fix vulnerability | mitigate | andreas | COMPLETE |
| Monitor dApp ecosystem and reach out to developers | mitigate | andreas | IN PROGRESS |

## Conclusion

- The vulnerability was found, fixed and most dApps updated in a little over a week. A huge thanks to the community for reacting quickly.
- As far as we are aware, the vulnerability has not been actively exploited.
- The security vulnerability only affected dApps. Wallets and the Beacon Network were not affected.

## Timeline

- 2022-04-05 17:30 The Trail of Bits team reached out to the Beacon team to inform us of a security vulnerability they found in the beacon-sdk during one of their audits
- 2022-04-05 20:00 The Beacon team was able to verify the vulnerability and started planning the fix and its rollout
- 2022-04-06 15:00 A proof of concept of the mitigations was implemented and fixed the security vulnerability
- 2022-04-07 14:00 Both mitigations were implemented and an internal review was started
- 2022-04-08 08:30 The fix was released to NPM with the version number `2.3.11`
- 2022-04-08 09:00 The Beacon team started privately reaching out to dApps in the Tezos ecosystem, informing them that a new update is available and urging them to update as soon as possible
- 2022-04-08 15:00 A small fix was deployed to address build issues with server side rendering, beacon-sdk version `2.3.12`
- 2022-04-11 09:00 More dApps were contacted and notified about the update
- 2022-04-xx xx:00 The vulnerability has been posted in various developer communities
- 2022-04-xx xx:00 The vulnerability has been publicly disclosed

## Support

We want to thank all the developers in the Tezos ecosystem that were involved in addressing this issue as soon as possible in a very effective manner.

Special thanks to the Trail of Bits team for reporting the vulnerability, as well as the Ecad Labs team and the Kukai Wallet team for helping us coordinate the communication in the Tezos Developer ecosystem.
