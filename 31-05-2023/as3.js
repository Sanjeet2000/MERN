const data=[
   
    {
        image:"burger.jfif",
        Name:"Chicken Burger",
        Cost:"Rs.120",
        Desc:"A savory sandwich made with a juicy, tender chicken patty, nestled between two soft buns. It offers a delectable combination of flavors, with the succulent chicken patty complemented by a range of delicious toppings and sauces."
        
    },
    {
        image:"pizza.jfif",
        Name:"Veg Pizza",
        Cost:"Rs.150",
        Desc:"A scrumptious delight crafted with a crispy crust and topped with a medley of fresh vegetables. Bursting with vibrant flavors, it offers a delectable harmony of tangy tomato sauce, gooey cheese, and an assortment of colorful veggies, making it a perfect choice for vegetarians and pizza lovers alike."
    },
    {
        image:"chickenpopcorn.jfif",
        Name:"Chicken Popcorn",
        Cost:"Rs.110",
        Desc:"A crowd-pleasing appetizer that features bite-sized, tender pieces of chicken, coated in a crispy and flavorful breading. With its irresistible crunch and juicy interior, it's an ideal snack or side dish, guaranteed to satisfy cravings and leave taste buds wanting more."
    },
    {
        image:"chickenwings.jfif",
        Name:"Chicken Wings",
        Cost:"Rs.150",
        Desc:"Indulge in the ultimate finger-licking experience with our chicken wings. These succulent morsels are expertly seasoned, cooked to perfection, and tossed in a variety of tantalizing sauces, delivering a burst of flavor in every bite. Whether you prefer a mild or fiery kick, our chicken wings are sure to satisfy your cravings and leave you craving for more."
    },
    {
        image:"chickenwrap.jfif",
        Name:"Chicken Wrap",
        Cost:"Rs.150",
        Desc:"Experience a delicious fusion of flavors and convenience with our chicken wrap. Succulent grilled chicken, fresh veggies, and zesty sauces are expertly wrapped in a soft tortilla, creating a portable and satisfying meal. With every bite, you'll savor the harmonious blend of textures and taste sensations that make our chicken wrap a go-to choice for a quick and satisfying meal on the go."
    },
    {
        image:"chowmein.jfif",
        Name:"Chicken chowmein",
        Cost:"Rs.120",
        Desc:"Indulge in the savory delight of our chicken chowmein. This classic Asian dish features stir-fried noodles, tender chicken, and an array of vibrant vegetables, all infused with a mouthwatering blend of aromatic spices and sauces. Bursting with flavor and offering a satisfying combination of textures, our chicken chowmein is a must-try for lovers of Asian cuisine."
    },
    {
        image:"momos.jfif",
        Name:"Chicken momos",
        Cost:"Rs.100",
        Desc:"Savor the exquisite taste of our chicken momos, a beloved Tibetan dumpling delicacy. These steamed dumplings are filled with succulent minced chicken, fragrant herbs, and a tantalizing blend of spices. With their delicate texture and flavorful filling, our chicken momos are a delightful treat that will transport your taste buds to the heart of the Himalayas."
    },
    {
        image:"vegburger.jfif",
        Name:"Veg Burger",
        Cost:"Rs.100",
        Desc:"Indulge in the goodness of our veg burger, a delicious and satisfying plant-based delight. Packed with a hearty vegetable patty, fresh lettuce, juicy tomatoes, and a medley of flavorful toppings, it offers a tasty and nutritious alternative for vegetarians and veggie lovers. Bite into this delectable creation and experience a burst of flavors that will leave you craving for more."
    },
    {
        image:"Bluemojito.jfif",
        Name:"Blue Mojito",
        Cost:"Rs.100",
        Desc:"Elevate your taste buds with our refreshing Blue Mojito. This tantalizing twist on the classic mojito combines the zesty flavors of lime and mint with a vibrant blue hue, creating a visually stunning and deliciously invigorating beverage. Sip on this tropical delight and let the combination of flavors transport you to a blissful oasis of relaxation."
    },
    {
        image:"vegchowmein.jfif",
        Name:"Veg Chowmein",
        Cost:"Rs.100",
        Desc:"Tantalize your palate with our veg chowmein, a delightful vegetarian rendition of the classic Asian dish. Featuring stir-fried noodles tossed with an assortment of colorful vegetables, aromatic spices, and savory sauces, this flavorful creation offers a satisfying combination of textures and tastes. Indulge in this mouthwatering dish and embark on a culinary journey that celebrates the vibrant flavors of Asian cuisine."
    },
    {
        image:"vegwrap.jfif",
        Name:"Veg Wrap",
        Cost:"Rs.100",
        Desc:"Experience a burst of veggie goodness with our veg wrap. Fresh and crisp vegetables, along with a variety of delectable sauces, are expertly wrapped in a soft tortilla, creating a satisfying and nutritious handheld delight. Bite into this flavorful creation and enjoy the perfect balance of flavors and textures in every bite."
    },

];
const rmenu= document.getElementById("Show_items");
data.map((el)=>{
    const div=document.createElement("div"); 
    const img=document.createElement("img");
    img.src=el.image; 
    const Name = document.createElement("h3");
    Name.innerText = el.Name; 
    const Cost=document.createElement("h3");
    Cost.innerText=el.Cost;
    const Desc = document.createElement("p");
    Desc.innerText = "";
    
    const button1 =document.createElement("button");
    button1.classList.add("view_button");
    const button2 =document.createElement("button"); 
    button2.classList.add("remove_button");
    
    button1.innerText = "View More"; 
    button2.innerText = "View Less";
    
    button1.addEventListener("click",()=>{ 
        Desc.innerText=el.Desc;
    }),
    
    button2.addEventListener("click",() =>{ 
        Desc.innerText="";
    });
    div.append(img,Name,Cost,Desc,button1,button2); 
    rmenu.append(div);
    }
    );
     