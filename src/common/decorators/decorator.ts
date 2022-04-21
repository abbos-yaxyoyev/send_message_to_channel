import fp from 'fastify-plugin';

async function pl(instance, options, next) {

  // global error handler
  instance.setErrorHandler((error, request, reply) => {
    console.log("request: ", request);
    console.log("reply: ", reply);
    console.log("error: ", error);
  });

  next();
}

export const globalErrorDecorator = fp(pl);
