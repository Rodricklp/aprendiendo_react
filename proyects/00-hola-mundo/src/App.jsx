import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: "rodrick",
        name: "Rodrick Frnndz",
        isFollowing: true,
    },
    {
        userName: "jperez",
        name: "Juan Perez",
        isFollowing: false,
    },
    {
        userName: "alopez",
        name: "Ana Lopez",
        isFollowing: true,
    },
]

export function App() {
    return (
        <section className="App">
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        initialIsFollowing={isFollowing}
                        userName={userName}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}