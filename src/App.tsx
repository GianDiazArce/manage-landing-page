import { CustomButton, CustomSlider } from "./components/custom";
import { Footer, Navbar } from "./components/ui";
import { whatdifferentManage } from "./db/texts";

const App = () => {
  return (
    <div>
      <header className="container">
        <Navbar />
      </header>
      <main className="flex flex-col gap-28 pt-5">
        {/* first section */}
        <section className="container flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="w-full flex flex-col gap-6 items-center md:items-start">
            <h1 className=" md:max-w-[420px] text-5xl leading-[1.15] text-center md:text-left font-bold text-blue-dark">
              Bring everyone together to build better products.
            </h1>
            <p className="paragraph max-w-[350px]">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <CustomButton text="Get started" />
          </div>
          <div className="w-full flex justify-end">
            <img src="./images/illustration-intro.svg" alt="" />
          </div>
        </section>

        {/* second section */}
        <section className="container flex flex-col gap-16 md:gap-0 md:flex-row justify-between">
          <div className="flex flex-col gap-6 w-full text-center md:text-left">
            <h2 className="text-4xl font-bold max-w-[420px] text-blue-dark">
              What’s different about Manage?
            </h2>

            <p className="paragraph max-w-[350px]">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="w-full flex flex-col gap-7">
            {whatdifferentManage.map((data, i) => (
              <div key={i} className="flex justify-end items-start gap-5">
                <div className="hidden md:flex">
                  <CustomButton text={`0${(i + 1).toString()}`} />
                </div>
                <div className="flex flex-col gap-3 py-1">
                  <div className="flex gap-3 items-center">
                    <div className="flex md:hidden">
                      <CustomButton text={`0${(i + 1).toString()}`} />
                    </div>
                    <h4 className="text-lg font-bold text-blue-dark">
                      {data.title}
                    </h4>
                  </div>
                  <p className="paragraph">{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* third section */}
        <article className="flex flex-col items-center gap-6 w-full">
          <h2 className="text-4xl font-bold text-blue-dark">
            What they’ve said
          </h2>

          <CustomSlider />

          <CustomButton text="Get started" />
        </article>
        <section className="w-full bg-image-color">
          <div className="container flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center py-16">
            <h2 className="text-4xl font-medium max-w-[420px] text-center md:text-left text-gray-light">
              Simplify how your team works today.
            </h2>
            <CustomButton text="Get Started" inverted />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
