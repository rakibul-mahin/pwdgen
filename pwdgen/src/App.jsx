import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <Card
        platform='Instagram'
        username='rakibul_hasan_mahin'
        password='pass123'
        cimg='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
      />
      <Card
        platform='Facebook'
        username='Rakibul Hasan'
        password='mypass123'
        cimg='https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
      />
      <Card
        platform='Tiktok'
        username='l16h7n1n6'
        password='tikpass123'
        cimg='https://images.unsplash.com/photo-1634942536990-44b9aba4c712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
      />
    </div>
  );
}

export default App;
