import { Button, Paper, TextareaAutosize } from "@mui/material";
import React from "react";
import Img1 from "../img/test1.png";
import Img2 from "../img/test2.png";
import Img3 from "../img/test3.png";
import Img4 from "../img/test4.png";
import Img5 from "../img/test5.png";
import "./CostumerPropertyOffer.css";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import ShareIcon from "@mui/icons-material/Share";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChairIcon from "@mui/icons-material/Chair";
import FormData from "react";
import { TextField } from "@mui/material";

const CostumerPropertyOffer = () => {
  return (
    <>
      <div className="container">
        <div className="box-img">
          <div className="col-first">
            <div className="box-image_first">
              <img className="img-first" src={Img1} alt="pics"></img>
            </div>
          </div>
          <div className="col-second">
            <div className="row-first">
              <div className="box-image_second">
                <img className="img-second" src={Img2} alt="pics"></img>
              </div>
              <div className="box-image_third">
                <img className="img-third" src={Img3} alt="pics"></img>
              </div>
            </div>
            <div className="row-first">
              <div className="box-image_four">
                <img className="img-four" src={Img4} alt="pics"></img>
              </div>
              <div className="box-image_five">
                <img className="img-five" src={Img5} alt="pics"></img>
              </div>
            </div>
          </div>
        </div>
        <div
          className="box-data_prop"
          style={{ display: "flex", flexDirection: "row" ,justifyContent:'space-between'}}
        >
          <div
            className="offer-data"
            style={{ marginTop: "60px", marginBottom: "40px", width: "65%" }}
          >
            <div className="row-1">
              <Paper
                className="dep-data_box"
                elevation={4}
                style={{
                  
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="sell"
                  style={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#000",
                    paddingBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <TripOriginIcon
                      color="error"
                      sx={{ marginRight: "15px" }}
                    ></TripOriginIcon>
                    <span>Venta</span>
                  </div>
                  <Button>
                    <ShareIcon
                      color="error"
                      sx={{ cursor: "pointer" }}
                    ></ShareIcon>
                  </Button>
                </div>
                <div
                  className="price"
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#000",
                    paddingBottom: "5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span>USD 1 800 000</span>
                </div>
                <div
                  className="expensas"
                  style={{
                    fontSize: "14px",
                    color: "#000",
                    paddingBottom: "5px",
                  }}
                >
                  + <span>$21 000</span> Expensas
                </div>
                <div
                  className="data-text"
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#000",
                    margin: "10px 0",
                   
                  }}
                >
                  Departamento * 107M2 * 5 Ambientes * Cochera *{" "}
                </div>
              </Paper>
            </div>
            <div className="row-2" style={{ marginTop: "50px" }}>
              <div className="title-section">
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#000",
                    lineHeight: "26px",
                    margin: "8px 0",
                  }}
                >
                  Venta Departamento 5 Ambientes Posadas
                </span>
              </div>
              <div className="title-location" style={{ marginTop: "12px" }}>
                <span
                  style={{
                    alignItems: "center",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "22px",
                    color: "#000",
                    margin: 0,
                  }}
                >
                  San Martín 805
                </span>
                <span> Posadas , Ciudad Capital</span>
              </div>
              <div
                className="credit"
                style={{ marginTop: "40px", marginBottom: "50px" }}
              >
                <LightbulbCircleIcon
                  color="error"
                  sx={{ marginRight: "5px" }}
                />
                <span style={{ marginRight: "5px" }}>Apto Crédito</span>
                <a href="linkto">Simula tu crédito</a>
              </div>
              <div
                className="description-property"
                style={{
                  lineHeight: "25px",
                  textAlign: "left",
                  height: "auto",
                  fontSize:'18.5px'
                }}
              >
                <span>
                  {" "}
                  Corredor Responsable: Marcos Dominguez CUCICBA 5666 / CSI 5888
                  -
                </span>
                <span>Contacto: Mirta Ofelia Perea - MLS ID # </span>
                <span>
                  Venta departamento cinco ambientes muy luminoso, Orientación
                  NE. Ingresando al edificio nos encontramos con amplio palier y
                  dos ascensores. Departamento 5 ambientes, con balcón y
                  cochera.
                  <br></br>
                  <br></br>
                  Ingresando nos encontramos con el living comedor muy espacioso
                  con salida a balcón, Pasillo distribuidor.
                  <br></br>
                  <br></br>Posee 4 dormitorios amplios con placar, 2 baños
                  completos con ducha. Cocina comedor con muebles sobre y bajo
                  mesada y lavadero separado, que ventila al exterior. Los pisos
                  de porcelanato. Calefacción por calefactor. Encargado
                  permanente. Ubicación: Excelente ubicación.
                  <br></br>
                  <br></br> Se encuentra haciendo esquina, sobre las calles
                  Puertas: Gral. César Díaz 1971/75/1999 – Andrés Lamas
                  1825/45/75, Piso 1° Dpto. “B” Villa General Mitre. CABA. Gran
                  caudal de medios de transportes y facilidad de accesos.
                  <br></br>
                  <br></br> Expensas Junio/2022: $ 21.697
                  <br></br>
                  <br></br>La oficina es de operación y gestión independiente.
                  La presente publicación describe las características
                  esenciales del inmueble, debiéndose consultar al corredor
                  público inmobiliario responsable de la operación por la
                  eventual actualización de las medidas, descripciones
                  arquitectónicas y funcionales, valores de expensas, servicios,
                  impuestos, precios y demás información, cuyos valores son
                  aproximados. Los agentes/gestores NO ejercen el corretaje
                  inmobiliario. Todas las operaciones inmobiliarias son objeto
                  de intermediación y conclusión por parte del corredor público
                  inmobiliario responsable de la presente publicación. El
                  inmueble no es accesible para personas con discapacidades
                  físicas.
                  <br></br>
                  <br></br> Comprá la casa que querés! No la que podés. Accedé a
                  un préstamo por hasta el 30% del valor de esta propiedad.{" "}
                </span>
              </div>
            </div>
            <div className="row-3" style={{ marginTop: "50px" }}>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "0px 0px 10px",
                }}
              >
                Mirá lo que ofrece esta propiedad
              </span>
              <Accordion sx={{ marginTop: "30px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListAltIcon
                    style={{ marginRight: "15px", marginTop: "15px" }}
                    color="error"
                  />
                  <Typography
                    style={{
                      fontSize: "17px",
                      lineHeight: "55px",
                      fontWeight: "600",
                    }}
                  >
                    Características generales
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", flexWrap: "wrap", marginLeft: "40px" }}
                >
                  <Typography width={"33%"} sx={{ marginBottom: "20px" }}>
                    Cantidad de plantas: 1
                  </Typography>
                  <Typography width={"33%"}>
                    Cobertura Cochera: cubierta
                  </Typography>
                  <Typography width={"33%"}>Gimnasio</Typography>
                  <Typography width={"33%"}>Parrilla</Typography>
                  <Typography width={"33%"}>Pileta</Typography>
                  <Typography width={"33%"}>Solarium</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <DryCleaningIcon
                    style={{ marginRight: "15px", marginTop: "15px" }}
                    color="error"
                  />
                  <Typography
                    style={{
                      fontSize: "17px",
                      lineHeight: "55px",
                      fontWeight: "600",
                    }}
                  >
                    Servicios
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", flexWrap: "wrap", marginLeft: "40px" }}
                >
                  <Typography width={"33%"}>Laundry</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <ChairIcon
                    style={{ marginRight: "15px", marginTop: "15px" }}
                    color="error"
                  />
                  <Typography
                    style={{
                      fontSize: "17px",
                      lineHeight: "55px",
                      fontWeight: "600",
                    }}
                  >
                    Ambientes
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: "flex", flexWrap: "wrap", marginLeft: "40px" }}
                >
                  <Typography width={"33%"} sx={{ marginBottom: "20px" }}>
                    Cocina
                  </Typography>
                  <Typography width={"33%"}>Comedor</Typography>
                  <Typography width={"33%"}>Jardín</Typography>
                  <Typography width={"33%"}>Lavadero</Typography>
                  <Typography width={"33%"}>Patio</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <Paper
            className="contact-sticky"
            style={{
              backgroundColor: "#E3EEE7",
              marginLeft: "15px",
              marginTop: "60px",
              marginBottom: "40px",
              width: "30%",
              height: "100%",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
            }}
            elevation={4}
          >
            <div
              className="form-box"
              style={{ width: "100%", marginBottom: "30px" }}
            >
              <div style={{
                    fontSize: "18px",
                    lineHeight: "18px",
                    fontWight: "600",
                    textAlign: "left",
                    margin: "10px 0px",
                  }}>
                <span
                  
                >
                  <b>Contactate con la inmobiliaria Batista por la propiedad en
                  Santa Fe, Santa Fe</b>
                </span>
              </div>
            </div>
            <div>
              <TextField
                label="Nombre"
                sx={{ width: "45%" }}
                color="error"
              ></TextField>
              <TextField
                label="Teléfo"
                color="error"
                sx={{ width: "45%", marginLeft: "10%", marginBottom: "30px" }}
                type="number"
              >
                Teléfono
              </TextField>
            </div>
            <div>
              <TextField
                label="Email"
                sx={{ width: "100%", marginBottom: "30px" }}
                color="error"
              ></TextField>
            </div>
            <TextField
              label="Mensaje"
              variant="outlined"
              multiline
              placeholder="Mensaje"
              minRows={3}
              style={{
                height: "100px",
                borderRadius: "10px",
                width: "100%",
                marginBottom: "30px",
              }}
              color="error"
            ></TextField>

            <Button
              variant="contained"
              color="error"
              sx={{
                width: "100%",
                height: "40px",
                borderRadius: "10px",
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              Contactar
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                width: "100%",
                height: "40px",
                borderRadius: "10px",
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              Contactar por Whatsapp
            </Button>
            <Typography>
              Al enviar estás aceptando los{" "}
              <a href="">
                Términos y Condiciones de Uso y la Política de Privacidad
              </a>
            </Typography>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default CostumerPropertyOffer;
