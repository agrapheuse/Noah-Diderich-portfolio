import { Card } from "./ui/card";

export function Career() {
  return (
    <section className="bg-background py-12 m-12">
      <div className="container mx-auto px-6 font-[family-name:var(--font-geist-mono)]">
        <h2 className="text-2xl font-bold text-center text-gray-200">
          My Career
        </h2>
        <div className="mt-6 space-y-4">
          <Card className="bg-foreground p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-200">Education</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>
                <strong>Karel de Groot Hogeschool</strong> (2020-2024)
                <br />
                Applied Computer Science Bachelor Degree
              </li>
              <li>
                <strong>Test of English as a Foreign Language (TOEFL)</strong>
                <br />
                April 2021 – Score: Advanced
              </li>
              <li>
                <strong>Université Libre de Bruxelles</strong> (2019-2021)
                <br />
                Second year Bachelor in Physics
              </li>
            </ul>
          </Card>

          <Card className="bg-foreground p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-200">
              Work Experience
            </h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>
                <strong>
                  Tryve monday.com partners and CRM specialists, Edegem
                </strong>
                <br />
                Software Development Intern | 5 April - 7 June 2024
                <br />
                Reference: Maarten Cautreels (
                <a
                  href="mailto:maarten.cautreels@localyse.eu"
                  className="text-blue-500 hover:underline"
                >
                  maarten.cautreels@localyse.eu
                </a>
                )
              </li>
              <li>
                <strong>Atlas Sales Agency, Brussels</strong>
                <br />
                Direct Sales Representative | Summer 2021
              </li>
              <li>
                <strong>Roeland Creative Language Learning, London</strong>
                <br />
                Full immersion language camp | 8-15 July 2017
              </li>
              <li>
                <strong>Tipik Communication Agency, Brussels</strong>
                <br />
                Observation internship | 3-7 July 2017
              </li>
              <li>
                <strong>V+ Architectural Practice, Brussels</strong>
                <br />
                Observation internship | 26-30 June 2017
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
