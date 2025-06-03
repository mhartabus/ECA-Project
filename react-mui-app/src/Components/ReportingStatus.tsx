import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import {
    Alert,
    Box,
    CircularProgress,
    Fade,
    IconButton,
    Typography,
    Zoom,
} from '@mui/material';
import { useEffect, useState } from 'react';

type ReportingStatusProps = {
  onClose: () => void;
};

export const ReportingStatus = ({ onClose }: ReportingStatusProps) => {
  const [isJiraTicketFetching, setIsJiraTicketFetching] = useState(true);
  const [isAdditionalInfoFetching, setIsAdditionalInfoFetching] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 30000);
    const timer2 = setTimeout(() => {
      setIsJiraTicketFetching(false);
    }, 3000);
    const timer3 = setTimeout(() => {
      setIsAdditionalInfoFetching(false);
    }, 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onClose]);

  return (
    <Box
      sx={{
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h4">Status of reporting</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
          height: '100%',
        }}
      >
        {/* Jira Ticket Status */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
            position: 'relative',
            minHeight: 32,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Fade in={isJiraTicketFetching} timeout={300}>
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                }}
              />
            </Fade>
            <Zoom in={!isJiraTicketFetching} timeout={500}>
              <CheckCircleIcon
                sx={{
                  position: 'absolute',
                  fontSize: 24,
                  color: 'success.main',
                  animation: !isJiraTicketFetching
                    ? 'pulse 0.5s ease-in-out'
                    : 'none',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(0)',
                    },
                    '50%': {
                      transform: 'scale(1.2)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                    },
                  },
                }}
              />
            </Zoom>
          </Box>
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Fade in={isJiraTicketFetching} timeout={300}>
              <Typography
                sx={{ position: isJiraTicketFetching ? 'static' : 'absolute' }}
              >
                Creating Jira ticket...
              </Typography>
            </Fade>
            <Fade in={!isJiraTicketFetching} timeout={500}>
              <Typography
                sx={{
                  color: 'success.main',
                  fontWeight: 'medium',
                  animation: !isJiraTicketFetching
                    ? 'slideIn 0.5s ease-out'
                    : 'none',
                  '@keyframes slideIn': {
                    '0%': {
                      transform: 'translateX(-10px)',
                      opacity: 0,
                    },
                    '100%': {
                      transform: 'translateX(0)',
                      opacity: 1,
                    },
                  },
                }}
              >
                Created Jira ticket successfully!
              </Typography>
            </Fade>
          </Box>
        </Box>

        {/* Additional Info Status */}
        {!isJiraTicketFetching && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
              position: 'relative',
              minHeight: 32,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Fade in={isAdditionalInfoFetching} timeout={300}>
                <CircularProgress
                  size={24}
                  sx={{
                    position: 'absolute',
                  }}
                />
              </Fade>
              <Zoom in={!isAdditionalInfoFetching} timeout={500}>
                <CheckCircleIcon
                  sx={{
                    position: 'absolute',
                    fontSize: 24,
                    color: 'success.main',
                    animation: !isAdditionalInfoFetching
                      ? 'pulse 0.5s ease-in-out'
                      : 'none',
                    '@keyframes pulse': {
                      '0%': {
                        transform: 'scale(0)',
                      },
                      '50%': {
                        transform: 'scale(1.2)',
                      },
                      '100%': {
                        transform: 'scale(1)',
                      },
                    },
                  }}
                />
              </Zoom>
            </Box>
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
              <Fade in={isAdditionalInfoFetching} timeout={300}>
                <Typography
                  sx={{
                    position: isAdditionalInfoFetching ? 'static' : 'absolute',
                  }}
                >
                  Uploading the files to the server...
                </Typography>
              </Fade>
              <Fade in={!isAdditionalInfoFetching} timeout={500}>
                <Typography
                  sx={{
                    color: 'success.main',
                    fontWeight: 'medium',
                    animation: !isAdditionalInfoFetching
                      ? 'slideIn 0.5s ease-out'
                      : 'none',
                    '@keyframes slideIn': {
                      '0%': {
                        transform: 'translateX(-10px)',
                        opacity: 0,
                      },
                      '100%': {
                        transform: 'translateX(0)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  Uploading of files finished successfully!
                </Typography>
              </Fade>
            </Box>
          </Box>
        )}

        {!isJiraTicketFetching && !isAdditionalInfoFetching && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2,
              position: 'relative',
              minHeight: 32,
              mt: 3,
            }}
          >
            <Alert severity="success" sx={{ width: '100%' }}>
              Report created successfully!
            </Alert>
          </Box>
        )}
      </Box>
    </Box>
  );
};
