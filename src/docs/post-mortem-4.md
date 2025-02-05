---
title: Postmortem Incident 4
slug: /post-mortem-dns-outage
---

**Date:** 2025-02-05

**Authors:** Isacco Sordo

**Status:** Complete, action items in progress

**Summary:**  
A DNS resolution issue on our primary provider caused widespread service outages. The inability to resolve the DNS records for our first node triggered alerts and impacted the availability of our entire infrastructure.

**Impact:**  
All servers relying on the affected DNS provider experienced downtime. Users were unable to access services until the DNS provider restored functionality, leading to service degradation and a loss of trust in our infrastructure reliability.

**Root Causes:**  
The incident began when the first node experienced DNS resolution problems at 04:34, which was promptly escalated via pager duty. The following factors contributed to the severity of the outage:

- **Single DNS Provider Dependency:** Our infrastructure relied solely on one DNS provider. When the provider encountered issues, there was no immediate fallback, which propagated the failure across all nodes.
- **External Provider Outage:** The DNS provider experienced multiple service degradations (evidenced by a broken hotline, down status page, and non-responsive ticket system), leaving us with limited channels for resolution.
- **Delayed Communication:** Initial email support requests did not generate an autoresponse, delaying our understanding of the outage status.

**Affected Systems:**

- **All Dependent Servers:** Since the DNS failure impacted the resolution for all servers using this provider, services across our infrastructure were affected.

**Resolution:**  
Two separate remediation steps were implemented:

1. **Immediate Escalation and Monitoring:**

   - At 04:34, the DNS resolution issue was detected and pager duty was activated.
   - Continuous calls to the hotline and monitoring of the provider’s status page helped confirm that the provider was facing a widespread outage.

2. **Provider Communication and Failover Preparation:**
   - At 08:20, an email was sent to support@metanet.ch, which finally elicited a response by 08:20 confirming that the DNS service was restored.
   - Subsequent tests at 08:30 confirmed that DNS was functioning normally.
   - A public update was shared via Slack and Twitter at 08:40 informing users of recovery.

**Detection:**  
The issue was first detected at 04:34 via our monitoring system, which flagged DNS resolution problems. The first node’s inability to resolve DNS triggered a pager duty alert. Despite multiple communication attempts with the DNS provider, confirmation of recovery only came after several hours, highlighting a need for better communication channels with our provider.

**Action Items:**

| Action Item                                                               | Owner  | State       |
| ------------------------------------------------------------------------- | ------ | ----------- |
| Implement dual DNS provider configuration                                 | Lukas  | IN PROGRESS |
| Update SDK to allow for dynamic DNS failover configurations               | Isacco | IN PROGRESS |
| Develop a public status page for real-time outage information             | Lukas  | PLANNED     |
| Review and improve internal escalation procedures for third-party outages | Lukas  | COMPLETE    |

## Conclusion

This incident demonstrated that reliance on a single DNS provider can bring down all connected services. The DNS outage not only impacted our availability but also delayed communication with the provider, exacerbating the downtime. Although recovery was achieved within a few hours, the incident underlines the need for redundant DNS providers and improved alerting mechanisms. The learning from this incident will drive changes in our infrastructure to better handle similar future events.

## Learnings

- **Redundancy is Key:**  
  Relying on a single DNS provider creates a single point of failure. We must implement dual DNS provider support to ensure continuous service availability even if one provider fails.

- **Communication Channels:**  
  We need robust and reliable communication channels with our DNS provider, including a public status page and better support responsiveness to quickly determine the nature of issues.

- **SDK and Failover Mechanisms:**  
  Future updates should include dynamic failover logic in our SDK, so that even if one provider fails, the system can automatically switch to an alternate DNS service with minimal disruption.

## Timeline

- **04:34:** DNS resolution problem detected on the first node → Pager Duty alert raised.
- **04:40:** Engineer assigned to the case begins initial investigation.
- **04:50:** Preliminary diagnostics suggest DNS issues; contact made with DNS provider.
- **04:52:** Confirmation that the DNS provider is experiencing an outage.
- **04:55:** Hotline called; phone line is non-responsive.
- **05:00:** Provider’s status page is confirmed down.
- **05:05:** Attempted contact via the provider’s ticket system fails as it is unresponsive.
- **05:10:** An email is sent to support@metanet.ch with no immediate autoresponse.
- **05:20:** Team explores alternative resolution options.
- **05:30:** Continued attempts to contact provider hotline.
- **08:20:** Response received via email; provider confirms that DNS service has been restored.
- **08:30:** Initial tests show positive DNS resolution across all nodes.
- **08:40:** Update posted on Slack and Twitter confirming service recovery.
