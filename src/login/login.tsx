import { Alert,  Button, FormControl, Grid, IconButton, Link, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import {  useDispatch, useSelector } from 'react-redux'
import { state, user } from '../redux/state/state.ts'
import { Link as ReactRouterLink } from 'react-router-dom';
import { setUserLoged } from '../redux/action-creators/userLoged.ts'

import CloseIcon from '@mui/icons-material/Close';

export const Login = () => {
    let navigate = useNavigate()
    const users: user[] = useSelector((state: state) => state.users)

    const [formValues, setFormValues] = useState<string[]>([])
    const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false)

    const dispatch = useDispatch()

    const onChangeTextField = (event, index) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index] = event.target.value
            return newValue

        })
    }
    const onSubmitt = () => {
        const found = users.find((user) => user.username === formValues[0] && user.password === formValues[1])
        if (found) {
            setInvalidCredentials(false)
            dispatch(setUserLoged(found))
            navigate("/")
        }
        else setInvalidCredentials(true)
    }


    return (
        <Grid
            container
            justifyContent={'center'}
        >
            <FormControl
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                    
                }}
                noValidate
            >
                <div className={styles.formContainer}>
                    <TextField
                        required
                        id="outlined-required"
                        label="User Name"
                        color="secondary"
                        type="email"
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 0)}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        color="secondary"
                        required
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 1)}
                    />
                    {invalidCredentials &&
                        <Alert
                        severity="error"
                        className={styles.alert}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setInvalidCredentials(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Invalid UserName or password
                        </Alert>

                    }
                    <Button
                        onClick={onSubmitt}
                        variant="contained"
                        color="secondary"
                        classes={{ root: classNames(styles.formButton) }}
                        disabled={!(formValues.length === 2)}

                    >
                        Log in
                    </Button>

                    <Link component={ReactRouterLink} to="/sign-up" underline="always" color="secondary">
                        {"I don't have an account"}
                    </Link>
                </div>
            </FormControl>
        </Grid>
    )
}
