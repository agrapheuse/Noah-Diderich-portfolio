import { Card } from "./ui/card";

export function Career() {
  return (
    <div id="career" className="section-style p-4">
      <Card className="container m-auto p-6 bg-background">
        <h2 className="h2-style">My Career</h2>
        <Card className="card-style p-4 mt-4 lg:m-4 shadow">
          <h3 className="h3-style">Education</h3>
          <ul className="ul-style">
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

        <Card className="card-style p-4 mt-4 lg:m-4 shadow">
          <h3 className="h3-style">Work Experience</h3>
          <ul className="ul-style">
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
                className="text-blue-400 hover:underline"
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
      </Card>
    </div>
  );
}
