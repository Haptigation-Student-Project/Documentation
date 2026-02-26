---
title: Newsletter Automation
description: Documentation on the Newsletter Automation logic via Google Apps Script
hide_table_of_contents: true
sidebar_position: 3
---

# Newsletter Automation

## Overview
This Google Apps Script automates the process of sending personalized newsletters via Gmail. It reads a draft email containing "Haptigation Newsletter" in the subject line and sends it to all contacts with a specific label, personalizing each email with the recipient's name.
Implementing it this way ensures data safety and allows for personalization in the newsletter.

If you would like a working Newsletter-Template please contact [haptigation@gmail.com](mailto:haptigation@gmail.com?subject=Request%20Newsletter-Template).

You can find it here: [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Prerequisites
### 1. Enable Gmail API Access

- Go to [Google Apps Script](https://script.google.com)
- Open your project (or create a new one)
- Click on the Services icon (⊕) in the left sidebar
- Find Gmail API and click Add

### 2. Enable People API

- In the same Google Apps Script project
- Click on the Services icon (⊕) in the left sidebar
- Search for People API
- Click Add to enable it
- This allows the script to access your Gmail contacts and labels

### 3. Gmail Settings (if needed)

- Check if in your gmail account setting IMAP is enabled.
- Ensure that "Allow less secure apps" is NOT required for Google Apps Script (it runs with your Google account permissions)
- Make sure your Gmail account has sufficient daily sending quota (typically 500 emails/day for regular Gmail, 2000/day for Google Workspace)

---

## Setup Instructions
### Step 1: Access Gmail and Google Apps Script

Open [Gmail](https://mail.google.com) and [Google Apps Script](https://script.google.com/home) for your account.

### Step 2: Create Newsletter Draft in Gmail

In Gmail, create a new email draft containing your complete newsletter content

#### IMPORTANT: 
The subject line MUST include `Update zu Haptigation` somewhere in it (e.g., "Dein Update zu Haptigation - Dezember 2025")

**Personalization placeholders:**
- Use `[NAME]` or `[Name]` or `[name]` where you want the recipient's name to appear
- If a contact has no name stored or name is "unbekannt", it will be replaced with "LeserIn" instead

Example text: "Hallo [NAME], hier ist dein monatlicher Newsletter..."

**DO NOT SEND - Save as draft only**

### Step 3: Configure Settings

Replace the CONFIG variables with your actual values:

```javascript
const CONFIG = {
  contactLabel: "Newsletter Subscriber",    // The label of your newsletter contacts
  senderName: "{Name} von {Company}",       // Shows as "Name von Company via company@gmail.com"
  testMode: true,                           // Set to true for testing, false for live sending
  scheduledDate: "2026-02-21",              // YYYY-MM-DD format for scheduled sends 
  scheduledTime: "16:00"                    // HH:MM 24h format for scheduled sends
  // If either of both scheduledVariables is not set scheduleNewsletter will not work, sendNewsletter will work regardless though.)
};
```

**Settings Explained:**
- **contactLabel**: The exact name of your Contact Group/Label in Google Contacts
- **senderName**: Your name that appears as the sender (will be appended with "via [your email]")
- **testMode**: When `true`, emails are only sent to your own account for testing
- **scheduledDate**: Date for scheduled newsletter sends (YYYY-MM-DD format, e.g., "2026-02-21")
- **scheduledTime**: Time for scheduled newsletter sends (HH:MM 24h format, e.g., "16:00")

### Step 4: Save the Script
Click the disk icon (💾) or press Ctrl+S / Cmd+S to save your changes.

<img width="1227" height="134" alt="image" src="https://github.com/user-attachments/assets/d5c373b4-24ea-4bc5-aea0-cbb9c12048b4" />

### Step 5: Run the Script

In the function dropdown (top center), select "sendNewsletter"

Click the Run button (▶️) to the left

<img width="1227" height="144" alt="image" src="https://github.com/user-attachments/assets/d0c9576f-31a4-489e-b2e4-4e1a9b0df6c7" />

On first run, you'll need to authorize the script:

1. Click "Review permissions"
2. Select your Google account
3. Click "Advanced" → "Go to [Project Name] (unsafe)"
4. Click "Allow"

### Step 6: Reset Safety Settings
After successful sending:

- Change testMode back to true
- Change contactLabel back to "safetyFirst"
- This prevents accidental sends

### Step 7: Save Again
Click the disk icon (💾) or press Ctrl+S / Cmd+S to save your changes.

<img width="1227" height="134" alt="image" src="https://github.com/user-attachments/assets/d5c373b4-24ea-4bc5-aea0-cbb9c12048b4" />

### Step 8: Cleanup

Verify the newsletter was sent successfully (check your Sent folder)

Delete the draft or modify its subject to NOT include `Update zu Haptigation`

You can restore the subject line when preparing the next newsletter edition

---

## Features

### Scheduled Sending

- Plan newsletter sends for specific date and time
- Use `scheduleNewsletter()` to set up automatic sending
- View scheduled sends with `showScheduledNewsletters()`
- Cancel scheduled sends with `deleteAllNewsletterTriggers()`
- Triggers are automatically deleted after successful send

### Personalization

Use [NAME], [Name], or [name] in your draft

Recipients with stored names: "Hallo [NAME]" → "Hallo Max"

Recipients with stored name "unbekannt" or empty: "Hallo [NAME]" → "Hallo LeserIn"

### Test Mode
When testMode: true, the script only sends to your own email address for testing.

### Rate Limiting
The script automatically pauses every 50 emails for one cycle (default 1min) to avoid Gmail's rate limits.

### Helpful Functions
**Check Your Contacts**
- Before sending, verify your contacts:
  - In the function dropdown, select **"showContacts"** and click Run

**List All Contact Groups**
- To see all available contact labels:
  - In the function dropdown, select **"listAllContactGroups"** and click Run

---

## Troubleshooting
### "No Newsletter Draft Found"

- Ensure your draft's subject contains "Update zu Haptigation"
- Check the execution log for available draft subjects

### "No Contacts Found"

- Verify the contact label name matches exactly (case-sensitive!)
- Ensure contacts have the specified label in Gmail Contacts
- Check that People API is enabled
- Run "listAllContactGroups" to see available labels

### "Permission Denied"

- Re-run authorization process
- Ensure Gmail API and People API are both enabled in Services

### Emails not personalized with names

- Ensure contacts have names stored in Google Contacts
- Check that names are not empty or set to "unbekannt"
- If no name: script will use "LeserIn" as fallback

### Daily Sending Limits

- Regular Gmail: 500 emails/day
- Google Workspace: 2,000 emails/day
- If you exceed limits, wait 24 hours

---

## Security & Data Protection
**⚠️ CRITICAL - READ CAREFULLY:**

- You are working with sensitive personal data
- Contact information MUST NOT be shared outside your organization
- Never export or share contact lists
- Only authorized personnel should access this script
- Always keep testMode: true when not actively sending
- Use contactLabel: "safetyFirst" as default to prevent accidental sends

---

## Contact Management
DO NOT manually edit contacts - designated personnel will maintain contact data integrity. 

If you do please consider all consequences of your action (e.g. false names, accidentally unsubscribing newsletters, etc.)

---

## How to create a well formated email
- Get yourself a html file that represents your newsletter (Can use AI, [Topol](https://topol.io/) or something alike). 
- It can have in-line styling , links, buttons, pictures, whatever you like (besides emojis for some reason)
- Save your html file and open it in your browser by clicking it twice from your file explorer (Use Chrome)
- If your on the page click CTRL + A and then CTRL + C (It might look like it's only copying text but it isn't) 
- In your gmail draft click CTRL + V 
  - The styling should appear automatically
- Use the script as described

### Important 
In the Footer of the mail you must include the option to unsubscribe the newsletter.

Please use the following google form to allow users to do so.

The form is hooked up to a script that fully automates the unsubscribing process.

More information can be found here: 
- [Docusaurus](/docs/Software/Google%20Integration/Google%20Apps%20Script/unsubscribe-newsletter-automation)
- [Github](https://github.com/Haptigation-Student-Project/Google-Apps-Script)

Also please include the links to our [Docusaurus](/), [Github](https://github.com/Haptigation-Student-Project) and [Menti Surveys](https://www.menti.com/alx5ib81p2uv) and maybe soon as well website (??)

---

## Support
If you encounter issues:

- Check the Execution log (View → Logs or Ctrl+Enter)
- Verify all configuration settings
- Ensure APIs are enabled
- Test with testMode: true first

### Email Privacy
All email addresses are automatically anonymized in logs:
- `max.mustermann@gmail.com` → `m...@g...com`
- This protects user privacy in execution logs
- No configuration needed - always active

---
Last updated: February 26, 2026

Version: 1.3