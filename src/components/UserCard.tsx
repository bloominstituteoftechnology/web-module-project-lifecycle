import { User } from '../models/User.model'

interface UserCardProps {
    user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <article>
            <header>
                <h3>
                    <a href={user.url} target="__blank" rel="noopener norefferer">{user.username}</a>
                </h3>
                <img src={user.avatar} alt="user avatar" />
            </header>
            <section>
                <ul>
                    {user.followers.map((follower, idx) => {
                        return (
                            <li key={idx}>
                                <div>
                                    <p>{follower.username}</p>
                                    <img src={follower.avatar} alt="follower avatar" />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </article>
    )
}

export default UserCard