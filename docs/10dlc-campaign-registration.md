# 10DLC / A2P Campaign Registration — Ryan Law LLC

Reference sheet for the carrier campaign application. The website satisfies part of
the requirement; the items below are submitted separately in the registration form.

**Not legal advice.** Carrier requirements change and vary by aggregator. James (or
another licensed attorney) should confirm this before submission.

---

## 1. Business identity

These must match **exactly** across the website, the opt-in form, and the campaign
application. Any mismatch is a common rejection reason.

| Field | Value |
| --- | --- |
| Legal business name | Ryan Law LLC |
| DBA / brand name | Ryan Law LLC |
| EIN | **⚠️ NEEDED — not recorded anywhere in the site or repo** |
| Business address | 16a Bel Air South Pkwy, Bel Air, MD 21015 |
| Website | https://www.ryanlaw.us |
| Support email | james@ryanlaw.us |
| Support phone | (917) 576-4324 |
| Vertical / industry | Professional Services — Legal |
| Entity type | Private LLC |

The EIN must be the one on the firm's IRS filings, and the legal name must match the
IRS record character-for-character (including "LLC" formatting). Carriers verify this
against third-party business registries.

---

## 2. Campaign use case description

Submit as the campaign description. Written to state who opted in, what they receive,
and how they stop — the three things reviewers look for.

> Ryan Law LLC is a criminal defense and DUI law firm in Bel Air, Maryland. We send
> SMS messages only to existing clients and to prospective clients who have
> voluntarily submitted their mobile number through the contact form on
> www.ryanlaw.us, or provided it directly to the firm by phone or in person, and who
> have affirmatively checked the SMS consent box at the time of submission.
>
> Messages are transactional and relate to the recipient's own legal matter:
> appointment scheduling and reminders, court date reminders, case status updates,
> requests for documents or information needed for their case, billing notifications,
> and responses to questions the recipient has asked the firm. We do not send
> marketing, promotional, or advertising messages, and we do not message purchased,
> rented, or third-party lead lists.
>
> Consent is not a condition of receiving legal services. Every recipient may opt out
> at any time by replying STOP, and may reply HELP for assistance. Opt-in data is
> never shared with third parties for marketing purposes.

**Opt-in method (select on the form):** Web form + verbal/in-person consent.

**Opt-in description:**

> The contact form at www.ryanlaw.us includes an unchecked consent checkbox reading:
> "I agree to receive SMS text messages from Ryan Law LLC regarding my legal matter,
> including appointment reminders and case updates. Message frequency varies. Message
> and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a
> condition of legal representation. See our Privacy Policy and Terms of Service."
> The checkbox is not pre-checked and is not required to submit the form. Clients who
> provide their number by phone or in person are read the same disclosure and their
> consent is recorded in the firm's case management system.

---

## 3. Sample message templates

Submit at least 2–3. These match the use case above — all transactional, all
identifying the sender, and the required opt-out language is present.

**Sample 1 — appointment reminder**

> Ryan Law LLC: Reminder of your consultation with attorney James Ryan on {date} at
> {time} at 16a Bel Air South Pkwy, Bel Air, MD. Reply STOP to opt out, HELP for help.

**Sample 2 — court date reminder**

> Ryan Law LLC: Your court date for case {case_number} is scheduled for {date} at
> {time} at {courthouse}. Please arrive 30 minutes early. Reply STOP to opt out, HELP
> for help.

**Sample 3 — document / information request**

> Ryan Law LLC: We need one additional document to move your case forward. Please
> reply or call (917) 576-4324 at your convenience. Reply STOP to opt out, HELP for
> help.

**Sample 4 — inquiry response**

> Ryan Law LLC: Thank you for contacting our office. Attorney James Ryan has received
> your request and will follow up within one business day. Reply STOP to opt out,
> HELP for help.

**Required auto-replies** (configured in the messaging platform, not the website):

- **HELP reply:** `Ryan Law LLC: For help, call (917) 576-4324 or email james@ryanlaw.us. Msg & data rates may apply. Reply STOP to unsubscribe.`
- **STOP reply:** `Ryan Law LLC: You have been unsubscribed and will receive no further messages. Reply HELP for help.`

Template rules that cause rejections: every sample must name the sender ("Ryan Law
LLC"), at least one must carry the full opt-out language, and no sample may contain a
public URL shortener (bit.ly, tinyurl) — use the full domain or a branded link.

---

## 4. Website compliance checklist

| Requirement | Status |
| --- | --- |
| Privacy Policy page exists, with SMS section and non-sharing clause | ✅ `/privacy-policy` |
| Terms of Service page exists, with SMS program terms | ✅ `/terms-of-service` |
| Both linked from footer on every page | ✅ shared `Footer` + Portal footer |
| Pages publicly reachable on ryanlaw.us | ❌ **domain serves a broken WordPress install (HTTP 500)** |
| Opt-in form links to both policies | ❌ set in the CaseClimb form builder |
| Opt-in consent checkbox, unchecked by default | ❌ set in the CaseClimb form builder |
| Business name / address consistent site-wide | ✅ |
| Phone number consistent site-wide | ⚠️ three numbers in use — see below |

**Phone numbers currently on the site:**

- `(443) 348-0434` — `CLIENT_INFO.phone`, the Bel Air click-to-call CTAs and footer
- `(917) 576-4324` — legal pages (`SMS_CONTACT`) and several SEO meta descriptions
- `(202) 519-1935` — the Washington, D.C. office

Reviewers compare the support number in the application against the website. Decide
which single number is the firm's registered support line and make the site agree.
