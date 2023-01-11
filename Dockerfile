FROM public.ecr.aws/docker/library/node:hydrogen-alpine


ENV PORT 3000

ADD index.js index.js

EXPOSE $PORT

CMD [ "node", "index.js" ]
