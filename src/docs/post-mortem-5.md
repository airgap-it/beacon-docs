---
title: Postmortem Incident 5
slug: /post-mortem-5
---

**Date:** 2025-05-15

**Authors:** Isacco Sordo

**Status:** Complete, action items in progress

**Summary:**
An improper restart of the node `beacon-node-1.beacon-server-1.papers.tech` caused partial operational failure of the Synapse instance, resulting in connectivity issues for US-based users.

**Impact:**
US-based users experienced connectivity disruptions due to always being routed to a faulty node. This issue caused intermittent network failures and degraded performance.

**Root Causes:**
The incident originated from an improper restart of the node `beacon-node-1.beacon-server-1.papers.tech`. The following factors contributed to the incident's severity:

- **Improper Node Restart:** The node was improperly restarted, causing it to enter a partially operational state rather than fully operational.
- **Faulty Node Selection Algorithm:** The SDK's algorithm for selecting the node with the lowest latency was flawed, leading US users to repeatedly connect to the malfunctioning node.

**Affected Systems:**

- **Synapse Instance:** Partial operational failure impacting user connectivity.
- **SDK Network Node Selection:** Users relying on SDK for optimal node selection were persistently directed to the faulty node.

**Resolution:**
Immediate corrective steps involved:

1. **Node Restart:**

   - Properly restarted the node to restore complete operational status.

2. **Algorithm Update:**

   - Initiated modifications to the node-selection algorithm, changing its strategy from sequential latency checks to parallel checks.

3. **Enhanced Monitoring:**

   - Implemented monitoring checks on the Synapse instance.
   - Adjusted monitoring intervals to every 10 minutes for proactive detection.

**Detection:**
The issue was initially identified by SDK users who reported connectivity issues. Monitoring systems subsequently validated the Synapse instance's degraded performance.

**Action Items:**

| Action Item                                                    | Owner  | State       |
| -------------------------------------------------------------- | ------ | ----------- |
| Update node selection algorithm for parallel latency detection | Isacco | IN PROGRESS |
| Configure monitoring to perform checks every 10 minutes        | Lukas  | COMPLETE    |
| Integrate Synapse instance monitoring                          | Lukas  | COMPLETE    |

## Conclusion

This incident highlighted two critical issues: the necessity for proper procedures when restarting nodes and robust node selection algorithms. By addressing these factors, future connectivity disruptions can be significantly reduced or avoided entirely.

## Learnings

- **Parallelization in Node Selection:**
  Implementing parallel node latency checks ensures faster, more reliable network selection, minimizing the impact of node-specific outages.

- **Proactive Monitoring:**
  Enhanced monitoring frequency and additional checks provide early warning signals and reduce downtime duration.

## Timeline

- **09:30:** Node restart executed improperly; Synapse enters partially operational state.
- **09:35:** SDK begins routing US-based users to the faulty node due to latency detection flaw.
- **09:50:** Initial user reports of connectivity problems begin surfacing.
- **10:00:** Monitoring systems confirm the Synapse instance operational issue.
- **10:15:** Team identifies root cause related to improper node restart.
- **10:30:** Node properly restarted, restoring normal operations.
- **11:00:** Monitoring intervals adjusted to 10-minute checks.
- **11:30:** Algorithm changes initiated for parallel latency detection.
- **12:00:** Synapse instance added to comprehensive monitoring.
