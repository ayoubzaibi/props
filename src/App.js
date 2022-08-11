import Voiture from "./component/voiture/Voiture";


function App() {
  const cars=[
    {
      brand:"mercedes",
      price:"37.499$",
      image:"https://sf2.auto-moto.com/wp-content/uploads/sites/9/2021/12/mercedes-classe-c-1.jpg"
    },
    {
      brand:"lamborghini",
      price:"356.000$",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg/1200px-Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg"
    },
    {
      brand:"bugatti chiron",
      price:"6.8m $",
      image:"https://cdn.motor1.com/images/mgl/nGzgl/s1/2021-bugatti-chiron-front.jpg"
    }



  ];
const handlePrice=(brand,price)=>alert(`${brand} costs ${price}`)



  return (
    <div className="App">
      <Voiture car={cars} handlePrice={handlePrice} />
      
    </div>
  );
}

export default App;
