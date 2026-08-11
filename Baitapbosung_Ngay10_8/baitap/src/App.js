import React, { useState } from 'react';

const productsData = [
  { id: 1, name: "Laptop ASUS", inputPrice: 15000, outPrice: 18500, stock: 5 },
  { id: 2, name: "Chuột", inputPrice: 300, outPrice: 450, stock: 0 },
  { id: 3, name: "Bàn phím", inputPrice: 800, outPrice: 1200, stock: 10 },
  { id: 4, name: "Màn hình Dell", inputPrice: 3500, outPrice: 4200, stock: 2 }
];

function App() {
  const [products, setProducts] = useState(productsData);

  // 2. Tìm sản phẩm giá bán lớn nhất và nhỏ nhất
  let maxPriceProduct = productsData[0];
  let minPriceProduct = productsData[0];
  
  productsData.forEach(p => {
    if (p.outPrice > maxPriceProduct.outPrice) maxPriceProduct = p;
    if (p.outPrice < minPriceProduct.outPrice) minPriceProduct = p;
  });

  // 3. Sắp xếp theo lợi nhuận giảm dần (hoặc tăng dần)
  const sortDesc = () => {
    const sorted = [...products].sort((a, b) => {
      const profitA = a.outPrice - a.inputPrice;
      const profitB = b.outPrice - b.inputPrice;
      return profitB - profitA; // giảm dần
    });
    setProducts(sorted);
  };

  const sortAsc = () => {
    const sorted = [...products].sort((a, b) => {
      const profitA = a.outPrice - a.inputPrice;
      const profitB = b.outPrice - b.inputPrice;
      return profitA - profitB; // tăng dần
    });
    setProducts(sorted);
  };

  return (
    <div>
      <h2>Sản phẩm có giá bán lớn nhất:</h2>
      <p>{maxPriceProduct.name} - Giá bán: {maxPriceProduct.outPrice}</p>

      <h2>Sản phẩm có giá bán nhỏ nhất:</h2>
      <p>{minPriceProduct.name} - Giá bán: {minPriceProduct.outPrice}</p>

      <hr />

      <h2>Danh sách sản phẩm</h2>
      <button onClick={sortDesc}>Sắp xếp lợi nhuận giảm dần</button>
      <button onClick={sortAsc}>Sắp xếp lợi nhuận tăng dần</button>

      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
            <th>Tồn kho</th>
            <th>Trạng thái</th>
            <th>Lợi nhuận</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => {
            const profit = p.outPrice - p.inputPrice;
            const status = p.stock > 0 ? "Còn hàng" : "Hết hàng";
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.inputPrice}</td>
                <td>{p.outPrice}</td>
                <td>{p.stock}</td>
                <td>{status}</td>
                <td>{profit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
