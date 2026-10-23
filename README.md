# SSA website

The public website for SSA: Sanjay Satpal & Associates (Chartered Accountants), SSA Real Estate, SSA Capital and the Archana Foundation.

It is a plain static site: HTML pages, one stylesheet, one small script and two data files. There is no build step and nothing to install. Vercel serves the files exactly as they are in this repository.

## Folder structure

```
/
├── index.html                    Home                       →  /
├── our-story.html                Our Story                  →  /our-story
├── real-estate.html              Real Estate & Hospitality  →  /real-estate
├── chartered-accountants.html    Chartered Accountants      →  /chartered-accountants
├── ssa-capital.html              SSA Capital                →  /ssa-capital
├── people.html                   People                     →  /people
├── foundation.html               Archana Foundation         →  /foundation
├── news.html                     News & Media               →  /news
├── 404.html                      Shown for broken links
├── assets/
│   ├── css/site.css              Shared styles, mobile menu, photo slots
│   ├── js/site.js                Loads photos, mobile menu, portfolio & news lists
│   ├── data/
│   │   ├── portfolio.json        Portfolio companies on the SSA Capital page
│   │   ├── projects.json         Real estate projects on the Real Estate page
│   │   └── news.json             Articles on the News page
│   └── images/                   ← ALL PHOTOS GO HERE (see PHOTOS.md)
│       ├── home/
│       ├── people/               One portrait per person, used on every page
│       ├── real-estate/
│       ├── chartered-accountants/
│       ├── foundation/
│       ├── news/
│       └── share/og-image.jpg    Link preview image for WhatsApp / LinkedIn
├── favicon.svg
├── robots.txt
├── vercel.json                   Clean URLs and caching
├── PHOTOS.md                     Exact file name and size for every photo slot
└── README.md
```

## Putting it on Vercel (one time)

1. Create a new GitHub repository (private is fine) and upload the contents of this folder to its root, so `index.html` sits at the top level, not inside a sub-folder.
   - Easiest: on github.com open the empty repo, choose **uploading an existing file**, drag in everything from this folder, and commit.
   - Or from a terminal inside this folder:
     ```
     git init
     git add .
     git commit -m "SSA website"
     git branch -M main
     git remote add origin https://github.com/<your-account>/<repo-name>.git
     git push -u origin main
     ```
   - The `.gitignore` and `.gitkeep` files start with a dot and may be hidden in Finder/Explorer. Include them if you can, but the site works without them.
2. In Vercel: **Add New → Project → Import** the repository.
3. On the configure screen:
   - **Framework Preset:** Other
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** leave empty (override it to empty if Vercel fills one in)
   - **Output Directory:** leave empty / `.`
   - **Install Command:** leave empty
4. Click **Deploy**. You get a `*.vercel.app` address in under a minute.
5. Connect your domain: Project → **Settings → Domains** → add your domain (and `www.` version). Vercel shows the DNS records to add at your domain registrar. HTTPS is automatic.

From then on, every push to `main` redeploys the site automatically.

## Adding photos

There are 60 photo slots across the site. **PHOTOS.md lists every one** with the exact file name, the folder and the recommended size.

1. Name the photo exactly as listed, e.g. `agam-gupta.jpg`.
2. Put it in the listed folder, e.g. `assets/images/people/`.
3. Commit and push (or upload through github.com: open the folder, **Add file → Upload files**).

The site checks for each photo automatically. Slots without a photo stay as the green placeholder, so you can add photos in batches. JPG, WebP, JPEG and PNG all work. Please compress photos first (for example with squoosh.app): aim for under 300 KB each.

## Editing text

All wording is in the `.html` files. Open a page in any text editor (or edit directly on github.com with the pencil icon), search for the sentence you want to change, edit it and commit. Avoid deleting the surrounding `<...>` tags.

### Placeholders still to fill

These bracketed placeholders are in the pages. Search for each one and replace it, brackets included:

**people.html**

- `[Name]`
- `[Role]`

**foundation.html**

- `[Registration details]`

**news.html**

- `[Month Year]`
- `[Hotel opening or project milestone]`

Also check `assets/data/news.json` for the two placeholder news items (Archana Foundation, SSA Real Estate), and the phone number `+91 11 4658 0000` and email addresses, which are placeholders across the site.

## Adding portfolio companies

Open `assets/data/portfolio.json` and add an entry to `companies`:

```json
{
  "name": "Company name",
  "description": "One line on what they do",
  "sector": "deep",
  "exited": false
}
```

`sector` must be one of the filter ids at the top of the file: `deep` (Deep tech & AI), `fin` (Fintech), `con` (Consumer), `health` (Healthcare), `ind` (Industrial & mobility). Set `"exited": true` to show the Exited tag. Mind the commas between entries.

## Adding real estate projects

Open `assets/data/projects.json` and add an entry to `projects`:

```json
{
  "name": "Project name",
  "type": "Warehousing & logistics",
  "location": "Manesar, Gurugram",
  "status": "completed",
  "year": "2019",
  "size": "2,50,000 sq ft",
  "photo": "manesar-warehouse"
}
```

`status` is `completed` or `development` (shown as "Under development"). `type` is free text, for example Farmhouses, Warehousing & logistics, Commercial or Hospitality. Any field can be left as `""` and is simply not shown. The photo goes in `assets/images/real-estate/projects/` as `<photo>.jpg`.

## Adding news

Open `assets/data/news.json` and add an entry at the top of `items` (newest first):

```json
{
  "business": "seafund",
  "tag": "Seafund",
  "title": "Headline of the article",
  "source": "Publication · Month Year",
  "url": "https://link-to-the-article"
}
```

`business` must be one of: `ssa`, `seafund`, `sgre`, `foundation`.

## Checking changes on your computer

Because the lists load from JSON files, open the site through a small local server rather than double-clicking the HTML. If you have Node installed:

```
npx serve .
```

then visit the address it prints. This mirrors Vercel's clean URLs, so links like `/our-story` work. (Python's `python3 -m http.server` also works, but there you need to add `.html` to page addresses.)

## Compliance notes

The copy was written with these rules in mind. Keep them in mind when editing:

- **ICAI (chartered accountants page):** no client names or logos, no testimonials, no superlatives such as "leading" or "best" and no fee information.
- **SEBI AIF (SSA Capital and funds):** no returns or performance figures; fund information is for information only and is not an offer. Keep the private-placement disclaimer in place.
- **RERA:** any project offered for sale must show its RERA registration number.
