import { createServer } from 'miragejs';
import meeting from './meetingSchedule.json'
import members from './members.json'
import chats from '../api/chats.json'
import chatContact from "./chatContact.json";
import invocices from './invoice.json';
import users from './users.json'
import userProject from './projects.json';
import loggedDevice from './loginHistory.json';
import userProfile from './user.json';
import teams from './teams.json'
import userProjects from './userProjects.json'
import userConnections from './userConnections.json'
import userTeams from './userTeams.json';
import userAPIkeys from './apilist.json';
import paymentMethods from './paymentMethod.json'
import notificationSettings from './notificationSetting.json'
import connectedAccounts from './connectedAccounts.json'
import pricing from './pricing.json'
import faq from './faq.json'
import sales from './sales.json'
export default function () {
    return createServer({
        routes() {
            this.get('/api/meeting/list', () => meeting)
            this.get('/api/sales/:category', (schema, req) => {
                const category = req.params.category;
                if (category === 'byCountry') {
                    return sales.salesByCountry;
                }
                return "oops";
            })
            this.get('api/chat/userprofile', () => ({
                user_profile: {
                    uid: 728232,
                    user_name: "John Doe",
                    avatar_src: "/src/image/humans/3.png",
                    role: "admin",
                    status: "Online",
                    about: "🥰 I have always thought the actions of men the best interpreters of their thought.✌️"
                }
            }))
            this.get('/api/members', () => members)
            this.get('/api/chat/chats', () => chats)
            this.get('/api/chat/contacts', () => chatContact)
            this.get('/api/invoices', () => invocices)
            this.get('/api/users/list', () => users)
            this.get('/api/users/projects', () => userProject)
            this.get('/api/users/logged-recent', () => loggedDevice)
            this.get('/api/users/notification/setting', () => notificationSettings)
            this.get('/api/users/connections', () => connectedAccounts)
            this.get('/api/user-profile', () => userProfile)
            this.get('/api/payment/methods', () => paymentMethods)
            this.get('/api/user-profile/profile/connections', () => {
                const filterData = userConnections.slice(0, 5).map((item) => ({
                    id: item.id,
                    avatar: item.avatar,
                    fullName: item.name,
                    totalConnection: item.connections,
                    isFriend: item.isConnected
                }))
                return filterData;
            })
            this.get('/api/user-profile/profile/teams', () => teams)
            this.get('/api/user-profile/projects', () => userProjects)
            this.get('/api/user-profile/connections', () => userConnections)
            this.get('/api/user-profile/teams', () => userTeams)
            this.get('/api/user-profile/essential', () => ({
                avatar: userProfile.about.profileAvatar,
                fullName: userProfile.about.fullName,
                designation: userProfile.about.job,
                location: userProfile.about.address.location,
                joinedDate: userProfile.about.joinAt
            }))
            this.get('/api/account-settings/personal-form', () => ({
                avatar: userProfile.about.profileAvatar,
                firstName: userProfile.about.fullName.split(" ")[0],
                lastName: userProfile.about.fullName.split(" ")[1],
                address: userProfile.about.address.fullAddress,
                email: userProfile.about.contacts.email,
                phoneNumber: userProfile.about.contacts.phone,
                state: userProfile.about.address.location,
                zipcode: userProfile.about.address.zipcode,
                organization: userProfile.about.organization,
                country: userProfile.about.address.country,
                language: userProfile.about.language,
                currency: userProfile.about.currency,
            }))
            this.get('/api/account-settings/apikey', () => userAPIkeys)
            this.get('/api/account-settings/payment/methods', () => paymentMethods)
            this.get('/api/account-settings/notification/setting', () => notificationSettings)
            this.get('/api/account-settings/connections', () => connectedAccounts)
            this.get("/api/pricing/table", () => pricing.pricingTable)
            this.get("/api/pages/faq", () => faq)
        }
    })
}