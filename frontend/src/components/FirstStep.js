import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import ProgressButtons from './button';
import { useRecoilState } from 'recoil';
import { postAtom } from '../state/atoms/posts';
import { propertyGroupsAtom } from '../state/atoms/property-groups';
import { getAll } from '../api/property-groups';

const FirstStep = () => {
  const [post, setPost] = useRecoilState(postAtom);
  const [type, setType] = useState(post.type);
  const [propertyGroupId, setPropertyGroupId] = useState(null);

  const [propertyGroups, setPropertyGroups] =
    useRecoilState(propertyGroupsAtom);

  useEffect(() => {
    getAll().then((data) => setPropertyGroups(data));
  }, []);

  return (
    <div>
      <FormControl sx={{ mt: 6, mb: 2, minWidth: 120 }} direction="row">
        <Box
          sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 5 }}
        >
          <Typography sx={{ width: '83%', fontSize: '20px' }}>
            <b>Tipo de Propiedad</b>
          </Typography>
        </Box>
        <Stack direction="row">
          <Box>
            <Select
              select
              sx={{ width: '300px', mr: 4 }}
              color="error"
              value={post.type}
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value="lands" sx={{ textAlign: 'center' }}>
                Lote
              </MenuItem>
              <MenuItem value="apartments">Departamento</MenuItem>
            </Select>
          </Box>
        </Stack>
      </FormControl>
      <FormControl
        sx={{ mt: 6, mb: 2, minWidth: 120, display: !type ? 'none' : '' }}
        direction="row"
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', width: '100%', mb: 5 }}
        >
          <Typography sx={{ width: '83%', fontSize: '20px' }}>
            <b>{type === 'land' ? 'Loteo' : 'Edificio'}</b>
          </Typography>
        </Box>
        <Stack direction="row">
          <Box>
            <Select
              select
              sx={{ width: '300px', mr: 4 }}
              color="error"
              onChange={(event) => setPropertyGroupId(event.target.value)}
            >
              {propertyGroups
                .filter((pg) => pg.type === type)
                .map((pg) => {
                  return (
                    <MenuItem value={pg.id} sx={{ textAlign: 'center' }}>
                      {pg.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Box>
        </Stack>
      </FormControl>
      <Box>
        <ProgressButtons
          disableProgress={!type || !propertyGroupId}
          onChange={() => setPost({ ...post, type, propertyGroupId })}
        />
      </Box>
    </div>
  );
};

export default FirstStep;
