---
title: Auto Responder
description: Documentation on the Email Acknowledgement Automation logic via Google Apps Script
hide_table_of_contents: true
sidebar_position: 1
---

# Email Acknowledgement Automation

## Overview
This Google Apps Script automatically responds to incoming unread emails in your Gmail inbox. It monitors for new messages and sends a pre-written response from a draft email, ensuring each sender receives only one automated reply.

You can find it here: [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Prerequisites
### 1. Enable Gmail API Access**

- Go to [Google Apps Script](https://script.google.com)
- Open your project (or create a new one)
- Click on the Services icon (⊕) in the left sidebar
- Find Gmail API and click Add

### 2. Gmail Settings**

Ensure your Gmail account has sufficient daily sending quota (typically 500 emails/day for regular Gmail, 2000/day for Google Workspace)

The script runs with your Google account permissions (no additional settings needed)

---

## Setup Instructions
### Step 1: Create Response Draft in Gmail

In Gmail, compose a new email draft with your auto-response message (supports HTML formatting and (URL-based) inline images)

**CRITICAL:**
- Set the subject line to exactly:
```E-Mail Response Automation Draft - DO NOT DELETE```

**IMPORTANT:**
- DO NOT SEND - Save as draft only
- Never delete this draft - the script requires it to function

### Step 2: Open Google Apps Script

Go to [Google Apps Script](https://script.google.com)

### Step 3: Configure Settings (Optional)
You can customize the CONFIG settings at the top of the script:

```javascript
const CONFIG = {
  DRAFT_SUBJECT: 'E-Mail Response Automation Draft - DO NOT DELETE',  // Draft subject (must match exactly)
  REPLY_SUBJECT: 'Re: ',                                              // Reply subject prefix
  MAX_EMAILS_PER_RUN: 50,                                             // Max emails processed per check
  CHECK_INTERVAL_MINUTES: 1,                                          // How often to check (in minutes)
  LABEL_NAME: 'AutoResponded'                                         // Label for processed emails
};
```

**Settings Explained:**
- DRAFT_SUBJECT: The exact subject of your response draft (don't change unless you change the draft)
- REPLY_SUBJECT: Prefix for replies (default "Re: " creates "Re: Original Subject")
- MAX_EMAILS_PER_RUN: Limits emails processed per check (prevents quota issues)
- CHECK_INTERVAL_MINUTES: Frequency of checks (1 = every minute, 5 = every 5 minutes, etc.)
- LABEL_NAME: Gmail label applied to processed emails (prevents duplicate responses)

### Step 4: Save the Script
Click the disk icon (💾) or press Ctrl+S / Cmd+S to save your changes.

<img width="1302" height="127" alt="save icon" src="https://github.com/user-attachments/assets/9f713499-f400-4042-8c1b-537d62180816" />

### Step 5: Set Up Automatic Trigger

In the function dropdown (top center), select "setupTrigger"
Click the Run button (▶️)

<img width="1223" height="141" alt="run function setup" src="https://github.com/user-attachments/assets/1fa2cedf-4218-4e49-bcb0-c0d7946974e2" />

On first run, authorize the script:

- Click "Review permissions"
- Select your Google account
- Click "Advanced" → "Go to [Project Name] (unsafe)"
- Click "Allow"

Check the execution log - you should see: "Trigger erfolgreich eingerichtet"

### Step 6: Verify Setup
The auto-responder is now active! It will:

- Check for unread emails every X minutes (as configured)
- Send your draft response to each new sender
- Apply the "AutoResponded" label to prevent duplicates
- Continue running automatically

---

## Workflow

Every X minutes (default: 1 minute), the script checks your inbox
Searches for unread emails without the "AutoResponded" label

For each new email:
- Reads the sender's address
- Sends your draft message as a reply
- Applies the "AutoResponded" label
- Logs the action

Prevents duplicates: Once labeled, the script won't respond again to that email

---

## Smart Features

- Inline Images: Supports embedded images in your draft - Only supports pictures if added via URL (e.g. [imgur](https://imgur.com) pictures)
- HTML Formatting: Preserves rich text formatting from your draft
- Thread-Safe: Works with email threads/conversations
- Duplicate Prevention: Uses Gmail labels to track responded emails
- Rate Limiting: Processes maximum 50 emails per run by default

---

## Managing the Auto-Responder
### Check if Trigger is Active

In Google Apps Script, click the clock icon (⏰) in the left sidebar
You should see "autoResponseToEmails" listed with its schedule

<img width="366" height="406" alt="trigger icon" src="https://github.com/user-attachments/assets/e68ba06e-6fba-4c1f-a721-9042d59b4796" />

### Temporarily Disable

Select "removeTrigger" from the function dropdown
Click Run (▶️)
Verify in execution log: "Trigger entfernt"

<img width="1227" height="137" alt="run function remove" src="https://github.com/user-attachments/assets/21a86e3f-8425-453f-9fb3-1490296bdf72" />

### Re-Enable

Select "setupTrigger" from the function dropdown
Click Run (▶️)

<img width="1223" height="141" alt="run function setup" src="https://github.com/user-attachments/assets/1fa2cedf-4218-4e49-bcb0-c0d7946974e2" />

### Update Response Message

Edit your draft in Gmail (the one with "E-Mail Response Automation Draft - DO NOT DELETE" subject)

Save changes - the script will automatically use the updated version

No need to restart the trigger

---

## Testing
1. Before setting up the trigger, test manually:
2. Send yourself a test email (from another account)
3. In Google Apps Script, select "autoResponseToEmails"
4. Click Run (▶️)
5. Check execution log for "Auto-Response gesendet an: [your-email]"
6. Verify you received the response
7. Check Processed Emails
    - In Gmail: Search for label "AutoResponded" to see all emails that received auto-responses

---

## Configuration Options
### Change Check Frequency
Modify CHECK_INTERVAL_MINUTES:

```
1 = Every minute (most responsive, uses more quota)
5 = Every 5 minutes (recommended for moderate volume)
15 = Every 15 minutes (for low volume)
60 = Every hour (minimal quota usage)
``` 

After changing, run setupTrigger again to apply.

### Customize Reply Subject

If: 'Re: ' → "Re: Original Subject" (default, won't work if it doesn't start with 'Re: ')

If: 'Thank you for your email!' → Uses this exact subject (change content as you wish)

### Adjust Max Emails Per Run
If you receive high email volume:

Increase MAX_EMAILS_PER_RUN to 100 or 200

Be mindful of Gmail's daily sending limits

---

## Troubleshooting
### "No Draft Found" Error

- Verify your draft's subject is exactly: E-Mail Response Automation Draft - DO NOT DELETE
- Check for extra spaces or typos
- Ensure the draft wasn't accidentally deleted

### No Responses Being Sent

- Check trigger is active (clock icon in script editor)
- Verify you have unread emails without "AutoResponded" label
- Check execution log for errors (View → Executions)
- Test manually with autoResponseToEmails function

### Duplicate Responses

- Shouldn't happen due to label system
- If it does, check that LABEL_NAME hasn't changed
- Verify the label is being applied (check in Gmail)

### Daily Sending Limit Reached

- Regular Gmail: 500 emails/day
- Google Workspace: 2,000 emails/day
- Reduce CHECK_INTERVAL_MINUTES or MAX_EMAILS_PER_RUN
- Consider upgrading to Google Workspace

### Images Not Appearing

- Ensure images are embedded in the draft using URL (not attached as files)
- Gmail sometimes blocks inline images - recipients may need to "Display images"

---

## Advanced Features
Mark Emails as Read (Optional)
Uncomment this line in the script:

```javascript
// latestMessage.markRead();
```
Remove the // to enable auto-marking as read.

---
Last updated: December 07, 2025

Version: 1.0