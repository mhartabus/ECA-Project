import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { ReportingStatus } from './ReportingStatus';
type ReportDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const ReportDialog = ({ open, onClose }: ReportDialogProps) => {
  const [isIssueReported, setIsIssueReported] = useState(false);
  const [summary, setSummary] = useState('');
  const [isAgree, setIsAgree] = useState(false);

  const handleClose = () => {
    onClose();
    setIsIssueReported(false);
    setSummary('');
    setIsAgree(false);
  };

  const handleReport = () => {
    setIsIssueReported(true);
    console.log(summary, isAgree);

    setSummary('');
    setIsAgree(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      {isIssueReported ? (
        <ReportingStatus onClose={handleClose} />
      ) : (
        <>
          <DialogTitle
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <span>Report a problem</span>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ padding: 2 }}>
            <Box display="flex" flexDirection="column" gap={2} p={2}>
              <Typography variant="subtitle1">
                Please describe the problem and if possible how to reproduce it
              </Typography>
              <TextField
                label="Issue summary"
                fullWidth
                multiline
                rows={5}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={isAgree}
                    onChange={(e) => setIsAgree(e.target.checked)}
                  />
                }
                label="I agree the to share T04 files of survey report to Trimble Support team"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              fullWidth
              variant="contained"
              disabled={summary.length === 0 || !isAgree}
              onClick={handleReport}
            >
              Report
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
