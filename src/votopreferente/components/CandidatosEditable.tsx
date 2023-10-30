import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Candidato } from '../../candidatos/domain/candidato.interface';


interface EditableListProps {
  candidatos: Candidato[];
  onSave: (data: Candidato[]) => void;
  onCancel: () => void;
}

const CandidatosEditable: React.FC<EditableListProps> = ({ candidatos: data, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState<Candidato[]>([]);

  const handleSave = () => {
    onSave(editedData);
  };

  const handleCancel = () => {
    onCancel();
  };
  

  useEffect(() => {
    setEditedData(data)
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
    const { name, value } = event.target;
    const updatedData = editedData.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setEditedData(updatedData);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Codigo</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Votos PDF</TableCell>
              <TableCell>Votos Reporte</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {editedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nombre}-{item.votospdf}-</TableCell>
                <TableCell>
                  <TextField
                    name="votospdf"
                    value={item.votospdf}
                    inputProps={{ maxLength: 3 }}
                    onChange={(e) => handleChange(e, item.id)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="votosreporte"
                    value={item.votosreporte}
                    inputProps={{ maxLength: 3 }}
                    onChange={(e) => handleChange(e, item.id)}
                  />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        onClick={handleSave}
      >
        Save
      </Button>

      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        onClick={handleCancel}
      >
        cancelar
      </Button>
    </div>
  );
};

export default CandidatosEditable;
