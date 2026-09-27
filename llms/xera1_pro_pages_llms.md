# XERA1 Professional Pages (Pages PRO) - LLM Knowledge Base

## ROLE
You are an expert on XERA1's Professional Pages system. Provide accurate information about creating, managing, and optimizing Pages PRO for businesses, teams, and brands.

---

## WHAT ARE PAGES PRO?

### Definition
Pages PRO are professional profiles for entities beyond individual users:
- **Companies**
- **Startups**
- **Teams**
- **Studios**
- **Communities**
- **Brands**
- **Agencies**

### Purpose
Pages PRO serve to:
1. **Present**: Explain company offer and value proposition
2. **Showcase**: Display proofs of work and achievements
3. **Convert**: Capture leads and drive actions
4. **Organize**: Manage team and professional relationships
5. **Verify**: Build credibility and trust

### Key Difference from Personal Profile

| Aspect | Personal Profile | Page PRO |
|--------|----------------|---------|
| Represents | Individual | Organization/Team |
| Purpose | Personal brand | Professional presence |
| Management | One person | Multiple admins |
| CTA | Personal | Business-focused |
| Use Case | Personal projects | Company projects, services |

---

## CREATING A PAGE PRO

### Prerequisites
- Personal XERA1 account
- Verified email
- Clear purpose for the page

### Step-by-Step Creation

**Step 1: Initiate Creation**
- Navigate to Page PRO creation interface
- Click "Create Page PRO" or similar
- Confirm you want to create an organizational page

**Step 2: Choose Type**
Options:
- **Enterprise/Company**: For established businesses
- **Startup**: For early-stage ventures
- **Team**: For collaborative groups
- **Studio**: For creative/design agencies
- **Community**: For user groups, networks
- **Brand**: For product or service brands
- **Other**: Custom type

**Step 3: Basic Information**
- **Name**: Official name (must be unique)
- **Slug**: URL identifier (auto-generated or custom)
- **Bio**: Short description (1-2 sentences)
- **Description**: Detailed explanation of what the organization does

**Step 4: Visual Identity**
- **Logo**: Square image, high resolution
- **Banner**: Wide header image
- **Color Scheme**: Primary and secondary colors

**Step 5: Contact Information**
- **Website**: Primary URL
- **GitHub**: Code repository (if applicable)
- **Discord**: Community server (if applicable)
- **Other Links**: Social media, documentation, etc.

**Step 6: Professional Details**
- **Industry**: Sector or category
- **Location**: Physical or virtual
- **Founded**: Date established
- **Size**: Team size or range

**Step 7: Review & Publish**
- Preview how page will appear
- Verify all information is correct
- Choose initial visibility
- Publish page

---

## PAGE PRO COMPONENTS

### Editor Interface
**Implementation**: `js/pro-settings-component.js`

**Editable Fields**:
- Name
- Slug
- Bio
- Description
- Industry
- Location
- Logo
- Banner
- Social links
- Team members
- Visibility settings

### Public View

**Sections**:
1. **Header**: Logo, name, bio, CTA button
2. **About**: Description, industry, location, founded
3. **Links**: Website, GitHub, Discord, social
4. **Proofs**: Featured ARCs and proofs
5. **Team**: Members with roles
6. **CTA**: Primary call-to-action
7. **Leads**: Contact form (if applicable)

---

## CALL-TO-ACTION (CTA) SYSTEM

### Overview
CTAs are the primary conversion mechanism for Pages PRO. Each page can have ONE primary CTA that drives user action.

### CTA Types

**1. URL (Web Link)**
- **Purpose**: Redirect to external website
- **Fields**:
  - Label: Button text (e.g., "Visit Website", "Learn More")
  - URL: Destination link
  - Target: New tab (recommended)
- **Validation**: URL must be valid, HTTPS recommended
- **Use Case**: Main website, product page, portfolio

**2. Phone**
- **Purpose**: Phone call or SMS
- **Fields**:
  - Label: Button text (e.g., "Call Us", "Text Us")
  - Phone Number: International format
  - Type: Call or SMS
- **Validation**: Valid phone format
- **Use Case**: Direct contact, sales inquiries

**3. Email**
- **Purpose**: Lead capture via email
- **Fields**:
  - Label: Button text (e.g., "Contact Us", "Get in Touch")
  - Email: Destination address
  - Subject: Pre-filled subject line
  - Body: Pre-filled message template
- **Validation**: Valid email format
- **Data Storage**: Leads saved to `professional_cta_leads` table
- **Use Case**: Inquiries, support, partnership requests

### CTA Best Practices

**✅ DO**:
- Use clear, action-oriented text
- Make CTA prominent and visible
- Test the CTA link regularly
- Align CTA with business goal
- Use one primary CTA per page

**❌ DON'T**:
- Use generic text like "Click Here"
- Have multiple conflicting CTAs
- Link to broken or outdated URLs
- Make CTA hard to find
- Change CTA too frequently

### CTA Examples

| Business Type | CTA Text | CTA Type | Destination |
|--------------|----------|----------|-------------|
| SaaS Startup | Book a Demo | URL | Calendly link |
| Design Agency | View Portfolio | URL | Website |
| Consulting | Get Free Consultation | Email | contact@company.com |
| E-commerce | Shop Now | URL | Online store |
| Recruitment | Join Our Team | URL | Careers page |

---

## LEAD CAPTURE SYSTEM

### How It Works

**Form Submission**:
1. User clicks CTA button
2. Form appears (if email CTA)
3. User fills contact information
4. User submits form
5. Lead data saved to database
6. Notification sent to page admins

**Database Table**: `professional_cta_leads`

**Lead Fields**:
- `lead_id`: Unique identifier
- `page_id`: Associated Page PRO
- `name`: Contact name
- `email`: Contact email
- `message`: User message
- `source`: How lead was captured (CTA type)
- `created_at`: Timestamp
- `status`: New, contacted, converted, dismissed

### Lead Management

**For Page Admins**:
- View all leads in dashboard
- Filter by status
- Export lead data
- Mark leads as contacted
- Add notes to leads

**Notifcations**:
- Email notification on new lead
- In-app notification
- Digest emails (if configured)

---

## TEAM MANAGEMENT

### Adding Team Members

**Process**:
1. Navigate to team management
2. Click "Add Member"
3. Enter member's XERA1 username or email
4. Select role (see below)
5. Send invitation
6. Member accepts invitation
7. Member appears on page

**Roles & Permissions**:

**1. Owner**
- Permissions: Full control
- Limits: One per page
- Can: Manage all settings, add/remove members, delete page
- Cannot: Be removed by others

**2. Admin**
- Permissions: Manage most settings
- Can: Edit page info, manage CTAs, manage team (except owner)
- Cannot: Delete page, change owner

**3. Editor**
- Permissions: Content management
- Can: Create proofs, edit descriptions, manage media
- Cannot: Change settings, manage team

**4. Member**
- Permissions: Basic participation
- Can: View page, contribute proofs (with approval)
- Cannot: Edit settings, manage content

**Implementation**: `partner_page_memberships` table

### Team Display

**Public Visibility**:
- Owner and Admins: Always visible
- Editors and Members: Optional visibility
- Display: Name, role, avatar

**Ordering**:
- Typically: Owner first, then Admins, then others
- Can be customized

---

## FEATURED PROOFS & ARCS

### Selecting Featured Content

**Process**:
1. Navigate to page settings
2. Select "Featured Proofs" or "Featured ARCs"
3. Choose from organization's proofs
4. Arrange in preferred order
5. Save selection

**Display**:
- Showcases on page header
- Grid or carousel format
- Clickable to view full proof

**Best Practices**:
- Feature most impressive or recent work
- Show variety of project types
- Update regularly
- Include descriptions

### Milestones Display

**Purpose**: Show key achievements

**Options**:
- Automatic: Latest milestones from ARCs
- Manual: Curated selection
- Mixed: Combination of both

**Display**:
- Timeline format
- With dates and descriptions
- Linked to proofs

---

## VERIFICATION & BADGES

### Page Verification

**Status**: Manual verification process

**Criteria** (to be confirmed):
- Active presence on platform
- Valid proofs of work
- Complete profile information
- No policy violations
- Verified domain ownership (if applicable)

**Badge**: Verified checkmark on page

### Team Member Badges

**Types**:
- `verified_gold`: Pro/Elite plan members
- `verified`: Standard/Medium plan members
- `creator`: Content creators
- `staff`: Platform staff
- `page`: Page PRO admins

**Assignment**: Via `verification_requests` table

---

## VISIBILITY & PRIVACY

### Page Visibility Options

**1. Public**
- Visible to: Everyone
- Discoverable: In search, directories, recommendations
- Use Case: Most businesses, public organizations

**2. Followers Only**
- Visible to: Approved followers
- Discoverable: Limited
- Use Case: Private organizations, selective audience

**3. Invitation Only** (if available)
- Visible to: Invited users only
- Use Case: Very private organizations

### Content Visibility Inheritance
- Page visibility sets baseline
- Individual proofs can be more restrictive
- Cannot be more public than page

---

## INTEGRATION WITH MESSAGING

### Message as Page PRO

**For Admins**:
- Can send messages as the page
- Messages appear from page identity
- Can manage conversations

**Process**:
1. Open messaging interface
2. Select Page PRO identity
3. Compose message
4. Send as page

**Display**:
- Shows page logo and name
- Clear indication it's from page, not personal

### Contact via Page PRO

**For Users**:
- Can message Page PRO
- Message goes to page inbox
- Any admin can respond

**Process**:
1. Visit Page PRO
2. Click "Message" button
3. Compose message
4. Send to page

---

## ANALYTICS & INSIGHTS

### Available Metrics

**Page Level**:
- Views: Total page visits
- Followers: Number of followers
- Engagement: Likes, comments, shares on page content
- CTA Clicks: Number of CTA button clicks
- Lead Conversions: Number of form submissions

**Proof Level**:
- Views per proof
- Engagement per proof
- Most popular proofs

**Team Level**:
- Member activity
- Proof contributions by member
- Engagement by member

### Dashboard

**Features**:
- Overview statistics
- Time-series charts
- Top content
- Team activity
- Lead tracking

---

## BEST PRACTICES

### Profile Optimization

**✅ DO**:
- Use high-quality logo and banner
- Write clear, benefit-focused description
- Include all relevant links
- Feature best work prominently
- Keep information up to date
- Respond to messages promptly
- Engage with comments on proofs

**❌ DON'T**:
- Leave fields blank
- Use low-resolution images
- Have broken links
- Feature outdated work
- Ignore messages or comments

### Content Strategy

**1. Regular Proofs**
- Publish consistent updates
- Show work in progress
- Celebrate milestones
- Share lessons learned

**2. Featured Content**
- Highlight most impressive work
- Show variety of projects
- Update regularly
- Include clear descriptions

**3. Team Showcase**
- Add all team members
- Show roles and responsibilities
- Highlight individual contributions
- Keep team updated

### CTA Optimization

**1. Primary CTA**
- Choose one main goal
- Make it prominent
- Test regularly
- Align with business objectives

**2. Supporting CTAs**
- Use secondary links
- Include in description
- Add to proofs
- Direct to relevant pages

---

## COMMON ISSUES & SOLUTIONS

### Page Not Visible
**Causes**:
- Page not published
- Wrong visibility settings
- Incomplete setup

**Solution**: Check publish status, visibility settings, complete all required fields.

### CTA Not Working
**Causes**:
- Invalid URL
- Form not configured
- Permission issues

**Solution**: Verify CTA configuration, test link, check permissions.

### Team Member Not Appearing
**Causes**:
- Invitation not accepted
- Wrong role assigned
- Visibility settings

**Solution**: Check invitation status, verify role, check visibility.

### Leads Not Captured
**Causes**:
- Form not connected to database
- Email notifications disabled
- Storage issues

**Solution**: Verify database connection, check notification settings.

---

## QUICK REFERENCE FOR LLMs

| Question | Answer |
|----------|--------|
| What is a Page PRO? | Professional page for organizations, teams, brands |
| Who can create a Page PRO? | Any XERA1 user with verified account |
| How many CTAs can a page have? | One primary CTA |
| What CTA types are available? | URL, Phone, Email |
| Where are leads stored? | professional_cta_leads table |
| Can multiple people manage a page? | Yes, with different roles |
| What's the owner role? | Full control, one per page |
| Can team members be hidden? | Yes, visibility can be controlled |
| How do I message as a page? | Select page identity in messaging |

---

## IMPORTANT WARNINGS

### ❌ Do NOT Say
- "Pages PRO are free for everyone"
- "You can have unlimited team members"
- "All features are available immediately"
- "Pages are automatically verified"

### ✅ Do Say
- "Pages PRO are for professional organizations"
- "Team size limits may apply based on plan"
- "Some features may require verification"
- "Verification is a manual process"

---

## LAST UPDATED
2026-09-27 - Based on XERA1 technical documentation v2.0
