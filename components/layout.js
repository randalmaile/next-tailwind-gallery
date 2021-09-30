import Header from "./header";

export default function Layout(props) {
  return (
    <div className="grid md:grid-cols-3">
      <Header />
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        {props.children}
      </main>
    </div>
  );
}
