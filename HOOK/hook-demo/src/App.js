import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
//useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer
//useState: Quản lý trạng thái, dữ liệu nằm bên trong 1 component
//cú pháp: [state, setState] = useState(initialValue)
function DemoState(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

//useEffect: dùng để thực hiện các tác vụ như call API
//useEffect(() => {đoạn mã để chạy side effect}, [dependencies])
function DemoEffect(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `đã bấm ${count} lần`
  }, [count]) //chạy lại mỗi khi giá trị count thay đổi
  return(
    <div className='pt-4'>
      số lần bấm: {count}
      <button onClick={() => setCount(count + 1)}>Bấm</button>
    </div>
  )
}

//useContext: dùng để chia sẻ dữ liệu giữa các component mà không cần truyền props
//cú pháp: const contextValue = useContext(ContextName)
//ContextName: đối tượng context được tạo ra thông qua React.createContext()

//1.Tạo context
const ThemeContext = createContext("Light");
function DemoContext(){
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Component con sẽ sử dụng context */}
      <div style = {{ backgroundColor: theme === "Light" ? "white" : "black", 
        color: theme === "Light" ? "black" : "white",
        padding: "10px" }}>
           <p>demoContext</p>
           <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
            Chuyển sang {theme === "Light" ? "Dark" : "Light"} mode
           </button>
      </div>
    </ThemeContext.Provider>
  );
}
//useRef: dùng để tham chiếu đến một phần tử DOM và lưu giá trị, không gây re-render khi giá trị thay đổi
//cú pháp: const myRef = useRef(initialValue)
//initialValue: giá trị ban đầu của myRef, thường là null
//myRef.current: truy cập đến giá trị hiện tại của myRef
function DemoRef(){
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  }
  return (
    <div className='pt-4'>
      <input ref={inputRef} type="text" placeholder='Nhập gì đó'/>
      <button onClick={handleClick}>Focus và input</button>
    </div>
  );
}

//useMemo và useCallback: tối ưu hóa hiệu năng
//useMemo: ghi nhớ kết quả tính toán, chỉ thực tính lại khi number thay đổi
function DemoMemo(){
  const [number, setNumber] = useState(5);
  const doubleNumber = useMemo(() =>{
    return number * 2;
  }, [number]);//chỉ chạy lại khi number thay đổi
  return (
<div className='pt-4'>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value)||0)} 
      />
      <p>Number: {number}</p>
      <p>Double: {doubleNumber}</p>
    </div>
  )
}

//useReducer: quản lý trạng thái phức tạp hơn useState, thường dùng trong các ứng dụng lớn
//cú pháp: const [state, dispatch] = useReducer(reducer, initialState)
//reducer: hàm nhận vào state hiện tại và action, trả về state mới dựa trên loại action
//dispatch: hàm để gửi action đến reducer, action là một đối tượng mô tả loại hành động cần thực hiện
const initialValue = { count: 0 };
function reducer(state, action){
  switch(action.type){
    case "INCREMENT" : 
      return { count: state.count + 1 };
    case "DECREMENT" : 
      return { count: state.count - 1 };
    case "RESET" : 
      return { count: 0 };
    default: 
      return state;
  }
}

function DemoReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return(
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}

function App() {
  return (
    <div className="App pt-4">
      <DemoState/>
      <DemoEffect/>
      <DemoContext/>
      <DemoRef/>
      <DemoMemo/>
      <DemoReducer/>
    </div>
  );
}

export default App;
