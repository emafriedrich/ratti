import {
  Box,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { featuresAtom } from '../state/atoms/features';
import { postAtom } from '../state/atoms/posts';
import ProgressButtons from './button';
import NumberFeature from './third-step/number-input';
import SelectInput from './third-step/select-input';
import './ThirdStep.css';

const currencies = [
  {
    value: 'U$S',
    label: 'Dólar Estadounidense',
  },
  {
    value: '$',
    label: 'Peso Argentino',
  },
];

const ThirdStep = () => {
  const [numberAgeHidden, setnumberAgeHidden] = React.useState('none');
  const [postFeatures, setPostFeatures] = useState({});
  const [post, setPost] = useRecoilState(postAtom);

  const handleNumberAgeHidden = (e) => {
    setnumberAgeHidden('flex');
  };

  const featureComponents = {
    number: (feature) => (
      <NumberFeature
        name={feature.name}
        onChange={(value) => {
          setPostFeatures({ ...postFeatures, [feature.id]: value });
        }}
      />
    ),
    select: (feature, fg) => (
      <SelectInput
        name={fg.title}
        feature={feature}
        handleAgeBuilding={(e) => {
          if (e.target.value === 'Años de antiguedad') {
            handleNumberAgeHidden('');
          } else {
            setnumberAgeHidden('none');
          }
          setPostFeatures({
            ...postFeatures,
            [feature.id]: {
              value: e.target.value,
              additionalValue: postFeatures[feature.id]?.additionalValue,
            },
          });
        }}
      ></SelectInput>
    ),
  };
  const [values, setValues] = React.useState({
    amount: '',
  });
  const handleChangeAmount = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [countDescriptionCharacters, SetCountCharacter] = React.useState(post.description?.length || 0);

  const [countTitleCharacters, setCountTitleCharacters] = React.useState(post.title?.length || 0);

  const [featureGroups] = useRecoilState(featuresAtom);

  return (
    <div>
      <Stack
        direction="column"
        spacing={3}
        sx={{ mb: '50px', padding: '50px', ml: '10%', width: '50%' }}
      >
        {featureGroups.map((fg) => {
          return (
            <>
              <Box style={{ marginTop: '50px', marginBottom: '15px' }}>
                <Typography style={{ fontSize: '24px' }}>
                  <b>{fg.title}</b>
                </Typography>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
              >
                {fg.features.map((feature) => {
                  return (
                    <Box sx={{ width: '50%', marginTop: '20px' }}>
                      {featureComponents[fg.featureValueType](feature, fg)}
                      {fg.featureValueType === 'select' && (
                        <Box
                          sx={{
                            width: '170px',
                            display: numberAgeHidden,
                            mt: '35px',
                            ml: '35px',
                          }}
                        >
                          <TextField
                            color="error"
                            size="large"
                            inputProps={{
                              type: 'number',
                            }}
                            variant="outlined"
                            onChange={(event) =>
                              setPostFeatures({
                                ...postFeatures,
                                [feature.id]: {
                                  value: postFeatures[feature.id]?.value,
                                  additionalValue: event.target.value,
                                },
                              })
                            }
                            sx={{ width: '170px' }}
                          />
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </>
          );
        })}
        <Box style={{ marginTop: '50px' }}>
          <Typography style={{ fontSize: '24px', display: 'block' }}>
            <b>Precio</b>
          </Typography>
          <Box style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControl
              sx={{ mt: '35px', width: '170px', ml: '35px' }}
              variant="standard"
              color="error"
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Cantidad
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                onChange={(event) =>
                  setPost({ ...post, price: Number(event.target.value) })
                }
                value={post.price}
                startAdornment={
                  <TextField
                    id="standard-select-currency"
                    select
                    color="error"
                    variant="standard"
                    value={post.currency}
                    onChange={(event) => {
                      setPost({ ...post, currency: event.target.value });
                    }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value + '  '}
                      </MenuItem>
                    ))}
                  </TextField>
                }
              />
            </FormControl>
          </Box>
        </Box>
        <Box>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                color="error"
                checked={post.fitForCredit}
                onChange={(event) =>
                  setPost({ ...post, fitForCredit: event.target.checked })
                }
              />
            }
            label="Apto Crédito"
            labelPlacement="end"
            sx={{ mt: '35px' }}
          />
        </Box>
      </Stack>
      <Stack
        direction="column"
        spacing={3}
        sx={{ mb: '50px', padding: '50px', ml: '10%' }}
      >
        <Box>
          <Typography sx={{ fontSize: '24px', display: 'block', mt: '35px' }}>
            <b>Describe la propiedad</b>
          </Typography>
          <Typography sx={{ mt: '24px', mb: '20px' }}>
            Asegúrate de incluir el tipo de propiedad y el tipo de tu aviso.
          </Typography>
        </Box>
        <Box>
          <Typography>
            <b>Titulo</b>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              variant="outlined"
              sx={{ mt: '20px', width: '28%' }}
              color="error"
              placeholder="Completá el título de tu aviso"
              inputProps={{ minLength: 15 }}
              value={post.title}
              onChange={(event) => {
                setCountTitleCharacters(event.target.value.length);
                setPost({ ...post, title: event.target.value })
              }
              }
            ></TextField>
            <Box sx={{ display: countTitleCharacters >= 15 ? 'none' : 'flex', alignItems: 'end', ml: '10px' }}>
              <span style={{ color: countTitleCharacters >= 15 ? '' : 'red' }}>
                {countTitleCharacters} / 15
              </span>
            </Box>
          </Box>
        </Box>
        <Box>
          {' '}
          <Typography>
            <b>Descripción</b>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Escribe un mínimo de 150 caracteres"
              sx={{ mt: '20px', width: '28%' }}
              color="error"
              inputProps={{ minLength: 150 }}
              value={post.description}
              onChange={(e) => {
                SetCountCharacter(e.target.value.length);
                setPost({ ...post, description: e.target.value });
              }}
            />
            <Box sx={{ display: countDescriptionCharacters >= 150 ? 'none' : 'flex', alignItems: 'end', ml: '10px' }}>
              <span
                style={{
                  color: countDescriptionCharacters >= 150 ? '' : 'red',
                }}
              >
                {countDescriptionCharacters} / 150
              </span>
            </Box>
          </Box>
        </Box>
      </Stack>

      <ProgressButtons
        disableProgress={
          !post.title ||
          post.title.length < 15 ||
          !post.description ||
          post.description.length < 150 ||
          !post.currency ||
          !post.price
        }
      />
    </div>
  );
};

export default ThirdStep;
