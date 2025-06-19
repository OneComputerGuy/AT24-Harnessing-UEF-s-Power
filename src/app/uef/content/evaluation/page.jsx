'use client';

import { useState } from 'react';

const EvaluationPage = ({}) => {
  const [formStatus, setFormStatus] = useState(false);

  const createDropDownQuestion = (question, id) => {
    return (
      <div>
        <label htmlFor={id}>{question}</label>
        <select name={id} id={id}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    );
  };

  const buildForm = () => {
    if (formStatus) {
      return <p>Thank you for submitting your responses!</p>;
    } else {
      console.log('building form questions...');
      return (
        <>
          {createDropDownQuestion(
            'Does your instructor shows knowledge about the subject',
            'knowledge',
          )}
          {createDropDownQuestion(
            'Does your instructor starts and ends sessions on time',
            'time',
          )}
          {createDropDownQuestion(
            'Does your instructor provides the necessary materials for your class',
            'materials',
          )}
        </>
      );
    }
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setFormStatus(true);
  };

  return (
    <div className="evaluation-wrapper">
      <h3>Midterm instructor evaluation</h3>
      <div className="evaluation-message">
        <p>
          Instructors evaluations are available for your current courses, please
          take the time to review and fill the evaluation about your instructor
          in this course
        </p>
        <span>
          Score from 1 to 5 your instructor for this course where 1 is
          &quot;Strongly disagree&quot; and 5 is &quot;Strongly agree&quot;
        </span>
      </div>
      <div className="evaluation-form">
        {buildForm()}
        {formStatus ? (
          ''
        ) : (
          <button onClick={handleFormSubmission}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default EvaluationPage;
