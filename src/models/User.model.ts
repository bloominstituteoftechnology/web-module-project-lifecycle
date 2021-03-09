export interface User {
    username: string
    avatar: string
    url: string
    location: string
    followers: Follower[]
}

export interface Follower {
    username: string
    avatar: string
    url: string
}