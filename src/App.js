import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";

function App() {
  const [name, setName] = useState("Old Name's");
  const [rawDates, setRawDates] = useState([
    "03-Dec-2020",
    "09-Sep-2020",
    "08-Jun-2020",
  ]);

  const handleChangeDate = () => {
    for (let i = 0; i < rawDates.length; i++) {
      rawDates[i] = rawDates[i].replace("-Jan", "-01");
      rawDates[i] = rawDates[i].replace("-Feb", "-02");
      rawDates[i] = rawDates[i].replace("-Mar", "-03");
      rawDates[i] = rawDates[i].replace("-Apr", "-04");
      rawDates[i] = rawDates[i].replace("-May", "-05");
      rawDates[i] = rawDates[i].replace("-Jun", "-06");
      rawDates[i] = rawDates[i].replace("-Jul", "-07");
      rawDates[i] = rawDates[i].replace("-Aug", "-08");
      rawDates[i] = rawDates[i].replace("-Sep", "-09");
      rawDates[i] = rawDates[i].replace("-Oct", "-10");
      rawDates[i] = rawDates[i].replace("-Nov", "-11");
      rawDates[i] = rawDates[i].replace("-Dec", "-12");
    }
    setName("New Name's");
  };
  return (
    <div className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop="12rem"
      >
        <Grid item xs={2}>
          <header className="App-header">
            <p>Change Date</p>
          </header>
        </Grid>
        <Grid item xs={2}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <li key={`section-${name}`}>
              <ul>
                <ListSubheader>{`${name}`}</ListSubheader>
                {rawDates.map((rawDates) => (
                  <ListItem key={`item-${name}-${rawDates}`}>
                    <ListItemText primary={`Item ${rawDates}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          </List>
        </Grid>
        <button onClick={() => handleChangeDate()}>CliCk Dates</button>
      </Grid>
    </div>
  );
}

export default App;
