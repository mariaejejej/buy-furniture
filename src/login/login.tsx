import { Box, Button, FormControl, Grid, Link, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '../redux/action-creators/users.ts'
import { state } from '../redux/state/state.ts'
export const Login = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state: state) => state.users)

    const [formValues, setFormValues] = useState<string[]>([])

    const onChangeTextField = (event, index) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue]
            newValue[index] = event.target.value
            return newValue

        })
    }
    const onSubmitt = () => {

        //     const url = `https://jsonplaceholder.typicode.com/users?username=${formValues[0]}`

        //     fetch(url)
        //         .then((response) => response.json())
        //         .then((json) => {
        //             if (json.length === 1) {
        //                 alert(`All good ${json[0].email}`)
        //                 navigate("/home")
        //             }
        //             else {
        //                 alert(`All bad`)
        //                 console.log(json);
        //             }



        //         })
        const found = users.find((user) => user.username === formValues[0])
        if (found) {
            alert(`All good ${formValues[0]}`)
            navigate("/home")
        }
        else {
            alert(`All bad `)
        }

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
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 0)}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        required
                        classes={{ root: classNames(styles.formInput) }}
                        onChange={(event) => onChangeTextField(event, 1)}
                    />
                    <Button
                        onClick={onSubmitt}
                        variant="contained"
                        classes={{ root: classNames(styles.formButton) }}
                        disabled={!(formValues.length === 2)}

                    >

                        Log in
                    </Button>

                    <Link href="/sign-up" underline="always">
                        {"I don't have an account"}
                    </Link>
                </div>
            </FormControl>

        </Grid>

    )
}
