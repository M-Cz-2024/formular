import { FormControl,InputLabel,MenuItem,FormHelperText,Select } from '@mui/material'
import {Field,ErrorMessage,useField} from 'formik'

type SelectPoleProps = {
    label: string;
    name: string;
    id: string;
    placeholder: string;
  }

    const SelectPole: React.FC<SelectPoleProps> = ({ label, name, id, placeholder }) => {
    const renderErrorMessage = (msg: string) => (<span style={{color:"red"}}>{msg}</span>);
    const kraje = [
        "Hlavní město Praha",
        "Středočeský kraj",
        "Jihočeský kraj",
        "Plzeňský kraj",
        "Karlovarský kraj",
        "Ústecký kraj",
        "Liberecký kraj",
        "Královéhradecký kraj",
        "Pardubický kraj",
        "Kraj Vysočina",
        "Jihomoravský kraj",
        "Olomoucký kraj",
        "Zlínský kraj",
        "Moravskoslezský kraj"
      ];
    const [field] = useField(name);

  return (
     <FormControl variant="standard" fullWidth margin="normal">
    <InputLabel shrink htmlFor={id}>{label}</InputLabel>
    <Field
        {...field}
        as={Select}
        id={id}
        name={name}
        displayEmpty                                     
        >
        <MenuItem value="" disabled >
            <em style={{opacity:"0.5", fontStyle:"normal"}}>{placeholder}</em>
        </MenuItem>
        {kraje.map((kraj, index) => (
        <MenuItem key={index} value={kraj}>
            {kraj}
        </MenuItem>
        ))}                                   
    </Field>
    {<FormHelperText>{<ErrorMessage name={name}>{renderErrorMessage}</ErrorMessage>}</FormHelperText>}
</FormControl> 
  )
}

export default SelectPole
