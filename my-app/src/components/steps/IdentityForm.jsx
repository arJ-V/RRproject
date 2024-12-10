// src/components/steps/IdentityForm.jsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Autocomplete,
  MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { countries } from '../../data/countries';

const taxIdTypes = [
  { value: 'ssn', label: 'Social Security Number' },
  { value: 'ein', label: 'Employer Identification Number' },
  { value: 'itin', label: 'Individual Taxpayer Identification Number' }
];

const validationSchema = Yup.object().shape({
  given_name: Yup.string().required('Required'),
  middle_name: Yup.string(),
  family_name: Yup.string().required('Required'),
  date_of_birth: Yup.date().required('Required'),
  tax_id: Yup.string().required('Required'),
  tax_id_type: Yup.string().required('Required'),
  country_of_tax_residence: Yup.string().required('Required')
});

function IdentityForm({ onNext, onBack, data }) {
  const initialValues = {
    given_name: '',
    middle_name: '',
    family_name: '',
    date_of_birth: null,
    tax_id: '',
    tax_id_type: '',
    country_of_tax_residence: '',
    ...data
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onNext({ identity: values })}
    >
      {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="given_name"
                label="First Name"
                value={values.given_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.given_name && Boolean(errors.given_name)}
                helperText={touched.given_name && errors.given_name}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="middle_name"
                label="Middle Name (Optional)"
                value={values.middle_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                name="family_name"
                label="Last Name"
                value={values.family_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.family_name && Boolean(errors.family_name)}
                helperText={touched.family_name && errors.family_name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Date of Birth"
                value={values.date_of_birth}
                onChange={(newValue) => setFieldValue('date_of_birth', newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={touched.date_of_birth && Boolean(errors.date_of_birth)}
                    helperText={touched.date_of_birth && errors.date_of_birth}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                name="tax_id_type"
                label="Tax ID Type"
                value={values.tax_id_type}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.tax_id_type && Boolean(errors.tax_id_type)}
                helperText={touched.tax_id_type && errors.tax_id_type}
              >
                {taxIdTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="tax_id"
                label="Tax ID"
                value={values.tax_id}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.tax_id && Boolean(errors.tax_id)}
                helperText={touched.tax_id && errors.tax_id}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                options={countries}
                value={values.country_of_tax_residence}
                onChange={(_, newValue) => setFieldValue('country_of_tax_residence', newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="country_of_tax_residence"
                    label="Country of Tax Residence"
                    error={touched.country_of_tax_residence && Boolean(errors.country_of_tax_residence)}
                    helperText={touched.country_of_tax_residence && errors.country_of_tax_residence}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    onClick={onBack}
                    fullWidth
                    size="large"
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="large"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default IdentityForm;