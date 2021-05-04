import style from '../css/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <div className={style.hpLogo}>
        <img src="https://static-cdn.sr.se/images/83/46341e21-7754-4256-913c-f35964c1a929.jpg?preset=2048x1152" alt="sr logo"/>
      </div>
      <div className={style.hpText}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet blanditiis itaque quod non nulla repellat nostrum excepturi ullam modi consectetur, quibusdam sint iusto quos minima temporibus dolor, architecto dignissimos deserunt impedit quae, cupiditate unde? Odit nam fuga harum quaerat veniam itaque quis, mollitia blanditiis accusantium cumque, dolorum quidem commodi fugit.</p>
      </div>
    </div>
  );
}
 
export default HomePage;
