import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_SKILLS = gql`
  mutation CreateSkills(
    $title : String!
    $toolTitle : String!
    $percentage : String!
  ) {
    createSkills(title: $title, toolTitle: $toolTitle, percentage: $percentage) {
      title
      toolTitle
      percentage
    }
  }
`;

const CreateSkills = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: '',
    toolTitle: '',
    percentage: ''
  });

  const [createSkills] = useMutation(CREATE_SKILLS, {
    variables: {
      title: formState.title,
      toolTitle: formState.toolTitle,
      percentage: formState.percentage
    },
    onCompleted: () => navigate('/')

  });

  return (
    <div class="d-flex justify-content-center">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createSkills();

        }}
      >
        <div className="flex flex-column mt3">
          <h2>Skills</h2>
          <br/><br/>
          <input
            className="mb2"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
            type="text"
            placeholder="Title"
          />
          <br/><br/>
          <input
            className="mb2"
            value={formState.toolTitle}
            onChange={(e) =>
              setFormState({
                ...formState,
                toolTitle: e.target.value
              })
            }
            type="text"
            placeholder="Tool Title"
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

export default CreateSkills;