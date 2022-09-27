import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import FirstStep from "./FirstStep";
import ThirdStep from "./ThirdStep";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import SecondStep from "./SecondStep";
import FourStep from "./FourStep";
import { StepLabel } from "@mui/material";

import { useRecoilState } from "recoil";
import { currentStepAtom } from "../state/atoms/steper";
import FifthStep from "./FifthStep";
import { useEffect } from "react";
import { getFeatures } from "../api/features";
import { featuresAtom } from "../state/atoms/features";
import { getExtras } from "../api/extras";
import { extrasAtom } from "../state/atoms/extras";

import "./stepform.css";

function StepForm() {
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      case 3:
        return <FourStep />;
      case 4:
        return <FifthStep />;
      default:
        throw new Error("Unknown step");
    }
  };

  const [currentStep] = useRecoilState(currentStepAtom);

  const [, setFeatures] = useRecoilState(featuresAtom);

  const [, setExtras] = useRecoilState(extrasAtom);

  useEffect(() => {
    getFeatures().then(features => setFeatures(features));
    getExtras().then(extras => setExtras(extras))
  }, []);

  return (
    <>
      <Paper elevation={2}>
        <Stepper activeStep={currentStep} sx={{ p: 1 }} alternativeLabel>
          <Step>
            <StepLabel>Tipo</StepLabel>
          </Step>
          <Step>
            <StepLabel>Ubicacion</StepLabel>
          </Step>
          <Step>
            <StepLabel>Caracteristicas</StepLabel>
          </Step>
          <Step>
            <StepLabel>Multimedia</StepLabel>
          </Step>
          <Step>
            <StepLabel>Amenities</StepLabel>
          </Step>
        </Stepper>
      </Paper>
      <Paper elevation={2} sx={{ p: 20, ml: 20, mt: 4, mr: 20 }}>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" align="center" >
            Completa el formulario para continuar
          </Typography>
        </Box>

        {handleSteps(currentStep)}
      </Paper>
    </>
  );
}
export default StepForm;
