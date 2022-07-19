import { useState } from 'react';
import { useRouter } from 'next/router'

function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await fetch("http://localhost:4000/events?category=sports");
        const data = await response.json();
        setEvents(data);
        router.push("/events?category=sports", undefined, { shallow: true })
    }
    return (
        <div>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List if events</h1>
            {events.map((event, id) => {
                return (
                    <div key={id}>
                        <h2>{event.id}  {event.category} {event.date}</h2>
                        <p>{event.description}  | {event.title}</p>


                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default EventList



export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const { queryString } = category ? 'category=sports' : ""
    const response = await fetch("http://localhost:4000/events?" + queryString)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}



