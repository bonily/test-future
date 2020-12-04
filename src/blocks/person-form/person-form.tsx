/* eslint-disable no-console */
import React, {useState} from 'react';
import styled from 'styled-components';
import {Formik, Field, Form, FormikHelpers, useFormikContext} from 'formik';

const FieldStyle = styled(Field)`
  margin: 5px;
`;

export interface Values {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  streetAddress: string,
  city: string,
  state: string,
  zip: string,
  description: string,
}

interface Props {
  onAddNewPersonButtonClick: (value : Values) => void,
  setInputFormActive: (arg0: boolean) => void
}


const Button = () => {
  const {values, isSubmitting} = useFormikContext<Values>();
  const [buttonDisableStatus, setButtonDisableStatus] = useState(true);

  React.useEffect(() => {
    const formValues = Object.values(values);
    const isFormComplete = formValues.every((value) => value);
    if (isFormComplete && !isSubmitting) {
      setButtonDisableStatus(false);
    }
  }, [values]);

  return (
    <button type='submit' disabled={buttonDisableStatus}>Добавить нового пользователя</button>
  );
};


const PersonForm: React.FunctionComponent<Props> = (props: Props) => {
  const {onAddNewPersonButtonClick, setInputFormActive} = props;

  return (
    <div>
      <h2>Добавить нового пользователя</h2>
      <Formik
        initialValues={{
          id: ``,
          firstName: ``,
          lastName: ``,
          email: ``,
          phone: ``,
          streetAddress: ``,
          city: ``,
          state: ``,
          zip: ``,
          description: ``,
        }}
        onSubmit={(
            values : Values,
            {setSubmitting} : FormikHelpers<Values>) => {
          setTimeout(() =>{
            onAddNewPersonButtonClick(values);
            setSubmitting(false);
            setInputFormActive(false);
          }, 500);
        }}>
        <Form>
          <label htmlFor='id'>Id</label>
          <FieldStyle id='id' name='id' type='number' placeholder='0' />

          <label htmlFor='firstName'>First Name</label>
          <FieldStyle id='firstName' name='firstName' placeholder='John' />

          <label htmlFor='lastName'>Last Name</label>
          <FieldStyle id='lastName' name='lastName' placeholder='Doe' />

          <label htmlFor='email'>Email</label>
          <FieldStyle id='email' name='email'placeholder='john@acme.com' type='email' />

          <label htmlFor='phone'>Phone</label>
          <FieldStyle id='phone' name='phone' placeholder='(000)000-00-00' type='tel' />
          <FieldStyle id='streetAddress' name='streetAddress' placeholder='' />
          <FieldStyle id='city' name='city' placeholder='' />
          <FieldStyle id='state' name='state' placeholder='' />
          <FieldStyle id='zip' name='zip' placeholder='' />
          <FieldStyle id='description' name='description' placeholder='' />
          <Button />

        </Form>
      </Formik>
    </div>

  );
};

export default PersonForm;
