

# Mini CRM Dashboard - Implementation Plan

## Overview
A clean, modern CRM dashboard for managing client leads with purple accent colors and a professional light theme. The app will feature sidebar navigation, responsive design, and all UI interactions (no backend).

---

## Pages & Features

### 1. Dashboard Page (Home)
- **Overview cards showing:**
  - Total Leads (purple accent)
  - New Leads (orange)
  - Contacted Leads (yellow)
  - Converted Leads (green)
- Clean card layout with icons and numbers
- Quick visual summary of lead funnel

### 2. Lead List Page
- **Header:** "Client Lead Management System"
- **Data table with columns:**
  - Name, Email, Source, Status (colored badge), Actions
- **Search bar** to filter by name or email
- **Status dropdown filter** (All, New, Contacted, Converted)
- **"Add New Lead" button** - navigates to Add Lead page
- **Action buttons:** Edit (opens Edit page), Delete (shows confirmation popup)
- Pre-populated with 6-8 sample leads

### 3. Add Lead Page
- **Form fields:**
  - Name (text input)
  - Email (email input)
  - Source (text input - e.g., "Website", "Referral", "LinkedIn")
  - Status (dropdown: New, Contacted, Converted)
  - Notes (textarea)
- **Buttons:** Save Lead, Reset Form
- Form validation feedback

### 4. Edit Lead Page
- Same form layout as Add Lead
- Pre-filled with lead data (from URL parameter)
- **Button:** Update Lead

---

## Layout & Navigation

### Sidebar Navigation
- Fixed sidebar with icons and labels
- Navigation items:
  - 📊 Dashboard
  - 👥 Leads
  - ➕ Add Lead
- Collapsible on mobile (hamburger menu)
- Active state highlighting

### Responsive Design
- Desktop: Sidebar always visible
- Mobile: Collapsible sidebar with trigger button
- Tables adapt to smaller screens

---

## Styling

- **Theme:** Light background with purple accents
- **Status badges:**
  - New → Orange
  - Contacted → Yellow  
  - Converted → Green
- **Cards:** Rounded corners, subtle shadows
- **Spacing:** Professional padding and margins
- **Typography:** Clean, readable fonts

---

## Demo Data
Will include 6-8 sample leads with varied statuses to demonstrate the filtering and UI functionality.

