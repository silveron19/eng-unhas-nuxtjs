<template>
  <footer class="bg-[#063E63] md:px-28 mt-12 pt-10 px-14">
    <div class="container mx-auto flex flex-col md:flex-row flex-wrap justify-between">
      <div class="flex flex-col">
        <a title="UNHAS" href="/">
          <img
            class="w-1/2"
            src="../assets/images/logo.png"
            alt="" />
        </a>
        <div class="h-full flex flex-col justify-evenly">
          <div class="">
            <p class="text-lg  md:text-xl lg:text-2xl font-bold">Alamat</p>
            <p>
              Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan.
              92171
            </p>
          </div>
          <div class="flex flex-col">
            <p class="text-lg md:text-xl lg:text-2xl font-bold">Kontak</p>
            <a href="/" class="my-2">
              <Icon name="ic:round-email" class="w-6 h-6" /> teknik@unhas.ac.id
            </a>
            <a href="/" class="my-2">
              <Icon name="ic:round-phone" class="w-6 h-6" /> +62 852-9999-9958
            </a>
            <a href="/" class="my-2">
              <Icon class="w-6 h-6" name="ic:baseline-facebook" /> Lorem, ipsum
              dolor.
            </a>
            <a href="/" class="my-2">
              <Icon name="mdi:twitter-circle" class="w-6 h-6" /> Lorem, ipsum
              dolor.
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-4 md:mt-0">
        <p class="text-lg  md:text-xl lg:text-2xl font-bold mb-3">Didukung Oleh</p>
        <div class="flex justify-between">
          <a title="Upana Studio" href="https://upanastudio.com/">
            <img src="../assets/images/Didukung - Upana.svg" alt="" />
          </a>
          <a title="Oricon" href="https://upanastudio.com/">
            <img src="../assets/images/Didukung - Oricon.svg" alt="" />
          </a>
        </div>
        <div class="my-3">
          <a href="https://maps.app.goo.gl/tw1kxoAvgeTCFW4E7">
            <Icon name="ic:round-location-on" class="w-6 h-6" />
            teknik@unhas.ac.id
          </a>
          <iframe
            class="mt-3 w-full"
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.2062862219664!2d119.50213400000004!3d-5.230259999999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee13639154f11%3A0x77d363f632d6f859!2sUniversitas%20Hasanuddin%20Kampus%20FAKULTAS%20TEKNIK%20Gowa!5e0!3m2!1sid!2sid!4v1698218096151!5m2!1sid!2sid"
            height="250"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="text-center w-full mt-5 border-t py-5">
      © 2023 Universitas Hasanuddin. All rights reserved.
    </div>
  </footer>
</template>
