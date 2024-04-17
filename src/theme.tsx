import { createTheme } from '@mui/material';
import './vendor/fonts/fonts.css';

// A custom theme for this app
export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#FF0200',
        },
    },
    typography: {
        fontFamily: ['"YS Text"', '"YS Display"'].join(','),
        h1: {
            fontFamily: 'YS Display',
            fontSize: 'clamp(24px, 2.36vw, 34px)',
            lineHeight: '40px',
        },
        h2: {
            fontFamily: 'YS Display',
            fontSize: 'clamp(16px, 1.6vw, 24px)',
            lineHeight: '32px',
        },
        h3: {
            fontFamily: 'YS Display',
            fontSize: 'clamp(14px, 1.38vw, 20px)',
            lineHeight: '24px',
        },
        subtitle1: {
            fontFamily: 'YS Text',
            fontSize: 'clamp(12px, 1.25vw, 18px)',
            lineHeight: '24px',
        },
        body1: {
            fontFamily: 'YS Text',
            fontSize: 'clamp(12px, 1.1vw, 16px)',
            lineHeight: '20px',
        },
        body2: {
            fontFamily: 'YS Text',
            fontSize: 'clamp(10px, 0.97vw, 14px)',
            lineHeight: '20px',
        },
        caption: {
            fontFamily: 'YS Text',
            fontSize: 'clamp(10px, 0.9vw, 13px)',
            lineHeight: '16px',
        },
        button: {
            textTransform: 'none',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1A1B22',
                    boxShadow: 'none',
                    alignItems: 'center'
                }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    width: '87%',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#5A9BFF',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: '#1D6BF3',
                        boxShadow: 'none'
                    }
                },
                text: {
                    color: '#fff',
                    backgroundColor: 'transparent',
                    fontsize: 'body1',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        opacity: 0.7
                    }
                },
                outlined: {
                    backgroundColor: '#fff',
                    color: '#1D6BF3',
                    border: '1px solid #1D6BF3',
                    fontSize: 'clamp(10px, 1.1vw, 16px)',
                    '&:hover': {
                        color: '#fff',
                        backgroundColor: '#1D6BF3',
                    },
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    height: '230px',
                    display: 'flex',
                    padding: '20px 55px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#1D6BF3',
                    },
                },
                flexContainer: {
                    gap: '20px'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
                textColorPrimary: {
                    fontSize: '24px',
                    '&.Mui-selected': {
                        color: '#1A1B22',
                    },
                },
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    height: '100%',
                    maxWidth: '592px',
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: 'none',
                    transition: 'background-color 0.3s',
                    padding: '24px 40px 0',
                    backgroundColor: '#F1F6FF',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#ACCCFF',
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'transparent',
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    marginTop: '4px',
                    backgroundColor: '#fff',
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    maxHeight: '40px',
                    backgroundColor: '#fff'
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#F1F6FF',
                    },
                }
            }
        }
    }
});