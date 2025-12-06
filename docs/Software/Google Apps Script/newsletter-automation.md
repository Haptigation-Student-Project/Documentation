---
title: Newsletter Automation
description: Documentation on the Newsletter Automation logic via Google Apps Script
hide_table_of_contents: true
sidebar_position: 2
---

# Newsletter Automation

## Overview
This Google Apps Script automates the process of sending personalized newsletters via Gmail. It reads a draft email containing "Haptigation Newsletter" in the subject line and sends it to all contacts with a specific label, personalizing each email with the recipient's name.
Implementing it this way ensures data safety and allows for personalization in the newsletter.

You can find it here: [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Prerequisites
**1. Enable Gmail API Access**

- Go to https://script.google.com
- Open your project (or create a new one)
- Click on the Services icon (⊕) in the left sidebar
- Find Gmail API and click Add

**2. Enable People API**

- In the same Google Apps Script project
- Click on the Services icon (⊕) in the left sidebar
- Search for People API
- Click Add to enable it
- This allows the script to access your Gmail contacts and labels

**3. Gmail Settings (if needed)**

- Check if in your gmail account setting IMAP is enabled.
- Ensure that "Allow less secure apps" is NOT required for Google Apps Script (it runs with your Google account permissions)
- Make sure your Gmail account has sufficient daily sending quota (typically 500 emails/day for regular Gmail, 2000/day for Google Workspace)

---

## Setup Instructions
**Step 1:** Access Gmail and Google Apps Script

Open [Gmail](https://mail.google.com) and [Google Apps Script](https://script.google.com/home) for your account.

**Step 2:** Create Newsletter Draft in Gmail

In Gmail, create a new email draft containing your complete newsletter content
IMPORTANT: The subject line MUST include "Haptigation Newsletter" somewhere (e.g., "Haptigation Newsletter - December 2025")

Use [NAME] as a placeholder where you want the recipient's name to appear.

If users [NAME] is "" or "unbekannt" [NAME] will be replaced with "LeserIn" instead of the contact name. 

**DO NOT SEND - Save as draft only**

**Step 3:** Configure Settings

Replace the CONFIG variables with your actual values:

```javascript
const CONFIG = {
  contactLabel: "Newsletter Subscriber",  // The label of your newsletter contacts
  emailSubject: "{Enter your subject}",   // This replaces the draft's subject
  senderName: "{Your Name} von Company",  // Shows as "Max von Company via company@gmail.com"
  testMode: false  // Set to true for testing, false for live sending
};
```

**Step 4:** Save the Script
Click the disk icon (💾) or press Ctrl+S / Cmd+S to save your changes.

<img width="1227" height="134" alt="image" src="https://github.com/user-attachments/assets/d5c373b4-24ea-4bc5-aea0-cbb9c12048b4" />

**Step 5:** Run the Script

In the function dropdown (top center), select "sendNewsletter"
Click the Run button (▶️) to the left

<img width="1227" height="144" alt="image" src="https://github.com/user-attachments/assets/d0c9576f-31a4-489e-b2e4-4e1a9b0df6c7" />

On first run, you'll need to authorize the script:

Click "Review permissions"
Select your Google account
Click "Advanced" → "Go to [Project Name] (unsafe)"
Click "Allow"

**Step 6:** Reset Safety Settings
After successful sending:

Change testMode back to true
Change contactLabel back to "safetyFirst"
This prevents accidental sends

**Step 7:** Save Again
Click the disk icon (💾) or press Ctrl+S / Cmd+S to save your changes.

<img width="1227" height="134" alt="image" src="https://github.com/user-attachments/assets/d5c373b4-24ea-4bc5-aea0-cbb9c12048b4" />

**Step 8:** Cleanup

Verify the newsletter was sent successfully (check your Sent folder)
Delete the draft or modify its subject to NOT include "Haptigation Newsletter"
You can restore the subject line when preparing the next newsletter edition

---

## Features

### Personalization

Use [NAME], [Name], or [name] in your draft

Recipients with stored names: "Hallo [NAME]" → "Hallo Max"

Recipients marked as "unknown" or empty: "Hallo [NAME]" → "Hallo LeserIn"

### Test Mode
When testMode: true, the script only sends to your own email address for testing.

### Rate Limiting
The script automatically pauses every 50 emails for one cycle (default 1min) to avoid Gmail's rate limits.

### Helpful Functions
**Check Your Contacts**
Before sending, verify your contacts:
In the function dropdown, select "showContacts" and click Run

**List All Contact Groups**
To see all available contact labels:
In the function dropdown, select "listAllContactGroups" and click Run

---

## Troubleshooting
### "No Newsletter Draft Found"

Ensure your draft's subject contains "Haptigation Newsletter"
Check the execution log for available draft subjects

### "No Contacts Found"

Verify the contact label name matches exactly
Ensure contacts have the specified label in Gmail Contacts
Check that People API is enabled

### "Permission Denied"

Re-run authorization process
Ensure Gmail API and People API are both enabled in Services

### Daily Sending Limits

Regular Gmail: 500 emails/day
Google Workspace: 2,000 emails/day
If you exceed limits, wait 24 hours

---

## Security & Data Protection
**⚠️ CRITICAL - READ CAREFULLY:**

You are working with sensitive personal data
Contact information MUST NOT be shared outside your organization
Never export or share contact lists
Only authorized personnel should access this script
Always keep testMode: true when not actively sending
Use contactLabel: "safetyFirst" as default to prevent accidental sends

## Contact Management
DO NOT manually edit contacts - designated personnel will maintain contact data integrity. 

If you do please consider all consequences of your action (e.g. false names, accidentally unsubscribing newsletters, etc.)

## How to create a well formated email
- Get yourself a html file that represents your newsletter (Can use AI, [Topol](https://topol.io/) or something alike). 
- It can have in-line styling , links, buttons, pictures, whatever you like (besides emojis for some reason)
- Save your html file and open it in your browser by clicking it twice from your file explorer (Use Chrome)
- If your on the page click CTRL + A and then CTRL + C (It might look like it's only copying text but it isn't) 
- In your gmail draft click CTRL + V 
  - The styling should appear automatically
- Use the script as described

## Support
If you encounter issues:

Check the Execution log (View → Logs or Ctrl+Enter)
Verify all configuration settings
Ensure APIs are enabled
Test with testMode: true first

---

Last Updated: December 2025

Version: 1.0
