new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "dry.jfif",
          img2: "kian.jpg",
          img3: "tabs.jpg",
          title: "Cutepal",
          isOpen: false,
        },
        {
          img1: "eating.jpg",
          img2: "laley.jpg",
          img3: "emman.jpg",
          title: "ala akong maisip",
          isOpen: false,
        },
        {
          img1: "edward.jpg",
          img2: "ward.jpg",
          img3: "jhan.jpg",
          title: "Bago ang sakuna",
          isOpen: false,
        },
        {
          img1: "leo.jpg",
          img2: "pogi.jpg",
          img3: "rindel.jfif",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "dry.jfif",
          img2: "tarantado.jpg",
          img3: "eman.jpg",
          title: "HERO",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});