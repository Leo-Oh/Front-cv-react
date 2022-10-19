import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_INTERESES_MUTATION = gql`
  mutation CreateContactInformation(
    $icon : String!
    $title : String!
  ) {
    createContactInformation(icon: $icon, title: $title) {
      icon
      title
    }
  }
`;

const CreateIntereses = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    icon: '',
    title: ''
  });

  const [createContact] = useMutation(CREATE_INTERESES_MUTATION, {
    variables: {
      icon: formState.icon,
      title: formState.title,
      contact: formState.contact
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
          <h2>Intereses</h2>
          <br /><br />
          <input
            className="mb2"
            value={formState.icon}
            onChange={(e) =>
              setFormState({
                ...formState,
                icon: e.target.value
              })
            }
            type="text"
            placeholder="Icon"
          />
          <br /><br />
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
          <br /><br />
         
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="submit">Submit</button>

        </div>

      </form>
    </div>
  );
};

export default CreateIntereses;