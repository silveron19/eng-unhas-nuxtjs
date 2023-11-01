<template>
  <header
    class="flex justify-between items-center bg-[#063E63] w-full h-[14vh] px-24 border-solid border-x-0 border-t-0 border-b-2 border-[#C8102E] max-xl:px-16 max-lg:px-14">
    <div class="flex space-x-5">
      <div class="flex">
        <a href="">
          <Icon name="ic:round-email" class="w-6 h-6" /> teknik@unhas.ac.id
        </a>
      </div>
      <div class="flex">
        <a href="">
          <Icon name="ic:round-phone" class="w-6 h-6" /> +62 852-9999-9958
        </a>
      </div>
    </div>
    <div class="flex text-center items-center justify-end w-52 space-x-7">
      <div class="space-x-2">
        <a href="">
          <Icon class="w-8 h-8" name="ic:baseline-facebook" />
        </a>
        <a href="">
          <Icon name="mdi:twitter-circle" class="w-8 h-8" />
        </a>
      </div>
      <Language />
    </div>
  </header>
</template>
