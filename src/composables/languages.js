import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "es",
  messages: {
    es: {
      //footer
      reservedRights: "Quickpick derechos reservados",
      //RequestWizard
      next: "Continuar",
      prev: "Retroceder",
      //Sections
      applicant: "Solicitante",
      service: "Servicio",
      features: "caracteristicas",
      meeting: "Reunion",
      //Step/Services
      selectOneOrFewServices: "Selecciona uno o varios servicios",
    },
    en: {
      //footer
      reservedRights: "Quickpick reserved rights",
      //RequestWizard
      next: "Next",
      prev: "Previous",
      //Sections
      applicant: "Applicant",
      service: "Service",
      features: "Features",
      meeting: "Meeting",
      //Step/Services
      selectOneOrFewServices: "Select one o few services",
    },
  },
});

export default i18n;
