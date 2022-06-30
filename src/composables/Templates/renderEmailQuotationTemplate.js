export default function renderQuotationTemplate(
  userData,
  selectedService,
  serviceAttrs,
  date
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
        <tr>
          <th  colspan = '2'>
          <P>Cliente: ${userData.name} ${userData.last_name}</P>
          <p>Telefono: ${userData.phone} </p>
          </th>
        </tr>
        <tr>
          <th  colspan = '2'>
          Fecha: ${date.meetingDate}, ${date.meetingHour} 
          </th>
        </tr>
        <tr>
          <th  colspan = '2'>
          Servicio: ${selectedService}
          </th>
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

`;;
}
