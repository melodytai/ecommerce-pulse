# eCommerce Pulse — Dashboard Guide

A biweekly eCommerce intelligence dashboard. This guide covers everything you need to keep it running and improving over time.

---

## Table of Contents
1. [Updating the File in the Future](#2-updating-the-file-in-the-future)
2. [Using the Feedback Widget](#3-using-the-feedback-widget)
3. [Turning Feedback Into a Better Prompt](#4-turning-feedback-into-a-better-prompt)
4. [Refreshing the Report](#5-refreshing-the-report)

---


## 1. Updating the File in the Future

Any time you receive an updated `index.html` file (e.g. after a prompt improvement), here's how to replace it on GitHub:

1. Go to your repo on GitHub
2. Click on `index.html`
3. Click the **trash icon** to delete it → confirm by clicking **"Commit changes"**
4. Click **"Add file"** → **"Upload files"**
5. Upload the new `index.html`
6. Click **"Commit changes"**

The live URL stays the same — no need to re-share the link with your team.

---

## 2. Using the Feedback Widget

The yellow **Feedback** button floats in the bottom-right corner of the dashboard at all times.

**To leave a note:**
1. Click the **Feedback** button
2. Type your thoughts in the text box — anything goes:
   - *"The WooCommerce section felt thin this cycle"*
   - *"Missing any mention of headless commerce"*
   - *"The stat about AI adoption didn't have a clear source"*
3. Click **"Save Note"**

Your note is saved privately in your browser. Nobody else can see it.

**To review past notes:**
1. Click the **Feedback** button
2. Switch to the **"Past Notes"** tab
3. All your saved notes appear here, organized by issue and date
4. Delete individual notes once you've acted on them

> 💡 A small red dot appears on the Feedback button when you have unsaved notes waiting to be reviewed — so you'll never forget they're there.

---

## 3. Turning Feedback Into a Better Prompt

This is how the dashboard gets smarter over time.

**Step 1 — Collect notes over one or two report cycles**
Use the feedback widget after each issue. Even short notes like *"needed more automotive-specific context"* are useful.

**Step 2 — Copy all your notes**
1. Open the Feedback panel
2. Go to the **"Past Notes"** tab
3. Click **"Copy All Notes for Claude →"**

This copies all your notes — formatted and organized by issue — to your clipboard.

**Step 3 — Open a new chat with Claude**
Go to [claude.ai](https://claude.ai) and start a new conversation.

**Step 4 — Paste your feedback and ask for an improved prompt**
Paste your copied notes and send this message:

```
Here is accumulated feedback from our team on the eCommerce Pulse report:

[paste your notes here]

Based on this feedback, please update the report generation prompt inside our dashboard's index.html to address these issues. Here is the current file:

[paste or upload your index.html]
```

Claude will return an updated `index.html` with an improved prompt baked in.

**Step 5 — Re-upload to GitHub**
Follow the steps in [Section 2](#2-updating-the-file-in-the-future) to replace the file. Done — the next refresh will use the improved prompt automatically.

---

## 4. Refreshing the Report

The dashboard content can be updated at any time without touching GitHub.

1. Open the live dashboard URL
2. Click the **"Refresh Report"** button in the top-right header
3. Wait ~30 seconds while Claude searches the web and regenerates all sections
4. The dashboard updates in place with new content, citations, and a fresh timestamp

> ⚠️ The Refresh button makes live API calls. If it fails, wait a moment and try again — this is usually a temporary timeout.

---

## Quick Reference

| Task | Where |
|---|---|
| Get live URL | GitHub → Settings → Pages |
| Replace the file | GitHub → delete old `index.html` → upload new one |
| Leave feedback | Yellow Feedback button (bottom-right of dashboard) |
| Copy notes for Claude | Feedback panel → Past Notes → Copy All |
| Refresh report content | "Refresh Report" button (top-right of dashboard) |
| Update the prompt | Paste feedback + file into Claude → re-upload result |

---

*eCommerce Pulse is an internal tool for the NNA Dealer Engagement team.*
