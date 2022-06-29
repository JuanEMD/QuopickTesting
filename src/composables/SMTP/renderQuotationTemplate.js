export default function renderQuotationTemplate(val1, val2, val3, val4) {
  return `
<html lang="en">
<head>
  <style>
    h1 {
      background-color: red;
    }
    h2 {
      color: red;
    }
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <div>
    <h1>Hola</h1>
    <h2>Esto es una prueba</h2>
    <p>Nombre: ${val1}</p>
    <p>Apellido: ${val2}</p>
    <p>Email: ${val3}</p>
    <p>Tel: ${val4}</p>
  </div>
</body>
</html>
`;
}
