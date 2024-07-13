
import pheasant from '../../media/pheasant-removebg-preview.png'
import home from '../../media/new-imports/Front-of-building.webp'


const Herobanner2 = () => {

    return (
        <header className="w-screen flex flex-col sm:flex-row
        mt-[8rem]">
            <section className="w-screen md:w-[50vw]">
                <h1>Welcome to pheasant cove</h1>
                <img src={pheasant} className='w-[80vw]
                object-cover ml-auto mr-auto'/>
            </section>
            <section>

            <img src={home} className='w-screen md:w-[50vw] ml-auto mr-auto'
            />                
            </section>
        </header>
    )
}

export default Herobanner2