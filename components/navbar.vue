<template>
  <nav id="navbar" class="flex absolute items-center px-10 md:px-14 lg:px-16 xl:px-24 w-full"
    :class="{ '!px-2 md:!px-4 lg:!px-6 xl:!px-24': isSticky }">
    <ul class="flex justify-between lg:justify-center items-center w-full">
      <li v-if="isSticky" class="w-48 h-full flex items-center md:w-80">
        <a id="logo-img" href="/"><img src="../assets/images/logo.png" alt="" />
        </a>
      </li>
      <div v-if="isMediumSize" v-bind:style="[
        !isSticky ? { 'padding-top': '1rem' } : { 'padding-top': '0' },
      ]" class="flex text-lg justify-center w-full" :class="{ 'justify-center': isSticky }">
        <li v-for="(item, index) in navbarItems" :key="index">
          <a class="flex text-sm md:text-base lg:text-lg hover:text-[#FDCB2C] font-bold" :class="{
            'pr-10 lg:pr-6 xl:pr-8': index === 0,
            '!pl-0': index === 0 && isSticky,
            '!px-2 md:!px-2.5 xl:!px-5 xl:!text-lg md:!text-base': isSticky,
            '!pr-0': index === navbarItems.length - 1,
            'px-10 lg:px-6 xl:px-8': index !== 0,
          }" :href="item.href" @mouseover="showDropdown_nav(index)" @mouseleave="hideDropdown_nav(index)">{{
  item.title }}
          </a>
          <ul v-if="dropdown_v === index" class="absolute bg-black shadow-md mt-4 pl-3 w-56 z-10" :class="{
            '!translate-x-10 max-lg:!translate-x-6 max-xl:!translate-x-8':
              index !== 0,
            '!translate-x-3': isSticky && index !== 0,
            '!w-44': index === navbarItems.length - 1,
          }" @mouseover="showDropdown_nav(index)" @mouseleave="hideDropdown_nav(index)">
            <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="py-2">
              <a class="block hover:text-[#FDCB2C]" :href="subItem.href">{{
                subItem.title
              }}</a>
            </li>
            <li></li>
          </ul>
        </li>
      </div>
      <div v-else v-if="isSticky">
        <li>
          <Icon name="ci:hamburger" class="h-[32px] w-[32px] md:w-[64px] md:h-[64px]" />
        </li>
      </div>
      <li v-if="isSticky && isMediumSize">
        <Language />
      </li>
    </ul>
  </nav>
  <div id="background"
    class="flex bg-[url('/assets/images/eng-unhasv1.svg')] bg-cover bg-center min-h-[85vh] justify-center items-center bg-no-repeat w-full">
    <a class="flex justify-center items-center w-full" id="logo-original" href="/" v-if="!isSticky"><img
        class="max-md:w-3/5 max-sm:w-1/2" src="../assets/images/logo.png" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      navbarItems: [
        {
          title: 'Profil',
          href: '/profile/profile',
          subItems: [
            { title: 'Sejarah', href: '/profile/sejarah' },
            { title: 'Manajemen', href: '/profile/manajemen' },
            { title: 'Visi, Misi, dan Sasaran', href: '/profile/visi' },
            { title: 'Berita', href: '/profile/berita' },
            { title: 'Master Plan', href: '/profile/plan' },
            { title: 'Peta Kampus', href: '/profile/peta' },
            { title: 'Mediatek', href: '/profile/mediatek' },
          ],
        },
        {
          title: 'Akademik',
          href: '/akademik/akademik',
          subItems: [
            { title: 'Departemen', href: '/akademik/departemen' },
            { title: 'Program Akademik', href: '/akademik/program' },
            { title: 'Akreditasi', href: '/akademik/akreditasi' },
            { title: 'Kalender Akademik', href: '/akademik/kalender' },
          ],
        },
        {
          title: 'Sumber daya',
          href: '/sumber_daya/sumber_daya',
          subItems: [
            { title: 'Guru Besar', href: '/sumber_daya/guru' },
            { title: 'Tenaga Pendidikan', href: '/sumber_daya/tenaga' },
            { title: 'Sarana dan Prasana', href: '/sumber_daya/sarana' },
            { title: 'Perpustakaan', href: '/sumber_daya/perpustakaan' },
          ],
        },
        {
          title: 'Mahasiswa',
          href: '/mahasiswa/mahasiswa',
          subItems: [
            { title: 'UPT Asrama (RAMTEK)', href: '/mahasiswa/asrama' },
            { title: 'Pengembangan Karakter', href: '/mahasiswa/karakter' },
            { title: 'Prestasi', href: '/mahasiswa/prestasi' },
            { title: 'Mahasiswa Inbound/Outbound', href: '/mahasiswa/bound' },
            { title: 'Alumni', href: '/mahasiswa/alumni' },
            { title: 'Aturan Kemahasiswaan', href: '/mahasiswa/aturan' },
            { title: 'Pengumuman', href: '/mahasiswa/pengumuman' },
          ],
        },
        {
          title: 'Penelitian',
          href: '/penelitian/penelitian',
          subItems: [
            { title: 'Daftar Penelitian', href: '/penelitian/daftar' },
            { title: 'Hasil Inovasi', href: '/penelitian/inovasi' },
            { title: 'Hak Kekayaan Intelektual', href: '/penelitian/haki' },
          ],
        },
        {
          title: 'Kemitraan',
          href: '/kemitraan/kemitraan',
          subItems: [
            { title: 'Kerjasama Dalam Negeri', href: '/kemitraan/dalamnegeri' },
            { title: 'Kerjasama luar Negeri', href: '/kemitraan/luarnegeri' },
          ],
        },
        {
          title: 'Organisasi',
          href: '/organisasi/organisasi',
          subItems: [
            { title: 'K3', href: '/organisasi/k3' },
            { title: 'GPM-PR', href: '/organisasi/gpm' },
            { title: 'COT', href: '/organisasi/cot' },
            { title: 'Dharma Wanita', href: '/organisasi/dharmawanita' },
          ],
        },
      ],
      isSticky: false,
      dropdown_v: null,
      timers: [],
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    const scrollCallback = () => {
      if (window.scrollY >= sticky) {
        navbar.classList.add('sticky');
        this.isSticky = true;
      } else {
        navbar.classList.remove('sticky');
        this.isSticky = false;
      }
    };

    window.onscroll = scrollCallback;
    scrollCallback();
  },
  methods: {
    checkScreenSize() {
      this.isMediumSize = window.innerWidth >= 1024;
      return window.innerWidth >= 768;
    },
    showDropdown_nav(index) {
      clearTimeout(this.timers[index]);
      this.dropdown_v = index;
    },
    hideDropdown_nav(index) {
      this.timers[index] = setTimeout(() => {
        if (this.dropdown_v === index) {
          this.dropdown_v = null;
        }
      }, 200);
    },
  },
};
</script>

<style scoped>
.sticky {
  position: fixed;
  padding-top: 0;
  top: 0;
  background-color: #063e63;
  height: 16vh;
  border-bottom: solid 2px #c8102e;
  z-index: 20;
}

#logo-original {
  transition: opacity 0.5s ease;
}

#logo-img {
  transition: opacity 0.5s ease;
}
</style>
