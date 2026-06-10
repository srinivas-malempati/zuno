# Zuno ✨ — Learn with Zuri

An AI-powered learning app for kids in Kindergarten to Grade 2. Built with love by a dad for his son — and every Indian-American kid who deserves an app that speaks their world.

---

## 🌟 Features

- 🔢 **Visual Math** — Emoji fruits for counting, big bold numbers for harder problems
- ✏️ **Spelling Quiz** — With hints and voice input (say the word out loud!)
- 🔊 **Zuri Speaks** — AI tutor reads every question aloud using Web Speech API
- 🎤 **Mic Input** — Kids can speak spelling answers instead of typing
- 💬 **Ask Zuri** — AI chat powered by Groq (kids can ask anything)
- 🎓 **3 Grades** — Kindergarten, Grade 1, Grade 2
- 🔥 **3 Difficulty Levels** — Easy, Medium, Hard
- ⭐ **Stars & Streaks** — Keeps kids motivated
- 🎉 **Confetti & Sounds** — Celebrates every correct answer
- 🇮🇳 **Indian Cultural Context** — Cricket, Diwali, Dadi, Samosas in questions

---

## 📁 Folder Structure

```
zuno/
├── api/
│   └── zuri.js        ← Groq serverless function for Zuri chat
├── public/
│   └── index.html     ← Entire app (HTML + CSS + JS)
└── vercel.json        ← Vercel routing config
```

---

## 🚀 Deploy to Vercel

### Step 1 — Upload to GitHub
- Create a new repo named `zuno` on github.com
- Upload all 3 files maintaining the folder structure:
  - `api/zuri.js`
  - `public/index.html`
  - `vercel.json`

### Step 2 — Connect to Vercel
- Go to [vercel.com](https://vercel.com)
- Click **New Project** → Import your `zuno` GitHub repo
- Framework Preset: **Other**
- Root Directory: leave blank
- Click **Deploy**

### Step 3 — Add Groq API Key
- In your Vercel project → **Settings** → **Environment Variables**
- Add the following:

| Name | Value |
|------|-------|
| `GROQ_API_KEY` | `your_groq_api_key_here` |

- Click **Save** → **Redeploy**

### Step 4 — Done! 🎉
Your Zuno app is live at `https://zuno.vercel.app`

---

## 🔑 Getting a Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign in (free account)
3. Click **API Keys** → **Create API Key**
4. Copy and paste into Vercel environment variables

> **Note:** Quiz mode (Math + Spelling) works without any API key. The Groq key is only needed for the **Ask Zuri chat** feature.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Voice Output | Web Speech API (SpeechSynthesis) |
| Voice Input | Web Speech API (SpeechRecognition) |
| AI Chat | Groq API (llama-3.3-70b-versatile) |
| Deployment | Vercel (serverless functions) |
| Fonts | Google Fonts (Fredoka One, Nunito) |

---

## 📚 Curriculum Coverage

### Math
| Grade | Easy | Medium | Hard |
|-------|------|--------|------|
| Kindergarten | Single digit + - | Slightly bigger + - | Up to 9 + - |
| Grade 1 | Single digit + - | Up to 13 + - | 2-digit addition & subtraction |
| Grade 2 | 2-digit + - | Multiplication + 2-digit | Larger multiplication + division |

### Spelling
| Grade | Easy | Medium | Hard |
|-------|------|--------|------|
| Kindergarten | 3-letter words (CAT, DOG) | 4-letter words (CAKE, FISH) | Blends (MOON, RAIN) |
| Grade 1 | Simple 4-letter | 5-letter words | 6-letter words |
| Grade 2 | 5-letter words | 7-letter words | 8-9 letter words |

---

## 👨‍💻 Built By

**Srinivas Malempati**
QA Manager with 17 years experience • Solo AI app builder
- GitHub: [github.com/msrinivas6](https://github.com/msrinivas6)
- LinkedIn: [linkedin.com/in/srinivas-malempati](https://linkedin.com/in/srinivas-malempati)

---

## 💡 Roadmap

- [ ] Parent dashboard with progress tracking
- [ ] Login / save progress across sessions
- [ ] More subjects (Science, Telugu words)
- [ ] Multiplication tables practice mode
- [ ] PWA support (install on home screen)
- [ ] Leaderboard for siblings/classmates

---

*Built with ❤️ for Indian-American kids everywhere*
