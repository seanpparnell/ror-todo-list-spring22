import '../../App.css';
import { MainHeader } from '../styles/shared';

const Home = () => (
  <>
    {/* <h1 style={{ margin: '0 auto', fontWeight: 'light', textAlign: 'center' }}>Welcome to TodoList!</h1> */}
    {/* <h1 style={styles.header}>Welcome to TodoList!</h1> */}
    {/* <h1 className='App-header'>Welcome to TodoList!</h1> */}
    <MainHeader bg>Welcome <br /> to <br /> TodoList!</MainHeader>
    <h2>Come see our Features!</h2>
    <h3>
      Spicy jalapeno bacon
    </h3>
    <p>
      Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
    </p>
    <h3>
      Spicy jalapeno bacon
    </h3>
    <p>
      Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
    </p>
    <h3>
      Spicy jalapeno bacon
    </h3>
    <p>
      Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
    </p>
    <h3>
      Spicy jalapeno bacon
    </h3>
    <p>
      Spicy jalapeno bacon ipsum dolor amet cow pastrami cupim bacon drumstick. Doner fatback tenderloin turkey alcatra. Strip steak shoulder cow, short ribs bresaola alcatra pastrami turkey porchetta tail doner fatback filet mignon. Biltong kielbasa chicken doner.
    </p>

    <h2>Prices</h2>
    <div>
      <h4>Bronze</h4>
      <p>base</p>
      <p>Features</p>
      <p>Features</p>
      <p>Features</p>
    </div>
    <div>
      <h4>Silver</h4>
      <p>Mid</p>
      <p>Features</p>
      <p>Features</p>
      <p>Features</p>
    </div>
    <div>
      <h4>Gold</h4>
      <p>Extra</p>
      <p>Features</p>
      <p>Features</p>
      <p>Features</p>
    </div>
  </>
)

const styles = {
  header: {
    textAlign: 'center',
    margin: '0 auto',
    fontWeight: 'light',
  },
  subHeader: {
    textAlign: 'left',
    fontWeight: 'light',
    fontSize: '12px'
  }
}

export default Home;