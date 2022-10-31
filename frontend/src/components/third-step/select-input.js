import { MenuItem, Select } from "@mui/material";

const SelectInput = ({ handleAgeBuilding, feature }) => {
  const posibleValues = JSON.parse(feature.posible_values);
  return <>
    <Select
      select
      sx={{ width: "200px", mt: 4, borderRadius: "10px" }}
      color="error"
      onChange={handleAgeBuilding}
    >
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
