import { createServer, Response } from 'miragejs';
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
export default function () {
    return createServer({
        routes() {
            this.get('/api/test/', () => ({
                data: [{ id: 2, text: "hola" }]
            }))
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
            this.get('/api/chat/chats', () => chats)
            this.get('/api/chat/contacts', () => chatContact)
            this.get('/api/invoices', () => invocices)
            this.get('/api/user/users', () => users)
            this.get('/api/user/projects', () => userProject)
            this.get('/api/user/logged-recent', () => loggedDevice)
            this.get('/api/user-profile', () => userProfile)
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
        }
    })
}