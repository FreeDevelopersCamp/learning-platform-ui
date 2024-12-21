import { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import styled from "@mui/material/styles/styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import { indigo } from "@mui/material/colors";

// STYLED COMPONENTS
const ColorCheckbox = styled(Checkbox)(() => ({
  color: indigo[400],
  "&$checked": { color: indigo[600] },
}));

export default function LabelledCheckbox() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange("checkedB")}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel
        control={<Checkbox value="checkedC" />}
        label="Uncontrolled"
      />
      <FormControlLabel
        disabled
        control={<Checkbox value="checkedD" />}
        label="Disabled"
      />
      <FormControlLabel
        disabled
        control={<Checkbox checked value="checkedE" />}
        label="Disabled"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange("checkedF")}
            value="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={
          <ColorCheckbox
            color="default"
            checked={state.checkedG}
            onChange={handleChange("checkedG")}
            value="checkedG"
          />
        }
        label="Custom color"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            value="checkedH"
          />
        }
        label="Custom icon"
      />
      <FormControlLabel
        label="Custom size"
        control={
          <Checkbox
            value="checkedI"
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
          />
        }
      />
    </FormGroup>
  );
}

export { ColorCheckbox };