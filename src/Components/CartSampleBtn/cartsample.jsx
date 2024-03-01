import { useAppContext } from "../../Context";

export const CartSampleBtn = () => {
  const { incrementCartCount } = useAppContext();
  return (
    <div>
      <button onClick={() => incrementCartCount()}>Add To Cart</button>
    </div>
  );
};
