import { Prueba2 } from "@/components/FuncionabilidadCalculadora";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";

const Calculator: NextPage = () => {
  return (
    <div style={{ padding: "50px", margin: "0 auto" }}>
      <Typography variant="h4" component="h2" align="center">
        Calculadora
      </Typography>
      <br />
      <Box
        sx={{
          margin: "0 auto",
          width: "400px",
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Prueba2 />
      </Box>
    </div>
  );
};

export default Calculator;
