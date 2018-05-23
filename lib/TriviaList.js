import React from 'react';

export default function TriviaList(props) {
  return (
    <div>
    {
      props.questions.map((question, index) => {
        return <Question question={question} key={index} />
      })
    }
    </div>
  );
}