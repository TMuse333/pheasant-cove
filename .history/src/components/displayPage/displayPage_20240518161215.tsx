
import front from '../../media/Front-of-building.jpg'
import { TextParallaxContentExample } from '../parallaxText/parallaxText'



export const DisplayPage = () => {

    return (
        <section className="absolute top-0 left-0">
                <TextParallaxContentExample
                image={front}
                hasDestination={true}
                title='An Excellent Home'
                description={}
        </section>
    )
}