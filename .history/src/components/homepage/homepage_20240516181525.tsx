import { content1, content2 } from "../../data/data";
import frontView from '../../media/Front-of-building.jpg'
import Content from "../content/content";
import livingRoom from '../../media/Living-room.jpeg'
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
import lake from '../../media/lake-view.jpeg'
import Accordion from "../accordion/accordion";


export const Homepage = () => {


    return (
        <section className="absolute top-0 left-0
        overflow-x-hidden">

            <TextParallaxContentExample
            image={frontView}
            heading='Pheasant Cove'
            subheading='A Brand New Home'
            hasDestination={false}
            title=''
            description={
                []
            }
            destination=''
            />
            
            <Content
            image={livingRoom}
            {...content1}
            />

            <Content
            image={lake}
            {...content2}
            customText={<Accordion
            hasIntro={true}
            intro='More information'
            description='This is a newly built house
            thats never been used before!'/>}


        </section>
    )
}