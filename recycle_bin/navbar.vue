<template>
  <nav id="navbar" class="absolute px-28 pt-8 w-full">
    <ul class="flex relative items-center justify-end w-full">
      <li class="w-[20rem] h-[5rem] pl-5" v-if="isSticky">
        <a id="logo-img" href="/"
          ><img src="../assets/images/logo.png" alt="" />
        </a>
      </li>
      <li>
        <Dropdown title="Profil" href="/profile" index=1>
          <DropdownItem href="/sejarah" title="Sejarah"></DropdownItem>
          <DropdownItem href="/manajemen" title="Manajemen"></DropdownItem>
          <DropdownItem
            href="/visi"
            title="Visi, Misi, dan Sasaran"></DropdownItem>
          <DropdownItem href="/berita" title="Berita"></DropdownItem>
          <DropdownItem href="/plan" title="Master Plan"></DropdownItem>
          <DropdownItem href="/peta" title="Peta Kampus"></DropdownItem>
          <DropdownItem href="/mediatek" title="Mediatek"></DropdownItem>
        </Dropdown>
      </li>
      <li>
        <Dropdown title="Akademik" href="/akademik" index=2>
          <DropdownItem href="/departemen" title="Departemen"></DropdownItem>
          <DropdownItem href="/program" title="Program Akademik"></DropdownItem>
          <DropdownItem href="/akreditasi" title="Akreditasi"></DropdownItem>
          <DropdownItem
            href="/kalender"
            title="Kalender Akademik"></DropdownItem>
        </Dropdown>
      </li>
      <li>
        <Dropdown title="Sumber daya" href="/sumber-daya" index="3">
          <DropdownItem href="/guru" title="Guru Besar"></DropdownItem>
          <DropdownItem href="/tenaga" title="Tenaga Pendidikan"></DropdownItem>
          <DropdownItem
            href="/perpustakaan"
            title="Perpustakaan"></DropdownItem>
          <DropdownItem
            href="/sarana"
            title="Sarana dan Prasana"></DropdownItem>
        </Dropdown>
      </li>
      <li>
        <dropdownVue title="Mahasiswa" href="/mahasiswa" index="4">
          <DropdownItem
            href="/asrama"
            title="UPT Asrama (RAMTEK)"></DropdownItem>
          <DropdownItem
            href="/karakter"
            title="Pengembangan Karakter"></DropdownItem>
          <DropdownItem href="/prestasi" title="Prestasi"></DropdownItem>
          <DropdownItem href="/alumni" title="Alumni"></DropdownItem>
          <DropdownItem
            href="/aturan"
            title="Aturan Kemahasiswaan"></DropdownItem>
          <DropdownItem href="/pengumuman" title="Pengumuman"></DropdownItem>
        </dropdownVue>
      </li>
      <li>
        <Dropdown title="Penelitian" href="/penelitian" index="5">
          <DropdownItem
            href="/daftar-penelitian"
            title="Daftar Penelitian"></DropdownItem>
          <DropdownItem href="/inovasi" title="Hasil Inovasi"></DropdownItem>
          <DropdownItem
            href="/haki"
            title="Hak Kekayaan Intelektual"></DropdownItem>
        </Dropdown>
      </li>
      <li>
        <Dropdown title="Kemitraan" href="/kemitraan">
          <DropdownItem
            href="/dalam-negeri"
            title="Kerjasama Dalam Negeri"></DropdownItem>
          <DropdownItem
            href="/luar-negeri"
            title="Kerjasama luar Negeri"></DropdownItem>
        </Dropdown>
      </li>
      <li>
        <Dropdown title="Organisasi" href="/organisasi" index="7">
          <DropdownItem href="/k3" title="K3"></DropdownItem>
          <DropdownItem href="/gpm-pr" title="GPM-PR"></DropdownItem>
          <DropdownItem href="/cot" title="COT"></DropdownItem>
          <DropdownItem
            href="//dharma-wanita"
            title="Dharma Wanita"></DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
  <div
    class="flex bg-[url('/assets/images/eng-unhasv1.svg')] min-h-[84vh] w-full justify-center items-center">
    <a id="logo-original" href="/" v-if="!isSticky"
      ><img src="../assets/images/logo.png" alt="" />
    </a>
  </div>
</template>

<script>
import DropdownItem from './dropdownItem.vue';
import dropdownVue from './dropdown.vue';

export default {
  data() {
    return {
      isSticky: false,
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
  components: { DropdownItem, dropdownVue },
};
</script>

<style scoped>
.sticky {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #063e63;
  height: 16vh;
  border-bottom: solid 2px #c8102e;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
}

#logo-original {
  transition: opacity 0.5s ease;
}
#logo-img {
  transition: opacity 0.5s ease;
}
</style>