import { Link } from 'react-router-dom'
import Card from '../shared/Card'

const About = () => {
    return (
        <Card>
            <div className="about">
                <h1>About The Project</h1>
                <p>This is a React app to leave feedback for a product or a service</p>
                <p>Version: 1.0.0</p>

                <p>
                    <Link to="/">Go Back Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default About
