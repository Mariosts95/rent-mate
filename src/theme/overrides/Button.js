const Button = (theme) => ({
  MuiButton: {
    defaultProps: {
      color: 'primary',
      size: 'medium',
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.variant === 'text' && {
          textDecoration: 'none',
          color: theme.palette.grey[500],
        }),
      }),
      disabled: {
        color: theme.palette.grey[300],
      },
    },
  },
});

export default Button;
