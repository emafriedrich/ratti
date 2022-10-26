import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import ProgressButtons from "./button";
import { useRecoilState } from "recoil";
import { postAtom } from "../state/atoms/posts";


const FirstStep = () => {
  const [post, setPost] = useRecoilState(postAtom);
  const [type, setType] = useState(post.type);

  return (
    <div>
      <FormControl sx={{ mt: 6, mb: 2, minWidth: 120 }} direction="row">
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mb: 5 }}>
          <Typography sx={{ width: '53%', fontSize: '20px' }}><b>Tipo de Propiedad</b></Typography>
        </Box>
        <Stack direction="row">
          <Box>
            <Select
              select
              sx={{ width: "300px", mr: 4 }}
              color="error"
              value={post.type}
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value="land" sx={{ textAlign: "center" }}>
                Lote
              </MenuItem>
              <MenuItem value="department">Departamento</MenuItem>
            </Select>

          </Box>
        </Stack>
      </FormControl>
      <Box>
        <ProgressButtons disableProgress={!type} onChange={ () => setPost({ ...post, type })}/>
      </Box>
    </div>
  );
};

export default FirstStep;
