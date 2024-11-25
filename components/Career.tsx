export function Career() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center">My Career</h2>
        <div className="mt-6 space-y-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Software Engineer at XYZ</h3>
            <p className="text-gray-600">2021 - Present</p>
            <p className="mt-2 text-gray-700">
              Developing robust web applications and APIs using modern
              frameworks and tools.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Intern at ABC Corp</h3>
            <p className="text-gray-600">2020 - 2021</p>
            <p className="mt-2 text-gray-700">
              Worked on a mobile application to streamline task assignment
              processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
