<template>
  <div>
    <div class="flex flex-row justify-between bg-blue-100">  <!-- Navbar START -->
        <div class="mt-2 ml-36">
            <NuxtLink :to="`/`"> 
                <img src="~/assets/images/logo2.png" class="logo rounded-full">
            </NuxtLink>
            
        </div>

        <div class="flex flex-row mt-16 mr-36 text-3xl font-bold space-x-6">
            <NuxtLink :to="`/about`"> 
                <p>O meni </p>
            </NuxtLink>
            
            <NuxtLink :to="`/contact`"> 
               <p>Kontakt </p>
            </NuxtLink>
            
        </div>
    </div>  <!-- Navbar END -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>