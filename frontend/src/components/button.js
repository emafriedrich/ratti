import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useRecoilState } from "recoil";
import { currentStepAtom } from "../state/atoms/steper";

const ProgressButtons = ({ disableProgress, onChange }) => {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);

  function handleNext() {
    onChange && onChange();
    setCurrentStep(currentStep + 1);
  }

  function handleBack() {
    onChange && onChange();
    setCurrentStep(currentStep - 1);
  }

  function handleButton(estadoAmostrar) {
    switch (estadoAmostrar) {
      case 0:
        return (
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={"Flex-end"}
              sx={{ mt: 10 }}
            >
              <Button
                onClick={handleNext}
                variant="contained"
                disabled={disableProgress}
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: !disableProgress && "#F11D41",
                  borderRadius: "10px",
                }}
              >

                Siguiente
              </Button>
            </Stack>
          </div>
        );

      case 1:
      case 2:
      case 3:
        return (
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={"Flex-end"}
              sx={{ mt: 10 }}
            >
              <Button
                onClick={handleBack}
                variant="outlined"
                color="error"
                style={{ width: "150px", height: "50px", borderRadius: "10px" }}
                sx={{ color: "#000000" }}
              >
                Atrás{" "}
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                disabled={disableProgress}
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: !disableProgress && "#F11D41",
                  borderRadius: "10px",
                }}
              >

                Siguiente
              </Button>
            </Stack>
          </div>
        );
      case 4:
        return (
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={"Flex-end"}
              sx={{ mt: 10 }}
            >
               <Button
                onClick={handleBack}
                variant="outlined"
                color="error"
                style={{ width: "150px", height: "50px", borderRadius: "10px" }}
                sx={{ color: "#000000" }}
              >
                Atrás{" "}
              </Button>
              <Button
                variant="contained"
                disabled={disableProgress}
                onClick={() => onChange?.() }
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: !disableProgress && "#F11D41",
                  borderRadius: "10px",
                }}
              >
                Finalizar
              </Button>
            </Stack>
          </div>
        );

      default:
        throw new Error("Unknown step");
    }
  }

  return <div>{handleButton(currentStep)}</div>;
};

export default ProgressButtons;
