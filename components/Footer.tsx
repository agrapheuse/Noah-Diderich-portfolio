export default function Footer() {
  return (
    <footer className="bg-middleground text-gray-200 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
