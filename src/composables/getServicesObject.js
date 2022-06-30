export default function getServicesObject(sv) {
  let servicesObject = {
    serviceList: "",
    servicesTotalPrice: 0,
  };

  for (let i = 0; i < sv.length; i++) {
    servicesObject.serviceList +=
      "<tr>" +
      "<td>" +
      sv[i].servicename +
      "</td>" +
      "<td> $" +
      sv[i].serviceprice +
      "</td>" +
      "</tr>";

    servicesObject.servicesTotalPrice += sv[i].serviceprice;
  }
  // for (let i = 0; i < sv.length; i++) {
  //   servicesObject.serviceList +=
  //     "<hr>" +
  //     "<div style = 'display: flex; justify-content: space-between; margin: 10px 0px;'>" +
  //     "<p>" +
  //     sv[i].servicename +
  //     "</p>" +
  //     "<p>" +
  //     sv[i].serviceprice +
  //     "</p>" +
  //     "</div>";

  //   servicesObject.servicesTotalPrice += sv[i].serviceprice;
  // }
  return servicesObject;
}
