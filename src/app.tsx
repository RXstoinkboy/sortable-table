import React from "react";
import "./app.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./app.theme";

import Table from "./components/table";
import { TableWrapper, AppWrapper } from "./app.styles";
import { ColumnConfig, PersonType } from "./components/table/types";

const GlobalStyle = createGlobalStyle`
  table {
    border-collapse: collapse;
  }

  tr {
    background: white;
  }

  th {
    cursor: pointer;
  }
`

const tableConfig: ColumnConfig[] = [
  {
    name: "name",
    label: "Name",
    width: "200px",
  },
  {
    name: "gender",
    label: "Gender",
    width: "300px",
  },
  {
    name: "age",
    label: "Age",
    width: "200px",
  },
  {
    name: "eyeColor",
    label: "Eye color",
    width: "200px",
  },
  {
    name: "healthRate",
    label: "Health rate",
    width: "200px",
  },
];

const tableData: PersonType[] = [
  {
    name: "Alan",
    gender: "male",
    age: 22,
    eyeColor: "green",
    healthRate: "a",
  },
  {
    name: "John",
    gender: "male",
    age: 30,
    eyeColor: "brown",
    healthRate: "b",
  },
  {
    name: "Eva",
    gender: "female",
    age: 18,
    eyeColor: "blue",
    healthRate: "a",
  },
  {
    name: "Helen",
    gender: "female",
    age: 70,
    eyeColor: "yellow",
    healthRate: "c",
  },
  {
    name: "Joan",
    gender: "female",
    age: 90,
    eyeColor: "green",
    healthRate: "c",
  },
  {
    name: "Mike",
    gender: "male",
    age: 50,
    eyeColor: "black",
    healthRate: "a",
  },
  {
    name: "Ron",
    gender: "male",
    age: 20,
    eyeColor: "blue",
    healthRate: "b",
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <TableWrapper className="App">
            <Table tableConfig={tableConfig} tableData={tableData} />
          </TableWrapper>
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
