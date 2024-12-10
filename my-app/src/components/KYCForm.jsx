// src/components/KYCForm.jsx
import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Container,
  Paper,
  Typography,
  LinearProgress
} from '@mui/material';
import ContactForm from './steps/ContactForm';
import IdentityForm from './steps/IdentityForm';
import DocumentUpload from './steps/DocumentUpload';
import ReviewForm from './steps/ReviewForm';

const steps = ['Contact Information', 'Identity Verification', 'Document Upload', 'Review'];

function KYCForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    contact: {},
    identity: {},
    documents: {}
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Add your API submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setActiveStep(steps.length);
    }, 2000);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactForm onNext={handleNext} data={formData.contact} />;
      case 1:
        return <IdentityForm onNext={handleNext} onBack={handleBack} data={formData.identity} />;
      case 2:
        return <DocumentUpload onNext={handleNext} onBack={handleBack} data={formData.documents} />;
      case 3:
        return <ReviewForm formData={formData} onBack={handleBack} onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          KYC Verification
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {isSubmitting && <LinearProgress sx={{ mb: 2 }} />}
        <Box>{renderStepContent(activeStep)}</Box>
      </Paper>
    </Container>
  );
}

export default KYCForm;