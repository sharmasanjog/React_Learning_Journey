
import Card from "./card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center gap-6 p-6">
      <Card
        username="Sanjog"
        address="Kathmandu"
        imgSrc="https://via.placeholder.com/150/2563eb/ffffff?text=S"
      />
      <Card
        username="Aryan"
        address="Pokhara"
        imgSrc="https://via.placeholder.com/150/16a34a/ffffff?text=A"
      />
    </div>
  );
}

export default App;
