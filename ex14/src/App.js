import React, { createContext, useContext, useMemo, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb",
  },
};

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  const value = useMemo(
    () => ({
      theme: themes[theme],
      themeName: theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

function Theme() {
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <section
      className="theme-box"
      style={{
        color: theme.foreground,
        backgroundColor: theme.background,
      }}
    >
      <h2>1. Theme Context</h2>
      <p>Current theme: {themeName}</p>
      <button
        onClick={toggleTheme}
        style={{
          color: theme.background,
          backgroundColor: theme.foreground,
        }}
      >
        Change Theme
      </button>
    </section>
  );
}

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description:
      "A unique combination of Indian Uthappam and Italian pizza, topped with olives, tomatoes, onion, chillies and Buffalo Paneer.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce.",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake with a Graham cracker crust and Indian cardamoms.",
  },
];

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems((currentItems) => [...currentItems, dish]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((currentItems) =>
      currentItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.length;

  const totalValue = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalValue,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

function DishesList() {
  const { addToCart, totalItems } = useCart();

  return (
    <section>
      <h2>2. Dishes List</h2>
      <p>Cart count: {totalItems}</p>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p>
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    totalItems,
    totalValue,
  } = useCart();

  return (
    <section className="cart">
      <h2>Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total value: ${totalValue.toFixed(2)}</p>

      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </section>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>Exercise 14 - useContext</h1>

        <Theme />
        <CartProvider>
          <DishesList />
          <Cart />
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
