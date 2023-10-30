import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Resultado } from '../domain/resultado.interface';

interface EditableListProps {
  resultados: Resultado[];

}

const ResultadosList: React.FC<EditableListProps> = ({ resultados: data }) => {
  const [editedData, setEditedData] = useState<Resultado[]>([]);

  useEffect(() => {
    setEditedData(data)
  }, [data]);
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Zona</TableCell>
              <TableCell>Puesto</TableCell>
              <TableCell>Mesa</TableCell>
              <TableCell>Candidato</TableCell>
              <TableCell>Votos PDF</TableCell>
              <TableCell>Votos Reportes</TableCell>
              <TableCell>Dif</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {editedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.zona}</TableCell>
                <TableCell>{item.puesto}</TableCell>
                <TableCell>{item.mesa}</TableCell>
                <TableCell>{item.candidato}</TableCell>
                <TableCell>{item.votospdf}</TableCell>
                <TableCell>{item.votosreporte}</TableCell>
                <TableCell>{item.votospdf - item.votosreporte }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultadosList;
