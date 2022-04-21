

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function LoggerFunction(ctx, next) {
    try {
        console.log(`From User: ${ctx.from.id}`)
        const start = new Date().getTime();
        // await wait(5000);
        await next()
        const s = (new Date().getTime() - start) / 1000;
        console.log('Response time: %ss', s)
    }
    catch (error) {
        console.log(`Thrown ERROR`)
        console.log(error.message)
    }
}

export const Logger = LoggerFunction
