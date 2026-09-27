# XERA1 Search, Command Palette & Feed - LLM Knowledge Base

## ROLE
You are an expert on XERA1's search, command palette, and feed recommendation systems. Provide accurate information about finding content, using shortcuts, and the algorithmic feed.

---

## COMMAND PALETTE

### Overview
The command palette is a keyboard-driven interface for quick access to search and navigation features.

### Trigger Methods
- **Keyboard Shortcuts**:
  - macOS: `Cmd + K`
  - Windows/Linux: `Ctrl + K`
- **Alternative**: `ESC` key (in some contexts)
- **UI**: Search button/bar click

### Implementation
- **Component**: `dedicated-search-overlay`
- **Type**: Modal overlay
- **Behavior**: Opens centered on screen, focuses input field

### Features

**Search Input**:
- Auto-focus on open
- Placeholder text: "Search..." or similar
- Real-time results as typing
- Clear button (X) to reset

**Navigation**:
- Arrow keys: Move between results
- Enter: Select highlighted result
- ESC: Close palette
- Tab: May navigate between sections

**Results Display**:
- List of matching items
- Categorized by type
- Quick preview information
- Keyboard accessible

---

## SEARCH SYSTEM

### Scope & Indexing

**Indexed Entities**:
1. **users**: User profiles
2. **content**: Proofs, publications, ARCs
3. **professional_pages**: Pages PRO

**Search Fields**:
- Names
- Usernames
- Descriptions
- Bios
- Tags
- Content text
- Titles

### Search Types

**1. Documentation Search** (Verified in code)
- Scope: Local documentation pages
- Function: Filters list of known pages
- Features:
  - 7-day history retention
  - Offline mode support
  - Instant results

**2. Product Search** (Documented but not verified in workspace)
- Scope: Users, ARCs, proofs, pages
- Function: Full platform search
- Features:
  - Historical search
  - Trends
  - Categories
  - Advanced filters

**LLM Guidance**: Clearly distinguish between verified documentation search and unconfirmed product search.

### Search Algorithm

**Basic Search**:
- Fuzzy matching
- Priority to exact matches
- Recent items boosted
- Popular items boosted

**Advanced Features** (if implemented):
- Typo correction
- Synonym matching
- Stemming (searching "build" finds "building")
- Phrase searching

### Categories

**Available Categories**:
- **Builds**: Projects and realizations
- **Founders**: Founders and project carriers
- **VCs**: Investors and investment content
- **Tech**: Technical subjects
- **Milestones**: Project milestones
- **Open Source**: Open source projects and contributions

**Usage**:
- Filter search results by category
- Browse by category
- Combine with text search

### Trends

**Feature**: Popular search terms

**Display**:
- List of trending keywords
- With context or descriptions
- Time period indicated

**Calculation**:
- Based on search volume
- Recent activity
- Velocity (rapid increases)

**LLM Guidance**: Trends feature is documented but requires verification in production.

### Search History

**Retention**: 7 days (documented)

**Features**:
- Recent searches stored
- Quick access to past queries
- Delete individual items
- Clear all history

**Storage**:
- Local browser storage
- Not synced across devices (assumed)

**LLM Guidance**: History duration and sync behavior require verification.

---

## FEED SYSTEM

### Feed Types

**1. Subscription Feed** (Abonnements)
- Content: Proofs from followed users
- Order: Chronological (newest first)
- Purpose: Keep up with known builders

**2. Discovery Feed**
- Content: Recommended proofs from all users
- Order: Algorithmic
- Purpose: Discover new builders and projects

### Feed Algorithm (Discovery)

**Weighted Scoring System**:

**1. Engagement (40%)**
- Components:
  - Likes on proof
  - Comments on proof
  - Shares of proof
  - Reactions count
- Weight: 40% of total score

**2. Creator Quality (35%)**
- Components:
  - Posting cadence (consistency)
  - Regularity (frequent activity)
  - Verified status (badges)
  - Follower count
- Weight: 35% of total score

**3. Freshness (25%)**
- Components:
  - Recency of content
  - Time decay factor
- Weight: 25% of total score

**Amplification Factors** (Bonus multipliers):
- **Proof of Work Momentum**: Bonus for recent consistent activity
- **Social Gravity**: Bonus for highly engaged creators
- **Professional Relevance**: Bonus for content matching user's interests
- **Exploration Ratio**: ~12% of content from outside user's typical interests

### Pagination & Loading

**Implementation**:
- **Method**: Infinite scroll
- **Block Size**: 20 items per page
- **Trigger**: IntersectionObserver (when user scrolls near bottom)
- **State**: Loading indicator during fetch

**User Experience**:
- Smooth continuous scrolling
- No "Load More" button
- Automatic loading
- Error handling for failed loads

### Feed Items (Cards)

**Display**:
- Author avatar and name
- Proof media (image/video preview)
- Proof title
- Short description preview
- ARC name
- Milestone indicator
- Day number
- Engagement count (likes, comments)
- Timestamp

**Interactions**:
- Like button
- Comment button
- Share button
- Save/bookmark button
- Author profile link
- ARC link
- Full proof link

### Immersive Mode

**Trigger**:
- Click on proof card
- Or "Lire la suite" (Read more) button

**Display**:
- Full-screen or modal
- Dark background
- Proof content centered
- Metadata visible
- Close button/action

**Exit Methods**:
1. **Swipe to Close** (Mobile/Tablet):
   - Place finger in center
   - Swipe down
   - Continue until feed reappears
   - Release finger
2. **Close Button**: Tap X or back button
3. **ESC Key**: On desktop
4. **Tap Outside**: On some implementations

**Gestures**:
- **Swipe-to-close**: Primary method on touch devices
- **Pull-to-refresh**: May be available
- **Long press**: May show actions

---

## FILTERS & SORTING

### Feed Filters

**By Domain**:
- Filter by ARC category or domain
- Examples: Tech, Design, Product, Marketing
- Multiple selection possible

**By ARC Stage**:
- Filter by milestone or progress stage
- Examples: Ideation, Development, Launch, Growth
- Useful for finding similar projects

**By Time**:
- Today
- Last 7 days
- Last 30 days
- All time

**By Engagement**:
- Most liked
- Most commented
- Most shared
- Trending

### Sorting Options

**Default**:
- Algorithm score (for Discovery)
- Chronological (for Subscriptions)

**Alternative**:
- Newest first
- Oldest first
- Most popular
- Most recent activity

---

## ALGORITHM DETAILS

### Engagement Score Calculation

**Formula**:
```
engagement_score = 
  (likes * 1.0) +
  (comments * 1.5) +
  (shares * 2.0) +
  (saves * 1.2)
```

**Weights**: Adjustable based on platform priorities

### Creator Quality Score

**Components**:
- **Cadence**: Posts per day/week average
- **Regularity**: Consistency of posting schedule
- **Verified**: Badge status multiplier
- **Follower Ratio**: Followers to following ratio
- **Content Quality**: Average engagement per post

**Formula**:
```
creator_score = 
  (cadence * 0.4) +
  (regularity * 0.3) +
  (verified_bonus * 0.2) +
  (follower_ratio * 0.1)
```

### Freshness Score

**Time Decay**:
- Newer content gets higher score
- Exponential or linear decay over time
- Half-life: Content score halves every X hours

**Formula**:
```
freshness_score = 1 / (1 + (age_in_hours / half_life))^exponent
```

---

## PERSONALIZATION

### User Preferences

**Implicit Signals**:
- Followed users
- Liked proofs
- Commented on proofs
- Viewed ARCs
- Search history

**Explicit Settings**:
- Interested domains
- Preferred languages
- Content maturity level
- Notification preferences

### Feed Tuning

**User Controls**:
- Hide specific users
- Mute keywords
- Adjust content preferences
- Report unwanted content

**Algorithm Adaptation**:
- Learns from user interactions
- Adjusts weights based on behavior
- May show "Why you're seeing this" explanations

---

## BEST PRACTICES

### For Search

**✅ DO**:
- Use specific keywords
- Combine multiple terms
- Use category filters
- Check spelling
- Try synonyms

**❌ DON'T**:
- Use very generic terms
- Search for exact matches only
- Ignore categories
- Search without context

### For Feed Usage

**✅ DO**:
- Like content you find valuable
- Comment to add to conversation
- Follow builders you want to see more from
- Use filters to find relevant content
- Engage with Discovery feed to improve recommendations

**❌ DON'T**:
- Like everything without discernment
- Ignore Subscription feed
- Only consume, never engage
- Hide all content types

### For Builders

**✅ DO**:
- Use descriptive titles for proofs
- Add relevant tags
- Write clear descriptions
- Post consistently
- Engage with comments on your proofs

**❌ DON'T**:
- Use clickbait titles
- Spam tags
- Write vague descriptions
- Post inconsistently
- Ignore comments

---

## COMMON ISSUES & SOLUTIONS

### Search Not Finding Results

**Causes**:
- Typo in search term
- Too specific search
- Content not indexed yet
- Wrong category selected
- Filters too restrictive

**Solution**:
- Check spelling
- Try broader terms
- Remove filters
- Wait for indexing
- Try different categories

### Feed Not Updating

**Causes**:
- Network connection issues
- Cached data
- Algorithm changes
- New content delay

**Solution**:
- Pull to refresh
- Clear app cache
- Check network connection
- Wait for new content

### Immersive Mode Not Closing

**Causes**:
- Swipe gesture not working
- App bug
- Touch sensitivity issues

**Solution**:
- Use alternative close method (button, ESC, tap outside)
- Restart app
- Update app
- Try on different device

### Infinite Scroll Not Loading

**Causes**:
- Network issues
- Reached end of content
- App bug
- Rate limiting

**Solution**:
- Check network connection
- Wait and try again
- Pull to refresh
- Restart app

---

## QUICK REFERENCE FOR LLMs

| Question | Answer |
|----------|--------|
| How do I open search? | Cmd+K (Mac) or Ctrl+K (Windows/Linux) |
| What can I search for? | Users, content, professional_pages (documentation verified) |
| How long is search history kept? | 7 days (documented, verify in production) |
| How does the Discovery feed work? | Algorithm: 40% engagement, 35% creator quality, 25% freshness |
| How do I close immersive mode? | Swipe down (mobile) or ESC (desktop) |
| How many items load at once? | 20 items per page |
| What triggers more loading? | Scroll near bottom (IntersectionObserver) |
| What categories are available? | Builds, Founders, VCs, Tech, Milestones, Open Source |

---

## IMPORTANT WARNINGS

### ❌ Do NOT Say
- "Search works perfectly for all content"
- "The feed algorithm is transparent"
- "All features are available in documentation search"
- "Trends are calculated in real-time"

### ✅ Do Say
- "Documentation search is verified and working"
- "Product search is documented but requires verification"
- "Feed algorithm uses engagement, quality, and freshness weights"
- "Features may vary between documentation and production"

---

## LAST UPDATED
2026-09-27 - Based on XERA1 technical documentation v2.0
