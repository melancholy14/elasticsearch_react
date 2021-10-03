import React, { ChangeEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { Button, Card, CardActions, CardContent, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

import request from '../utils/request';

function QuizForm() {
    const [selected, setSelected] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [nextCount, setNextCount] = useState<number>(0);

    const { isLoading, isError, data } = useQuery(['getQuestion', nextCount], () => {
        return request('questions/quiz/take');
    });

    const { mutate: answersSubmit, isLoading: isSubmitting, isSuccess, reset } = useMutation(() => {
        return request('answers/submit', {
            method: 'post',
            data: {
                question_id: data.id,
                answer: selected,
            }
        });
    }, {
        onError: (err) => {
            console.error(err);
        },
        onSuccess: (response) => {
            const { correct } = response;

            setIsCorrect(correct);
        }
    });

    const handleSelected = (event: ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
    }

    const submitAnswer = () => {
        if (!selected) {
            alert('You have to choose your answer before submission.');
            return;
        }

        answersSubmit();
    }

    const goNext = () => {
        setSelected('');

        setNextCount((currentNextCount) => {
            return currentNextCount + 1;
        });

        reset();
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            {isLoading && (
                <CardContent>
                    <Typography variant='h3'>
                        Loading...
                    </Typography>
                </CardContent>
            )}
            {!isLoading && !isError && data.id && (
                <>
                    <CardContent>
                        <Typography variant='h4'>{data.question}</Typography>
                        <Divider sx={{ my: 1.5 }} />
                        <FormControl component='fieldset'>
                            <RadioGroup aria-label='answer' name='answer-group' value={selected} onChange={handleSelected}>
                                {
                                    data.options.map((option: string) => (
                                        <FormControlLabel key={option} value={option} control={<Radio />} label={option}  />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'end' }}>
                        {!isSuccess && (
                            <Button onClick={submitAnswer}>
                                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                            </Button>
                        )}
                        {isSuccess && (
                            <>
                                <Typography sx={{ color: 'red', ml: 1, mr: 'auto' }}>
                                    {isCorrect? 'CORRECT' : 'INCORRECT'}
                                </Typography>
                                <Button onClick={goNext}>
                                    NEXT
                                </Button>
                                <Button>
                                    FINISH
                                </Button>
                            </>
                        )}
                    </CardActions>
                </>
            )}
            {!isLoading && !isError && !data.id && (
                <>
                    <CardContent>
                        <Typography variant='h3'>No More Quiz</Typography>
                        <Divider sx={{ my: 1.5 }} />
                        <Typography variant='subtitle1'>
                            Congrats!
                            <br />
                            You resolved all quizzes. Click 'FINISH' to review your answers.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'end' }}>
                        <Button>
                            FINISH
                        </Button>
                    </CardActions>
                </>
            )}
            {!isLoading && isError && (
                <CardContent>
                    <Typography variant='h3'>Something went wrong!</Typography>
                </CardContent>
            )}
        </Card>
    );
}

export default QuizForm;
