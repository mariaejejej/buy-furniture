import { Box, Button, FormControl, Grid, Link, TextField } from '@mui/material'
import React, { useState } from 'react'
import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
export const Login = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState<string[]>([])

    const onChangeTextField = (event, index) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index] = event.target.value
            return newValue

        })
    }
    const onSubmitt = () => {

        const url = `https://jsonplaceholder.typicode.com/users?username=${formValues[0]}`

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                if (json.length === 1) {
                    alert(`All good ${json[0].email}`)
                    navigate("/home")
                }
                else {
                    alert(`All bad`)
                    console.log(json);
                }



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
                    />
                    <Button
                        onClick={onSubmitt}
                        variant="contained"
                        classes={{root: classNames(styles.formButton)}}
                        disabled={!(formValues.length===2)}
                        
                        >
                           
                        Log in
                    </Button>

                    <Link href="#" underline="always">
                        {'I dont have an account'}
                    </Link>
                </div>
            </FormControl>

        </Grid>

    )
}
