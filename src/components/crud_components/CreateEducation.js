import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_EDUCATION_MUTATION = gql`
mutation CreateEducation(
  $dateStarted: String!
  $dateFinishd: String!
  $degree: String!
  $university: String!
  ){
  createEducation(dateStarted:$dateStarted, degree:$degree, university:$university, university:$university){
    dateStarted
    dateFinished
    degree
    university
  }
}
`;

const CreateEducation = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    dateStarted : '',
    dateFinished : '',
    degree: '',
    universty: '',
  });

  const [createEducation] = useMutation(CREATE_EDUCATION_MUTATION, {
    variables: {
      dateStarted: formState.dateStarted,
      dateFinished: formState.dateFinished,
      degree: formState.degree,
      universty: formState.universty ,

    },
    onCompleted: () => navigate('/')

  });

  return (
    <div class="d-flex justify-content-center">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createEducation();

        }}
      >
        <div className="flex flex-column mt3">
          <h2>Education</h2>
          <br /><br />
          <input
            className="mb2"
            value={formState.dateStarted}
            onChange={(e) =>
              setFormState({
                ...formState,
                dateStarted: e.target.value
              })
            }
            type="text"
            placeholder="Date started"
          />
          
          <br /><br />
          <input
            className="mb2"
            value={formState.dateFinished}
            onChange={(e) =>
              setFormState({
                ...formState,
                dateFinished: e.target.value
              })
            }
            type="text"
            placeholder="Date finished"
          />
          <br/><br/>

    
          <input
            className="mb2"
            value={formState.degree}
            onChange={(e) =>
              setFormState({
                ...formState,
                degree: e.target.value
              })
            }
            type="text"
            placeholder="Degree"
          />
          <br /><br />

          <input
            className="mb2"
            value={formState.university}
            onChange={(e) =>
              setFormState({
                ...formState,
                university: e.target.value
              })
            }
            type="text"
            placeholder="University"
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

export default CreateEducation;