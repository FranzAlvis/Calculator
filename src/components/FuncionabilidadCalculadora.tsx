import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

export const CalculadoraFuncional = () => {
  const [pantalla, setPantalla] = useState("");

  const click = (tecla: string) => {
    setPantalla(pantalla + tecla);
  };

  const clear = () => {
    setPantalla("");
  };

  const calcular = () => {
    try {
      const resultado = eval(pantalla);
      if (resultado == Infinity) {
        setPantalla("No se puede dividir entre 0");
      } else {
        setPantalla(resultado.toString());
      }
    } catch (error) {
      setPantalla("Error");
    }
  };

  return (
    <Grid container rowSpacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <TextField
          sx={{
            backgroundColor: "#adddf3",
          }}
          value={pantalla}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("7");
          }}
        >
          7
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("8");
          }}
        >
          8
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("9");
          }}
        >
          9
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("+");
          }}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("4");
          }}
        >
          4
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("5");
          }}
        >
          5
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("6");
          }}
        >
          6
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("-");
          }}
        >
          -
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("1");
          }}
        >
          1
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("2");
          }}
        >
          2
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("3");
          }}
        >
          3
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            calcular();
          }}
        >
          =
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("0");
          }}
        >
          0
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click(".");
          }}
        >
          .
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#812805",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#ff7043",
            },
          }}
          onClick={() => {
            clear();
          }}
        >
          C
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={() => {
            click("/");
          }}
        >
          /
        </Button>
      </Grid>
    </Grid>
  );
};
