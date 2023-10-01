FROM oven/bun@sha256:fbeaf8a2fb8440bf9c5d32709b0ebef79d2e748b2142354bd559e061f856e7a1 as builder
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .
RUN bun run build

FROM ubuntu:latest@sha256:b060fffe8e1561c9c3e6dea6db487b900100fc26830b9ea2ec966c151ab4c020 as runner
WORKDIR /app
COPY --from=builder /app/server .
CMD ["./server"]
