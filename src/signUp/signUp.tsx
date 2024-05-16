import { Button, FormControl, Grid, TextField, Link } from '@mui/material'
import classNames from 'classnames'
import React, { useState } from 'react'
import styles from '../login/login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { state } from '../redux/state/state'
import { addUser } from '../redux/action-creators/users.ts'
import { useNavigate } from 'react-router-dom'
import { Link as ReactRouterLink } from 'react-router-dom';

type formValues = {
    value: string,
    error: boolean
}
const fillForm = () => {
    const formArray: formValues[] = []
    const values = ['UserName', 'Email', 'Password']
    for (let index = 0; index < values.length; index++) {
        formArray[index] = { value: '', error: false };

    }
    return formArray
}

export const SignUp = () => {

    const [formValues, setFormValues] = useState<formValues[]>(fillForm())
    let navigate = useNavigate()

    const users = useSelector((state: state) => state.users)
    const dispatch = useDispatch()
    console.log(formValues)
    const onChangeTextField = (event, index) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index].value = event.target.value
            if (event.target.validity.valid) {
                newValue[index].error = false
            } else {
                newValue[index].error = true
            }
            return newValue

        })

    }
    const notEmptyValue = (value) => value !== '' || value


    const handleSubmit = (event) => {
        const id = Math.floor(Math.random() * 100)
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                username: formValues[0].value,
                password: formValues[2].value,
                email: formValues[1].value,
                userId: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));


        const newUser = {
            id,
            name: formValues[0].value,
            username: formValues[0].value,
            email: formValues[1].value,
            password: formValues[2].value,
        }

        dispatch(addUser(newUser))
        event.preventDefault();
        navigate("/", { replace: true })
    }
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
                <div className={styles.formContainer}>
                    <TextField
                        required
                        color="secondary"
                        id="outlined-required"
                        label="UserName"
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 0)}
                        error={formValues[0].error}
                        helperText={formValues[0].error ? "Please enter a valid User name" : ""}
                        inputProps={{
                            pattern: "[A-Za-z ]+",
                        }}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        color="secondary"
                        type="email"
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 1)}
                        error={formValues[1].error}
                        helperText={formValues[1].error ? "Please enter a valid email" : ""}
                        inputProps={{
                            type: "email",
                        }}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        required
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 2)}
                        inputProps={{
                            pattern: "[A-Za-z ]+",
                        }}
                        error={formValues[2].error}
                        color="secondary"
                        helperText={
                            formValues[2].error ? "Please enter your name (letters and spaces only)" : ""
                        }
                    />
                    <Button
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

                    </Link>

                </div>
            </FormControl>

        </Grid>
    )
}
