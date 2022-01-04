import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Categories from '../../Data/Categoryes';
import './Home.css'

const Home = (name, setName, fetchQuestions) => {
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handelSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }
        else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quiz");
        }
    };

    return (
        <div className='content'>
            <div >
                <span style={{ fontSize: 30 }}>Quiz Setting</span>
                <div className='settings_select'>

                    {error && <ErrorMessage> Pls Fill All The Field</ErrorMessage>}

                    <TextField
                        style={{ marginBottom: 25, width: 450 }}
                        label="Enter Your Name"
                        variant='outlined'
                        onChange={e => setName(e.target.value)}
                    />

                    <TextField
                        select
                        style={{ marginBottom: 30, width: 450 }}
                        label="select Category"
                        variant='outlined'
                        onChange={e => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map(cat => <MenuItem
                                key={cat.category}
                                value={cat.value}
                            >
                                {cat.category}
                            </MenuItem>)
                        }

                    </TextField>

                    <TextField
                        select
                        label='Select Difficulty'
                        variant='outlined'
                        style={{ marginBottom: 30, width: 450 }}
                        onChange={e => setDifficulty(e.target.value)}
                        value={difficulty}
                    >
                        <MenuItem key='essy' value='essy'>Eassy</MenuItem>
                        <MenuItem key='medium' value='medium'>Medium</MenuItem>
                        <MenuItem key='heard' value='heard'>Heard</MenuItem>
                    </TextField>

                    <Button onClick={handelSubmit} variant='contained' color='primary' size='large'>Quiz Start</Button>
                </div>
            </div>
            <img src="/quz.svg" className='banner' alt="quiz-img" />
        </div>
    );
};

export default Home;