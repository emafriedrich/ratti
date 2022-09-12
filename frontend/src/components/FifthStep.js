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
console.log(grupedFeatures);

const FifthStep = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Acordions = () => {
    return grupedFeatures.map((group) => {
      return (
        <Accordion
          elevation={0}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          color="error"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <span style={{fontSize: "24px", display: "block", mt: "35px" }}>{group.group}</span>
            </Typography>
            
          </AccordionSummary>
          <AccordionDetails>
            {group.items.map((item) => (
              <FormControlLabel
                value="end"
                control={<Checkbox color="error" />}
                label={item}
                labelPlacement="end"
                sx={{ mt: "35px" }}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{ mb: "50px", padding: "50px", ml: "10%" }}
    >
      <Typography sx={{ fontSize: "24px", display: "block", mt: "35px" }}>
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
          sx={{ width: "40%" }}
          color="error"
          placeholder="Ej. uso comercial"
        ></TextField>

        <Box>
        
        </Box>
        <Typography>quinto paso finalizado</Typography>
        <ProgressButtons />
      </Box>
      <Acordions />
    </Stack>
  );
};

export default FifthStep;
