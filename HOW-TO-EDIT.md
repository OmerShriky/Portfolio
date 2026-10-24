# How to edit your portfolio

Everything you'll want to change lives in **one file: `content.js`**. Open it in any text editor (Notepad, TextEdit, VS Code), change the text between the quotes, save, and refresh the page.

## Folder layout

```
website/
├── index.html      page structure (no need to touch)
├── style.css       design (no need to touch)
├── script.js       behaviour (no need to touch)
├── content.js      ← YOUR CONTENT: text, projects, videos, links
├── assets/         images (profile.jpg, contact-bg.jpg, video thumbnails)
├── cv/             your CV PDFs
└── videos/         your video files (.mp4)
```

## Replace the CVs
Put your real PDFs in `cv/` with these exact names, replacing the placeholders. The CV buttons open them as a preview in a new browser tab, where visitors can also download them:
- `Omer_Shriky_CV_EN.pdf`
- `Omer_Shriky_CV_HE.pdf`

(Or use other names and update `cvEnglish` / `cvHebrew` in `content.js`.)

## Add or edit a project
In `content.js`, find `projects: [`. Each project is one `{ ... },` block. To add one, copy a whole block, paste it after the last one and edit it:

```js
{
  title: "Credit Card Fraud Detection",
  tags: ["Predictive model", "Classification"],
  tools: ["Python", "scikit-learn"],
  description: "Can we flag fraudulent transactions in real time? 280k card transactions.",
  results: ["Recall 0.92 at 1% false-positive rate", "Top 5 fraud drivers identified"],
  link: "https://colab.research.google.com/drive/YOUR_NOTEBOOK_ID",
},
```

`link` is your Google Colab notebook. In Colab click **Share → General access: Anyone with the link → Copy link**, and paste it here.

The order in the file is the order on the page. Delete a block to remove a project.

## Add or edit a video
Find `videos: [`. Each video is one `{ ... },` block:

```js
{
  title: "Fraud Detection walkthrough",
  description: "A 3-minute tour of the model, from raw transactions to the final dashboard.",
  video: "videos/fraud.mp4", duration: "3:12", thumbnail: "assets/fraud-thumb.jpg",
},
```

- **Title** shows above the video; **description** shows under it (and in the popup). Keep the description to one or two sentences. Leave it `""` to show nothing.
- **Video file:** copy the `.mp4` into `videos/` and write `"videos/your-file.mp4"`. Keep files small (under ~50 MB) if you host on GitHub.
- **YouTube instead:** paste the YouTube link, e.g. `video: "https://www.youtube.com/watch?v=abc123XYZ00"`. Unlisted videos work too and keep the site light.
- `thumbnail` is optional: put an image in `assets/` and point to it, or leave `""`.

Clicking a video opens it in a popup in the middle of the screen with the page dimmed behind it. Esc, ✕ or clicking outside closes it. The video player still has its own full-screen button if a viewer wants it.

The projects row and the videos row each have their own arrows, one on each side of the row.

## Other things you can change in `content.js`
- `about`: the paragraphs of your story (one string per paragraph).
- `education`, `experience`: add a `{ title: "...", place: "..." },` line for each entry.
- `stack`: your skills. Icons available: sql, python, excel, powerbi, math, stats, ml, ai, tableau, r, chart.
- `links`: GitHub, LinkedIn, Kaggle URLs.
- `email`, `emailSubject`, `whatsappNumber`, `whatsappMessage`.
- `photo`: replace `assets/profile.jpg` to change your picture.
- `googleAnalyticsId`: your Google Analytics ID (see below).

## Visitor tracking (Google Analytics)
The site already contains Google Analytics (GA4) code. It stays off until you add your ID.

**1. Get your Measurement ID (one time, free)**
1. Go to [analytics.google.com](https://analytics.google.com) and sign in with your Google account.
2. Click **Start measuring** (or Admin ⚙ → **Create** → **Property**). Name the account and property, e.g. "Omer Portfolio", and pick your time zone and currency.
3. When asked to choose a platform, pick **Web**. Enter your site address (e.g. `omershriky.github.io`) and a stream name, then click **Create stream**.
4. The page that opens shows a **Measurement ID** that looks like `G-AB12CD34EF`. Copy it. (You can find it again any time under Admin → Data streams → your stream.)

**2. Paste it into the site**
Open `content.js`, find this line near the top and paste your ID between the quotes:

```js
googleAnalyticsId: "G-AB12CD34EF",
```

Save, and upload the file to GitHub if the site is live. Tracking starts right away. To turn it off again, set it back to `""`.

**3. What you'll see**
Visitor numbers, countries and cities, devices, and where people came from (LinkedIn, Google, direct) are tracked automatically. The site also sends these events:

| Event | When it fires | Details included |
|---|---|---|
| `cv_open` | Someone opens a CV | `language` (english/hebrew), `location` (top_bar/contact) |
| `project_click` | "View project" is clicked | `project_title`, `link_url` |
| `video_play` | A video is opened | `video_title`, `video_source` |
| `contact_click` | Email or Text me is clicked | `method` (email/whatsapp) |
| `social_click` | GitHub, LinkedIn or Kaggle is clicked | `network` |

To watch it live, open your site in another tab and go to **Reports → Realtime** in Google Analytics. Full reports for a day show up in **Reports → Engagement → Events** within about 24 hours.

To see details like the project title or CV language in reports, register them once: Admin → **Custom definitions** → **Create custom dimension**, scope **Event**, and enter the parameter name (for example `project_title`, `language`, `video_title`, `method`, `network`). Dimensions only collect data from the moment you create them, so it's worth doing this right after setup.

Your own visits get counted too. Google Analytics doesn't tell you who a visitor is by name.

## If the page goes blank after an edit
It's almost always a missing comma or quote in `content.js`. Check the last thing you changed: every `{ ... }` block and every list item should end with a comma, and every text value must be inside `"quotes"`. If your text contains a `"`, use `’` or `\"` instead.

## Preview on your computer
Double-click `index.html` to open it in your browser. Everything works this way, including the carousels and videos.

## Publish for free (GitHub Pages)
1. Create a new public repository on GitHub, e.g. `OmerShriky.github.io`.
2. Upload everything inside the `website/` folder to it (Add file → Upload files).
3. Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)` → Save.
4. Your site will be live at `https://omershriky.github.io`.

After that, editing is: open `content.js` on GitHub, click the pencil icon, edit, **Commit changes**. The live site updates within a minute.
