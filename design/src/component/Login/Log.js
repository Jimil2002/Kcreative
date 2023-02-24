import React, { useState } from 'react'


import Paper from '@mui/material/Paper';

import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography,Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Card } from 'antd';
import {
    CaretRightOutlined
  } from '@ant-design/icons';
  import './app.css'

function Log() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
      
            <div className='main'>
                <Paper className='paper' elevation={4} sx={{borderRadius:'15px'}}>
                    <Grid container >
                        <Grid item xs={6} className='lefts'>
                        <Card
                              className='card'  
                              bordered={false}
                                style={{boxShadow:'10px 20px 10px rgba(0, 0, 0, 0.3)',}}
                               
                            >
                            <Typography variant='h4' sx={{color:'white',}}><CaretRightOutlined />Digital</Typography>
                            <Typography variant='h4' sx={{color:'white'}}>platforme</Typography>
                            <Typography variant='h4' sx={{color:'white'}}>for Graphic</Typography>
                            <Typography variant='h4' sx={{color:'white'}}> Design</Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={6} className='rights'>


                            <Card
                               
                                className='logform'
                                
                            >
                                <Typography variant='h4' sx={{marginBottom:'15px'}}><b>Sign In</b></Typography>
                                <TextField id="outlined-basic" label="Username" variant="outlined" name='username'
                                    fullWidth
                                />
                                <FormControl variant="outlined"
                                    sx={{ marginTop: '10px',marginBottom:'10px' }}
                                    fullWidth
                                >

                                    <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>

                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'

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

                                </FormControl>
                                <Button type="primary" variant='contained' fullWidth>
                                    LOGIN
                                </Button>
                            </Card>

                        </Grid>

                    </Grid>
                </Paper>
            </div>
        
    )
}

export default Log
