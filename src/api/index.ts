import axios from 'axios'

import { Follower, User } from '../models/User.model'

export const BASE_URL = 'https://api.github.com/users'

const fetchFollowers = async (username: string)  => {
    try {
        const followers: Follower[] = []
        axios.get(`${BASE_URL}/${username}/followers`)
            .then(res => {
                res.data.forEach((user: any) => {
                    const { id, login, html_url, avatar_url} = user
                    const follower: Follower = {
                        id,
                        url: html_url,
                        username: login,
                        avatar: avatar_url
                    }
                    followers.push(follower)
                })
                return followers
            })
            .catch(err => {
                throw err
            })
        return followers
        } catch (err) {
            throw err
        }
}

const getUser = async (username: string) => {
    try {
        const fetched_user = await (await axios.get(`${BASE_URL}/${username}`)).data
        console.log(fetched_user)
    } catch (err) {

    }
}

export const fetchUser = async (username: string): Promise<User> => {
    try {
        const user = await axios.get(`${BASE_URL}/${username}`)
            .then(res => {
                const { login, avatar_url, html_url, location, id } = res.data
                const user: User = {
                    username: login,
                    avatar: avatar_url,
                    url: html_url,
                    location,
                    followers: [],
                    id
                }

                // const followers = await 
                return user
            })
            .catch(err => {
                throw err
            })
            try {
                const followers = await fetchFollowers(username)
                user.followers = followers
                return user
            } catch (err) {
                throw err
            }
    } catch (err) {
        throw err
    }
}