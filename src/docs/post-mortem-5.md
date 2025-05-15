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

| Action Item                                                                      | Owner  | State       |
| -------------------------------------------------------------------------------- | ------ | ----------- |
| Update node selection algorithm for parallel latency detection                   | Isacco | IN PROGRESS |
| Configure monitoring to trigger pager duty incidents repeatedly every 10 minutes | Lukas  | COMPLETE    |
| Integrate Synapse instance monitoring                                            | Lukas  | COMPLETE    |

## Conclusion

This incident highlighted two critical issues: the necessity for proper procedures when restarting nodes and robust node selection algorithms. By addressing these factors, future connectivity disruptions can be significantly reduced or avoided entirely.

## Learnings

- **Parallelization in Node Selection:**
  Implementing parallel node latency checks ensures faster, more reliable network selection, minimizing the impact of node-specific outages.

- **Recurring pager duty alerts:** The event was unnoticed because the initial trigger was expected due to the maintenace restart but the resulting downtime was not noticed caused by this. Recurring pager duty calls in case of service interruption will avoid this scenario in the future.

## Timeline

- 08:56 - Node restart due to maintenance
- 08:57 - Pager Duty call dismissed as expected due to restart
- 08:58 - Node uptime check (Synapse): beacon-node-1.beacon-server-1.papers.tech returns 200 OK
- 20:47 - Kukai Team notifies beacon team in slack about an increase in user reports
- 00:16 - Kukai Team notices the Matrix part of the node is not working properly
- 08:00 - Service recovered
