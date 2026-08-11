# 📱 QuietHaven

**A mobile app that helps students find better places to study.**

QuietHaven helps students discover libraries, coffee shops, and academic spaces by providing useful information about the environment and amenities **before they visit**.

> **Find a place. Focus. Get things done.**

Instead of making students search across multiple websites to figure out whether a location will work for studying, QuietHaven brings the most useful information together in one simple experience.

---

## 🎯 Why I Built QuietHaven

The project started with a simple question:

> **"How do I know if a place is actually good for studying before I waste time going there?"**

Students often know where a library or coffee shop is, but not whether it has Wi-Fi, outlets, seating, study rooms, computers, or other features they need.

QuietHaven was built to make that decision easier.

---

## 🚀 Current Status

**QuietHaven v1.0 — Early MVP / Public Beta**

The current MVP contains **15 curated study locations**:

* 📚 **6 libraries**
* ☕ **5 coffee shops**
* 🎓 **4 academic spaces**

Every location was researched individually using available official sources and other relevant information rather than assuming that every location offers the same amenities.

---

# ✨ Features

## 🔍 Explore Study Locations

Browse curated locations organized into:

* 📚 Libraries
* ☕ Coffee Shops
* 🎓 Academic Spaces

---

## 📍 Location Details

Each location has a dedicated details page containing information such as:

* Location name
* Address
* Description
* Available amenities
* Official website
* Map directions

---

## 🏷️ Amenities

QuietHaven tracks useful study-related amenities, including:

* 📶 Wi-Fi
* 🔌 Outlets
* 🪑 Seating
* 👥 Study rooms
* 🚻 Restrooms
* 🚗 Parking
* 💻 Computers

The goal is not simply to list locations, but to help students determine whether a location fits their needs.

---

## 🌐 Official Sources

Each location can link to its official website so users can verify information and access the most current details directly from the source.

---

## 🗺️ Maps & Directions

Users can open directions to a location and navigate there using their device's map application.

---

## 🌙 Light & Dark Mode

QuietHaven includes a custom theme system supporting:

* ☀️ Light Mode
* 🌙 Dark Mode

---

## 📤 Share QuietHaven

QuietHaven uses the native device sharing functionality so users can easily share the app with friends and classmates.

---

## ✉️ Feedback

Users can send feedback directly from the app.

Feedback helped shape the product throughout public testing.

---

# 📊 Public Testing & Impact

QuietHaven was not built and left untouched.

After launching the public beta, I shared the app across multiple developer, testing, and product communities and used the resulting feedback to identify problems and make changes.

### Current public testing results

* **2,300+ combined public views/reach** across testing and product communities
* **270 views / 174 unique visitors** on 1kusers
* **12 Product Hunt upvotes**
* **8+ Peerlist upvotes**
* **10 meaningful external contributors**
* **20+ actionable pieces of feedback**
* **2 confirmed beta testers**

The goal of public testing was not simply to collect numbers. It was to learn how people who had never seen the app before would actually experience it.

---

# 🧪 What Real Users Taught Me

Public testing changed the direction of QuietHaven in several important ways.

## 📱 Testing Friction Matters

Early testers found Expo Go confusing or inconvenient for testing the app.

### What changed

I created a **standalone Android APK** so Android testers could install QuietHaven directly instead of relying entirely on Expo Go.

This was an important lesson:

> A technically working product can still have a poor user experience if getting to the product is difficult.

---

## 🧭 Navigation Bugs Matter

An external beta tester discovered an issue where content could be hidden behind the bottom navigation.

### What changed

I investigated the issue and implemented improved safe-area and bottom-padding handling across Android and iOS.

---

## 📍 Location Data Is a Product Problem

Multiple contributors raised an important question:

> How will QuietHaven keep location information accurate as locations change?

This led me to think more seriously about the long-term data strategy rather than simply adding more locations.

For the current MVP, I prioritize **accuracy and manual curation over quantity**.

---

## 🔊 Study Environment Is More Than Amenities

Feedback also pushed the product beyond simply answering:

> "Does this place have Wi-Fi?"

Contributors suggested information such as:

* Noise level
* Music level
* Crowding
* Study environment
* Solo vs. group suitability
* Time-of-day differences

This helped shape the longer-term direction of QuietHaven toward helping students choose environments where they can actually be productive.

---

## 🔄 Retention Matters

One of the most important pieces of product feedback was that simply having a large number of locations does not necessarily make an app useful.

The bigger question is:

> **"Why would a student come back and use QuietHaven again?"**

That changed how I think about future features.

Rather than adding features simply because they sound useful, future development should focus on information that helps students make better study decisions repeatedly.

---

# 📈 Product Evolution

QuietHaven originally focused on:

> **"Find study locations."**

After building, launching, and testing the app, the idea evolved toward:

> **"Help students choose study environments where they can actually be productive."**

That shift came directly from real user feedback.

### Build → Test → Learn → Iterate

```text
Initial MVP
     ↓
Public Beta
     ↓
Real User Feedback
     ↓
Bug Fixes & Distribution Improvements
     ↓
Product Strategy Changes
     ↓
Future Focus on Study Environment
```

---

# 🧠 Product Decisions

QuietHaven intentionally avoids adding features just because other apps have them.

### Saved Locations

The app originally included a Saved tab.

After reviewing the experience, I removed it because:

* The MVP has a curated number of locations
* Categories and filtering already organize the locations
* The additional navigation item added complexity

The decision was to keep the core experience simpler.

This reflects one of the project's main principles:

> **Useful features are better than more features.**

---

# 📱 Distribution

## Android

QuietHaven has a standalone Android APK available for public testing.

**Android Build:**
https://expo.dev/accounts/chidi064/projects/QuietHaven-Mobile/builds/fab9b65b-2356-412c-9eec-4f46462c4bf1

## iOS

Early public testing has been distributed through Expo Go.

**Expo Preview:**
https://expo.dev/preview/update?message=QuietHaven+first+public+test&updateRuntimeVersion=1.0.0&createdAt=2026-06-26T01%3A22%3A42.203Z&slug=exp&projectId=1b269b1e-3472-4df0-86a1-7e76a8bc83a0&group=c2cb032f-b73e-4fe2-93bc-a8efbd9b1dbe

> QuietHaven is currently in public beta and is not yet distributed through the Apple App Store.

---

# 🛠️ Tech Stack

### Mobile

* React Native
* Expo
* Expo Router
* TypeScript

### Development

* React Native components
* Custom theming
* Navigation
* Modals
* Native sharing
* Location data management
* Responsive/safe-area handling

---

# 📂 Project Structure

```text
QuietHaven-Mobile/
│
├── app/                 # Application screens and navigation
├── assets/images/       # App assets and images
├── constants/           # Shared constants and configuration
├── data/                # Curated location data
├── lib/                 # Shared application logic
├── scripts/             # Development scripts
│
├── app.json             # Expo configuration
├── eas.json             # EAS build configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

---

# 🎓 What I Learned

Building QuietHaven taught me that creating an app is only part of building a product.

The project gave me experience with:

* React Native development
* Expo and mobile deployment
* UI/UX decisions
* Navigation architecture
* Mobile safe-area handling
* Android builds
* Public beta testing
* Collecting and interpreting user feedback
* Debugging issues reported by external users
* Product prioritization
* Data accuracy and maintenance
* Deciding when **not** to build a feature
* Iterating based on real-world usage

Most importantly, I learned to treat feedback as part of development rather than something that happens after development.

---

# 🔮 Future Direction

Future versions of QuietHaven could explore:

* ⭐ Study-environment ratings
* 🔊 Noise-level information
* 👥 Crowding information
* ⏰ Time-of-day trends
* 📊 Productivity-based feedback
* 👤 Community contributions
* 🔄 More scalable location-data management

These features are not part of the current MVP. They represent directions informed by public testing and user feedback.

---

# 🎯 Project Goal

QuietHaven is ultimately about reducing the time students spend searching for somewhere to study.

A student should be able to open the app and quickly answer:

> **"Where should I study today?"**

without having to search through multiple websites or visit a location only to discover that it does not have what they need.

---

## 📌 Current Release

**QuietHaven v1.0**

**Status:** Early MVP / Public Beta

**15 curated locations**

**Public testing ongoing**

---

Built with ❤️ for students.

