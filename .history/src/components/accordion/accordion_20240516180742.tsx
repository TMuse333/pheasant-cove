import react, {useState} from 'react'


interface Props {
    text: {
        title:string,
        description: string
    }[],
    hasIntro:boolean,
    intro?: string | null,
    description?: string | null
}

const Accordion: React.FC<Props> = ({text,
hasIntro,intro,description}) => {

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

     function handleSectionClick(index:number){
        if(expandedIndices.includes(index)){
            const newExpandedIndices = expandedIndices.filter((i) => i !== index);
            setExpandedIndices(newExpandedIndices);
        }
        else{
            const newExpandedIndices = [...expandedIndices,index]
            setExpandedIndices(newExpandedIndices)
        }
     }

    return (
        <>
        <article className='flex flex-col justify-start items-center
        mb-5'>

       
        {hasIntro && (
            <div>
            <h1>{intro}</h1>
            <p className='text-left  md:text-center pl-4 pr-5 mt-5
           w-[100%] max-w-[900px]'>{description}</p>
            </div>
        )}
        <section className='mt-[3rem]'>
            {text.map((text,index:number) => (
                <div key={index}
                onClick={()=>handleSectionClick(index)}
                className={`border-b-4 border-blue-400 p-3 mb-3 transition-all
                w-[80%] ml-auto mr-auto
                hover:bg-blue-400 hover:rounded-lg max-w-[500px]
                flex flex-col justify-center items-center ${expandedIndices.includes(index) ? 'bg-blue-400 rounded-lg' : ''}`}>
                    <h2 className='mb-3 mr-auto pl-4 '
                    >{text.title}</h2>
                    <p   onClick={()=>handleSectionClick(index)}
                    className={`
                     duration-500 bg-blue-500 text-left
                      w-[50%] pl-5 pr-5 rounded-md
                      sm:w-[100%]  max-w-[500px]
                   
                     ${expandedIndices.includes(index) ?
                         'h-[250px] overflow-scroll pt-4 transition-[height]' : 'h-[0px] overflow-hidden text-blue-200 pt-0'}`}
                    >{text.description}</p>
                </div>
            ))}

        </section>
        </article>
        </>
    )
}

export default Accordion