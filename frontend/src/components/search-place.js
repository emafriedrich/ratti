import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';

import { Box, Button, FormControl, MenuItem, Select } from '@mui/material';
import { getPosts } from '../api/posts';
import Propertylist from './propertylist';
import { useNavigate } from 'react-router-dom';
import { postAtom } from '../state/atoms/posts';
import { useRecoilState } from 'recoil';
import { currentStepAtom } from '../state/atoms/steper';
import { propertyGroupsAtom } from '../state/atoms/property-groups';
import { getAll } from '../api/property-groups';

const SearchPlace = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [, setPost] = useRecoilState(postAtom);

  const [, setCurrentStep] = useRecoilState(currentStepAtom);

  const [propertyGroupId, setPropertyGroupId] = useState(null);

  const [propertyType, setPropertyType] = useState('all');

  const [propertyGroups, setPropertyGroups] =
    useRecoilState(propertyGroupsAtom);

  useEffect(() => {
    searchPosts();
  }, []);

  const searchPosts = (propertyType, propertyGroupId) => {
    setLoading(true);
    setTimeout(() => {
      getPosts(propertyType, propertyGroupId)
        .then((data) => {
          setPosts(data);
        })
        .finally(() => setLoading(false));
    }, 100);
  };

  useEffect(() => {
    getAll().then((data) => setPropertyGroups(data));
  }, []);

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
        <Select
          select
          sx={{ width: '200px', marginLeft: '1%', borderRadius: '10px' }}
          color="error"
          value={propertyType}
          onChange={(event) => {
            setPropertyType(event.target.value);
            searchPosts(event.target.value, propertyGroupId);
          }}
        >
          <MenuItem value="all">Todos</MenuItem>
          <MenuItem value="apartments">Edificios</MenuItem>
          <MenuItem value="lands">Loteos</MenuItem>
        </Select>
        <Select
          select
          sx={{ width: '300px', mr: 4 }}
          color="error"
          disabled={propertyType === 'all'}
          value={propertyGroupId}
          onChange={(e) => {
            setPropertyGroupId(e.target.value);
            searchPosts(propertyType, e.target.value);
          }}
        >
          {propertyGroups
            .filter((pg) => propertyType === 'all' || pg.type === propertyType)
            .map((pg) => {
              return (
                <MenuItem value={pg.id} sx={{ textAlign: 'center' }}>
                  {pg.name}
                </MenuItem>
              );
            })}
        </Select>

        <span style={{ marginLeft: 'auto' }}>
          {' '}
          {posts.length} propiedad{posts.length > 1 ? 'es' : ''} encontrada
          {posts.length > 1 ? 's' : ''}{' '}
        </span>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end',width:'90%', marginTop:'30px' }}>
        <Button
          variant="contained"
          color="error"
          sx={{ borderRadius: '10px' }}
          onClick={() => {
            setPost({});
            setCurrentStep(0);
            navigate('/new-post');
          }}
        >
          Nueva Publicación
        </Button>
      </Box>
      {loading ? 'Cargando...' : posts.map((p) => <Propertylist post={p} />)}
    </Box>
  );
};

export default SearchPlace;
