# Environment & commands
- Use Node 20+, pnpm 9+.
- Install: pnpm i
- Dev: pnpm dev
- Migrate DB: pnpm db:migrate
- Seed: pnpm db:seed
- Lint: pnpm lint
- Types: pnpm typecheck
- Test: pnpm test
- E2E: pnpm e2e

# Build & test policy
- Before finishing any task, run: pnpm lint && pnpm typecheck && pnpm test
- If API or UI changed, also run: pnpm e2e
- Repo must end in a clean git state with all tests passing.

# Style & conventions
- TypeScript strict mode everywhere.
- REST endpoints under /api/v1.
- Use Zod for request validation.

# PR/commit guidance
- Commit directly to main in this sandbox (no branches).
- Conventional commit style, include scope (e.g., feat(api): create tasks).
- PR message (if created) must summarize endpoints/UI and list tests executed.
