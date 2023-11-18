import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(nombre, cantidad) {
  return { nombre, cantidad};
}

const rows = [

//   1. Laptops
// 2. PC
// 3. Teclados
// 4. Mouse
// 5. Impresoras
// 6. Celulares
// 7. Teléfonos FIjos
// 8. Televisores
// 9. Consolas de videojuegos
// 0.  Otros
// A. Cables
// B. Dispositivos de iluminación
// C. Parlantes
// D. Radios


  createData('Pantallas y Monitores:', 159),
  createData('Dispositivos Móviles', 237),
  createData('Teclados y Ratones', 262),
  createData('Tarjetas Electrónicas', 305),
  createData('Dispositivos de Almacenamiento', 356),
  createData('Dispositivos de Red', 305),
  createData('Electrodomésticos', 305),
  createData('Dispositivos Fotográficos', 5),



];

const Chart=() => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: "10px" }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ Width: "10px" }}>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cantidad}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default Chart;