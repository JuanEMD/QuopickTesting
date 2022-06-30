export default function renderQuotationTemplate(
  selectedService,
  serviceAttrs
) {
  return `
  <html>
    <head>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 80%;
          max-width: 600px;
        }
        td, th{
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
      </style>
    </head>
    <body>
      <table>
        <tr >
          <th colspan = '2'>Servicio: ${selectedService}</th>
        </tr>
        ${serviceAttrs.serviceList}
        <tr>
          <td><b>Total: </b></td>
        <td>
          <b>$${serviceAttrs.servicesTotalPrice}</b>
        </td>
        </tr>
    </table>
    </body>
  </html>

`;
}
