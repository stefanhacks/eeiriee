# eeiriee

Browser game client. Vite + TypeScript + Pixi.js (`pixi.js` is the only runtime dependency).

## Commands

- `npm run dev`: local dev server
- `npm run typecheck`: `tsc`
- `npm run lint`: eslint
- `npm run build`: Vite build into `dist`

Run `typecheck` and `lint` before every push when dependencies are installed. If they can't run (no network for installs), say so in the report instead of skipping silently.

## Git workflow

- Never commit or push to `main`. Always work on a branch.
- Branch names are flat, lowercase, hyphenated, with no slashes: `fix-spin-button`, not `fix/spin-button`. Netlify turns the branch name into the preview URL.
- Push after each requested change.
- Open a pull request only when the user explicitly says to. Never merge; the user merges.

## Netlify

- Site: `eeiriee`. Config lives in `netlify.toml` (build `npm run build`, publish `dist`, Node 22).
- Branch preview: `https://<branch>--eeiriee.netlify.app`
- PR preview: `https://deploy-preview-<pr-number>--eeiriee.netlify.app`
- Production (builds from `main`): `https://eeiriee.netlify.app`
- After every push, give the user the matching URL. State that the link is derived from the branch name and the build status is unconfirmed, unless you actually checked it.
- If the user pastes a failed build log, find the cause first, then fix it.

## Working rules

- Show only changed code unless asked for the full file. Flag risks: performance, breaking changes, browser compatibility.
- Match the existing code style. This codebase is shared by engineers of different levels, so when styles conflict, ask, and prefer the style written by Stefan (the owner, `stefanhacks`).
- Don't invent APIs, config options, or library functions. If unsure something exists, say so.
- Don't add dependencies without stating the trade-off first. Prefer not adding any.
- Watch for machine-written code in the repo; it may be outdated or written under weak instructions. Verify before building on it.
- Never write or sign anything as the user.
