import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import __nuxt_component_0$1 from './Icon-4438c5ee.mjs';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
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
import 'vue-router';
import './config-9dd6743e.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _imports_0$2 = "" + buildAssetsURL("Rektor.486c912d.png");
const _imports_1 = "" + buildAssetsURL("Motif2.7771abdc.png");
const _sfc_main$5 = {
  data() {
    return {
      inViewport: false
    };
  },
  mounted() {
    this.observeElement();
  },
  methods: {
    observeElement() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      };
      const observer = new IntersectionObserver(
        this.handleIntersection,
        options
      );
      observer.observe(this.$el);
    },
    handleIntersection(entries) {
      if (entries[0].isIntersecting) {
        this.inViewport = true;
      } else {
        this.inViewport = false;
      }
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center w-full min-h-[140vh] md:min-h-[100vh] relative" }, _attrs))} data-v-f87bf91b><div class="${ssrRenderClass([{ "animate-fly-in": $data.inViewport }, "flex w-[80%] bg-[#063E63] z-[2] flex-col md:flex-row md:w-[90%]"])}" data-v-f87bf91b><div class="flex flex-col md:w-2/3 p-6 md:p-20 order-2 text-[white] md:order-1" data-v-f87bf91b><div data-v-f87bf91b><p class="text-[1rem] font-medium" data-v-f87bf91b>SAMBUTAN DEKAN</p><p class="text-[2rem] mt-1 md:mt-[0.7vh] font-semibold" data-v-f87bf91b> Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN Eng. </p><hr class="w-[15vw] h-[0.3vh] bg-[#CDB646] mt-1 md:mt-[1vh]" data-v-f87bf91b><p class="text-[1.5rem] mt-[4vh]" data-v-f87bf91b> Kami akan terus meningkatkan pencapaian menuju terwujudnya visi dan misi yang telah dicanangkan dalam rencana strategis fakultas. </p></div><a href="/" data-v-f87bf91b><p class="flex text-[1rem] text-[#CDB646] hover:text-[#675f38] justify-end items-end translate-y-1 underline-offset-6 mt-10 min-w-[100%] md:mt-20 md:translate-y-10" data-v-f87bf91b> BACA SELENGKAPNYA -&gt; </p></a></div><div class="flex justify-center md:items-start md:justify-end md:w-1/3" data-v-f87bf91b><img${ssrRenderAttr("src", _imports_0$2)} class="md:w-[80%] md:shrink-0" alt="" data-v-f87bf91b></div></div><div class="${ssrRenderClass([{ "animate-fly-in": $data.inViewport }, "absolute left-0 bottom-[7vh] w-[42vw] h-[17vh] bg-[#DF3F3F] z-[1] md:bottom-[14vh]"])}" data-v-f87bf91b></div><div class="${ssrRenderClass([{ "animate-fly-in": $data.inViewport }, "flex justify-center items-center absolute left-0 -top-24 bottom-[14vh] w-[60%] h-[30vh] bg-[#CDB646] z-[0] md:w-[42vw] md:h-[39vh] md:left-10"])}" data-v-f87bf91b><p class="text-[1.25rem] text-center font-bold mb-0 md:mb-[2] md:text-[2rem]" data-v-f87bf91b> SELAMAT DATANG DI FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN </p></div><img${ssrRenderAttr("src", _imports_1)} class="absolute right-0 top-0 max-w-[40vw] max-h-[40vh]" data-v-f87bf91b></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-f87bf91b"]]);
const _imports_0$1 = "" + buildAssetsURL("Motif.0f6be4e1.png");
const _sfc_main$4 = {
  data() {
    return {
      inViewport: false
    };
  },
  mounted() {
    this.observeElement();
  },
  methods: {
    observeElement() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      };
      const observer = new IntersectionObserver(
        this.handleIntersection,
        options
      );
      observer.observe(this.$el);
    },
    handleIntersection(entries) {
      if (entries[0].isIntersecting) {
        this.inViewport = true;
      } else {
        this.inViewport = false;
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[90vh] bg-[#efefef] pt-10 relative" }, _attrs))} data-v-74e162c3><div class="flex pl-[2rem] items-center md:pl-[12rem]" data-v-74e162c3><div class="text-black text-[2.5rem] font-bold" data-v-74e162c3>Visi dan Misi</div><div class="bg-[#CDB646] flex grow ml-10 h-2 mt-2" data-v-74e162c3></div></div><div class="flex h-[73vh] min-w-full" data-v-74e162c3><div class="flex items-center basis-1/2 justify-center flex-col relative" data-v-74e162c3><div class="${ssrRenderClass([{ "animate-fly-in": $data.inViewport }, "min-w-[17vw] lg:w-[17vw] min-h-[32vh] bg-[#CDB646] px-4 absolute bottom-[20rem] right-[2rem] rounded-md lg:right-[17rem] lg:bottom-[17rem] lg:px-8"])}" data-v-74e162c3><p class="text-center text-[2.25rem] pt-2 pb-4 font-bold" data-v-74e162c3>Visi</p><p class="text-[1.25rem] leading-6" data-v-74e162c3> Menjadi institusi unggulan dalam bidang rekayasa untuk keberlanjutan global dengan semangat budaya maritim </p></div><div class="${ssrRenderClass([{ "animate-fly-in": $data.inViewport }, "min-w-[17vw] lg:w-[17vw] min-h-[32vh] bg-[#063E63] px-8 absolute right-[2rem] bottom-[0rem] rounded-md lg:bottom-[2rem]"])}" data-v-74e162c3><p class="text-center text-[2.25rem] pt-2 pb-4 font-bold" data-v-74e162c3>Misi</p><p class="text-[1.25rem] leading-6 pb-4" data-v-74e162c3> Mengembangkan pendidikan, penelitian, dan pengabdian masyarakat pada bidang rekayasa dengan semangat budaya maritim. </p></div></div><div class="flex items-center basis-1/2 justify-center" data-v-74e162c3><div class="${ssrRenderClass([{ "animate-fly-in": $data.inViewport }, "flex-col min-w-[25vw] min-h-[59vh] lg:w-[25vw] lg:h-[59vh] bg-black px-8 rounded-md mt-[4rem]"])}" data-v-74e162c3><p class="text-center text-[2.5rem] font-bold pt-4 pb-10" data-v-74e162c3> Sasaran Pendidikan </p><p class="text-[1.25rem] leading-6" data-v-74e162c3> Membentuk keseimbangan penelitian - pendidikan; melalui keterpaduan sistem pendidikan yang komprehensif dan kreatif pada strata sarjana, dan percepatan penelitian pada strata pascasarjana melalui pendidikan berbasis laboratorium (Labo-Based Education / LBE) </p></div></div></div><img${ssrRenderAttr("src", _imports_0$1)} class="absolute left-0 bottom-0 max-w-[40%] h-100" data-v-74e162c3></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/objective.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-74e162c3"]]);
const _sfc_main$3 = {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      slides: [
        {
          id: 1,
          image: "_nuxt/images/gallery/image 1.jpg",
          title: "Title"
        },
        {
          id: 2,
          image: "_nuxt/images/gallery/image 2.jpg",
          title: "Title"
        },
        {
          id: 3,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title"
        },
        {
          id: 4,
          image: "_nuxt/images/gallery/image 1.jpg",
          title: "Title"
        },
        {
          id: 5,
          image: "_nuxt/images/gallery/image 2.jpg",
          title: "Title"
        },
        {
          id: 6,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title"
        },
        {
          id: 7,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title"
        },
        {
          id: 8,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title"
        },
        {
          id: 9,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title"
        }
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_navigation = resolveComponent("navigation");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "galeri",
    class: "bg-white py-8 px-10 md:px-14 lg:px-16 xl:px-24"
  }, _attrs))}><div class="flex flex-row mb-10 justify-between"><div class="w-1/2 flex flex-row items-center"><h1 class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle"> GALERI </h1><div class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div></div><div class="more_button items-center p-2"><div class="flex items-center m-1 justify-between"><a href="#galeri"><p class="text-[#063E63] font-bold text-xs md:text-lg"> LIHAT GALERI LAINNYA </p></a>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:arrow-right",
    class: "ml-1",
    color: "#063E63"
  }, null, _parent));
  _push(`</div><div class="w-full bg-[#063E63] h-[2px]"></div></div></div>`);
  _push(ssrRenderComponent(_component_carousel, {
    autoplay: 2e3,
    "wrap-around": true,
    "items-to-show": 3,
    "items-to-scroll": 1
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_navigation, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_navigation),
          createVNode(_component_pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.slides, (slide) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: slide.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex flex-col w-full"${_scopeId2}><img${ssrRenderAttr("src", slide.image)} class="object-cover h-[100px] md:h-[150px] lg:h-[250px]" alt="Slide {{ slide.id }}"${_scopeId2}><p class="text-black font-bold mt-2"${_scopeId2}>${ssrInterpolate(slide.title)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col w-full" }, [
                    createVNode("img", {
                      src: slide.image,
                      class: "object-cover h-[100px] md:h-[150px] lg:h-[250px]",
                      alt: "Slide {{ slide.id }}"
                    }, null, 8, ["src"]),
                    createVNode("p", { class: "text-black font-bold mt-2" }, toDisplayString(slide.title), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.slides, (slide) => {
            return openBlock(), createBlock(_component_slide, {
              key: slide.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "flex flex-col w-full" }, [
                  createVNode("img", {
                    src: slide.image,
                    class: "object-cover h-[100px] md:h-[150px] lg:h-[250px]",
                    alt: "Slide {{ slide.id }}"
                  }, null, 8, ["src"]),
                  createVNode("p", { class: "text-black font-bold mt-2" }, toDisplayString(slide.title), 1)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/gallery.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + buildAssetsURL("news 1.ccd151a0.png");
const _sfc_main$2 = {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    this.fetchEvents();
  },
  methods: {
    checkScreenSize() {
      return window.innerWidth >= 768;
    },
    fetchEvents() {
      $fetch("http://localhost:8055/items/berita", {
        mode: "no-cors",
        method: "GET"
      }).then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status} - ${response.statusText}`
          );
        }
        return response.json();
      }).then((data) => {
        this.events = data.data;
      }).catch((error) => {
        console.error("Error fetching events:", error);
      });
    }
  },
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      slides: [
        {
          id: 1,
          image: "_nuxt/images/gallery/image 1.jpg",
          title: "Title Title Title Title Title Title Title Titlte Title Title Title Title Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 2,
          image: "_nuxt/images/gallery/image 2.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 3,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 4,
          image: "_nuxt/images/gallery/image 1.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 5,
          image: "_nuxt/images/gallery/image 2.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 6,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 7,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 8,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title Title TitleTitle Title Title Title Title Title Title Title Title ",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        },
        {
          id: 9,
          image: "_nuxt/images/gallery/image 3.jpg",
          title: "Title",
          subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit."
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_navigation = resolveComponent("navigation");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "berita",
    class: "bg-gray-200 px-10 md:px-14 lg:px-16 xl:px-24 py-8 justify-center align-center"
  }, _attrs))}><div id="berita" class="bg-gray-200 px-14 md:px-28 py-8 justify-center align-center"><div class="flex flex-row mb-10 justify-between"><div class="w-1/2 flex flex-row items-center"><h1 class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle"> BERITA </h1><div class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div></div><div class="more_button items-center p-2"><div class="flex items-center m-1 justify-between"><a href="#galeri"><p class="text-[#063E63] font-bold text-xs md:text-lg"> LIHAT BERITA LAINNYA </p></a>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:arrow-right",
    class: "ml-1",
    color: "#063E63"
  }, null, _parent));
  _push(`</div><div class="w-full bg-[#063E63] h-[2px]"></div></div></div><div class="flex flex-col md:flex-row gap-8 mb-8 md:mb-16"><div class="w-full sm:w-1/3 flex justify-center"><img class="w-2/3 md:w-full lg:w-7/8"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="md:w-1/2"><div class="flex flex-row items-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:calendar",
    color: "#063E63"
  }, null, _parent));
  _push(`<p class="text-[#063E63] text-sm sm:text-base">13 Oktober 2023</p></div><h1 class="text-base md:text-lg lg:text-2xl text-black font-semibold my-2 md:my-6"> Fakultas Teknik Sukses Gelar Konferensi Internasional ICREST 2023 </h1><p class="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-4"> International Conference On Research In Engineering and Science Technology 2023 yang pertama sukses dilaksanakan oleh Fakultas Teknik Universitas Hasanuddin. Bertema Advanced Technologies to Fulfill SDGs For Suistainable Life, konferensi internasional ini digelar pada Selasa, 10 Oktober 2023 di Gedung CSA LT1 Fakultas Teknik Universitas Hasanuddin, Gowa. </p></div></div>`);
  if ($data.isMediumSize) {
    _push(ssrRenderComponent(_component_carousel, {
      "wrap-around": true,
      "items-to-show": 3,
      "items-to-scroll": 1
    }, {
      addons: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_navigation, null, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_navigation)
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.slides, (slide) => {
            _push2(ssrRenderComponent(_component_slide, {
              key: slide.id
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col w-full h-full"${_scopeId2}><img${ssrRenderAttr("src", slide.image)} class="object-cover h-[100px] md:h-[120px] lg:h-[200px]" alt="Slide {{ slide.id }}"${_scopeId2}><p class="text-black text-sm md:text-base lg:text-lg font-bold text-justify mt-2 line-clamp-1"${_scopeId2}>${ssrInterpolate(slide.title)}</p><p class="text-black text-xs md:text-sm font-light line-clamp-4 text-justify mt-2"${_scopeId2}>${ssrInterpolate(slide.subtitle)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col w-full h-full" }, [
                      createVNode("img", {
                        src: slide.image,
                        class: "object-cover h-[100px] md:h-[120px] lg:h-[200px]",
                        alt: "Slide {{ slide.id }}"
                      }, null, 8, ["src"]),
                      createVNode("p", { class: "text-black text-sm md:text-base lg:text-lg font-bold text-justify mt-2 line-clamp-1" }, toDisplayString(slide.title), 1),
                      createVNode("p", { class: "text-black text-xs md:text-sm font-light line-clamp-4 text-justify mt-2" }, toDisplayString(slide.subtitle), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.slides, (slide) => {
              return openBlock(), createBlock(_component_slide, {
                key: slide.id
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col w-full h-full" }, [
                    createVNode("img", {
                      src: slide.image,
                      class: "object-cover h-[100px] md:h-[120px] lg:h-[200px]",
                      alt: "Slide {{ slide.id }}"
                    }, null, 8, ["src"]),
                    createVNode("p", { class: "text-black text-sm md:text-base lg:text-lg font-bold text-justify mt-2 line-clamp-1" }, toDisplayString(slide.title), 1),
                    createVNode("p", { class: "text-black text-xs md:text-sm font-light line-clamp-4 text-justify mt-2" }, toDisplayString(slide.subtitle), 1)
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<div><!--[-->`);
    ssrRenderList(3, (i) => {
      _push(`<div class="overflow-hidden object-cover h-24 flex flex-row p-2 my-2 border-2 border-black rounded-lg"><div class="w-1/3 mr-2 flex"><img class="w-full h-128 object-cover flex-1"${ssrRenderAttr("src", $data.slides[i].image)} alt=""></div><div class="w-2/3"><h2 class="text-md text-black font-bold">${ssrInterpolate($data.slides[i].title)}</h2><p class="text-xs text-black font-light line-clamp-3">${ssrInterpolate($data.slides[i].subtitle)}</p></div></div>`);
    });
    _push(`<!--]--></div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/berita.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "App",
  data() {
    return {
      agendas: [
        {
          title: "International Guest Lecture on Journal Article",
          location: "Senat Meeting Room, COT Building, 2nd floor, Engineering Faculty of Universitas Hasanuddin",
          duration: "25 Juni 2019 -  25 Juni 2019",
          day: "25",
          month: "Jun"
        },
        {
          title: "Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas",
          location: "Asrama Mahasiswa Fakultas Teknik, Kampus Gowa",
          duration: "22 Juni 2019 -  22 Juni 2019",
          day: "22",
          month: "Jun"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "agenda",
    class: "bg-white px-10 md:px-14 lg:px-16 xl:px-24 py-8 justify-center align-center"
  }, _attrs))}><div class="flex flex-row mb-10 justify-between items-center"><div class="w-1/2 flex flex-row items-center"><h1 class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle"> AGENDA </h1><div class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div></div><div class="more_button items-center p-2"><div class="flex items-center m-1 justify-between"><a href="#galeri"><p class="text-[#063E63] font-bold text-xs md:text-lg"> LIHAT AGENDA LAINNYA </p></a>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:arrow-right",
    class: "ml-1",
    color: "#063E63"
  }, null, _parent));
  _push(`</div><div class="w-full bg-[#063E63] h-[2px]"></div></div></div><div id="list_agenda" class="flex flex-col lg:flex-row gap-4"><!--[-->`);
  ssrRenderList($data.agendas, (agenda) => {
    _push(`<div class="overflow-hidden border-2 h-[120px] md:h-[140px] lg:h-[160px] bg-white flex flex-row"><div class="bg-[#063E63] h-1/2 p-8 flex flex-col justify-center"><h1 class="text-center text-base md:text-xl font-bold">${ssrInterpolate(agenda.day)}</h1><h1 class="text-center text-sm">${ssrInterpolate(agenda.month)}</h1></div><div class="flex flex-col justify-evenly p-4 h-full ml-4"><div class="flex items-center">`);
    _push(ssrRenderComponent(_component_Icon, {
      name: "mdi:calendar",
      color: "#063E63"
    }, null, _parent));
    _push(`<h2 class="text-black text-sm">${ssrInterpolate(agenda.duration)}</h2></div><h1 class="text-black font-bold text-sm md:text-lg">${ssrInterpolate(agenda.title)}</h1><div class="flex items-center">`);
    _push(ssrRenderComponent(_component_Icon, {
      class: "w-[24px] m-2",
      name: "mdi:location",
      color: "#063E63"
    }, null, _parent));
    _push(`<h2 class="text-black text-xs md:text-sm">${ssrInterpolate(agenda.location)}</h2></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/agenda.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Welcome = __nuxt_component_0;
  const _component_Objective = __nuxt_component_1;
  const _component_Gallery = __nuxt_component_2;
  const _component_Berita = __nuxt_component_3;
  const _component_Agenda = __nuxt_component_4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Welcome, null, null, _parent));
  _push(ssrRenderComponent(_component_Objective, null, null, _parent));
  _push(ssrRenderComponent(_component_Gallery, null, null, _parent));
  _push(ssrRenderComponent(_component_Berita, null, null, _parent));
  _push(ssrRenderComponent(_component_Agenda, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-900d0046.mjs.map
