import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { getPosts } from '../api/posts';
import Propertylist from './propertylist';


const SearchPlace = () => {
  const [posts, setPosts] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const [ubication, setUbication] = React.useState('');
  const handleChangeUbication = (event) => {
    setUbication(event.target.value);
  };

  const [property, setProperty] = React.useState('');

  const handleChangeTipeProperty = (event) => {
    setProperty(event.target.value);
  };
  const [propertyType, setPropertyType] = useState('all');

  if (loading) {
    return <span>... Cargando</span>;
  }
  return (
    <Box style={{ marginLeft: '10%', width: '80%' }}>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '60px',
          alignItems: 'center',
          width: '90%',
        }}
      >
        <TextField
          onChange={handleChangeUbication}
          placeholder="Nombre de la propiedad o lote"
          value={ubication}
          color="error"
          sx={{ width: '30%' }}
        ></TextField>

        <Select
          select
          sx={{ width: '200px', marginLeft: '1%', borderRadius: '10px' }}
          color="error"
          value={propertyType}
          onChange={(event) => setPropertyType(event.target.value)}
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="buildins">Edificios</MenuItem>
          <MenuItem value="loteos">Loteos</MenuItem>
        </Select>
        <Select
          select
          sx={{ width: '200px', marginLeft: '1%', borderRadius: '10px' }}
          color="error"
          disabled
          value={propertyType}
          onChange={(event) => setPropertyType(event.target.value)}
        >
          <MenuItem value="Charlotte-Belgrano">Charlotte Belgrano</MenuItem>
          <MenuItem value="Velvet">Velvet</MenuItem>
          <MenuItem value="Marwa">Marwa</MenuItem>
          <MenuItem value="WindHouse">WindHouse</MenuItem>
          <MenuItem value="Kona-21º">Kona 21º</MenuItem>
          <MenuItem value="Velas">Velas</MenuItem>
        </Select>

        <span style={{ marginLeft: 'auto' }}>
          {' '}
          {posts.length} propiedad{posts.length > 1 ? 'es' : ''} encontrada
          {posts.length > 1 ? 's' : ''}{' '}
        </span>
      </FormControl>
      {posts.map((p) => (
        <Propertylist post={p} />
      ))}
    </Box>
  );
};

export default SearchPlace;
