import Testimonial from "./Testimonial";
import Service from "./Service";
import useStore from "../../zustand";

const About = () => {
  const { data } = useStore();
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{data?.about?.subTitle}</p>

        <p>{data?.about?.description}</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {data?.services?.map((service, index) => (
            <Service
              key={index}
              icon={service.image.url}
              title={service.name}
              description={service.desc}
              charge={service.charge}
            />
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {data?.testimonials?.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.image.url}
              position={testimonial.position}
              testimonial={testimonial.review}
            />
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Social</h3>

        <ul className="clients-list has-scrollbar">
          {data?.social_handles?.map((social, index) => (
            <li className="clients-item" key={index}>
              <a href="#">
                <img src={social?.image.url} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
