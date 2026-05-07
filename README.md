# divetracker-web

Blog site for the DiveMesh LoRa diver tracking proof-of-concept.

Built as a static site — no build step required.

## Structure

```
divetracker-web/
├── index.html      # Main blog page
├── style.css       # Deep ocean editorial theme
├── main.js         # Scroll animations
├── _headers        # Cloudflare Pages security & cache headers
├── _redirects      # Cloudflare Pages redirects
└── README.md
```

## Deploy to Cloudflare Pages

1. Push this repository to GitHub at `jscruz/divetracker-web`
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Click **Create a project → Connect to Git**
4. Select the `divetracker-web` repository
5. Configure the build:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (root)
6. Click **Save and Deploy**

No build step, no dependencies, no node_modules. Cloudflare will serve the static files directly.

## Local preview

```bash
# Using Python
python3 -m http.server 8080

# Using Node
npx serve .
```

Then open http://localhost:8080
