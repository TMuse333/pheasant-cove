
import front from '../../media/Front-of-building.jpg'
import bathroom1 from '../../media/Bathroom-1.jpeg'
import bathroom2 from '../../media/Bathroom-2.jpeg'
import kitchen from '../../media/Kitchen.jpeg'
import livingRoom from '../../media/Living-room.jpeg'
import lakeView from '../../media/lake-view.jpeg'

import { TextParallaxContentExample } from '../parallaxText/parallaxText'



export const DisplayPage = () => {

const images = [
    {
       url:front,
       alt:'Image 1' 
    },
    {
        url:bathroom1,
        alt:'Image 2' 
     },
     {
        url:bathroom2,
        alt:'Image 3' 
     },
     {
        url:kitchen,
        alt:'Image 1' 
     },
]

    return (
        <section className="absolute top-0 left-0">

                <TextParallaxContentExample
                image={front}
                hasDestination={true}
                title='An Excellent Home'
                description={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati reprehenderit quidem laudantium ducimus tempora quam suscipit natus omnis quisquam magnam culpa possimus quia maiores, libero totam eaque dolorum harum nostrum voluptatibus ipsa laborum! Repellendus incidunt eius architecto dolore vel.']}
                subheading='A nice quiet area'
                heading='Welcome to Pheasant Cove'
                destination='contact'
                />

        </section>
    )
}