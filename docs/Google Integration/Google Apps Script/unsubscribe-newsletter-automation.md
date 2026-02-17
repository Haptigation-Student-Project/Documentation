---
title: Unsubscribe Automation 
description: Documentation for automatic newsletter unsubscribe via Google Apps Script
hide_table_of_contents: true
sidebar_position: 3
---

# Newsletter Unsubscribe Automation

## Overview
This Google Apps Script automates the unsubscription of newsletter subscribers. When someone fills out the Google Form to unsubscribe, it automatically:
- Removes the contact from the newsletter group
- Sends a confirmation email
- Deletes the form response (GDPR (DSGVO) compliant)

The script is fully GDPR-compliant: email addresses are automatically anonymized in all logs.

Find it here: [GitHub](https://github.com/Haptigation-Student-Project/Google-Apps-Script/)

---

## Prerequisites
### 1. Enable People API

- Go to [Google Apps Script](https://script.google.com)
- Open your project (or create a new one)
- Click the Services icon (⊕) in the left sidebar
- Search for "People API" and click "Add"

### 2. Google Contacts

Make sure you have a Contact Group/Label for your newsletter subscribers (e.g., "Newsletter Subscriber")

Contacts must be saved in Google Contacts

### 3. Google Form

Create a Google Form with an email field question for unsubscription

---

## Setup Guide
### Step 1: Create confirmation email draft

Create a new draft in Gmail with your unsubscribe confirmation (supports HTML formatting and URL-based inline images)

**IMPORTANT:**
- Set the subject to exactly:
```
Unsubscribe Newsletter Draft - DO NOT DELETE
```

**Personalization:**
- Use `[EMAIL]` as a placeholder in the text
- It will be automatically replaced by the actual email address
- Example: "This confirmation is sent to: [EMAIL]"

**HTML and Inline Images:**
- Supports HTML formatting and inline images (via URL)
- Images must be embedded as inline images, not separate attachments
- Formatting will be preserved in the confirmation email

**CAUTION:**
- DO NOT SEND - Save as a draft only
- Never delete - the script relies on this draft

### Step 2: Adjust configuration

Open the script and adjust the CONFIG settings:

```javascript
const CONFIG = {
  contactLabel: "Newsletter Subscriber",      // Your newsletter label in Google Contacts
  formID: "{your form ID}",                   // Google Form ID
  confirmationSubject: "Haptigation Newsletter-Abmeldung bestätigt",  // Email subject
  senderName: "Haptigation Team",             // Sender name
  debugMode: false                            // Set to true only for testing!
};
```

**Settings explained:**
- **contactLabel**: Name of your newsletter Contact Group in Google Contacts (must match exactly!)
- **formID**: The ID of your Google Form (see below for how to find it)
- **confirmationSubject**: Subject of the confirmation email sent to the user
- **senderName**: Name that appears as the sender
- **debugMode**: When `true`, full emails are logged (testing only!)

**Find the Form ID:**
1. Open your Google Form
2. Look at the URL: `https://docs.google.com/forms/d/FORM_ID_HERE/edit`
3. Copy the ID between `/d/` and `/edit`

### Step 3: Save the script

Click the save icon (💾) or press Ctrl+S / Cmd+S

<img width="1222" height="140" alt="save icon" src="https://github.com/user-attachments/assets/98219f3c-a5d6-4209-ab6c-5ecf8cab1471" />

### Step 4: Set up trigger

Choose "setupFormTrigger" in the function dropdown (top center)

Click the Run button (▶️)

<img width="1262" height="135" alt="run function setup" src="https://github.com/user-attachments/assets/e3403182-3f40-412a-bd85-8ffd3a148921" />

On first run, you must authorize the script:
- Click "Review permissions"
- Select your Google account
- Click "Advanced" → "Go to [Project name] (unsafe)"
- Click "Allow"

Check the execution log - you should see: "✓ Trigger successfully created!"

### Step 5: Verification

The automation is now active! For every form submission:
- The contact is removed from the newsletter group
- The user receives a confirmation email
- The form response is deleted (privacy)
- Everything is logged (with anonymized emails)

---

## Workflow

User fills out the unsubscribe form with their email address

The form automatically triggers the onFormSubmit() function

The following steps occur automatically:
1. Extract email address from form response
2. Validate and normalize the email address
3. Search the Contact Group for matching email
4. Remove the contact from the newsletter group
5. Send personalized confirmation email (with [EMAIL] replaced)
6. Delete form response immediately (GDPR compliance)
7. Log the complete process (with anonymized emails)

---

## GDPR Compliance

### Automatic anonymization
All email addresses are automatically anonymized in logs:
- Example: `test@gmail.com` → `t***@g***.com`
- Protects personal data in logs
- Can be disabled in debug mode (testing only!)

### Automatic data deletion
- Form responses are deleted immediately after processing
- No permanent storage of unsubscribe requests
- Only removal from the newsletter group remains recorded

### Debug mode
**ENABLE ONLY FOR TESTING:**
```javascript
debugMode: true  // Shows full emails in logs
```
**IMPORTANT:** Set back to `false` after testing!

---

## Managing the automation
### Check trigger status

In Google Apps Script, click the clock icon (⏰) in the left sidebar

You should see "onFormSubmit" with the associated form

<img width="1300" height="389" alt="trigger" src="https://github.com/user-attachments/assets/b0dd5e15-da57-4df9-b22e-b5ef68b83d0e" />

### Temporarily disable

Select "removeTrigger" in the function dropdown

Click Run (▶️)

<img width="1220" height="132" alt="run function remove" src="https://github.com/user-attachments/assets/f1484a30-633c-4e13-b597-5ebba7e86ceb" />

Check the log: "✓ Trigger removed"

### Re-enable

Select "setupFormTrigger" in the function dropdown

Click Run (▶️)

<img width="1262" height="135" alt="run function setup" src="https://github.com/user-attachments/assets/e3403182-3f40-412a-bd85-8ffd3a148921" />

### Update confirmation email

Edit your draft in Gmail (with "Unsubscribe Newsletter Draft - DO NOT DELETE" in the subject)

Save changes - the script will automatically use the updated version

No trigger restart needed

---

## Test functions
### Test manual unsubscribe

Open the script

Edit the function `testUnsubscribe()`:
```javascript
const testEmail = "test@gmx.de";  // Change to your test email
```

Select "testUnsubscribe" in the dropdown

Click Run (▶️)

Check the log for:
- Success messages ("✓ Abmeldung erfolgreich")
- Error messages if any occur
- How many contacts were found

Verify that:
- The email was removed from the newsletter group
- A confirmation email was received (check spam folder)

### List newsletter contacts

Select "listNewsletterContacts" in the dropdown

Click Run (▶️)

The log shows:
- All available Contact Groups
- Newsletter group details
- All contacts in the newsletter group (anonymized by default)
- In debug mode: full contact details including emails

---

## Configuration options
### Change label name

Adjust `contactLabel` in CONFIG:
```javascript
contactLabel: "My Newsletter Label"
```

Make sure the label exists in Google Contacts

No restart needed after change

### Admin notifications

On errors, the admin automatically receives an email

Change the admin email in the function `notifyAdminAboutError()`:
```javascript
const adminEmail = "your-admin-email@example.com"
```

### Adjust sender name

Change `senderName` in CONFIG:
```javascript
senderName: "Your Company Name"
```

Appears as the sender of the confirmation email

---

## Troubleshooting
### "No Contact Groups found"
- Check if you have enabled the People API (Services > + > People API)
- Make sure you have at least one Contact Group in Google Contacts
- Check that `contactLabel` exactly matches your label name (case-sensitive!)

### "Label not found"
- Go to Google Contacts and verify the label exists
- The name must exactly match `contactLabel` in CONFIG
- Run `listNewsletterContacts()` to see available labels
- Check spelling and capitalization carefully

### "No draft found"
- Ensure the draft subject is exact: `Unsubscribe Newsletter Draft - DO NOT DELETE`
- Watch for extra spaces or typos
- Make sure the draft hasn't been accidentally deleted

### No confirmation email received
- Check the spam folder
- Verify the email address in the test run
- Ensure the draft is correctly formatted
- Enable `debugMode: true` for detailed logs

### "Contact not found in newsletter list"
- Email must match exactly (case doesn't matter, but spacing does)
- Contact must be in the specified Contact Group
- Run `listNewsletterContacts()` to see all members
- Check if the contact has multiple email addresses
- Try manually searching in Google Contacts

### Form response not deleted
- This is logged as a warning but doesn't stop the unsubscribe
- Ensure `formID` in CONFIG is correct
- Check if the script has permissions for the form
- Not critical for functionality - unsubscribe still works

### Images not appearing in confirmation email
- Images must be embedded via URL (not as file attachments)
- Gmail sometimes blocks inline images - user may need to click "Show images"
- Test with `testUnsubscribe()` to verify formatting

### Multiple unsubscribe requests from same email
- Script will attempt to remove again but won't error
- Contact already removed on first request won't be found on second attempt
- Logged as "Kontakt mit E-Mail X nicht in der Newsletter-Liste gefunden"

---

## Advanced features
### Multiple newsletter lists

Duplicate the script for each list

Use different `contactLabel` in CONFIG

Create separate forms for each list

### Custom logging

Add your own log outputs:
```javascript
log("Your message here", false);  // Always logged
log("Sensitive Info", true);      // Only in debug mode
```

### Extend error handling

Customize the function `notifyAdminAboutError()`

Add additional notification methods (Slack, SMS, etc.)

---

## Security notes

**Production environment:**
- Set `debugMode: false`
- Set admin email to your real email
- Regularly check logs

**Test environment:**
- `debugMode: true` only during tests
- Use a separate test Contact Group
- Use test emails, not real contacts

**Data protection:**
- Logs are automatically anonymized
- Form responses are automatically deleted
- No personal data in persistent storage

---

## Best practices

Always test with `testUnsubscribe()` before going live

Use descriptive label names

Keep the confirmation email short and clear

Regularly check the execution logs for errors

Document changes to CONFIG

Create a backup of your confirmation draft

---

Last updated: December 07, 2025

Version: 1.0