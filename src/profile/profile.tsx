import React from 'react'
import { Container } from '../container'
import { SignUp } from '../signUp/signUp'
import { FormControl, Grid, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export const Profile = () => {

    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

    return (
        <Grid
            container
            justifyContent={'center'}
        >

            <FormControl
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
            >
                <div >
                    <TextField

                        color="secondary"
                        id="outlined-required"
                        label="UserName"

                        inputProps={{
                            pattern: "[A-Za-z ]+",

                            readOnly: true,

                        }}
                    />
                    <TextField

                        id="outlined-required"
                        label="Email"
                        color="secondary"
                        type="email"

                        inputProps={{
                            type: "email",
                            readOnly: true,
                        }}
                    />
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
              
                    {/* <Button
                        onClick={handleSubmit}
                        variant="contained"
                        classes={{ root: classNames(styles.formButton) }}
                        disabled={!formValues.every((value) => notEmptyValue(value.value) && !value.error)}
                        color="secondary"
                    >
                        Sign up
                    </Button>
                    <Link component={ReactRouterLink} to="/" underline="always" color="secondary" >
                        <div className={styles.link}>
                            {"Already have an account"}
                        </div>
                    </Link> */}
                </div>
            </FormControl>
        </Grid>
    )
}
