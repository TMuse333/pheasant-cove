import React from 'react';

interface Question {
    question: string;
    placeholder?: string;
    multipleChoices?: boolean;
    choices?: string[];
}

interface InputFormProps {
    title?: string;
    description?: string;
    questions: Question[];
}

const InputForm: React.FC<InputFormProps> = ({ title, description, questions }) => {
    return (
        <div className="text-white w-[80vw] max-w-[1500px] mx-auto my-8 p-6 rounded-lg
        ml-auto mr-auto">
            {title && <h2 className="text-3xl mb-4 sm:text-4xl md:text-5xl">{title}</h2>}
            {description && <p className="text-lg mb-6 w-[100%] text-left
            md:text-2xl sm:text-xl
            ">{description}</p>}
            <ul className="pt-5">
                {questions.map((question, index) => (
                    <li key={index} className="mb-4 w-full max-w-[1500px]">
                        <label className="block text-left mb-2 text-lg md:text-xl ">
                            {question.question}
                        </label>
                        {question.multipleChoices ? (
                            <div className="flex flex-wrap">
                                {question.choices?.map((choice, i) => (
                                    <div key={i} className="mr-4 mb-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span className="text-lg md:text-xl ">{choice}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <input
                                type="text"
                                placeholder={question.placeholder}
                                className="w-full p-2 rounded max-w-[1500px] mr-auto ml-auto text-lg md:text-xl "
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InputForm;
