import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { MainForma, Label, Input, Button } from './FormFormik.styled';

import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = props => {
  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForma autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <ErrorMessage component="span" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <ErrorMessage component="span" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </MainForma>
    </Formik>
  );
};

export default ContactForm;
