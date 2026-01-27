# ⌨️ The Typing Game: Arcade Edition

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Database-emerald?style=for-the-badge&logo=supabase)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

## 📸 Preview

| Game Session | Game Over | Leaderboard |
| :---: | :---: | :---: |
| ![Game](https://github.com/user-attachments/assets/93f0510d-545b-4b1b-94b9-2def7506adb3) | ![Stats](https://github.com/user-attachments/assets/020fbe09-b169-4b56-8142-4c4dbf0f7bfa) | ![Ranking](https://github.com/user-attachments/assets/d504670d-019e-4922-9463-ce2a5232fd47) |

---

## 🚀 New Features

* **📊 Global Leaderboard** – Real-time ranking system powered by **Supabase**.
* **🏆 Performance Analytics** – Automatic calculation of **WPM** (Words Per Minute) and **Accuracy** percentage.
* **🕹️ Arcade Initials** – Classic "Enter Initials" system (max 5 uppercase characters) to save your legacy.
* **✨ Cyberpunk UI** – Glassmorphism effects, neon accents, and *JetBrains Mono* typography for a premium terminal feel.
* **⌨️ Full Keyboard Navigation** – Use `TAB` to restart the game and `ENTER` to toggle between the Game and the Leaderboard.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15+** | Core framework and Server Actions for secure database writes. |
| **Supabase** | PostgreSQL database for real-time score storage. |
| **React 19** | Modern state management and high-performance rendering. |
| **CSS Modules** | Custom variables and animations for the "Tokyo Night" theme. |

---

## 🎮 How to Play

1.  **Type** the sentence displayed as fast as you can.
2.  **Visual Cues**: Correct letters turn **green**, mistakes turn **red**.
3.  **Finish**: Once the last character is typed, your stats are instantly calculated.
4.  **Register**: Enter your 5-letter initials and hit **UPLOAD DATA**.
5.  **Dominate**: Check the Global Leaderboard to see if you made the Top 10.

---

## 🔧 Setup

1. Clone the repo: `git clone https://github.com/Gabriel2121621/TheTypingGame.git`
2. Install dependencies: `npm install`
3. Add `.env.local` with your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Launch: `npm run dev`

---

## 🔗 Live Project
Check it out here: [https://the-typing-game-bay.vercel.app/](https://the-typing-game-bay.vercel.app/)

