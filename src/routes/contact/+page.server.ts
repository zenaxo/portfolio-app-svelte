import { error, type Actions } from "@sveltejs/kit";
import nodemailer from 'nodemailer';
import type { PageServerLoad } from "./$types.js";
import { emailSchema } from "$lib/schema/mailschema.js";
import { fail, superValidate, message } from "sveltekit-superforms";
import { zod } from 'sveltekit-superforms/adapters';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import { PRIVATE_SECRETKEY_SERVER_ONLY, EMAIL_PASS } from '$env/static/private';

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'contact@hannessjolander.com',
        pass: EMAIL_PASS
    }
})

const limiter = new RateLimiter({
    IP: [3, 'h'],
    IPUA: [3, 'h'],
    cookie: {
        name: 'contactLimiter',
        secret: PRIVATE_SECRETKEY_SERVER_ONLY,
        rate: [3, 'h'],
        preflight: true
    }
});
export const load: PageServerLoad = async (event) => {
    await limiter.cookieLimiter?.preflight(event);
    return {
        form: await superValidate(zod(emailSchema))
    }
}
export const actions: Actions = {
    sendEmail: async (event) => {
        const form = await superValidate(event, zod(emailSchema));

        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        if (await limiter.isLimited(event)) {
            return message(form, { header: "Oh ooh!", text:'Please waite a couple of minutes before sending another message'}, { status: 429})
        }
        const mailOptions = {
            from: 'contact@hannessjolander.com',
            to: 'contact@hannessjolander.com',
            subject: form.data.subject,
            text: `Message recieved from ${form.data.email}:\n\n${form.data.message}`
        }

        try {
            await transporter.sendMail(mailOptions);
            return message(form, { header: "Thank you!", text:'I have recieved your message and will reply as soon as possible! 😄'});
        } catch(e) {
            console.error('Error sending email: ', error);
            return message(form, { header: 'Oh ooh!', text:'Something went wrong with your request, please try again in a couple of minutes.'}, { status: 500});
        }
    }
};