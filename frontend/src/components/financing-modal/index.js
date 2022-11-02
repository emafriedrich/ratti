import {
  Button,
  Modal,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';

import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function createInstallment(name, monto) {
  return { name, monto };
}

const rows = [
  createInstallment('Cuota 1', '1200'),
  createInstallment('Cuota 2', '2400'),
  createInstallment('Cuota 3', '3600'),
  createInstallment('Cuota 4', '4800'),
  createInstallment('Cuota 5', '6000'),
  createInstallment('Cuota 6', '7200'),
  createInstallment('Cuota 7', '8400'),
  createInstallment('Cuota 8', '9600'),
];

const FinancingModal = ({open, onClose}) => {
  const [showPlan, setShowInstallments] = React.useState(false);

  const [editableInstallments, setEditableInstallments] = React.useState('');
  const [installments, setInstallments] = React.useState('');

  const handleChangeSelect = (event) => {
    setEditableInstallments(event.target.value);
  };

  const [editableAmount, setEditableAmount] = React.useState(0);
  const [initialAmount, setInitialAmount] = React.useState(0);

  const handleAmount = (event) => {
    setEditableAmount(event.target.value);
  };

  const generateInstallments = () => {
    setShowInstallments(true);
    setInitialAmount(parseFloat(editableAmount));
    setInstallments(editableInstallments);
  }

  const PlanDeCuotas = (
    <div style={{ marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span>Entrega: $ {initialAmount}. Cuotas: {installments}</span>
      </div>
      <div>
        <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
          <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Cuotas</TableCell>
                <TableCell align="center">Monto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="center">{row.monto}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            type={'number'}
            id="outlined-basic"
            label="Entrega"
            variant="outlined"
            color="error"
            style={{ marginBottom: '30px' }}
            onChange={handleAmount}
            value={editableAmount}
          />

          <FormControl sx={{ m: 1, minWidth: 120, margin: '0' }}>
            <InputLabel
              id="demo-controlled-open-select-label"
              color="error"

            >
              Cantidad de cuotas
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={editableInstallments}
              label="Cuotas"
              onChange={handleChangeSelect}
              color="error"
            >
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={24}>24</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={36}>36</MenuItem>
              <MenuItem value={42}>42</MenuItem>
              <MenuItem value={48}>48</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{ marginTop: '30px', borderRadius: '10px' }}
            variant="contained"
            color="error"
            onClick={generateInstallments}
            disabled={!parseFloat(editableAmount) || !editableInstallments}
          >
            {showPlan ? 'Recalculá' : 'Calculá'} tu plan de cuotas
          </Button>
          {showPlan && PlanDeCuotas}
        </Box>
      </Box>
    </Modal>
  );
};

export default FinancingModal;
