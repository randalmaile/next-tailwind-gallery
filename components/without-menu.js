export default function WithoutMenu(props) {
  return (
    <div className="grid md:grid-cols-3">
      <main className="px-16 py-6 bg-gray-100 md:col-span-3">
        {props.children}
      </main>
    </div>
  );
}
