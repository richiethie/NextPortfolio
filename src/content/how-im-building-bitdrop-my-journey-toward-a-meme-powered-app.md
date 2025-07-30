---
title: "How I’m Building BitDrop: My Journey Toward a Meme-Powered App"
date: "2025-07-30"
summary: "Behind the scenes of building BitDrop — a competitive meme-sharing platform built with Go, Supabase, and React Native."
thumbnail: "/thumbnails/thumbnail7-30-25.png"
---

# How I’m Building BitDrop: My Journey Toward a Meme-Powered App

BitDrop started with a simple idea: make it fun and frictionless for friends to share memes and rank them in private or public groups. The goal? Bring back the excitement of discovering content that actually *lands* — and turn it into a weekly competition.

## 🧠 The Vision

BitDrop isn’t just another meme-sharing app. It’s built around two core experiences:
- A **private-first content drop** via share sheets (Instagram, TikTok, etc.)
- A **group leaderboard** where people vote weekly on the funniest content

It’s like combining the shareability of Reels with the competitiveness of fantasy football — but for memes.

## ⚙️ The Tech Stack

To make this possible, I’m building BitDrop with:
- **Frontend**: React Native with Expo
- **Backend**: Golang + Gin
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth + JWT token support
- **Storage**: Supabase Storage for media uploads
- **Real-Time**: WebSockets for live leaderboard and drops

## 🛠️ What’s Working So Far

- Supabase + Go user auth with backend token verification
- Profile screen dynamically displays user data from the DB
- OAuth and manual login options working together
- Share sheet integration to save memes privately before posting
- Early leaderboard logic and drop-to-group flow implemented

## 🔜 What’s Next

- Building group creation and voting UI
- Weekly leaderboard with countdown resets
- Beta testing with close friends
- Experimenting with monetization (boosts, meme credits, subscriptions?)

## 💡 Key Lessons

- Building a mobile app solo with a full-stack backend is… a lot
- Supabase makes it fast to prototype, but Go gives real backend power
- Share sheets are a powerful way to drive engagement from other apps
- The meme economy is alive and thriving — and people love to *vote*

---

### 🎉 Want to Test It?

If you want early access to BitDrop or have ideas for how to make it better, reach out — I’m always open to feedback and collaborators.
