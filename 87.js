const message=document.querySelector(".message");
const input=document.querySelector(".input");

const products=[
  {
    name:'Laptop',
    price:'₹50000'
  },
  {
    name:'Mobile',
    price:'₹20000'
  },
  {
    name:'Headphone',
    price:'₹200'
  },
  {
    name:'Keyboard',
    price:'₹1500'
  },
  {
    name:'Mouse',
    price:'₹800'
  }
];
function updateDetails(products){
  message.innerHTML="";
 
products.forEach((product)=>{
  message.innerHTML+=`
  <div>
  <p>Name:${product.name}</p>
  <p>Price:${product.price}</p>
  </div>
  `;
});
};
updateDetails(products);


  input.addEventListener('input',()=>{
   const result= products.filter((product)=>{
      return product.name.toLowerCase().includes( input.value.toLowerCase());
    });
    updateDetails(result);


  });

  


