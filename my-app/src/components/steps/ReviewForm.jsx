// src/components/steps/ReviewForm.jsx
import React from 'react';
import {
  Typography,
  Grid,
  Button,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { format } from 'date-fns';

function ReviewForm({ formData, onBack, onSubmit, isSubmitting }) {
  const { contact, identity, documents } = formData;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Review Your Information
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper variant="outlined">
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Email" secondary={contact.email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={contact.phone} />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Address" 
                  secondary={`${contact.street_address.join(', ')}, ${contact.city}, ${contact.state}, ${contact.country} ${contact.postal_code}`} 
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper variant="outlined">
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Identity Information
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Full Name" 
                  secondary={`${identity.given_name} ${identity.middle_name} ${identity.family_name}`} 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Date of Birth" 
                  secondary={identity.date_of_birth ? format(new Date(identity.date_of_birth), 'PP') : ''} 
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tax ID Type" secondary={identity.tax_id_type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tax ID" secondary={identity.tax_id} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country of Tax Residence" secondary={identity.country_of_tax_residence} />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper variant="outlined">
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Uploaded Documents
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="ID Front" 
                  secondary={documents.id_front ? documents.id_front.name : 'Not uploaded'} 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="ID Back" 
                  secondary={documents.id_back ? documents.id_back.name : 'Not uploaded'} 
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Selfie" 
                  secondary={documents.selfie ? documents.selfie.name : 'Not uploaded'} 
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              onClick={onBack}
              fullWidth
              size="large"
              disabled={isSubmitting}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={onSubmit}
              fullWidth
              size="large"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ReviewForm;