import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import ProgressButtons from "./button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fakeSpectData from "../fixtures/features.json";
import { useRecoilState } from "recoil";
import { extrasAtom } from "../state/atoms/extras";
import Adicionales from "./fifth-step/adicionales";

let unidGroups = fakeSpectData.reduce((uniqueGroups, actual) => {
  if (!uniqueGroups.includes(actual.feature_group))
    uniqueGroups.push(actual.feature_group);
  return uniqueGroups;
}, []);

let grupedFeatures = [];

for (const group of unidGroups) {
  const items = fakeSpectData.reduce((groupedItems, actual) => {
    if (actual.feature_group === group) groupedItems.push(actual.feature);
    return groupedItems;
  }, []);

  grupedFeatures.push({ group, items });
}

const FifthStep = () => {
  const [extraGroups] = useRecoilState(extrasAtom);
  const [expanded, setExpanded] = React.useState(extraGroups[0]?.id);

  const handleChange = (id) => {
    setExpanded(id);
  };

  const Acordions = () => {
    return extraGroups.filter(g => g.type === 'checkboxes').map((group) => {
      return (
        <Box>
          <Accordion
            elevation={0}
            expanded={expanded === group.id}
            onChange={() => handleChange(group.id)}
            color="error"

          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"

            >
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                <span style={{ fontSize: "22px", display: "block", mt: "35px" }}>
                  <b>{group.title}</b>
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {group.extras.map((item) => (
                <FormControlLabel

                  value="end"
                  control={<Checkbox color="error" sx={{ marginRight: '20px' }} />}
                  label={item.name}
                  labelPlacement="end"
                  sx={{ mt: "35px", width: '30%' }}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      );
    });
  };

  return (
    <Box>
      <Stack
        direction="column"
        spacing={3}
        sx={{ mb: "50px", padding: "50px", ml: "10%", width: "60%" }}
      >
        <Typography
          sx={{ fontSize: "24px", display: "block", mt: "35px", mb: "20px" }}
        >
          <b>
            Estos campos son opcionales y mejoran el posicionamiento del anuncio
          </b>
        </Typography>
        <Typography sx={{ mt: "24px" }}>
          Buscá y agregá características.
        </Typography>
        <Box>
          <TextField
            variant="outlined"
            sx={{ width: "100%", mb: "60px" }}
            color="error"
            placeholder="Ej. uso comercial"
          ></TextField>

          <Acordions />
          <Adicionales extraGroup={extraGroups.filter(eg => eg.type === 'another')[0]}/>
        </Box>

      </Stack>
      <Stack sx={{ justifyContent: 'end' }}>
        <ProgressButtons />
      </Stack>
    </Box>
  );
};

export default FifthStep;
