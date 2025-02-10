import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cartItem";
const cartItems = [
  {
    productId: "asgdkjfjafj",
    photo:
      "https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
    name: "Macbook",
    price: 3000,
    quantity: 30,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.map((item, idx) => {
          return <CartItem key={idx} cartItem={item} />;
        })}
      </main>
      <aside>
        <p>Subtotal : ${subtotal}</p>
        <p>Shipping Charges : ${shippingCharges}</p>
        <p>Tax : ${tax}</p>
        <p>
          Discount : <em>- ${discount}</em>
        </p>
        <p>
          <b>Total : ${total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ${discount} is off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
