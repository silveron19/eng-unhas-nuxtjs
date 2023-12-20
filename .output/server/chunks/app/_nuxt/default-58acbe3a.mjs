import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0$1 from './Icon-4438c5ee.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './config-9dd6743e.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';

const _sfc_main$4 = {
  data() {
    return {
      dropdownVisible: false
    };
  },
  methods: {
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-block text-left" }, _attrs))}><button type="button" class="${ssrRenderClass([{
    "rounded-t-md": $data.dropdownVisible,
    "rounded-md": !$data.dropdownVisible
  }, "inline-flex w-full justify-center bg-[#FDCB2C] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[#e2b728] gap-1"])}">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "circle-flags:id",
    class: "w-6 h-6"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:baseline-arrow-drop-down",
    class: "w-6 h-6"
  }, null, _parent));
  _push(`</button><div class="absolute rounded-b-md bg-[#FDCB2C] shadow-lg focus:outline-none z-10 w-full" style="${ssrRenderStyle($data.dropdownVisible ? null : { display: "none" })}"><div class="rounded-b-md" role="none"><a href="#" class="text-gray-700 block px-3 py-2 text-sm rounded-b-md hover:bg-[#e2b728]" id="menu-item-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "circle-flags:en",
    class: "w-6 h-6"
  }, null, _parent));
  _push(`</a></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Language.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      dropdownVisible: false
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMediumSize = window.innerWidth >= 1024;
      return window.innerWidth >= 1024;
    },
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_Language = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center bg-[#063E63] w-full h-[14vh] px-10 md:px-14 lg:px-16 xl:px-24 border-solid border-x-0 border-t-0 border-b-2 border-[#C8102E] text-sm md:text-base lg:text-lg" }, _attrs))}><div class="flex space-x-5"><div class="flex"><a href="" class="flex">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-email",
    class: "w-6 h-6"
  }, null, _parent));
  if ($data.isMediumSize) {
    _push(`<p>teknik@unhas.ac.id</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</a></div><div><a href="" class="flex">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-phone",
    class: "w-6 h-6"
  }, null, _parent));
  if ($data.isMediumSize) {
    _push(`<p>+62 852-9999-9958</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</a></div></div><div class="flex justify-between"><div class="pr-3 space-x-6"><a href="">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "w-8 h-8",
    name: "ic:baseline-facebook"
  }, null, _parent));
  _push(`</a><a href="">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:twitter-circle",
    class: "w-8 h-8"
  }, null, _parent));
  _push(`</a></div></div>`);
  _push(ssrRenderComponent(_component_Language, null, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + buildAssetsURL("logo.9aba1c8b.png");
const _sfc_main$2 = {
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      navbarItems: [
        {
          title: "Profil",
          href: "/profile",
          subItems: [
            { title: "Sejarah", href: "/sejarah" },
            { title: "Manajemen", href: "/manajemen" },
            { title: "Visi, Misi, dan Sasaran", href: "/visi" },
            { title: "Berita", href: "/berita" },
            { title: "Master Plan", href: "/plan" },
            { title: "Peta Kampus", href: "/peta" },
            { title: "Mediatek", href: "/mediatek" }
          ]
        },
        {
          title: "Akademik",
          href: "/akademik",
          subItems: [
            { title: "Departemen", href: "/departemen" },
            { title: "Program Akademik", href: "/program" },
            { title: "Akreditasi", href: "/akreditasi" },
            { title: "Kalender Akademik", href: "/kalender" }
          ]
        },
        {
          title: "Sumber daya",
          href: "/sumber-daya",
          subItems: [
            { title: "Guru Besar", href: "/guru" },
            { title: "Tenaga Pendidikan", href: "/tenaga" },
            { title: "Sarana dan Prasana", href: "/sarana" },
            { title: "Perpustakaan", href: "/perpustakaan" }
          ]
        },
        {
          title: "Mahasiswa",
          href: "/mahasiswa",
          subItems: [
            { title: "UPT Asrama (RAMTEK)", href: "/asmara" },
            { title: "Pengembangan Karakter", href: "/karakter" },
            { title: "Prestasi", href: "/prestasi" },
            { title: "Mahasiswa Inbound/Outbound", href: "/bound" },
            { title: "Alumni", href: "/alumni" },
            { title: "Aturan Kemahasiswaan", href: "/aturan" },
            { title: "Pengumuman", href: "/Pengumuman" }
          ]
        },
        {
          title: "Penelitian",
          href: "/oenelitian",
          subItems: [
            { title: "Daftar Penelitian", href: "/penelitian" },
            { title: "Hasil Inovasi", href: "/inovasi" },
            { title: "Hak Kekayaan Intelektual", href: "/haki" }
          ]
        },
        {
          title: "Kemitraan",
          href: "/kemitraan",
          subItems: [
            { title: "Kerjasama Dalam Negeri", href: "/luarnegeri" },
            { title: "Kerjasama luar Negeri", href: "/dalamnegeri" }
          ]
        },
        {
          title: "Organisasi",
          href: "/organisasi",
          subItems: [
            { title: "K3", href: "/k3" },
            { title: "GPM-PR", href: "/gpm-pr" },
            { title: "COT", href: "/cot" },
            { title: "Dharma Wanita", href: "/dharmawanita" }
          ]
        }
      ],
      isSticky: false,
      dropdown_v: null,
      timers: []
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    const scrollCallback = () => {
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
        this.isSticky = true;
      } else {
        navbar.classList.remove("sticky");
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
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_Language = __nuxt_component_1$1;
  _push(`<!--[--><nav id="navbar" class="${ssrRenderClass([{ "!px-2 md:!px-4 lg:!px-6 xl:!px-24": $data.isSticky }, "flex absolute items-center px-10 md:px-14 lg:px-16 xl:px-24 w-full"])}" data-v-afed59d8><ul class="flex justify-between lg:justify-center items-center w-full" data-v-afed59d8>`);
  if ($data.isSticky) {
    _push(`<li class="w-48 h-full flex items-center md:w-80" data-v-afed59d8><a id="logo-img" href="/" data-v-afed59d8><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-afed59d8></a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isMediumSize) {
    _push(`<div style="${ssrRenderStyle([
      !$data.isSticky ? { "padding-top": "1rem" } : { "padding-top": "0" }
    ])}" class="${ssrRenderClass([{ "justify-center": $data.isSticky }, "flex text-lg justify-end w-full"])}" data-v-afed59d8><!--[-->`);
    ssrRenderList($data.navbarItems, (item, index) => {
      _push(`<li data-v-afed59d8><a class="${ssrRenderClass([{
        "pr-10 lg:pr-6 xl:pr-8": index === 0,
        "!pl-0": index === 0 && $data.isSticky,
        "!px-2 md:!px-2.5 xl:!px-5 xl:!text-lg md:!text-base": $data.isSticky,
        "!pr-0": index === $data.navbarItems.length - 1,
        "px-10 lg:px-6 xl:px-8": index !== 0
      }, "flex text-sm md:text-base lg:text-lg hover:text-[#FDCB2C] font-bold"])}"${ssrRenderAttr("href", item.href)} data-v-afed59d8>${ssrInterpolate(item.title)}</a>`);
      if ($data.dropdown_v === index) {
        _push(`<ul class="${ssrRenderClass([{
          "!translate-x-10 max-lg:!translate-x-6 max-xl:!translate-x-8": index !== 0,
          "!translate-x-3": $data.isSticky && index !== 0,
          "!w-[10.9rem]": index === $data.navbarItems.length - 1
        }, "absolute bg-black shadow-md mt-4 pl-3 w-64 z-10"])}" data-v-afed59d8><!--[-->`);
        ssrRenderList(item.subItems, (subItem, subIndex) => {
          _push(`<li class="py-2" data-v-afed59d8><a class="block hover:text-[#FDCB2C]"${ssrRenderAttr("href", subItem.href)} data-v-afed59d8>${ssrInterpolate(subItem.title)}</a></li>`);
        });
        _push(`<!--]--><li data-v-afed59d8></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!--[-->`);
    if ($data.isSticky) {
      _push(`<div data-v-afed59d8><li data-v-afed59d8>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ci:hamburger",
        class: "h-[32px] w-[32px] md:w-[64px] md:h-[64px]"
      }, null, _parent));
      _push(`</li></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  }
  if ($data.isSticky && $data.isMediumSize) {
    _push(`<li data-v-afed59d8>`);
    _push(ssrRenderComponent(_component_Language, null, null, _parent));
    _push(`</li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></nav><div id="background" class="flex bg-[url(&#39;/assets/images/eng-unhasv1.svg&#39;)] bg-cover bg-center min-h-[85vh] justify-center items-center bg-no-repeat w-full" data-v-afed59d8>`);
  if (!$data.isSticky) {
    _push(`<a class="flex justify-center items-center w-full" id="logo-original" href="/" data-v-afed59d8><img class="max-md:w-3/5 max-sm:w-1/2"${ssrRenderAttr("src", _imports_0)} alt="" data-v-afed59d8></a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-afed59d8"]]);
const _imports_1 = "" + buildAssetsURL("Didukung - Upana.d241f223.svg");
const _imports_2 = "" + buildAssetsURL("Didukung - Oricon.7fe0f74c.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#063E63] md:px-28 mt-12 pt-10 px-14" }, _attrs))}><div class="container flex flex-col md:flex-row flex-wrap justify-between"><div class="flex flex-col"><a title="UNHAS" href="/"><img class="w-1/2"${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="h-full flex flex-col justify-evenly"><div class=""><p class="text-lg md:text-xl lg:text-2xl font-bold">Alamat</p><p> Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan. 92171 </p></div><div class="flex flex-col"><p class="text-lg md:text-xl lg:text-2xl font-bold">Kontak</p><a href="/" class="my-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-email",
    class: "w-6 h-6"
  }, null, _parent));
  _push(` teknik@unhas.ac.id </a><a href="/" class="my-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-phone",
    class: "w-6 h-6"
  }, null, _parent));
  _push(` +62 852-9999-9958 </a><a href="/" class="my-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "w-6 h-6",
    name: "ic:baseline-facebook"
  }, null, _parent));
  _push(` Lorem, ipsum dolor. </a><a href="/" class="my-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:twitter-circle",
    class: "w-6 h-6"
  }, null, _parent));
  _push(` Lorem, ipsum dolor. </a></div></div></div><div class="flex flex-col mt-4 md:mt-0"><p class="text-lg md:text-xl lg:text-2xl font-bold mb-3">Didukung Oleh</p><div class="flex justify-between"><a title="Upana Studio" href="https://upanastudio.com/"><img${ssrRenderAttr("src", _imports_1)} alt=""></a><a title="Oricon" href="https://upanastudio.com/"><img${ssrRenderAttr("src", _imports_2)} alt=""></a></div><div class="my-3"><a href="https://maps.app.goo.gl/tw1kxoAvgeTCFW4E7">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ic:round-location-on",
    class: "w-6 h-6"
  }, null, _parent));
  _push(` teknik@unhas.ac.id </a><iframe class="mt-3 w-full" title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.2062862219664!2d119.50213400000004!3d-5.230259999999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee13639154f11%3A0x77d363f632d6f859!2sUniversitas%20Hasanuddin%20Kampus%20FAKULTAS%20TEKNIK%20Gowa!5e0!3m2!1sid!2sid!4v1698218096151!5m2!1sid!2sid" height="250" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div><div class="text-center w-full mt-5 border-t py-5"> \xA9 2023 Universitas Hasanuddin. All rights reserved. </div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Navbar = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-58acbe3a.mjs.map
