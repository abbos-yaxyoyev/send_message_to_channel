import axios from 'axios';
import fp from 'fastify-plugin';
import cron from 'node-cron';
import { ENV } from '../config/config';
import { CounterModel } from '../db/models/counter/counter.model';
import { counterService } from '../service/counter/counter.service';
import { messageService } from '../service/messages/message.service';


async function cronFunction() {
    const increment = await CounterModel.getValue("increment")
    const skipMessage = await CounterModel.getValue("skipMessage")

    const $sort = {
        $sort: {
            type: 1,
            message_id: 1
        }
    }

    const $skip = {
        $skip: skipMessage - 1
    }

    const $limit = {
        $limit: 1
    }

    const $pipeline = [
        $sort,
        $skip,
        $limit
    ]

    let data = await messageService.aggregate($pipeline)
    console.log("data: ", data);

    let message = data.shift()

    if (!message) {
        await counterService.updateOneByQuery({ name: "skipMessage" }, { value: 0 })
        return;
    }

    await sendMessag(message)
}

async function sendMessag(message) {
    console.log("message: ", message);

    let chat_id = -1001772169590
    await axios({
        method: 'POST',
        url: `https://api.telegram.org/bot${ENV.TELEGRAF_TOKEN}/sendMessage`,
        headers: {
            "tent-Type": 'application/json'
        },
        data: {
            chat_id,
            text: `level:   ${message.type}\n\n${message.text}`,
            parse_mode: 'markdown',
        }
    });
}

export async function cronJob() {
    console.log('cron');
    cron.schedule('*/30 * * * * *', cronFunction);
}

export const cronJobPlugin = fp(cronJob)

