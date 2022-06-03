import FeedbackList from '../FeedbackList'
import FeedbackForm from '../FeedbackForm'
import FeedbackStats from '../FeedbackStats'
import AboutIconLink from './AboutIconLink'

const Home = () => {
    return (
        <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            <AboutIconLink />
        </>
    )
}

export default Home
