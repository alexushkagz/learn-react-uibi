FROM node:alpine
RUN npm i -g create-react-app
WORKDIR /app
RUN npx create-react-app react_app
WORKDIR /app/react_app
EXPOSE 3000
CMD ["npm", "start"]