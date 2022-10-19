import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LANGUAGE = gql`
  mutation CreateLanguage(
    $language : String!
    $percentage : String!
  ) {
    createLanguage(language: $language, percentage: $percentage) {
      language
      percentage
    }
  }
`;

const CreateLanguage = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    language: '',
    percentage: ''
  });

  const [createLanguage] = useMutation(CREATE_LANGUAGE, {
    variables: {
      language: formState.language,
      percentage: formState.percentage
    },
    onCompleted: () => navigate('/')

  });

  return (
    <div class="d-flex justify-content-center">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLanguage();

        }}
      >
        <div className="flex flex-column mt3">
          <h2>Language</h2>
          <br/><br/>
          <input
            className="mb2"
            value={formState.language}
            onChange={(e) =>
              setFormState({
                ...formState,
                language: e.target.value
              })
            }
            type="text"
            placeholder="Icon"
          />
          <br/><br/>
          <input
            className="mb2"
            value={formState.percentage}
            onChange={(e) =>
              setFormState({
                ...formState,
                percentage: e.target.value
              })
            }
            type="text"
            placeholder="Title"
          />
          <br/><br/>
         
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default CreateLanguage;