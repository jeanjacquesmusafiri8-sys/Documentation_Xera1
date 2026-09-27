# XERA1 C2PA, Badges & Security - LLM Knowledge Base

## ROLE
You are an expert on XERA1's C2PA verification, badge system, and security features. Provide accurate, nuanced information about media provenance, trust signals, and platform security.

---

## C2PA (CONTENT AUTHENTICITY INITIATIVE)

### Overview
C2PA is an industry standard for attaching cryptographically verifiable provenance information to media files. XERA1 implements C2PA to help verify the authenticity and history of media content.

### Implementation in XERA1

**Files**:
- `js/c2pa-utils.js`: Core C2PA functionality
- `c2pa-badge`: Component displaying C2PA status
- `xera-c2pa-modal`: Modal for detailed C2PA information

**Capabilities**:
- C2PA metadata detection
- Provenance verification
- IA tool detection
- Media history display

### Detected IA Tools

**Confirmed Tools**:
- Adobe Firefly
- Midjourney
- OpenAI (DALL-E, etc.)
- Others: Stable Diffusion, Runway, etc. (likely)

**Detection Method**:
- C2PA metadata in file
- File properties and signatures
- Pattern recognition
- Model fingerprints (if implemented)

### What C2PA Proves

**✅ C2PA CAN Prove**:
- File was created or edited with specific tools
- Chain of edits and modifications
- Timestamp of creation/edits
- Creator information (if embedded)
- Technical provenance of the file

**❌ C2PA CANNOT Prove**:
- The content is "true" or "real" in all contexts
- The creator's intent or honesty
- The content wasn't generated elsewhere and re-exported
- The semantic meaning of the content
- The ethical or legal status of the content

### C2PA Display in XERA1

**Badge**:
- Visual indicator on media
- Shows verification status
- Click/tap to see details

**Modal**:
- Detailed provenance information
- Edit history
- Tool information
- Creator information
- Timestamps

**Information Shown**:
- Creation date
- Editing tools used
- Modification history
- Creator/author
- Hash/signature verification

---

## BADGE SYSTEM

### Badge Types

**1. Automatic Badges**

**"tech" Badge**
- **Requirement**: 1 proof/post per day for 7 consecutive days
- **Revocation**: After 3 days without posting
- **Purpose**: Reward consistent builders
- **Display**: On profile, next to name
- **Verification**: Automatic by system

**2. Subscription-Based Badges**

**verified_gold Badge**
- **Requirement**: Pro or Elite plan subscription
- **Purpose**: Indicate premium status
- **Display**: Gold checkmark or similar
- **Verification**: Payment verification

**verified Badge**
- **Requirement**: Standard or Medium plan subscription
- **Purpose**: Indicate verified status
- **Display**: Blue checkmark or similar
- **Verification**: Payment verification

**3. Manual Badges**

**creator Badge**
- **Assignment**: Manual via `verification_requests`
- **Purpose**: Identify content creators
- **Verification**: Manual review by staff

**staff Badge**
- **Assignment**: Manual for platform staff
- **Purpose**: Identify XERA1 team members
- **Verification**: Internal assignment

**page Badge**
- **Assignment**: Manual for Page PRO admins
- **Purpose**: Identify page administrators
- **Verification**: Page ownership verification

### Badge Display

**Locations**:
- User profile header
- Next to usernames in feed
- On comments and proofs
- In search results

**Visuals**:
- Different colors for different types
- Hover/tooltip for details
- Click for more information

### Badge Limitations

**Important Notes**:
- Badges do NOT guarantee content quality
- Badges do NOT guarantee user identity
- Badges do NOT prevent bad behavior
- Badges can be revoked
- Badges may have expiration dates

**What Badges Mean**:
- **tech**: Consistent activity
- **verified_gold/verified**: Paid subscription
- **creator/staff/page**: Role on platform
- All: Some level of platform recognition

**What Badges DON'T Mean**:
- Endorsement by XERA1
- Guarantee of truthfulness
- Guarantee of expertise
- Permanent status

---

## SECURITY FEATURES

### Modération & Sécurité

**Implementation**:
- `user_blocks` table: User blocking system
- `feedback_inbox` table: User feedback and reports
- Live chat moderation: For real-time conversations
- `/api/report` endpoint: For reporting content (marked as not implemented in workspace)

### User Blocking

**Process**:
1. Open user profile or message
2. Select "Block User" option
3. Confirm action
4. User blocked

**Effects**:
- Cannot send messages to each other
- Cannot see each other's content
- Existing conversations hidden
- Notifications stopped
- Mutual: One-way blocking (A blocks B, but B can still see A until B blocks A)

**Database**: `user_blocks` table tracks blocked relationships

### Reporting System

**Report Types**:
- Inappropriate content
- Harassment
- Spam
- Scam/Phishing
- Policy violation
- Other

**Report Process**:
1. Open content or conversation
2. Select "Report" option
3. Choose category
4. Add context/description
5. Submit report

**After Reporting**:
- Content may be temporarily hidden
- Moderation team notified
- Investigation conducted
- Action taken if violation confirmed

**Actions**:
- Warning to user
- Temporary suspension
- Permanent ban
- Content removal

**Note**: `/api/report` endpoint is documented but marked as not implemented in current workspace. Reporting likely works in production but may use different implementation.

### Content Moderation

**Automatic Detection**:
- Spam patterns
- Suspicious links
- Rapid repeated content
- Known bad actors

**Manual Review**:
- Reported content
- Flagged users
- Appeals
- Complex cases

**LLM Guidance**: Moderation implementation details may vary between documentation and production.

### Rate Limiting

**Purpose**: Prevent abuse and ensure fair usage

**Likely Limits**:
- Messages per minute/hour
- Proofs per day
- Search queries
- API requests
- Follow actions

**Implementation**: Not specified in current documentation

**LLM Guidance**: Rate limiting is a standard security measure but specific limits are not confirmed.

---

## PROVENANCE & MEDIA TRANSPARENCY

### Media Information Display

**For All Media**:
- Upload date
- Uploader
- File type
- File size

**For C2PA Media**:
- Creation tool
- Creation date
- Edit history
- Signatures

**For IA-Generated**:
- `isAI` flag (if implemented)
- Tool used
- Model version
- Prompt (if available)

### isAI Flag

**Purpose**: Indicate media was generated or modified by AI

**Fields**:
- `isAI`: Boolean (true/false)
- `ai_tool`: Tool used
- `ai_model`: Model version
- `ai_prompt`: Original prompt (if available)
- `ai_editor`: Who declared/confirmed AI use

**Declaration**:
- Can be declared by uploader
- Can be detected automatically (via C2PA or other methods)
- Can be corrected by uploader

**LLM Guidance**: `isAI` implementation details require verification in production.

### Provenance Best Practices

**For Users**:
- Be transparent about media origins
- Declare AI use when applicable
- Keep original files when possible
- Document edit history

**For Viewers**:
- Check C2PA information when available
- Don't assume C2PA means "100% real"
- Consider context and other signals
- Ask for clarification if unsure

---

## TRUST & VERIFICATION

### Trust Signals

**1. Proof Quality**
- Clear evidence of work
- Detailed descriptions
- Verifiable results
- Consistent progress

**2. ARC Completeness**
- Clear milestones
- Regular updates
- Achievable goals
- Realistic timelines

**3. User History**
- Consistent activity
- Positive engagement
- Community respect
- Transparent communication

**4. Badges**
- Indicate certain achievements or status
- But should not be sole trust factor

### Trust Evaluation

**What to Consider**:
- Longevity on platform
- Quality of proofs
- Community feedback
- Transparency
- Consistency

**Red Flags**:
- No actual work shown
- Vague or impossible claims
- Negative community feedback
- Inconsistent information
- Rapid, low-quality posts

### Verification Requests

**Process**:
1. User requests verification
2. Submit evidence
3. Manual review by staff
4. Decision made
5. Badge assigned if approved

**Database**: `verification_requests` table

**LLM Guidance**: Verification criteria and process require confirmation from production team.

---

## COMMON QUESTIONS & ANSWERS

### About C2PA

**Q: Does C2PA mean the content is real?**
A: C2PA provides technical provenance information, but it doesn't guarantee the content is "real" in all contexts. It shows the file's history and creation tools, but you should still evaluate the content critically.

**Q: Can C2PA be faked?**
A: C2PA uses cryptographic signatures, making it very difficult to fake. However, sophisticated attackers might find ways. The system is designed to be highly reliable, but no system is 100% foolproof.

**Q: What if there's no C2PA information?**
A: Not all media has C2PA metadata. This doesn't mean the content is fake or AI-generated. It just means we don't have technical provenance information for that file.

**Q: Does XERA1 add C2PA to uploaded media?**
A: XERA1 can detect and display C2PA information if present in the file. It's unclear from current documentation if XERA1 adds its own C2PA signatures to media.

### About Badges

**Q: How do I get the tech badge?**
A: Post at least one proof per day for 7 consecutive days. The badge is automatically awarded and will be revoked if you go 3 days without posting.

**Q: Is the verified badge the same as tech badge?**
A: No. The verified badge (blue) is for Standard/Medium plan subscribers. The tech badge is for consistent builders. The verified_gold badge (gold) is for Pro/Elite subscribers.

**Q: Can I buy badges?**
A: Some badges require paid subscriptions (verified, verified_gold), but automatic badges like tech cannot be purchased - they must be earned.

**Q: Do badges expire?**
A: Subscription badges are active as long as you maintain the subscription. Automatic badges like tech can be revoked if you stop posting consistently.

### About Security

**Q: Can I block someone who messages me?**
A: Yes, you can block any user. This will prevent them from messaging you and hide their content from you.

**Q: How do I report inappropriate content?**
A: Open the content or conversation, select the "Report" option, choose a category, add any context, and submit. The moderation team will review it.

**Q: Are my messages private?**
A: Messages are stored securely, but it's not specified as end-to-end encrypted. Platform admins may have access for moderation purposes.

**Q: What happens when I report someone?**
A: The content is flagged for review, the moderation team investigates, and appropriate action is taken if a violation is confirmed. You typically won't be notified of the specific outcome for privacy reasons.

---

## IMPORTANT WARNINGS & DISCLAIMERS

### ❌ DO NOT Say
- "C2PA guarantees content is authentic"
- "Badges mean the user is trustworthy"
- "All security features are fully implemented"
- "Media without C2PA is fake"
- "XERA1 can detect all AI-generated content"

### ✅ DO Say
- "C2PA provides technical provenance information"
- "Badges indicate certain achievements or status on the platform"
- "Some security features may be limited in current version"
- "Media without C2PA simply lacks technical provenance data"
- "XERA1 uses various methods to detect AI content, but no system is perfect"

### Critical Disclaimers

1. **No Absolute Guarantees**: No badge, verification, or technical system can 100% guarantee content authenticity or user trustworthiness.

2. **Human Judgment Required**: Always use your own judgment when evaluating content and users.

3. **Limitations**: All systems have limitations and can potentially be circumvented by determined bad actors.

4. **Evolving**: Detection methods and security features are constantly evolving, and capabilities may change over time.

5. **Not Legal Advice**: Information provided by XERA1 about content provenance is for informational purposes only and not legal advice.

---

## QUICK REFERENCE FOR LLMs

| Question | Answer |
|----------|--------|
| What is C2PA? | Content Authenticity Initiative standard for media provenance |
| What tools does XERA1 detect? | Firefly, Midjourney, OpenAI, and others |
| What's the tech badge requirement? | 1 proof/day for 7 consecutive days |
| What's verified_gold badge for? | Pro/Elite plan subscribers |
| What's verified badge for? | Standard/Medium plan subscribers |
| What does isAI flag mean? | Media was generated or modified by AI |
| How do I report content? | Select Report, choose category, add context, submit |
| Can I block users? | Yes, via user_blocks system |

---

## LAST UPDATED
2026-09-27 - Based on XERA1 technical documentation v2.0
