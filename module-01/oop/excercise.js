// jawaban mas anugerah untuk soal no 2

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Transaction {
  total = 0;
  cart = [];

  addToCart(product, productQty) {
    product.qty = productQty;
    product.subTotal = product.price * product.qty;

    this.cart.push(product);

    this.total += product.subTotal;
  }
  showTotal() {
    console.log(`Total is ${this.total}`);
    return this.total;
  }
  checkout() {
    return {
        cart: this.cart,
        total: this.total
    }
  }
}
//Product apel beli 4, harga 500 masing2, total 2000
//Product apel beli 4, harga 500 masing2, total 2000
// const appleproduct = new Product("Apple", 500);
// console.log(appleproduct)
// const orangeproduct = new Product("Orange", 400);
const PriceTotal = new Transaction();
PriceTotal.addToCart(new Product("Apple", 500), 4);
PriceTotal.addToCart(new Product("Orange", 400), 3);

console.log(PriceTotal.cart);


PriceTotal.showTotal();
const finalizetransaction = PriceTotal.checkout();
console.log(finalizetransaction);


// class Product{
//     constructor(name,price){
//       this.name=name;
//       this.price=price;
//     }
    
//   }
//   class Transaction extends Product{
//     total =0;
//     product=[];
//     constructor(total,product,name,price){
//       super(name,price);
//       this.total===total;
//       this.product===product;
//     }
//     addtocart(product,productqty){
//         console.log(product)
//       this.product.push({product,productqty});
//       this.total+=product.price*productqty;    
//     }
//     showtotal(){
      
//       console.log(`Total is ${this.total}`);
//       return this.total;
//     }
//     checkout(){
//       checkouttotal=this.total;
//       checkoutproduct = this.product.map(item=>({
//         name:item.product.name,
//         price:item.product.price,
//         productqty:item.product.productqty,
//         subtotal:item.product.price*productqty
//       }))
//     }
//   }
//   Product apel beli 4, harga 500 masing2, total 2000
//   Product apel beli 4, harga 500 masing2, total 2000
//   const appleproduct = new Product('Apple',500);
//   const orangeproduct = new Product('Orange',400);
//   const PriceTotal = new Transaction();
//   console.log(appleproduct)

//   PriceTotal.addtocart(appleproduct,4);
//   PriceTotal.addtocart(orangeproduct,3);
//   PriceTotal.showtotal();
//   const finalizetransaction = PriceTotal.checkout;
//   console.log(PriceTotal.product)


//   function test (a, b) {
//     return a + b
//   }

//   console.log(test(1, 2))