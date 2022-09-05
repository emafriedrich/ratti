import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useRecoilState } from "recoil";
import { currentStepAtom } from "../state/atoms/steper";
import { Link } from "react-router-dom";

const ProgressButtons = () => {
  function handleLink(currentStep) {
    if (currentStep === 1) {
      setCurrentStep(2);
      return (<Link to="/Tipo"></Link>);
    }

    if (currentStep === 2) {
      setCurrentStep(3);
      return (<Link to="/Caracteristicas"></Link>);
    }

    if (currentStep === 3) {
      setCurrentStep(4);
      return (<Link to="/Multimedia"></Link>);
    }
    if (currentStep === 4) {
      setCurrentStep(5);
      return (<Link to="/Amenities"></Link>);
    }
  }

  function handleButton(estadoAmostrar) {
    switch (estadoAmostrar) {
      case 1:
        return (
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={"Flex-end"}
              sx={{ mt: 10 }}
            >
              <Button
              onClick={async () =>{handleLink(currentStep)}}
                variant="contained"
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#F11D41",
                  borderRadius: "10px",
                }}
              >
               
                Siguiente
              </Button>
            </Stack>
          </div>
        );

      case 2:
        return (
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={"Flex-end"}
              sx={{ mt: 10 }}
            >
              <Button
                variant="outlined"
                color="error"
                style={{ width: "150px", height: "50px", borderRadius: "10px" }}
                sx={{ color: "#000000" }}
              >
                Atrás{" "}
              </Button>
              <Button
                onClick={async () =>{handleLink(currentStep)}}
                variant="contained"
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#F11D41",
                  borderRadius: "10px",
                }}
              >
               
                Siguiente
              </Button>
            </Stack>
          </div>
        );
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
                variant="outlined"
                color="error"
                style={{ width: "150px", height: "50px", borderRadius: "10px" }}
                sx={{ color: "#000000" }}
              >
                Atrás{" "}
              </Button>
              <Button
              onClick={async () =>{handleLink(currentStep)}}
                variant="contained"
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#F11D41",
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
                variant="outlined"
                color="error"
                style={{ width: "150px", height: "50px", borderRadius: "10px" }}
                sx={{ color: "#000000" }}
              >
                Atrás{" "}
              </Button>
              <Button
              onClick={async () =>{handleLink(currentStep)}}
                variant="contained"
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#F11D41",
                  borderRadius: "10px",
                }}
              >
                
                Siguiente
              </Button>
            </Stack>
          </div>
        );
      case 5:
        return (
          <div>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={"Flex-end"}
              sx={{ mt: 10 }}
            >
              <Button
                variant="contained"
                style={{
                  width: "150px",
                  height: "50px",
                  backgroundColor: "#F11D41",
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

  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);

  return <div>{handleButton(currentStep)}</div>;
};

export default ProgressButtons;
