---
title: Postmortem Incident 3
slug: /post-mortem-3
---

**Date:** 2025-01-22

**Authors:** Andreas Gassmann

**Status:** Complete, action items in progress

**Summary:** An increasing number of users were not able to connect to the beacon-network.

**Impact:** The affected users were not able to connect to the beacon-network anymore.

**Root Causes:** The issue was caused by the user retention policy of beacon-nodes. For performance reasons, users were automatically disabled after 1 month of inactivity. Disabling a user account also removes any trances of the user from the database and therefore reduces its size and increases performance.

When implementing the retention policy, we verified that it did _not_ affect the ability of users re-joining the network, even after a month of inactivity and when their account was disabled. The behaviour was that when the user account was disabled, all references to the user were removed (eg. connections between dApps and wallet of that user, but not the user itself). Once the user logged in again, the account would automaticallybe re-activated and work like a newly created account again.

However, we now discovered that the behaviour of the account deactivation changed in a newer matrix-synapse version (matrix-synapse is the server software that powers the beacon-network). In the newer versions, deactivated accounts were _NOT_ reactivated anymore when the user tried to log in again. Instead, it would throw a "USER_DEACTIVATED" error. This error was not handled by the beacon-sdk, which lead to users being unable to connect to the beacon-network. After further investigation, we believe that the previous behaviour (in the old matrix-synapse versions) was a bug, which was fixed in the newer versions, but broke our assumptions.

The beacon-network hosts 12 nodes. Those nodes are located in different regions. The original 8 nodes, all located in europe, are still running the older version of matrix-synapse. This means that those servers were never affected by this issue. The other 4 nodes, located in the US, Asia and Australia, are running the newer version of matrix-synapse.

**Affected Users:** Users located in Europe were generally _not_ affected by this issue, as they are most likely connected to the european nodes. Users located in the US, Asia and Australia were more likely to be affected, especially if they did not connected to the beacon-network for more than 1 month (meaning they did not open the dApp or wallet for more than 1 month). Also, only wallets that use the beacon-network were affected. Browser extensions (eg. Temple Wallet) or wallets using WalletConnect, (eg. Kukai Mobile) were not affected.

**Resolution:** Two separate mitigations were implemented:

1. On the affected servers, we ran a script to re-activate all users. This mitigation immediately restored the ability to connect to the beacon-network for all affected users immediately.

2. We also updated the beacon-sdk to handle this behaviour gracefully. If the beacon-sdk detects that a user account is disabled, it will automatically generate a new user account and re-connect the user to the beacon-network with the new account. This happens with minimal user impact.

**Detection:** The first mention of potentially degraded user-experience was reported by the [Kukai Wallet](https://kukai.app/) team. At the time, the monitoring was checked and no issues were detected. As time went on, more users reported issues. What ultimately allowed us to identify the issue was when @jevonearth from the [Taquito](https://taquito.io/) team reported to be affected by this issue. This allowed us to debug it and find the root cause.

**Action Items:**

| Action Item                                       | Owner   | State       |
| ------------------------------------------------- | ------- | ----------- |
| Disable the retention policy (user deactivation)  | Andreas | COMPLETE    |
| Re-enable all deactivated users on affected nodes | Andreas | COMPLETE    |
| Update the beacon-sdk to handle the behaviour     | Isacco  | IN PROGRESS |
| Update all beacon nodes to the same version       | Lukas   | IN PROGRESS |

## Conclusion

This issue was hard to investigate, for a few reasons:

- The issue only appeared for a state that generally only happens after a month of inactivity.
- The behaviour of the server-side logic changed, which resulted in us focussing on the wrong area for a while.
- The issue was only visible for users that were connected to specific nodes.

After identifying the root cause, the mitigation was implemented quickly and did not require the involvement of any outside party.

## Learnings

To make sure issues like this will get caught sooner, we will implement server-side monitoring by analyzing the log files of the matrix-synapse servers. If we see an increase in errors, we will be able to react faster.

## Timeline

NOTE: There were reports earlier than the 20th of December. These reports were likely also related to this issues, but we do not have a clear timeline before the 20th of December because we were not able to reproduce this specific issue.

- 2024-12-20 18:10 The issue was reported by @jevonearth
- 2024-12-20 18:30 The issue was investigated by the Beacon team, but could not be reproduced
- 2025-01-05 18:45 Further reports of connection issues (which turned out to be unrelated to the beacon-network)
- 2025-01-06 12:00 The issue was investigated by the Beacon team. Spikes in the response times of some beacon-nodes were detected and the nodes were restarted.
- 2025-01-08 17:00 The beacon team had a debug-session with @jevonearth to further investigate the issue.
- 2025-01-08 18:00 Further investigation by the Beacon team, but the issue could not be reproduced locally.
- 2025-01-15 17:00 In a second debugging session with @jevonearth, the issue was identified.
- 2025-01-15 18:30 The beacon team was able to reproduce the issue locally.
- 2025-01-15 19:30 The root cause was identified and a mitigation was implemented.
- 2025-01-15 21:00 The mitigation was deployed to the affected nodes.
- 2025-01-16 21:00 The issue was resolved on the affected nodes.
