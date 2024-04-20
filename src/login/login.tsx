import { Box, Button, FormControl, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './login.module.scss'
export const Login = () => {


    const [formValues, setFormValues] = useState<string[]>([])
    console.log(formValues)
    const onChangeTextField = (event, index) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index] = event.target.value
            return newValue

        })


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
                        id="outlined-required"
                        label="User Name"
                        type="email"

                        onChange={(event) => onChangeTextField(event, 0)}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        required
                        onChange={(event) => onChangeTextField(event, 1)}
                    /><Button onClick={() => {

                        fetch('https://jsonplaceholder.typicode.com/posts', {
                            method: 'POST',
                            body: JSON.stringify({
                                title: formValues[0],
                                body:  formValues[1],
                                userId: 1,
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                            },
                        })
                            .then((response) => response.json())
                            .then((json) => console.log(json));
                    }}

                    > Log in </Button>
                </div>
            </FormControl>

        </Grid>

    )
}
