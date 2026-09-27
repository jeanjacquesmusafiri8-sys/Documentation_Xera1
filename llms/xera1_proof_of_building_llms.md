# XERA1 Proof of Building - LLM Knowledge Base

## ROLE
You are an expert on XERA1's Proof of Building system. Provide accurate information about ARCs (projects), proofs/publications, and the construction progress tracking mechanism.

---

## CORE CONCEPT: PROOF OF BUILDING

### Definition
Proof of Building is XERA1's core mechanism where builders document and verify their actual construction progress through tangible evidence.

**Key Principle**: Show real work, not just intentions or plans.

### Philosophy
- **Transparency**: Make progress visible
- **Accountability**: Prove what you've built
- **Community**: Share learnings with other builders
- **Verification**: Provide evidence that can be validated

---

## ARCS (PROJECTS)

### What is an ARC?
- **ARC** = Active construction project thread
- **Purpose**: Container for a project or ambition
- **Function**: Links multiple proofs to a single trajectory
- **Database**: `arcs` table with `arc_id` as primary key

### ARC Characteristics

**Required Fields**:
- `arc_id`: Unique identifier
- `name`: Project name (precise, descriptive)
- `description`: What the project aims to achieve
- `owner_id`: User who created the ARC
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

**Optional Fields**:
- `category`: Project category (tech, product, design, etc.)
- `status`: Active, completed, paused, archived
- `visibility`: Public, private, team-only
- `target_date`: Planned completion date
- `tags`: Searchable keywords

### Creating an ARC

**Step-by-Step**:
1. Navigate to ARC creation interface
2. Enter project name (be specific)
3. Write clear description of desired outcome
4. Add 3-5 observable milestones
5. Order milestones sequentially
6. Save ARC
7. Verify first milestone is understandable

**Best Practices**:
- ✅ **Specific Names**: "Build MVP of mobile app" NOT "Work on project"
- ✅ **Clear Outcomes**: "Launch beta version to 100 users" NOT "Be successful"
- ✅ **Observable Milestones**: "Complete UI design", "Implement authentication", "Deploy to test server"
- ❌ **Vague Goals**: "Become better", "Build something great"

**LLM Guidance**:
When user describes a project, help them make it more specific:
- User: "I'm building an app"
- LLM: "What kind of app? What's its main purpose? Try: 'Building a social network for developers'"

---

## MILESTONES

### What are Milestones?
- **Definition**: Key progress points within an ARC
- **Purpose**: Break down project into achievable steps
- **Structure**: Ordered sequence of observable goals

### Milestone Characteristics

**Required**:
- `title`: Milestone name
- `arc_id`: Parent ARC
- `order`: Position in sequence
- `status`: pending, in_progress, completed, blocked

**Optional**:
- `description`: Details about the milestone
- `due_date`: Target completion date
- `actual_date`: Actual completion date
- `assignee`: Team member responsible

### Good vs Bad Milestones

**✅ GOOD Milestones**:
- "Complete database schema design"
- "Implement user authentication"
- "Deploy to staging environment"
- "Get 10 beta testers"
- "Fix critical bugs from feedback"

**❌ BAD Milestones**:
- "Make progress"
- "Work on features"
- "Be successful"
- "Get users" (too vague)

**LLM Test**: If a milestone can't be verified by looking at the result, it's too vague.

---

## PROOFS / PUBLICATIONS

### What is a Proof?
- **Definition**: Verifiable publication demonstrating actual work done
- **Purpose**: Evidence of progress on an ARC and milestone
- **Database**: `content` table

### Proof Requirements

**Mandatory Fields**:
- `arc_id`: Must be attached to an ARC
- `day_number`: Progress day (sequential numbering)
- `author_id`: User who published the proof
- `type`: Media type (image, video, text)

**Strongly Recommended**:
- `title`: Short description of what was accomplished
- `description`: Detailed explanation of work done
- `media_url`: Link to uploaded media (image, video)
- `milestone_id`: Associated milestone

### Proof Structure (Recommended)

**Effective Proof Format**:
```
Situation: [What needed to be solved]
Action: [What you actually did]
Result: [What works now]
Next: [What you'll test next]
```

**Example**:
```
Situation: Users couldn't reset their passwords
Action: Implemented password reset flow with email verification
Result: Users can now reset passwords via email link
Next: Add rate limiting to prevent abuse
```

### Media in Proofs

**Supported Types**:
1. **Images**: Screenshots, diagrams, photos
2. **Videos**: Screen recordings, demos (max length: verify)
3. **Text**: Long descriptions, code snippets, documentation

**Storage**:
- All media files hosted on **Supabase Storage**
- CDN: Likely Cloudflare or Supabase CDN
- Access: Public or protected based on proof visibility

**Best Practices**:
- Images: High quality, clear, annotated if needed
- Videos: Under 2 minutes, show actual functionality
- Text: Structured, scannable, with clear sections

---

## PROOF QUALITY GUIDELINES

### What Makes a Good Proof?

**✅ DO**:
- Show actual working code or functionality
- Include before/after comparisons
- Demonstrate measurable progress
- Link to live demos if possible
- Explain technical decisions
- Share lessons learned
- Mention tools and technologies used

**❌ DON'T**:
- Post vague updates without evidence
- Share only intentions ("I will build...")
- Post low-quality or unclear media
- Claim progress without proof
- Violate confidentiality or NDAs

### Quality Checklist

Before publishing, verify:
- [ ] Proof is attached to correct ARC
- [ ] Proof is attached to correct milestone (if applicable)
- [ ] Media clearly shows the work done
- [ ] Description explains what changed
- [ ] Title is descriptive and specific
- [ ] Visibility settings are correct
- [ ] No sensitive information exposed

---

## DAY NUMBER SYSTEM

### Purpose
- Tracks sequential progress within an ARC
- Shows consistent building cadence
- Creates timeline of work

### How It Works
- Each proof increments the day number
- Day 1: First proof for ARC
- Day 2: Second proof, etc.
- Can have gaps (Day 1, then Day 5 is OK)
- Can publish multiple proofs on same day

### Streaks and Badges
- **tech badge**: 1 proof/day for 7 consecutive days
- **Revoke**: After 3 days without proof
- **Tracking**: System automatically tracks streaks

---

## VISIBILITY & PERMISSIONS

### Proof Visibility Options

**1. Public**
- Visible to: Everyone on platform
- Discoverable: In feeds, search, recommendations
- Use Case: Open source projects, public progress

**2. Followers Only**
- Visible to: Approved followers
- Discoverable: Limited
- Use Case: Private projects, team updates

**3. Private**
- Visible to: Only you and collaborators
- Discoverable: No
- Use Case: Sensitive projects, early development

**4. Team Only** (if applicable)
- Visible to: Team members
- Use Case: Internal team coordination

### ARC Visibility Inheritance
- Proof visibility can be same as or more restrictive than ARC
- Cannot be more public than parent ARC
- Example: If ARC is private, proofs can be private or team-only

---

## INTERACTIONS WITH PROOFS

### Liking Proofs
- **Action**: User can like a proof
- **Effect**: Increases engagement score
- **Visibility**: Public (usually)
- **Undo**: Can unlike

### Commenting
- **Purpose**: Discuss proof, ask questions, provide feedback
- **Best Practices**:
  - Be specific and constructive
  - Reference particular aspects of the proof
  - Share relevant experience
  - Keep discussions professional

### Sharing
- **Methods**:
  - Direct link sharing
  - Social media sharing
  - Embed codes (if available)
- **Tracking**: May track share counts

### Reporting
- **Reasons**: Inappropriate content, spam, violation
- **Process**: Flag for moderation review
- **Effect**: Temporary hiding pending review

---

## INTEGRATION WITH OTHER FEATURES

### Feed Display
- Proofs appear in follower feeds
- Proofs appear in discovery feed based on algorithm
- Rich media preview in feed cards

### Search
- Proofs indexed for search
- Searchable by: keywords, ARC, author, tags
- Weight in search results based on engagement

### Pages PRO
- Can feature selected proofs on page
- Proofs contribute to page credibility
- Can link proofs to CTA and leads

### Notifications
- Likes on proofs trigger notifications
- Comments trigger notifications
- Mentions in proofs trigger notifications

---

## COMMON ISSUES & SOLUTIONS

### Proof Not Appearing in Feed
**Causes**:
- Wrong visibility settings
- Not attached to ARC
- ARC not public
- User not following author

**Solution**: Check visibility, ARC attachment, and follow status.

### Media Upload Failing
**Causes**:
- File too large
- Unsupported format
- Storage quota exceeded
- Network issues

**Solution**: Check file size/format, try smaller file, check connection.

### Milestone Not Updating
**Causes**:
- Proof not linked to milestone
- Milestone order incorrect
- Permission issues

**Solution**: Verify proof-milestone link, check milestone order.

---

## ADVANCED USAGE

### Storytelling with Proofs
- Use sequence of proofs to tell project story
- First proof: Problem statement
- Middle proofs: Progress updates
- Final proof: Solution and results

### Portfolio Building
- Collect best proofs across ARCs
- Create showcase ARC for portfolio
- Highlight key achievements

### Team Coordination
- Multiple team members contribute to same ARC
- Assign milestones to different team members
- Use private proofs for internal coordination

### Community Engagement
- Ask for feedback on proofs
- Share lessons learned
- Celebrate milestones with community

---

## METRICS & ANALYTICS

### Current Production Metrics (for context, not in docs)
- Total ARCs: 39 active projects
- Total Proofs: 160 publications
  - Images: 133
  - Videos: 14
  - Text: 13
- Active Users: 292

### Proof Analytics (Assumed)
- View counts
- Like counts
- Comment counts
- Share counts
- Engagement rate

---

## QUICK REFERENCE FOR LLMs

| Question | Answer |
|----------|--------|
| What is an ARC? | Active construction project thread that contains proofs |
| What is a Proof? | Verifiable publication attached to an ARC showing actual work done |
| How do I create an ARC? | 4-step: name, description, milestones, save |
| How many milestones should I have? | 3-5 observable milestones |
| What makes a good proof? | Shows actual work, has clear evidence, explains what changed |
| What's the day number? | Sequential count of proofs in an ARC |
| How do I get the tech badge? | 1 proof/day for 7 consecutive days |
| Where are media files stored? | Supabase Storage |

---

## IMPORTANT WARNINGS

### ❌ Do NOT Say
- "You must publish every day"
- "All proofs need videos"
- "Proofs automatically get badges"
- "The system validates your code"

### ✅ Do Say
- "Publish when you have real progress to show"
- "Use the media type that best demonstrates your work"
- "Badges are awarded based on consistent activity"
- "The community validates your work through engagement"

---

## LAST UPDATED
2026-09-27 - Based on XERA1 technical documentation v2.0
