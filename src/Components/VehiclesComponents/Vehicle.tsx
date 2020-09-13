import React, { useState } from 'react';
import { TableRow, TableCell, Button } from '@material-ui/core';




const Vehicle = (props: any) => {
    const [display, setDisplay] = useState('none');

    const handleClick = () => {
            if (display === 'none') {
                setDisplay('block');
            } else {
                setDisplay('none');
            }
        }
        
    return (
        <React.Fragment>
            <TableRow>
                <TableCell> <Button onClick= {handleClick} > ^ </Button> </TableCell>
                <TableCell> {props.data.id} </TableCell>
                <TableCell> {props.data.title} </TableCell>
            </TableRow>
            <TableRow style = {{ display: display }} >  
                <TableCell>  </TableCell>
                <TableCell> {props.data.body} </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default Vehicle;