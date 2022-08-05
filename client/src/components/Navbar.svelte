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
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    img {
        position: absolute;
        right: 2rem;
        height: 3rem;
        width: 3rem;
    }

</style>