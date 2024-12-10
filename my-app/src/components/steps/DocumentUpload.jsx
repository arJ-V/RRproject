// src/components/steps/DocumentUpload.jsx
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Grid,
  Typography,
  Box,
  Paper
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const validationSchema = Yup.object().shape({
  id_front: Yup.mixed().required('Required'),
  id_back: Yup.mixed().required('Required'),
  selfie: Yup.mixed().required('Required'),
});

function DocumentUpload({ onNext, onBack, data }) {
  const [previews, setPreviews] = useState({
    id_front: null,
    id_back: null,
    selfie: null,
  });

  const handleFileChange = (field, setFieldValue, event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFieldValue(field, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => ({
          ...prev,
          [field]: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={{
        id_front: null,
        id_back: null,
        selfie: null,
        ...data
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => onNext({ documents: values })}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Document Upload
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                Please upload clear photos of your ID and a selfie
              </Typography>
            </Grid>
            
            {['id_front', 'id_back', 'selfie'].map((field) => (
              <Grid item xs={12} md={4} key={field}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id={field}
                  type="file"
                  onChange={(e) => handleFileChange(field, setFieldValue, e)}
                />
                <label htmlFor={field}>
                  <Paper
                    variant="outlined"
                    component={Box}
                    p={3}
                    textAlign="center"
                    sx={{
                      cursor: 'pointer',
                      height: 200,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundImage: previews[field] ? `url(${previews[field]})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {!previews[field] && (
                      <>
                        <CloudUploadIcon sx={{ fontSize: 40, mb: 1 }} />
                        <Typography>
                          Upload {field.replace('_', ' ').toUpperCase()}
                        </Typography>
                      </>
                    )}
                  </Paper>
                </label>
                {touched[field] && errors[field] && (
                  <Typography color="error" variant="caption">
                    {errors[field]}
                  </Typography>
                )}
              </Grid>
            ))}

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

export default DocumentUpload;