import { z } from 'zod';

export const emailSchema = z.object({
    email: z.string({ required_error: "Please enter a valid email adress"}).email("Please enter a valid email adress"),
    subject: z.string({ required_error: "Please enter a subject"}).min(1, "Please enter a subject").max(40, "Subject must not be longer than 40 characters"),
    message: z.string({ required_error: "Please enter a message"}).min(1, "Please enter a message").max(300, "Message must not be longer than 300 characters"),
})

export type EmailSchema = z.infer<typeof emailSchema>;