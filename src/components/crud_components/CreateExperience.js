import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_CONTACT_MUTATION = gql`
mutation createExperience(
  $dataStarted: String!
  $dataFinished: String!
  $business: String!
  $titleJob: String!
  $description: String!
) {
  createExperience( 
    dataStarted:$dataStarted, 
    dataFinished:$dataFinished,
    business:$business, 
    titleJob:$titleJob,
    description:$description
    ) {
    dataStarted
    dataFinished
    business
    titleJob
    descriptioDescription
  }
}
`;

const CreateExperience = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    dataStarted: '',
    dataFinished: '',
    business: '',
    titleJob: '',
    description: ''
  });

  const [createContact] = useMutation(CREATE_CONTACT_MUTATION, {
    variables: {
      dataStarted: formState.dataStarted,
      dataFinished: formState.dataFinished,
      business: formState.business,
      titleJob: formState.titleJob,
      description: formState.description
    },
    onCompleted: () => navigate('/')

  });

  return (
    <div class="d-flex justify-content-center">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createContact();

        }}
      >
        <div className="flex flex-column mt3">
          <h2>Experience</h2>
          <br /><br />
          <input
            className="mb2"
            value={formState.dataStarted}
            onChange={(e) =>
              setFormState({
                ...formState,
                dataStarted: e.target.value
              })
            }
            type="text"
            placeholder="Data Started"
          />
          <br /><br />
          <input
            className="mb2"
            value={formState.dataFinished}
            onChange={(e) =>
              setFormState({
                ...formState,
                dataFinished: e.target.value
              })
            }
            type="text"
            placeholder="Data Finished"
          />
          <br /><br />
          <input
            className="mb2"
            value={formState.business}
            onChange={(e) =>
              setFormState({
                ...formState,
                business: e.target.value
              })
            }
            type="text"
            placeholder="Bussiness"
          />
          <br /><br />
          <input
            className="mb2"
            value={formState.titleJob}
            onChange={(e) =>
              setFormState({
                ...formState,
                titleJob: e.target.value
              })
            }
            type="text"
            placeholder="Title Job"
          />
          <br /><br />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Description"
          />
          <br /><br />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="submit">Submit</button>

        </div>

      </form>
    </div>
  );
};

export default CreateExperience;