import { Formik, Form} from "formik";
import { Button,Grid2, Typography,Paper} from "@mui/material";
import * as Yup from "yup";
import TextPole from "./TextPole";
import SelectPole from "./SelectPole";

const Registrace: React.FC= () => {
  
  type FormValues = {
    name: string;
    surName: string;
    email: string;
    userName: string;
    country: string;
  }
  
  const initialValues: FormValues = {
    name:"",
    surName:"",
    email:"",
    userName:"",
    country:"",
  }

  const validationSchema=Yup.object().shape({
    name:Yup.string().min(3,'Zadejte alespoň 3 písmena').required("Prosím vyplňte jméno"),
    email:Yup.string().min(8,'Zadejte alespoň 8 písmen').email("Nesprávný formát emailu").required("Prosím vyplňte email"),
    surName:Yup.string().min(3,'Zadejte alespoň 3 písmena').required("Prosím vyplňte příjmení"),
    userName:Yup.string().min(3,'Zadejte alespoň 3 písmena').required("Prosím vyplňte uživatele"),
    country: Yup.string().required("Výběr je povinný").notOneOf(["Vyberte..."],"Vyberte platnou možnost")
  })

    const handlePostForm = (
      values: FormValues,
      { resetForm }: { resetForm: () => void } 
    ) => {
      console.log("Hodnoty formuláře:",values);
      setTimeout(() => {
        resetForm();
      }, 1000);
    };
      
  return (<div>
  <Grid2>
    <Paper elevation={10}
      sx={{
        padding: '30px 40px',
        width: { 
            xs: '400px',
            md: '700px' 
            },
        margin: '0 auto',
      }}
    >
      <Typography variant="h4" color="initial" mb={6}>
        Registrace
      </Typography>
      <Formik 
        initialValues = {initialValues}
        validationSchema={validationSchema}
        onSubmit={handlePostForm}
      >
        {() => (
          <Form > 
            <Typography  color="initial" mb={3} >
              Registrační formulář
            </Typography>
              <Grid2 container direction="row" spacing={2}>
                <Grid2  size={{ xs: 12, md: 6 }} container direction="column">
                    <TextPole label="Jméno" name="name" id="name" placeholder="Vaše jméno"/>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}container direction="column">
                    <TextPole label="Příjmení" name="surName" id="surName" placeholder="Vaše příjmení"/>
                </Grid2>                              
              </Grid2>

              <Grid2 container direction="row" spacing={2} my={3} >
                  <Grid2 size={{ xs: 12, md: 6 }} container direction="column">
                    <TextPole label="Užívatelské jméno" name="userName" id="userName" placeholder="Vaše uživatelské jméno"/>   
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }} container direction="column">
                   <TextPole label="E-mail" name="email" id="email" placeholder="Váš e-mail"/> 
                  </Grid2>
              </Grid2>

              <Grid2 container direction="row" spacing={2} my={-2} >
                  <Grid2 size={{ xs: 12, md: 6 }}  container direction="column">
                    <SelectPole label="Kraj" id="country" name="country" placeholder="Vyberte..."/>                
                  </Grid2>
              </Grid2>

              <Grid2  spacing={2} my={3} container direction="row" justifyContent="right">
                  <Button variant="contained" type="reset"
                    style={{backgroundColor:"#186769"}}
                  >VYMAZAT</Button>
                  <Button variant="contained" 
                    color="success"
                    type="submit"
                  >ODESLAT</Button>
              </Grid2>
          </Form>
        )}
      </Formik>
    </Paper>
  </Grid2>
    </div>
  );
};

export default Registrace;
