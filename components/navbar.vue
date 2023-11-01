<template>
  <nav
    id="navbar"
    class="flex absolute px-12 pt-6 md:px-14 lg:px-16 xl:px-20 w-full">
    <ul class="flex items-center w-full">
      <li class="w-96 h-20" v-if="isSticky">
        <a id="logo-img" href="/"
          ><img src="../assets/images/logo.png" alt="" />
        </a>
      </li>
      <div
        class="flex text-lg justify-end w-full"
        :class="{ 'justify-center': isSticky }">
        <li v-for="(item, index) in navbarItems" :key="index">
          <a
            class="flex hover:text-[#FDCB2C] pb-4 text-sm md:text-base lg:text-lg font-bold"
            :class="{
              'pr-10 max-lg:pr-6 max-xl:pr-8': index === 0,
              '!pl-0': index === 0 && isSticky,
              '!px-3': isSticky,
              '!pr-0': index === navbarItems.length - 1,
              'px-10 max-lg:px-6 max-xl:px-8': index !== 0,
            }"
            :href="item.href"
            @mouseover="showDropdown_nav(index)"
            @mouseleave="hideDropdown_nav(index)"
            >{{ item.title }}
          </a>
          <ul
            v-if="dropdown_v === index"
            class="absolute bg-black shadow-md pl-3 w-64 z-10"
            :class="{
              '!translate-x-10 max-lg:!translate-x-6 max-xl:!translate-x-8':
                index !== 0,
              '!translate-x-3': isSticky && index !== 0,
              '!w-44': index === navbarItems.length - 1,
            }"
            @mouseover="showDropdown_nav(index)"
            @mouseleave="hideDropdown_nav(index)">
            <li
              v-for="(subItem, subIndex) in item.subItems"
              :key="subIndex"
              class="py-2">
              <a class="block hover:text-[#FDCB2C]" :href="subItem.href">{{
                subItem.title
              }}</a>
            </li>
            <li></li>
          </ul>
        </li>
      </div>
      <li class="hidden">
        <Icon name="ci:hamburger" class="w-6 h-6" />
      </li>
      <li class="h-14" v-if="isSticky">
        <Language />
      </li>
    </ul>
  </nav>
  <div
    id="background"
    class="flex bg-[url('/assets/images/eng-unhasv1.svg')] bg-cover bg-center min-h-[85vh] justify-center items-center bg-no-repeat w-full">
    <a
      class="flex justify-center items-center w-full"
      id="logo-original"
      href="/"
      v-if="!isSticky"
      ><img
        class="max-md:w-3/5 max-sm:w-1/2"
        src="../assets/images/logo.png"
        alt="" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarItems: [
        {
          title: 'Profil',
          href: '/profile',
          subItems: [
            { title: 'Sejarah', href: '/sejarah' },
            { title: 'Manajemen', href: '/manajemen' },
            { title: 'Visi, Misi, dan Sasaran', href: '/visi' },
            { title: 'Berita', href: '/berita' },
            { title: 'Master Plan', href: '/plan' },
            { title: 'Peta Kampus', href: '/peta' },
            { title: 'Mediatek', href: '/mediatek' },
          ],
        },
        {
          title: 'Akademik',
          href: '/akademik',
          subItems: [
            { title: 'Departemen', href: '/departemen' },
            { title: 'Program Akademik', href: '/program' },
            { title: 'Akreditasi', href: '/akreditasi' },
            { title: 'Kalender Akademik', href: '/kalender' },
          ],
        },
        {
          title: 'Sumber daya',
          href: '/sumber-daya',
          subItems: [
            { title: 'Guru Besar', href: '/guru' },
            { title: 'Tenaga Pendidikan', href: '/tenaga' },
            { title: 'Sarana dan Prasana', href: '/sarana' },
            { title: 'Perpustakaan', href: '/perpustakaan' },
          ],
        },
        {
          title: 'Mahasiswa',
          href: '/mahasiswa',
          subItems: [
            { title: 'UPT Asrama (RAMTEK)', href: '/asmara' },
            { title: 'Pengembangan Karakter', href: '/karakter' },
            { title: 'Prestasi', href: '/prestasi' },
            { title: 'Mahasiswa Inbound/Outbound', href: '/bound' },
            { title: 'Alumni', href: '/alumni' },
            { title: 'Aturan Kemahasiswaan', href: '/aturan' },
            { title: 'Pengumuman', href: '/Pengumuman' },
          ],
        },
        {
          title: 'Penelitian',
          href: '/oenelitian',
          subItems: [
            { title: 'Daftar Penelitian', href: '/penelitian' },
            { title: 'Hasil Inovasi', href: '/inovasi' },
            { title: 'Hak Kekayaan Intelektual', href: '/haki' },
          ],
        },
        {
          title: 'Kemitraan',
          href: '/kemitraan',
          subItems: [
            { title: 'Kerjasama Dalam Negeri', href: '/luarnegeri' },
            { title: 'Kerjasama luar Negeri', href: '/dalamnegeri' },
          ],
        },
        {
          title: 'Organisasi',
          href: '/organisasi',
          subItems: [
            { title: 'K3', href: '/k3' },
            { title: 'GPM-PR', href: '/gpm-pr' },
            { title: 'COT', href: '/cot' },
            { title: 'Dharma Wanita', href: '/dharmawanita' },
          ],
        },
      ],
      isSticky: false,
      dropdown_v: null,
      timers: [],
    };
  },
  mounted() {
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
