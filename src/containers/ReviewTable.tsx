import React from 'react';
import { useQuery } from 'react-query';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import request from '../utils/request';

function ReviewTable() {
    const { isLoading, data } = useQuery('getAllAnswers', async () => {
        // TODO: Let the backend do this job
        const answers = await request('answers/my');

        const questions = await Promise.allSettled(answers.values.map(({ question_id }: { question_id: string }) => request(`questions/${question_id}`)));

        const combined = answers.values.map((answer: { id: string; answer: string, correct: boolean }, index: number) => {
            const questionData = (questions[index] as PromiseFulfilledResult<any>).value;

            return {
                id: answer.id,
                question: questionData.question,
                answer: questionData.answer,
                chosen: answer.answer,
                correctness: answer.correct,
            };
        });

        return combined;
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 275 }} aria-label='table to see all answers'>
                <TableHead>
                    <TableRow>
                        <TableCell>Question</TableCell>
                        <TableCell align='center'>Answer</TableCell>
                        <TableCell align='center'>Chosen</TableCell>
                        <TableCell align='center'>Correctness</TableCell>
                    </TableRow>
                </TableHead>
                {isLoading && (
                    <TableBody>
                        <TableRow>
                            <TableCell>LOADING...</TableCell>
                        </TableRow>
                    </TableBody>
                )}
                {!isLoading && data && (
                    <TableBody>
                        {
                            data.map(({ id, question, answer, chosen, correctness }: { id: string; question: string; answer: string; chosen: string; correctness: boolean; }) => (
                                <TableRow key={id}>
                                    <TableCell>{question}</TableCell>
                                    <TableCell align='center'>{answer}</TableCell>
                                    <TableCell align='center'>{chosen}</TableCell>
                                    <TableCell align='center'>{correctness ? 'O' : 'X'}</TableCell>
                                </TableRow>
                            ))  
                        }
                    </TableBody>
                )}
            </Table>
        </TableContainer>
    )
}

export default ReviewTable;
