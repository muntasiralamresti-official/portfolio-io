# Portfolio CMS Setup

## Environment variables

Add these variables to the deployment environment:

- `ADMIN_PASSWORD` — the password used at `/admin/login`.
- `ADMIN_SESSION_SECRET` — a long random secret used to sign the admin session cookie.
- `GITHUB_CONTENT_TOKEN` — a fine-grained GitHub token for this repository with **Contents: Read and write** permission.

The CMS stores portfolio content in `data/portfolio.json`. Saving from the admin panel creates a Git commit on the `master` branch. If the repository is connected to Vercel, that push can trigger a new deployment automatically.

## Admin

Open:

`/admin/login`

The panel manages:

- profile and homepage content
- projects
- skills
- experience
- certificates
- education
- services
- social links

Project statistics are calculated from the content instead of being manually maintained.
