FROM oven/bun:canary-alpine@sha256:76c0955c7252745cf876c7db0eaceaa3c5f410be680bb608c277ca10c7f2f9db as builder
WORKDIR /app
COPY . .
RUN bun install
RUN bun run prisma:generate
RUN bun build --minify --target=bun ./src/server.ts --outfile server.js

FROM oven/bun:canary-alpine@sha256:76c0955c7252745cf876c7db0eaceaa3c5f410be680bb608c277ca10c7f2f9db as runner
WORKDIR /app
COPY --from=builder /app/server.js .
ENV NODE_ENV production
EXPOSE 3000
CMD ["bun", "run", "./server.js"]
