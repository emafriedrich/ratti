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
import "./stepform.css";
import { useRecoilState } from "recoil";
import { currentStepAtom } from "../state/atoms/steper";

function StepForm() {
  const handleSteps = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourStep />;
      case 5:
        return <FourStep />;
      default:
        throw new Error("Unknown step");
    }
  };

  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);

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
      <Paper elevation={2} sx={{ p: 5, ml: 20, mt: 10, mr: 20 }}>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" align="center" sx={{ mt: 2 }}>
            Completa el formulario para continuar
          </Typography>
        </Box>

        {handleSteps(currentStep)}
      </Paper>
    </>
  );
}
export default StepForm;
