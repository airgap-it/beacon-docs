---
title: Postmortem Incident 1
---

**Date:** 2021-10-24

**Authors:** Andreas Gassmann

**Status:** Complete, action items in progress

**Summary:** For about 1 hour (19:00 UTC - 20:00 UTC) the Beacon p2p network experienced a congestion and was mostly unusable or very slow.

**Impact:** New connection attempts between dApps and wallets during that time usually timed out or were very slow. Existing connections persisted and did allow for messages to be sent back and forth, but they were also slower or did not work at all, depending on the node the user was connected to. You can visit the [Beacon Monitoring Dashboard](https://status.walletbeacon.io/d/_98Bc2k7z/dashboard?orgId=1&from=1635096600000&to=1635123599000) for more information regarding the network activity.

**Root Causes:** Due to the high volume of users trying to pair their wallets at the same time, the Beacon network was overloaded and the requests were slowed down or timed out. The nodes struggled to handle the requests and were slowed down, which resulted in users retrying and adding additional load.

**Trigger:** The [Neonz](https://neonz.xyz/) NFT sale went public at 19:00 UTC, which created a traffic spike around that time and lead to many users pairing their wallets at the same time.

**Resolution:** The nodes started recovering about one hour after the initial outage. After 2 hours, the functionality was fully restored.

**Detection:** The network was being used by the team around the time of the NFT drop.

**Action Items:**

| Action Item                                                                                             | Type     | Owner   | State   |
| ------------------------------------------------------------------------------------------------------- | -------- | ------- | ------- |
| Add 5 additional nodes (8 total)                                                                        | mitigate | lionel  | PLANNED |
| Investigate if the Beacon Node config can be improved                                                   | mitigate | lionel  | PLANNED |
| Investigate if Dendrite, the new version of Matrix Synapse, improves performance                        | mitigate | lionel  | PLANNED |
| Improve reconnection logic in Beacon SDK                                                                | mitigate | andreas | PR OPEN |
| Add additional transport layer to Beacon SDK for web wallets, to reduce the general load on the network | improve  | andreas | PLANNED |

## Lessons Learned

### What went wrong

- At the start of the Neonz public sale at 19:00 UTC, all connected wallets were disconnected from the neonz.xyz dApp. We were able to pinpoint an issue in the Beacon integration of the Neonz website where a user would be disconnected from the Neonz dApp in a certain case. This resulted in all users having to re-pair their wallets again before being able to mint neonz. Because many people tried to mint Neonz at once, this caused a massive load on the Beacon Nodes.  
  Thanks to EyeJack, part of the team behind the Neonz project, for providing the source code of the frontend and help us with our investigation.

- Due to the high load, some Beacon Nodes became temporarily unreachable. This triggered the reconnection logic within the Beacon SDK, routing all traffic to the next available Beacon Node, which then also became unavailable. This resulted in a "waterfall" effect that took down all 4 Beacon Node in the Beacon network.

### Conclusion

- We are planning to add more nodes to the Beacon network to handle such spikes better.
- The logic in the Beacon SDK was changed to better distribute reconnection attempts to different nodes.
- The additional transport layer for web wallets was bumped up in the priority list.
- The outage did not affect Browser Extensions.

## Timeline

2021-10-24 (all times UTC)

- 19:00 https://neonz.xyz public sale goes live
- 19:01 Connection became unstable
- 19:02 Connectivity issues were visible in the monitoring system
- 19:05 investigation started
- 20:00 (approx.) the network recovered
- 20:30 (approx.) the investigation showed that the network was overloaded, a meeting was scheduled for the next day to discuss possible mitigations for the future
