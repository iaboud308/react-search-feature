import React, { useState, useEffect } from 'react';
import Vehicle from './Vehicle';
import { Table, TableRow, TableHead, TableCell, TableBody, TableContainer, Paper, TextField, Typography } from '@material-ui/core';

const endpointUrl = 'https://jsonplaceholder.typicode.com/posts';

let filteredList: any = [];

const getApiData = async () => {
    const response = await fetch(endpointUrl);
    const data = await response.json();
    return data;
}

const VehicleStock = (props: any) => {
    const [vehicleStock, setVehicleStock] = useState([]);
    const [filteredStock, setFilteredStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getApiData().then((data) => {
            setVehicleStock(data);
            setFilteredStock(data);
            setLoading(false);
        })
    }, [])


   const handleSearch = (e: any) => {
        setSearchQuery(e.target.value);

        if (e.target.value === '') {
            return setFilteredStock(vehicleStock);
        }

        filteredList = vehicleStock.filter((vehicle: any) => {
            let something = vehicle.body.indexOf(e.target.value);
            let somethingElse = vehicle.title.indexOf(e.target.value);
            console.log(something);
            if (something !== -1 || somethingElse !== -1) {
                return true;
            } else {
                return false;
            }   
        })

        console.log(filteredList);
        setFilteredStock(filteredList);        
    }


    if (loading === true) {
            return (
                <div>
                    <TextField label='Search' onChange = {handleSearch} value = {searchQuery} />
                    <Typography variant = 'h5'> Please Wait</Typography>
                </div>
                )
    }

    return (
        
        <div>
            <TextField label='Search' onChange = {handleSearch} value = {searchQuery} />
            <TableContainer component={Paper}>
            <Table>
                <TableBody>
            {
                filteredStock.map((vehicle: any, index) => {
                    return (
                            <Vehicle key = {vehicle.id} data = {vehicle} />            
                            )
                        })
                    }
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default VehicleStock;