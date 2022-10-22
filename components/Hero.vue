<template>
  <div>
    <div class="hero">
        <nav>
            <img src="~/assets/images/logo.png" class="logo">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>              
            </ul>
        </nav>
        <div class="info">
            <h1><span>Gorana</span> Nikšić</h1>
            <p>Diplomirani profesor srpskog jezika i književnosti.</p>
            <a href="">Kontaktiraj me</a>
        </div>
        <div class="img-box">
            <img src="~/assets/images/profile.png" />
        </div>
        <div class="social-links">
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-solid fa-envelope"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.hero {
    height: 100vh;
    width: 100%;
    background: #f4f5f7;
    font-family: sans-serif;
    position: relative;

}
nav {
    width:84%;
    margin: auto;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo {
    width: 200px;
    cursor: pointer;
    background-color: #edf2fc;
    border-radius: 50%;
}
nav ul li {
    display: inline-block;
    list-style: none;
    margin: 20px 20px;
}
nav ul li a {
    text-decoration: none;
    color:#606163 ;
}
nav ul li a:hover{
    color:#ff4321
}
.info {
    margin-left: 8%;
    margin-top: 5%;

}
.info h1{
    font-size: 50px;
    color:#212121;
    margin-bottom: 20px;
}
span {
    color:#ff4321
}
.info p {
    color: #606163;
}
.info a {
    background:#212121 ;
    padding:10px 18px;
    text-decoration: none;
    color:white;
    display: inline-block;
    margin: 30px 0;
    border-radius: 5px;
    
}
.img-box {
    width:60%;
    height: 75%;
    position: absolute;
    bottom: 0;
    right: 100px;
}
.img-box img {
    height: 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    color:#ff4321;
    border-radius: 50%;
    
}
.social-links{
    margin-left: 8%;
    margin-top: 60px;
}
.social-links a {
    font-size: 30px;
    color: #606163;
    margin-right: 20px;
}
.social-links a:hover{
    color: #ff4321;
}
</style>