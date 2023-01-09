//@ts-nocheck
import { createServer, Request } from 'miragejs';
import email from './emails.json'
import chats from '../api/chats.json'
import invocices from './invoice.json';
import users from './users.json'
import userProfile from './user.json';
import pricing from './pricing.json'
import faq from './faq.json'
import chartData from './chartData.json'
import rechartData from './rechartData.json'
import dashboard from './dashboard.json'

type Request<T> = {
    params: Record<string, keyof T>
}
export default function () {
    return createServer({
        routes() {
            this.get('/api/dashboards/:collectionName', (_, req: Request<typeof dashboard>) => {
                const {collectionName} = req.params;
                return dashboard[collectionName];
            })
            this.get('/api/emails/', () => email)
            this.get('/api/chats/:collectionName', (sch, req) => {
                const {collectionName} = req.params;
                return chats[collectionName]
            })
            this.get('/api/invoices/', () => invocices)

            // users api endpoint
            this.get('/api/users/:collectionName', (sch, req: Request<typeof users>) => {
                const {collectionName} = req.params;
                return users[collectionName];
            })
            this.get('/api/user_profile/:collectionName', (sc, req: Request<typeof userProfile>) => {
                const {collectionName} = req.params;
                return userProfile[collectionName];
            })

            this.get("/api/pricing/:collectionName", (_, req: Request<typeof pricing>) => {
                const {collectionName} = req.params
                return pricing[collectionName]
            })
            this.get("/api/faq/", () => faq)

            this.get('/api/charts/:type', (sch, req) => {
                const nodeName = req.params.type;
                return chartData[nodeName]
            })

            this.get('/api/rechart/:type', (sch, req) => {
                const nodeName = req.params.type;
                return rechartData[nodeName];
            })
        }
    })
}