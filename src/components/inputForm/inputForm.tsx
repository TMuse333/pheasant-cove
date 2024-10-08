import React from 'react';
import { useGeneralContext } from '../../context/context';

interface Question {
    question: string;
    placeholder?: string;
    multipleChoices?: boolean;
    choices?: string[];
    isEmail?: boolean;
    isPhoneNumber?: boolean;
    required?:boolean,
    textArea?:boolean
}

interface InputFormProps {
    title?: string;
    description?: string;
    questions: Question[];
}

const InputForm: React.FC<InputFormProps> = ({ title, description, questions }) => {
    const { applicationFormState, setApplicationFormState } = useGeneralContext();

    const handleChange = (question: string, value: string) => {
        setApplicationFormState((prevState) => ({
            ...prevState,
            [question]: value
        }));
    };

    //title same size

    //add rent or owner
    

    // useEffect(() => {
    //     console.log(applicationFormState);
    // }, [applicationFormState]);

    return (
        <div className="text-white w-[80vw] lg:w-[50vw] max-w-[400px] p-6 rounded-lg ml-auto mr-auto">
            {title && <h2 className="text-3xl mb-4 sm:text-3xl md:text-3xl">{title}</h2>}
            {description && <p className="text-lg mb-6 w-[100%] text-left md:text-xl sm:text-xl">{description}</p>}
            <ul className="pt-5 text-black">
                {questions.map((question, index) => (
                    <li key={index} className="mb-4 w-full max-w-[400px]">
                        <label className="block text-left mb-2 text-lg md:text-xl">
                            {question.question}
                        </label>
                        {question.multipleChoices ? (
                            <div className="flex flex-wrap">
                                {question.choices?.map((choice, i) => (
                                    <div key={i} className="mr-4 mb-2">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={applicationFormState[`${question.question}-${choice}`] === 'true'}
                                                onChange={(e) => handleChange(`${question.question}-${choice}`, e.target.checked ? 'true' : '')}
                                            />
                                            <span className="text-lg md:text-xl">{choice}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ) : question.textArea ? (
                            <textarea
                                placeholder={question.placeholder}
                                value={applicationFormState[question.question] || ''}
                                onChange={(e) => handleChange(question.question, e.target.value)}
                                className="w-full p-2 rounded max-w-[1500px] mr-auto ml-auto text-lg md:text-xl"
                                rows={4} // You can adjust the number of rows as needed
                            />
                        ) : (
                            <input
                                type="text"
                                placeholder={question.placeholder}
                                value={applicationFormState[question.question] || ''}
                                onChange={(e) => handleChange(question.question, e.target.value)}
                                className="w-full p-2 rounded max-w-[1500px] mr-auto ml-auto text-lg md:text-xl"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default InputForm;
