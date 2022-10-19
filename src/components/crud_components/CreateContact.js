import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContactInformation(
    $icon : String!
    $title : String!
    $contact : String!
  ) {
    createContactInformation(icon: $icon, title: $title, contact:$contact) {
      icon
      title
      contact
    }
  }
`;

const CreateContact = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    icon: '',
    title: '',
    contact: ''
  });

  const [createContact] = useMutation(CREATE_CONTACT_MUTATION, {
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
          <h2>Contact Information</h2>
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
          <input
            className="mb2"
            value={formState.contact}
            onChange={(e) =>
              setFormState({
                ...formState,
                contact: e.target.value
              })
            }
            type="text"
            placeholder="Contact"
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

export default CreateContact;