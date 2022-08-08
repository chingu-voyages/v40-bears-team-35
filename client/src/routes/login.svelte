<script>
import Navbar from '../components/Navbar.svelte';
</script>

<Navbar/>

<section class="login__container">

    <form class="login__form">
        <h2>Login</h2>
        <input type="text"> <!-- input the labels as needed later. ~ tatami -->
        <input type="text">  <!-- input the labels as needed later. --> 
        <button type="submit">Login</button>
        <div class="signup__redir">Don't have an account? <a href="#">Sign up.</a></div>
    </form>
</section> 

<style>

.login__container {

    margin-top: 7%;
    margin-inline: auto;
    width: 24rem;
    background-color: #E95353;
    padding: 1.3rem;
    border-radius: 30px;
    box-shadow: 0 0 0 1rem #E93737;
    display: flex;
    justify-content: center;
    align-items: center;

}

.login__form {

    position: relative;
    background-color: #FF8282;
    border-radius: 30px;
    height: 24rem;
    margin-block-end: 0em;
    width: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

}

.login__form input {

    width: 90%;
    border: none;
    padding: 0.5rem;

}
  
  h2 {

    margin-block-start: 0em;
    margin-block-end: 0em;

  }

  .login__form button {

    background-color: #E95353;
    border: none;
    padding: 0.5rem 4rem;
    border-radius: 30px;
    font-weight: bold;
    color: white;

  }

  .signup__redir {

    display: flex;
    width: 100%;
    gap: 0.4rem;

  }

  .signup__redir a {

    color: white;
    text-decoration: none;

  }
</style>