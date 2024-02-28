import { ICardDetails } from "@data/interfaces/Card";

interface ITestimonialsData extends ICardDetails {
  clientPhoto: string;
}
export const testimonialsData: ITestimonialsData[] = [
  {
    company: "Mooi",
    logo: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg",
    name: "Brian Clark",
    clientPhoto:
      "https://images.caxton.co.za/wp-content/uploads/sites/5/2022/02/siso07SihleMooiOfRay_75877-e1644994939161.jpg",
    position: "CEO & Founder",
    quote: "Sofexs revolucionó nuestra manera de trabajar",
    feedback:
      "Antes, las tareas rutinarias consumían gran parte de nuestro tiempo y recursos. La complejidad de gestionar nuestra infraestructura tecnológica era abrumadora. Sin embargo, desde que Sofexs se involucró, todo ha cambiado.",
  },
  {
    company: "SalesForce",
    logo: "https://assets-global.website-files.com/5c579a2bc3ddd3316ce85540/5c5b78b7927f6aa7907ae2e4_Salesforce.svg",
    clientPhoto:
      "https://i.pinimg.com/originals/14/be/1c/14be1cc04736ad4f1ca52cc7adaa7ee0.jpg",
    name: "Stephanie Powell",
    position: "VP of sales",
    quote: "Sofexs nos ayudó a impulsar ventas",
    feedback:
      "Antes, las tareas rutinarias consumían gran parte de nuestro tiempo y recursos. La complejidad de gestionar nuestra infraestructura tecnológica era abrumadora. Sin embargo, desde que Sofexs se involucró, todo ha cambiado.",
  },
  {
    company: "Spotify",
    logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png",
    clientPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Christopher_White_Bahamondes.jpg/640px-Christopher_White_Bahamondes.jpg",
    name: "Christopher White",
    position: "VP of design",
    quote:
      "Desde que trabajamos con Sofexs reducimos 12% las quejas de los usuarios",
    feedback:
      "Antes, las tareas rutinarias consumían gran parte de nuestro tiempo y recursos. La complejidad de gestionar nuestra infraestructura tecnológica era abrumadora. Sin embargo, desde que Sofexs se involucró, todo ha cambiado.",
  },
  {
    company: "CoderHouse",
    logo: "https://res.cloudinary.com/hdsqazxtw/image/upload/v1642799651/WWW/Group_1.jpg",
    clientPhoto:
      "https://retailers.mx/revista/wp-content/uploads/2021/09/Christian-Patino-CEO-y-Cofounder-1.jpg",
    name: "Taylor Turner",
    position: "CEO",
    quote:
      "Con Sofexs ayudamos a los usuarios a disfrutar sus etapas en el aprendizaje",
    feedback:
      "Antes, las tareas rutinarias consumían gran parte de nuestro tiempo y recursos. La complejidad de gestionar nuestra infraestructura tecnológica era abrumadora. Sin embargo, desde que Sofexs se involucró, todo ha cambiado.",
  },
];
