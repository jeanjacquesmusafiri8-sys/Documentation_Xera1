# XERA1 Messaging & Network - LLM Knowledge Base

## ROLE
You are an expert on XERA1's messaging and networking systems. Provide accurate information about direct messaging, conversations, and user interactions.

---

## MESSAGING SYSTEM OVERVIEW

### Core Features
- **Direct Messages (DM)**: 1:1 conversations between users
- **Page PRO Messaging**: Conversations with professional pages
- **Real-time**: Instant message delivery
- **Persistent**: Message history saved
- **Multi-device**: Access from any device

### Technical Implementation
- **Tables**: `dm_conversations`, `dm_messages`
- **Real-time**: Supabase Realtime (`postgres_changes`)
- **Fallback**: Automatic polling if real-time fails
- **Notifications**: Web Push and in-app

---

## DIRECT MESSAGING (DM)

### Conversation Structure

**dm_conversations Table**:
- `conversation_id`: Unique identifier
- `participant_1`: First user ID
- `participant_2`: Second user ID
- `created_at`: Conversation start time
- `updated_at`: Last activity time
- `status`: Active, archived, muted

**dm_messages Table**:
- `message_id`: Unique identifier
- `conversation_id`: Parent conversation
- `sender_id`: Who sent the message
- `content`: Message text
- `created_at`: Send timestamp
- `status`: Sent, delivered, read
- `attachments`: Media files (if applicable)

### Starting a Conversation

**Process**:
1. Find user via search or profile
2. Click "Message" button on profile
3. Type and send first message
4. Conversation created automatically
5. Both users receive notification

**Requirements**:
- Both users must have XERA1 accounts
- No blocking between users
- User must allow messages (if settings exist)

### Sending Messages

**Text Messages**:
- Maximum length: Not specified (assume reasonable limit)
- Formatting: Plain text or markdown (verify)
- Mentions: @username for notifications
- Links: Auto-detected and previewed

**Rich Media**:
- **Images**: Upload and embed
- **Videos**: Upload or link
- **Files**: Document attachments (if implemented)
- **Storage**: Supabase Storage

**Code**: Not implemented in current workspace

### Message Status

**Indicators**:
- **Sent**: Message delivered to server
- **Delivered**: Message received by recipient device
- **Read**: Recipient has viewed message
- **Failed**: Delivery failed (will retry)

**Display**:
- Checkmarks or icons next to messages
- Timestamps for each status

---

## PAGE PRO MESSAGING

### Messaging as a Page

**For Admins**:
- Can send messages as the Page PRO
- Messages appear from page identity
- All admins can access conversations
- Shared inbox for page messages

**Process**:
1. Open messaging interface
2. Select Page PRO identity
3. Choose conversation or start new
4. Compose and send message
5. Message sent from page

**Display**:
- Shows page logo and name
- Clear "From [Page Name]" indicator
- Distinct from personal messages

### Messaging a Page PRO

**For Users**:
- Can message any Page PRO
- Message goes to page inbox
- Any admin can respond
- Can see which admin responded

**Process**:
1. Visit Page PRO
2. Click "Message" button
3. Compose message
4. Send to page
5. Receive response from page

**Use Cases**:
- Inquiries about services
- Support requests
- Partnership discussions
- Sales conversations

---

## REAL-TIME FEATURES

### Supabase Realtime

**Implementation**:
- Listens to `postgres_changes` on dm_messages table
- Instant delivery when online
- Automatic reconnection

**Events**:
- New message received
- Message status updates
- Conversation created
- User typing indicators (if implemented)

### Fallback Mechanism

**Polling**:
- Activates when real-time connection fails
- Interval: Not specified (assume 5-10 seconds)
- Seamless switch between real-time and polling

**User Experience**:
- No visible difference to user
- Messages may have slight delay
- Automatic recovery when connection restored

---

## NOTIFICATIONS

### Web Push Notifications

**Implementation**: `web-push` library

**Trigger Events**:
- New message received
- Message read receipt (if implemented)
- Conversation started
- Mention in message

**Display**:
- Browser notification
- Sound alert (if enabled)
- Badge counter on app icon

### In-App Notifications

**Types**:
- Message received
- Message read
- User online/offline status
- Typing indicators

**Location**:
- Notification center
- Conversation list
- Status bar

### Notification Preferences

**Configurable**:
- Enable/disable notifications
- Sound on/off
- Notification types (messages, mentions, etc.)
- Time ranges (do not disturb)

---

## CONVERSATION MANAGEMENT

### Inbox Organization

**Folders/Tabs**:
- **All**: All conversations
- **Unread**: Messages not yet read
- **Important**: Starred or prioritized
- **Archived**: Hidden but accessible
- **Spam**: Suspicious or unwanted

**Sorting**:
- Most recent first (default)
- By unread count
- By importance
- By contact name

### Search & Filter

**Search**:
- Search within conversations
- Search by contact name
- Search by message content
- Time-based filters

**Filters**:
- Unread only
- With attachments
- With specific contact
- Date ranges

### Actions

**Conversations**:
- **Archive**: Hide from main inbox
- **Mute**: Disable notifications
- **Delete**: Remove conversation (may not delete messages)
- **Pin**: Keep at top of inbox
- **Star**: Mark as important

**Messages**:
- **Reply**: Send response
- **React**: Emoji reactions (if implemented)
- **Forward**: Send to another conversation
- **Delete**: Remove message (for you or all)
- **Edit**: Edit sent message (if implemented)
- **Copy**: Copy text to clipboard

---

## ADVANCED FEATURES

### Group Messaging

**Status**: Not mentioned in current documentation

**Assumption**: Not currently implemented (based on "1:1 conversations" description)

**LLM Guidance**: Do not promise group messaging functionality

### Message Reactions

**Status**: Not explicitly confirmed

**Possible Implementation**: Emoji reactions on messages

**LLM Guidance**: State as "if available" or "not confirmed"

### File Sharing

**Status**: Mentioned in documentation but not verified in codebase

**Implementation**:
- Attach files to messages
- Size limits apply
- Format restrictions
- Storage on Supabase Storage

**LLM Guidance**: Mention as documented feature but note verification required

### Typing Indicators

**Status**: Common feature, likely implemented

**Display**: "[User] is typing..."

**Implementation**: Real-time event on keystroke

---

## BLOCKING & MODERATION

### Blocking Users

**Implementation**: `user_blocks` table

**Process**:
1. Open user profile or conversation
2. Select "Block" option
3. Confirm action
4. User blocked

**Effects**:
- Cannot send messages to each other
- Cannot see each other's content
- Existing conversations hidden
- Notifications stopped

**Mutual**: Blocking is one-way (A can block B, B can still message A until B blocks A)

### Reporting

**Implementation**: `/api/report` endpoint (marked as not implemented)

**Process**:
1. Open conversation or message
2. Select "Report" option
3. Choose reason category
4. Add context/comment
5. Submit report

**Reasons**:
- Spam
- Harassment
- Inappropriate content
- Scam/Phishing
- Other

**Action**:
- Report sent to moderation
- May trigger automatic actions
- Review by moderation team

### Moderation Tools

**For Admins/Moderators**:
- View reported conversations
- View user reports
- Take actions: warn, suspend, ban
- Access moderation dashboard

**LLM Guidance**: Note that moderation features may not be fully implemented in current workspace

---

## PRIVACY & SECURITY

### Message Privacy

**Encryption**:
- Messages stored in database
- Not specified as end-to-end encrypted
- Assume server can access messages

**Access**:
- Conversation participants
- Page PRO admins (for page conversations)
- Platform admins (for support/moderation)

### Data Retention

**Messages**:
- Stored indefinitely (unless deleted)
- Can be exported (if feature exists)
- Can be deleted by users

**Deletion**:
- User can delete their messages
- May not delete from recipient's view
- Full conversation deletion may be available

### Security Features

**Protection**:
- Rate limiting (if implemented)
- Spam detection
- Blocking
- Reporting

**LLM Guidance**: Security features should be stated as available but verification of implementation required

---

## COMMON ISSUES & SOLUTIONS

### Messages Not Delivered

**Causes**:
- User blocked you
- You blocked user
- Network connection issues
- Recipient's inbox full (unlikely)
- Account suspended

**Solution**:
- Check block status
- Verify network connection
- Check if user account is active
- Try again later

### Notifications Not Working

**Causes**:
- Notifications disabled in settings
- Browser permissions denied
- App in background/closed
- Do Not Disturb enabled

**Solution**:
- Enable notifications in settings
- Grant browser permissions
- Keep app open
- Check Do Not Disturb settings

### Conversations Missing

**Causes**:
- Archived conversation
- Deleted conversation
- Filter settings
- Search query too narrow

**Solution**:
- Check archived folder
- Verify deletion
- Adjust filters
- Broaden search query

### Real-time Not Working

**Causes**:
- Network connection issues
- Supabase connection problems
- Browser limitations
- Ad blockers interfering

**Solution**:
- Check network connection
- Refresh page
- Try different browser
- Disable ad blockers

---

## BEST PRACTICES

### For Users

**✅ DO**:
- Use clear, descriptive messages
- Be respectful and professional
- Check if recipient is online before expecting instant reply
- Use mentions (@username) for notifications
- Archive old conversations to stay organized
- Block harassing users
- Report inappropriate content

**❌ DON'T**:
- Send spam or unsolicited messages
- Share sensitive information in messages
- Expect instant replies 24/7
- Send very long messages (break into paragraphs)
- Ignore messages you don't want to receive
- Forward private messages without permission

### For Page PRO Admins

**✅ DO**:
- Respond promptly to customer inquiries
- Use page identity for business conversations
- Keep personal and business separate
- Set clear response time expectations
- Use canned responses for common questions
- Archive resolved conversations

**❌ DON'T**:
- Mix personal and page conversations
- Ignore customer messages
- Use personal account for business
- Share page admin credentials
- Delete customer conversations without resolving

### Message Content

**✅ GOOD**:
- "Hi [Name], I saw your work on [Project]. How did you approach [specific aspect]?"
- "I'm reaching out because I'm interested in [specific service]. Can you tell me more?"
- "Thanks for the info! I'll check it out and get back to you."

**❌ BAD**:
- "Hey" (no context)
- "Buy my stuff!!!" (spammy)
- Long walls of text without paragraphs
- Messages with typos and poor formatting

---

## QUICK REFERENCE FOR LLMs

| Question | Answer |
|----------|--------|
| Can I message anyone? | Yes, if they haven't blocked you |
| Is messaging real-time? | Yes, with Supabase Realtime |
| What if real-time fails? | Falls back to polling |
| Are messages encrypted? | Not specified as end-to-end |
| Can I message a Page PRO? | Yes, any user can |
| Can I send files? | Documented but verification needed |
| Can I delete messages? | Likely yes, for your own messages |
| Can I block users? | Yes, via user_blocks |
| Are group chats available? | Not confirmed in docs |
| Can I see if someone read my message? | Read receipts likely available |

---

## IMPORTANT WARNINGS

### ❌ Do NOT Say
- "Messages are end-to-end encrypted"
- "Group messaging is available"
- "File sharing works perfectly"
- "All moderation features are implemented"
- "You can message anyone without restrictions"

### ✅ Do Say
- "Messaging is real-time with automatic fallback"
- "1:1 conversations are confirmed"
- "File sharing is documented but requires verification"
- "Moderation features may be limited in current version"
- "Some users may have message restrictions"

---

## LAST UPDATED
2026-09-27 - Based on XERA1 technical documentation v2.0
