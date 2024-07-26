// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <main style={styles.main}>
      <section style={styles.hero}>
        <h2>Discover Amazing Products</h2>
        <p>Explore our wide range of products tailored just for you.</p>
      </section>
      <section style={styles.featuredProducts}>
        <div style={styles.productList}>
          <div style={styles.productItem}>
            <img src="/images/product1.jpg" alt="Product 1" style={styles.productImage} />
            <h3>Black Lucky Cat Bracelet</h3>
            <p>High-quality and affordable product for everyday use.</p>
          </div>
          <div style={styles.productItem}>
            <img src="/images/product2.jpg" alt="Product 2" style={styles.productImage} />
            <h3>Black Silver Lucky Cat Bracelet</h3>
            <p>Innovative design with top-notch performance.</p>
          </div>
          <div style={styles.productItem}>
            <img src="/images/product3.jpg" alt="Product 3" style={styles.productImage} />
            <h3>Blue Classic Lucky Cat Bracelet</h3>
            <p>Best-selling product with excellent reviews.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem'
  },
  hero: {
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },
  featuredProducts: {
    padding: '2rem',
    backgroundColor: '#f1f1f1'
  },
  productList: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  productItem: {
    backgroundColor: 'white',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '30%',
    textAlign: 'center'
  },
  productImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem'
  }
};

export default MainContent;
