import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [records, setRecords] = useState([]);

    const fetchRecords = async (query) => {
        //const response = await axios.get(`http://localhost:5158/api/records?query=${query}`);
        const response = await axios.get(`https://keypath-b7fabrhugdewdrad.australiaeast-01.azurewebsites.net/api/records?query=${query}`);
        setRecords(response.data);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length >= 3) {
            fetchRecords(value);
        } else {
            setRecords([]);
        }
    };

    return (
        <div>
            <TextField label="Search" value={searchTerm} onChange={handleChange} />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Submitted On</TableCell>
                            <TableCell>Modified On</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.map(record => (
                            <TableRow key={record.id}>
                                <TableCell>{record.dataField}</TableCell>
                                <TableCell>{record.submittedOn}</TableCell>
                                <TableCell>{record.modifiedOn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default App;