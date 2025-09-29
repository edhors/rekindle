# Rekindle — Design Specification

## Product POV
People with depression need a way to reconnect with hobbies and interests because personal meaning increases engagement.

## Design Principles
- Neobrutalist vibe: bold borders, flat colors, honest UI
- Gentle, hopeful, non-judgmental tone in content and microcopy
- Reduce cognitive load; single clear action per screen
- Celebrate attempts over outcomes; avoid pressure and gamification
- Personalize by time and energy; always allow “make it smaller”
- Accessibility-first (readability, contrast, motion controls)

## Visual System
- Color (light): background `#FAFAFA`, surface `#FFFFFF`, text `#111111`, accent `#0A7EA4`, outline `#111111`
- Color (dark): background `#111111`, surface `#151718`, text `#ECEDEE`, accent `#8BD3E6`, outline `#ECEDEE`
- Typography: Inter/SF Pro, large, unapologetic headings; tight, readable body
- Spacing: 8px base; generous white space; avoid ornamental chrome
- Corners: Mostly sharp 0–4px radii for a utilitarian feel
- Shadows: Hard, offset shadows for key elements (e.g., `4px 4px 0`)—respect Reduce Motion

## Core Components
- Buttons: Bold 2px borders, flat fill, subtle press offset (translate `1–2px`)
- Chips: Square-ish with 1–2px border, clear labels, minimal icons
- Cards: High-contrast title, 2px border, visible shadow offset
- Stepper: Thick progress markers (blocks or steps) with numeric labels
- Timer: Flat ring or block progress bar; no gradients
- Toast: Solid background, bold label; short and sincere

## Navigation & IA
- Tabs: Home, Explore, Plan, Reflect, Profile
  - Home: Check-in + Today’s tiny suggestion
  - Explore: Interest-based ideas filtered by time/energy
  - Plan: Micro-tasks with “make it smaller” and reminders
  - Reflect: Debrief and “moments of meaning”
  - Profile: Interests, barriers/supports, settings

## Key Screens (MVP)
- Home (Check-in + Today)
  - Mood/energy quick input; one small suggested action; CTAs: Start, Make it smaller, Not today
- Explore
  - Interest chips; idea cards with 2–10m tag and energy level
- Start Small (Guided Session)
  - 2–10 minute flow with 2–3 steps; optional timer
- Reflection
  - “How did that feel?” and “Keep/Change?” with optional note/photo
- Settings
  - Notification cadence, theme, crisis resources, privacy/data export

## Microcopy Guidelines
- Compassionate, choice-preserving; avoid all caps and exclamation marks
- Examples: “One minute is enough.” “We can try again anytime.” “Make it smaller?”

## Accessibility
- Minimum 16pt body text, large tap targets
- High-contrast palettes and accessible color pairs
- Respect system theme and Reduce Motion
- Screen reader labels and sensible focus order

## Notifications (opt-in, gentle)
- “A 2-minute version of drawing is ready when you are.”
- “We can try gardening tomorrow. Want a tiny prep step?”

## Safety
- Persistent access to crisis support in Settings and Reflect
- Non-clinical framing; link to professional resources

## Analytics & Privacy
- Track high-level events (start/attempt/complete) and preferences only
- No sensitive text by default; opt-in journaling with export controls
