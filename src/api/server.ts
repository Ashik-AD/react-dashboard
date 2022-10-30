import { createServer, Response } from 'miragejs';
import chats from '../api/chats.json'
import chatContact from "./chatContact.json";
import invocices from './invoice.json'
export default function () {
    return createServer({
        routes() {
            this.get('/api/test/', () => ({
                data: [{ id: 2, text: "hola" }]
            })),
                this.get('api/chat/userprofile', () => ({
                    user_profile: {
                        uid: 728232,
                        user_name: "John Doe",
                        avatar_src: "/src/image/humans/3.png",
                        role: "admin",
                        status: "Online",
                        about: "🥰 I have always thought the actions of men the best interpreters of their thought.✌️"
                    }
                })),
                this.get('/api/chat/chats', () => chats)
            this.get('/api/chat/contacts', () => chatContact)
            this.get('/api/invoices', () => invocices)

        }
    })
}