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
            this.get('/api/6395f168c5b3a64f1bc90862/:collectionName', (_, req: Request<typeof dashboard>) => {
                const {collectionName} = req.params;
                return dashboard[collectionName];
            })
            this.get('/api/6395f17e6a51bc4f704ce219', () => email)
            this.get('/api/6395f1a8c5b3a64f1bc9088e/:collectionName', (sch, req) => {
                const {collectionName} = req.params;
                return chats[collectionName]
            })
            this.get('/api/6395f1bbc5b3a64f1bc9089c', () => invocices)

            // users api endpoint
            this.get('/api/6395f1d06a51bc4f704ce24a/:collectionName', (sch, req: Request<typeof users>) => {
                const {collectionName} = req.params;
                return users[collectionName];
            })
            this.get('/api/6395f1e7c5b3a64f1bc908ba/:collectionName', (sc, req: Request<typeof userProfile>) => {
                const {collectionName} = req.params;
                return userProfile[collectionName];
            })

            this.get("/api/6395f1ff6a51bc4f704ce267/:collectionName", (_, req: Request<typeof pricing>) => {
                const {collectionName} = req.params
                return pricing[collectionName]
            })
            this.get("/api/6395f222c5b3a64f1bc908db/", () => faq)

            this.get('/api/6395f24bc5b3a64f1bc908f4/:type', (sch, req) => {
                const nodeName = req.params.type;
                return chartData[nodeName]
            })

            this.get('/api/6395f2606a51bc4f704ce29c/:type', (sch, req) => {
                const nodeName = req.params.type;
                return rechartData[nodeName];
            })
        }
    })
}