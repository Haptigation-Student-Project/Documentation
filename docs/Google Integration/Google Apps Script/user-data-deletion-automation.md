---
title: User Data Deletion Automation
description: Documentation for automatic deletion of user data in Gmail and Google Contacts
hide_table_of_contents: true
sidebar_position: 4
---

# User Data Deletion Automation
## Overview
This Google Apps Script enables the complete deletion of all data associated with an email address from your Gmail account and Google Contacts. When executed, it automatically:
- Sends a confirmation email to the user
- Deletes all contacts with this email address
- Moves all email threads to/from this address to the Trash
- Logs the entire process (with anonymized emails)

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
Access to Google Contacts required
The script searches all stored contacts for the email address to be deleted
### 3. Gmail
Full access to Gmail required
The script searches and deletes emails to/from the specified address

---
## Setup Guide

### Step 1: Create confirmation email draft

Create a new draft in Gmail with your deletion confirmation (supports HTML formatting and inline images)

**IMPORTANT:**
- Set the subject to exactly:

```javascript
Confirm User Data Deletion Draft - DO NOT DELETE
```

**Personalization:**
- Use `{EMAIL}` as a placeholder in the text
- It will be automatically replaced by the actual email address
- Example: "Your data for `{EMAIL}` has been fully deleted."

**HTML and Inline Images:**
- Supports HTML formatting and inline images
- Inline images can be added directly in the Gmail draft
- Only URL-based inline images are supported

**CAUTION:**
- DO NOT SEND - Save as a draft only
- Never delete - the script relies on this draft

### Step 2: Adjust configuration
Open the script and adjust the CONFIG settings:

```javascript
const CONFIG = {
  DEBUG_MODE: false,                                     // Set to true for full email display in logs
  MAX_THREADS_PER_BATCH: 500,                            // Maximum number of threads per batch deletion
  EMAIL: "beispiel@gmail.com",                           // Replace with the real email to be deleted
  TESTMAIL: "test@gmail.com",                            // Replace with the real email you want to test with
  DRAFT_SUBJECT: 'Confirm User Data Deletion Draft - DO NOT DELETE',  // Draft subject in Gmail
  FINAL_EMAIL_SUBJECT: 'Wir haben ihre Nutzerdaten gelöscht',         // Subject of the sent email
};
```

**Settings explained:**
- **DEBUG_MODE**: When `true`, full emails are logged (testing only!) - shows full email addresses instead of anonymized
- **MAX_THREADS_PER_BATCH**: Maximum number of email threads processed per batch (default: 500, increase for many emails)
* **`EMAIL`**: The email address whose data should be deleted (must be set before execution!)
* **TESTMAIL**: Test email address for functions like `testConfirmationEmail()` and `listContactsForEmail()`
* **DRAFT_SUBJECT**: Subject of the draft template for confirmation email (DO NOT change!)
* **FINAL_EMAIL_SUBJECT**: Subject line of the confirmation email sent to the user
* **DEBUG_MODE**: When `true`, full emails are logged (testing only!) - shows full email addresses instead of anonymized; set back to false for production

### Step 3: Save the script
Click the save icon (💾) or press Ctrl+S / Cmd+S
<img width="1230" height="141" alt="save icon" src="https://github.com/user-attachments/assets/54b4e907-aac5-48b8-9eaa-e87428e4a31b" />

### Step 4: Set email address

**IMPORTANT:** Before each execution, the email address to be deleted must be set in CONFIG:

```javascript
CONFIG.EMAIL = "user@example.com"  // Replace with the real email
```

**Safety check:**
- The script checks whether a valid email address has been provided
- If the email is missing or invalid, execution is aborted
- 3-second warning before starting the deletion process

### Step 5: Start deletion process
Choose "deleteByEmail" in the function dropdown (top center)

Click the Run button (▶️)

On first run, you must authorize the script:
- Click "Review permissions"
- Select your Google account
- Click "Advanced" → "Go to [Project name] (unsafe)"
- Click "Allow"
 
**The script then automatically performs:**
1. 3-second warning (time to abort!)
2. Send confirmation email
3. Search and delete contacts
4. Search emails and move to Trash
5. Final report in the log

### Step 6: Verify deletion process
Check the execution log (View → Logs)

You should see:
- "✅ Deletion process completed for: [email]"
- Number of deleted contacts
- Number of deleted email threads
 
Verify manually:
- Google Contacts: Contact should no longer exist
- Gmail: Emails should be in the Trash

---
## Workflow
### Standard flow
Administrator sets email address in CONFIG

Administrator runs `deleteByEmail()`

**3-second warning** appears in the log

The script performs the following steps:

**Step 1: Send confirmation email**
- Draft with subject "Confirm User Data Deletion Draft - DO NOT DELETE" is searched
- \{EMAIL\} placeholder is replaced with the actual email
- Email with HTML formatting, inline images, and attachments is sent
- On error: warning in log, but deletion continues (no blocker)
 
**Step 2: Search contacts**
- All Google Contacts are searched
- Contacts with matching email address are identified
- Each found contact is deleted
- Number of deleted contacts is logged
 
**Step 3: Search emails**
- Search query: `from:[email] OR to:[email]`
- Emails are processed in batches (default: 500 threads per batch)
- Each thread is moved to Trash
- Number of deleted threads is logged
- Continues across batches until no more threads are found
 
**Step 4: Final report**
- Summary in the log:
  - Deleted contacts
  - Deleted email threads
  - All emails anonymized
  - All emails anonymized

### On errors
- Errors are logged (emails anonymized)
- Deletion continues where possible
- Confirmation email errors do not stop deletion
- Detailed error logs for debugging

---
## GDPR Compliance
### Automatic anonymization
All email addresses are automatically anonymized in logs:
- **Full anonymization**: `max@gmail.com` → `m...@g....com`
- **Partial anonymization**: `max@gmail.com` → `m...@g...`
- Protects personal data in logs
- Can be disabled in debug mode (testing only!)
 
**Anonymization format:**
```javascript
// Standard (DEBUG_MODE: false)
"max.mustermann@gmail.com" → "m...@g....com"
// Debug mode (DEBUG_MODE: true)
"max.mustermann@gmail.com" → "max.mustermann@gmail.com"
```
### Complete data deletion
- **Contacts**: Permanently deleted from Google Contacts
- **Emails**: Moved to Trash (can be permanently deleted manually)
- **Logs**: Automatically anonymized, no personal data

### Right to be forgotten (GDPR Art. 17)
This script helps comply with the "Right to be forgotten":
- Complete deletion of all user data
- Confirmation to the user
- Logging of the deletion process (anonymized)
- Auditable compliance

### Debug mode
**ENABLE ONLY FOR TESTING:**
```javascript
DEBUG_MODE: true  // Shows full emails in logs
```

**IMPORTANT:** Set back to `false` after testing!

---

## Test functions
### 1. Test anonymization
Select "testAnonymization" in the function dropdown

Click Run (▶️)

The log shows anonymization examples:
- With DEBUG_MODE: false
- With DEBUG_MODE: true

### 2. Test confirmation email

**Preparation:**
- Set `TESTMAIL` in CONFIG to your test email:

TESTMAIL: "your-test-email@example.com"

Select "testConfirmationEmail" in the dropdown

Click Run (▶️)

Check the log for success messages

Verify in your inbox:
- Email received?
- \{EMAIL\} placeholder replaced?
- HTML formatting correct?
- Inline images visible?

### 3. List contacts
**Preparation:**
- Set `TESTMAIL` in CONFIG to the email to search

Select "listContactsForEmail" in the dropdown

Click Run (▶️)

The log shows:
- Number of contacts found
- Details for each contact (anonymized)
- In debug mode: full contact details

### 4. Email validation
- The script validates the email format via `isValidEmail()` before starting deletion
- If the email is missing or invalid, execution is aborted with an error log
- Ensure `EMAIL` is set and valid before running `deleteByEmail()`

**IMPORTANT:** This function deletes nothing - for viewing only!

---
## Configuration options
### Adjust batch size

Default: 500 threads per batch

Increase for many emails:

```javascript
MAX_THREADS_PER_BATCH: 500 //This is maximum

```

Decrease for slow connections:

```javascript
MAX_THREADS_PER_BATCH: 250
```

### Change confirmation email subject
Change `FINAL_EMAIL_SUBJECT` in CONFIG:

```javascript
FINAL_EMAIL_SUBJECT: 'Your data has been deleted'
```

**IMPORTANT:** Do NOT change `DRAFT_SUBJECT` - must be exact!

### Enable debug mode
For development and testing only:

```
DEBUG_MODE: true
```

**Shows then:**
- Full email addresses in logs
- Detailed error information
- Additional debug output

**CAUTION:** Never enable in production!

---
## Troubleshooting
### "Please enter a valid email address!"

- Check the `EMAIL` variable in CONFIG
- Ensure it is not empty or "example@gmail.com"
- Format must be valid: `user@domain.tld`

### "Invalid email address"

- Email format is validated: Must contain ```@```

### "Draft not found"

- Ensure the draft subject is exact:
```
Confirm User Data Deletion Draft - DO NOT DELETE
```
- Watch for spaces and typos
- Make sure the draft hasn't been accidentally deleted

### "Confirmation email could not be sent"
- Check the draft subject (see above)
- Ensure the \{EMAIL\} placeholder is present in the draft
- Verify Gmail permissions

**Note:** Deletion will continue regardless

### No contacts found
- People API must be enabled (see prerequisites)
- Email address may not exist in Contacts
- Run `listContactsForEmail()` to verify
- Case is ignored - not a problem

### No emails found
- Email address may have no emails in your account
- Check manually in Gmail: `from:[email] OR to:[email]`
- Emails already deleted will not be found

### "Script timeout" with many emails
- Google Apps Script has a 6-minute time limit
- Reduce `MAX_THREADS_PER_BATCH` to 250-300
- Run the script multiple times for large volumes
- For very many emails (>5000): consider manual batch processing

### Inline images missing in email
- Images must be embedded as inline images in the draft
- Gmail sometimes blocks images - recipient may need to click "Show images"
- Use external URLs as an alternative
- Test with `testConfirmationEmail()`

---
## Advanced features
### Delete multiple email addresses

**Option 1: Sequential**
- Change `EMAIL` in CONFIG
- Run `deleteByEmail()`
- Wait for completion
- Repeat for next email

**Option 2: Create batch function**
```javascript
function deleteMultipleEmails() {
  const emailsToDelete = [
    "email1@example.com",
    "email2@example.com",
    "email3@example.com"
  ];
  
  emailsToDelete.forEach(email => {
    CONFIG.EMAIL = email;
    Utilities.sleep(5000); // 5 seconds pause between deletions
  });
}
```

### Extend custom logging
The logging system uses timestamps and levels:

```javascript
log('INFO', 'Your info message');
log('WARNING', 'Your warning');
log('ERROR', 'Your error');
log('SUCCESS', 'Your success message');
```

**Show logs:**
showLogs(); // Shows all logs in console

### Deletion without confirmation email
Comment out the following block in `deleteAllDataForEmail()`:
```javascript
// Step 1: Send confirmation email
// log('INFO', 'STEP 1: Sending confirmation email...');
// const emailSent = sendConfirmationEmail(email);
```

**IMPORTANT:** The user will not receive a notification!

---

## Security notes
### Production environment

**Before each run:**
- Set `DEBUG_MODE: false`
- Enter the correct email address in `EMAIL`
- Confirmation draft present and correct

**After execution:**
- Check logs for errors
- Verify manually in Gmail and Contacts
- If problems: run `showLogs()`

### Test environment
**Recommended setup:**
- Use a separate test Google account
- Create test contacts with known emails
- Prepare test emails
- `DEBUG_MODE: true` for detailed logs
- After tests: set `DEBUG_MODE: false`

### Data protection
**Automatic protection:**
- Logs are automatically anonymized
- No personal data in persistent storage
- Emails in Trash (can be emptied manually)

**Best practice:**
- Regularly delete logs
- Empty Trash after deletion
- Check confirmation draft for sensitive info

### Permissions
**Required permissions:**
- Gmail: Full access (read, delete, send)
- Contacts: Full access (read, delete)
- People API: Manage contacts

**Security:**
- Only trusted people should have access
- Script project should remain private
- Never store API keys or passwords in code

---
## Best practices
### Before execution

- Always test with a test email: `testConfirmationEmail()`
- Check contacts: `listContactsForEmail()`
- Verify confirmation draft correctness (subject, HTML, inline images, and \{EMAIL\} placeholder)
- Ensure `DEBUG_MODE: false`

### During execution
- Wait for the 3-second warning (time to abort!)
- Do not run multiple deletions in parallel
- For many emails (>1000): watch the time limit
- Monitor log output during execution

### After execution
- Read the execution log thoroughly
- Verify manually in Gmail and Contacts
- On errors: use `showLogs()` for details
- Empty Trash if needed

### Documentation
Document deletion operations (GDPR compliance):

- Date and time
- Email address (document externally)
- Number of deleted contacts
- Number of deleted emails

Document changes to CONFIG

Create a backup of the confirmation draft

---
Last updated: December 07, 2025

Version: 1.0