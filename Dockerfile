FROM oven/bun:canary-alpine@sha256:d685aeca2735b43e439dd55bf26f6b8e0dadd15c212df9a7ed865604a3936da9 as builder
WORKDIR /app
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . .
RUN bun run prisma:generate
RUN bun build --target=bun ./src/server.ts --outfile server.js

FROM gcr.io/distroless/base as runner
WORKDIR /app
COPY --from=builder /usr/local/bin/bun bun
COPY --from=builder /app/server.js .
ENV NODE_ENV production
EXPOSE 3000
CMD ["./bun", "run", "server.js"]
