import { content1 } from "../../data/data";
import frontView from '../../media/Front-of-building.jpg'
import Content from "../content/content";
import livingRoom from '../../media/Living-room.jpeg'
import { TextParallaxContentExample } from "../parallaxText/parallaxText";



export const Homepage = () => {


    return (
        <section className="absolute top-0 left-0
        overflow-x-hidden">

            <TextParallaxContentExample
            image={frontView}
            heading='Pheasant Cove'
            subheading='A Brand New Home',
            
            />
            
            <Content
            image={livingRoom}
            {...content1}
            />
        </section>
    )
}