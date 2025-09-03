FROM node:22-alpine

# Installa dipendenze necessarie
RUN apk update && apk add --no-cache git

WORKDIR /app

# Copia package files
COPY package*.json ./
COPY yarn.lock* ./

# Installa dipendenze
RUN npm install

# Copia il codice sorgente
COPY . .

# Build dell'applicazione
RUN npm run build

# Crea utente non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxt

# Cambia ownership
RUN chown -R nuxt:nodejs /app
USER nuxt

# Espone la porta
EXPOSE 3000

# Variabili d'ambiente
ENV PORT=3000
ENV NODE_ENV=production

# Comando di avvio
CMD ["node", ".output/server/index.mjs"]