<script>
const placeholderUrl = new URL('../assets/placeholderpp.png', import.meta.url).href
</script>

<nav>
<div>Recipe Roulette</div>
<img src="{placeholderUrl}" alt="" /> 
</nav>

<style>

    nav {
        font-size: 2rem;
        text-align: center;
        font-weight: bold;
        padding: 2rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #71c1fa;

    }

    img {
        position: absolute;
        right: 2rem;
        height: 3rem;
        width: 3rem;
        cursor: pointer;
    }

</style>