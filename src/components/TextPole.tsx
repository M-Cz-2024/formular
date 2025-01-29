
import { FormControl,TextField } from '@mui/material'
import {Field,ErrorMessage,useField} from 'formik'


type TextPoleProps= {
  label: string;
  name: string;
  placeholder: string;
  id:string;
}

const TextPole: React.FC<TextPoleProps> = ({ label, name, placeholder }) => {
  const renderErrorMessage = (msg: string) => (<span style={{color:"red", position:"absolute"}}>{msg}</span>);
  const [field] = useField(name);
    
  return (
    <FormControl fullWidth sx={{display:'relative'}}>
      <Field 
        {...field}
        as={TextField}
        label={label}
        name={name}
        variant="standard"
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
          }}
        helperText={<ErrorMessage name={name}  >{renderErrorMessage}</ErrorMessage>}
        />
    </FormControl>
  )
}

export default TextPole
