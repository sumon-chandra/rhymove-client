import SectionTitle from "./../sections/SectionTitle";
const GetInTouch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="relative section">
      <SectionTitle value="Get In Touch" />
      <p
        className="mx-auto text-center lg:w-3/4"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        action=""
        onSubmit={handleSubmit}
        className="z-20 flex flex-col gap-6 py-10 mx-auto lg:w-1/2"
      >
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email"
          className="contact-input"
        />
        <input
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
          className="contact-input"
        />
        <textarea
          className="contact-input"
          name="message"
          id=""
          cols="30"
          rows="5"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="Submit" className="my-btn" />
      </form>
      <div className="absolute hidden lg:block right-32 blur-[120px] w-20 -rotate-45 -bottom-20 h-[500px] bg-purple-600 z-1"></div>
    </section>
  );
};

export default GetInTouch;
