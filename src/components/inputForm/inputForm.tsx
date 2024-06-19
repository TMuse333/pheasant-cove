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
        <div className="text-white w-full max-w-2xl mx-auto my-8 p-6  rounded-lg">
            {title && <h2 className="text-3xl mb-4">{title}</h2>}
            {description && <p className="text-lg mb-6">{description}</p>}
            <ul className="pt-5">
                {questions.map((question, index) => (
                    <li key={index} className="mb-4 w-full">
                        <label className="block text-left mb-2">{question.question}</label>
                        {question.multipleChoices ? (
                            <div className="flex flex-wrap">
                                {question.choices?.map((choice, i) => (
                                    <div key={i} className="mr-4 mb-2">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                            />
                                            {choice}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <input
                                type="text"
                                placeholder={question.placeholder}
                                className="w-full p-2 rounded"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InputForm;
