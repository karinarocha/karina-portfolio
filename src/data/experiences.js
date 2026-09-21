import geoprocessing from "../assets/images/about/exploration/geoprocessing.png";
import support from "../assets/images/about/exploration/support.png";
import frontend from "../assets/images/about/exploration/frontend.png";

const experiences = [
  {
    id: 1,
    type: "exploration",
    title: "Geoprocessing & BI Intern",
    company: "Secretaria Municipal de Educação do Amazonas - SEMED",
    period: "Nov 2018 — Feb 2020",
    skills: [
      "Geoprocessing",
      "Business Intelligence",
      "Data Analysis",
    ],
    image: geoprocessing,
  },
  {
    id: 2,
    type: "exploration",
    title: "IT Support Intern",
    company: "Tribunal Regional Eleitoral Do Amazonas - TRE/AM",
    period: "Nov 2019 — Sep 2020",
    skills: [
      "Technical Support",
      "Troubleshooting",
      "User Assistance",
    ],
    image: support,
  },
  {
    id: 3,
    type: "exploration",
    title: "Front-End Intern",
    company: "Instituto Transire de Tecnologia e Biotecnologia da Amazônia",
    period: "Oct 2020 — Jan 2021",
    skills: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "REST APIs",
    ],
    image: frontend,
  },
];

export default experiences;