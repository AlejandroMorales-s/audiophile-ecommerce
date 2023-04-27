import { useEffect, useState } from "react";
//* Redux
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import {
  addToShoppingCart,
  removeFromShoppingCart,
} from "../reducers/shoppingCart/shoppingCartAsyncThunks";
import { setNotificationInfo } from "../reducers/notification/notificationReducer";
import { selectShoppingCartProducts } from "../reducers/shoppingCart/shoppingCartReducer";
//* Helpers
import { checkIfProductIsInShoppingCart } from "../helpers";

interface Props {
  productId: number;
}

interface AddToShoppingCart {
  productId: number;
  quantity: number;
}

interface RemoveFromShoppingCart {
  productId: number;
}

const useProductInShoppingCart = ({ productId }: Props) => {
  const [inShoppingCart, setInShoppingCart] = useState(false);

  const dispatch = useAppDispatch();
  const shoppingCart = useSelector(selectShoppingCartProducts);

  //* Check if product is in shopping cart
  const handleProductInShoppingCart = () => {
    if (!shoppingCart) return;

    setInShoppingCart(
      checkIfProductIsInShoppingCart({ productId, shoppingCart })
    );
  };

  //* Add product
  const addProduct = ({ productId, quantity }: AddToShoppingCart) => {
    dispatch(addToShoppingCart({ productId, quantity })).then((res) => {
      if (res.payload) {
        dispatch(
          setNotificationInfo({
            message: "Product added successfully",
            title: "Added to shopping cart",
            type: "success",
          })
        );

        setInShoppingCart(true);
      }
    });
  };

  //* Remove product
  const removeProduct = ({ productId }: RemoveFromShoppingCart) => {
    dispatch(removeFromShoppingCart({ productId })).then((res) => {
      if (res.payload) {
        dispatch(
          setNotificationInfo({
            message: "Product removed successfully",
            title: "Removed from shopping cart",
            type: "success",
          })
        );

        setInShoppingCart(false);
      }
    });
  };

  useEffect(() => handleProductInShoppingCart, [shoppingCart]);

  return { inShoppingCart, addProduct, removeProduct };
};

export default useProductInShoppingCart;
