// src/components/steps/ContactForm.jsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Autocomplete,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { countries } from '../../data/countries';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  street_address: Yup.array().of(Yup.string()).min(1).required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  postal_code: Yup.string().required('Required'),
});

function ContactForm({ onNext, data }) {
  const initialValues = {
    email: '',
    phone: '',
    street_address: [''],
    city: '',
    state: '',
    country: '',
    postal_code: '',
    ...data
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onNext({ contact: values })}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="email"
                label="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            {values.street_address.map((address, index) => (
              <Grid item xs={12} key={index} container spacing={1} alignItems="center">
                <Grid item xs>
                  <TextField
                    fullWidth
                    name={`street_address.${index}`}
                    label={`Street Address ${index + 1}`}
                    value={address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.street_address?.[index] && Boolean(errors.street_address?.[index])}
                    helperText={touched.street_address?.[index] && errors.street_address?.[index]}
                  />
                </Grid>
                {index > 0 && (
                  <Grid item>
                    <IconButton
                      onClick={() => {
                        const newAddresses = values.street_address.filter((_, i) => i !== index);
                        setFieldValue('street_address', newAddresses);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            ))}
            {values.street_address.length < 3 && (
              <Grid item xs={12}>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => setFieldValue('street_address', [...values.street_address, ''])}
                >
                  Add Address Line
                </Button>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="city"
                label="City"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.city && Boolean(errors.city)}
                helperText={touched.city && errors.city}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="state"
                label="State/Province"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.state && Boolean(errors.state)}
                helperText={touched.state && errors.state}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={countries}
                value={values.country}
                onChange={(_, newValue) => setFieldValue('country', newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="country"
                    label="Country"
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="postal_code"
                label="Postal Code"
                value={values.postal_code}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.postal_code && Boolean(errors.postal_code)}
                helperText={touched.postal_code && errors.postal_code}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;