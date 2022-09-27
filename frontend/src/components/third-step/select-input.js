import { MenuItem, Select, Typography } from "@mui/material";

const SelectInput = ({ handleAgeBuilding, feature }) => {
  const posibleValues = JSON.parse(feature.posible_values);
  console.log(posibleValues)
  return <>
    <Select
      select
      sx={{ width: "200px", mt: 4, borderRadius: "10px" }}
      color="error"
      onChange={handleAgeBuilding}
    >
      <MenuItem value="" disabled></MenuItem>
      {
        posibleValues.map(value => {
          return <MenuItem value={value.value} sx={{ textAlign: "center" }}>
            {value.value}
          </MenuItem>
        })
      }
    </Select>
  </>
};

export default SelectInput;
