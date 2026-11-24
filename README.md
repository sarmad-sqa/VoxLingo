# 🎵 VoxLingo

### Urdu to English Translation | Voice Preview | Synchronized Captions | MP4 Download

VoxLingo is a web-based application designed to convert Urdu text into English and provide voice playback with synchronized captions. Users can preview the translated content, record the output, and download it as an MP4 video.

## 🌐 Live Demo

[Visit VoxLingo](https://vox-lingo.vercel.app/)

## ✨ Features

- **Urdu to English Translation:** Convert Urdu text into English.
- **English Captions:** Display translated text as captions.
- **Voice Preview:** Listen to the translated content.
- **Audio Recording:** Record browser tab audio.
- **MP4 Video Download:** Record and download the output as a video.
- **Synchronized Experience:** Combine captions and voice in the recorded output.

## 🚀 How to Use

1. Open the [VoxLingo website](https://vox-lingo.vercel.app/).
2. Enter your Urdu text.
3. Click the translation button.
4. Preview the translated English content.
5. Listen to the voice output.
6. Click the recording button to record and download the MP4 video.
7. When prompted by the browser, select **This Tab** and enable **Share tab audio**.

**Note:** Browser permission is required to capture tab audio during recording. The recording displays the designated content area rather than the entire screen.

## 🛠️ Technology

The project is currently maintained as a web application with its implementation in `index.html`.

For exact framework, library, and API details, refer to the source code.

## 🔤 Translation & Troubleshooting

Translation tries **Google Translate** first, then falls back to **MyMemory** (with an email quota parameter). Results are cached in `sessionStorage` for the browser session, and 429 rate-limit responses are retried with short backoff. If both providers are rate-limited, wait about a minute and try again.

## 🔗 Project Links

- **Live Website:** https://vox-lingo.vercel.app/
- **GitHub Repository:** https://github.com/sarmad-sqa/VoxLingo

## 👨‍💻 Developer

**Sarmad Sarwar**

QA Engineer | Software Quality Assurance | Automation Testing

- GitHub: https://github.com/sarmad-sqa
- LinkedIn: https://linkedin.com/in/sarmad-sarwar-98227a167

---

*VoxLingo — Turning Urdu Text into English Voice and Captions.*
