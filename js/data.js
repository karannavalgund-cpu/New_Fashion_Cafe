// NEW FASHION CAFE demo catalog. Contact details are DUMMY/demo values.
const P0=[
["Premium Oversized T-Shirt","T-Shirts","Men",799,1199,4.7,"tee","#d9d4c7"],["Classic Black T-Shirt","T-Shirts","Men",499,799,4.5,"tee","#1d1d1d"],
["Essential White T-Shirt","T-Shirts","Men",449,699,4.4,"tee","#f6f4ef"],["Streetwear Graphic Tee","T-Shirts","Men",899,1299,4.6,"tee","#4a5d4f"],
["Premium Polo T-Shirt","T-Shirts","Men",999,1499,4.5,"polo","#263a5c"],["Relaxed Fit Shirt","Shirts","Men",1199,1699,4.3,"shirt","#cdbfa8"],
["Denim Casual Shirt","Shirts","Men",1399,1999,4.6,"shirt","#5b7694"],["Cotton Overshirt","Jackets","Men",1599,2299,4.4,"jacket","#7a6a53"],
["Classic Blue Jeans","Jeans","Men",1499,2199,4.5,"jeans","#3f5f8a"],["Black Slim Jeans","Jeans","Men",1599,2299,4.6,"jeans","#222"],
["Cargo Utility Pants","Trousers","Men",1699,2499,4.3,"jeans","#6d7258"],["Essential Hoodie","Hoodies","Men",1299,1899,4.7,"hoodie","#8c8c8c"],
["Premium Sweatshirt","Hoodies","Men",1199,1799,4.5,"hoodie","#b08968"],["Women's Casual Top","Tops","Women",599,899,4.4,"tee","#e3b7b0"],
["Women's Oversized Tee","Tops","Women",699,999,4.6,"tee","#c9d3c3"],["Women's Denim Jacket","Jackets","Women",1799,2599,4.7,"jacket","#6a86a8"],
["Women's Casual Dress","Dresses","Women",1399,1999,4.5,"dress","#a45d5d"],["Women's Kurti","Kurtis","Women",899,1399,4.6,"kurti","#2d6a6a"],
["Women's Wide-Leg Pants","Casual Wear","Women",1099,1599,4.3,"jeans","#d8c3a5"],["Kids Graphic T-Shirt","T-Shirts","Kids",399,599,4.5,"tee","#f0b429"],
["Kids Casual Set","Sets","Kids",799,1199,4.4,"set","#6fb3b8"],["Kids Hoodie","Hoodies","Kids",899,1299,4.6,"hoodie","#e07a5f"],
["Kids Denim Jeans","Jeans","Kids",799,1099,4.3,"jeans","#4d6d94"],["Printed Summer T-Shirt","T-Shirts","Men",549,849,4.2,"tee","#e9c46a"],
["Premium Casual Shirt","Shirts","Men",1299,1799,4.5,"shirt","#e8e2d4"],["Streetwear Hoodie","Hoodies","Men",1499,2199,4.8,"hoodie","#2b2b2b"],
["Relaxed Joggers","Trousers","Men",999,1499,4.4,"jeans","#555"],["Classic Denim Jacket","Jackets","Men",1999,2899,4.6,"jacket","#4a6a91"]];
const PRODUCTS=P0.map((p,i)=>({id:i+1,name:p[0],category:p[1],gender:p[2],price:p[3],oldPrice:p[4],discount:Math.round(100-p[3]/p[4]*100),rating:p[5],type:p[6],color:p[7],
 sizes:p[2]==="Kids"?["4-5Y","6-7Y","8-9Y"]:["S","M","L","XL"].concat(i%3?["XXL"]:[]),stock:i%9!==8,featured:i%3===0,isNew:i>=16||i%4===0,
 description:`${p[0]} from New Fashion Cafe: comfortable, easy to style and made for everyday wear.`}));
