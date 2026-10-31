(() => {
  const palettes = [
    ["#f3c878", "#9d583b", "#264b43", "#16332f"],
    ["#f0ca7a", "#ba744a", "#316b67", "#193d45"],
    ["#f1c878", "#c77d45", "#76523f", "#263d38"],
    ["#f5cb70", "#c67b3a", "#6f7447", "#303d36"],
    ["#e8bd70", "#956243", "#3b6652", "#182f32"],
    ["#f1c777", "#a96844", "#59634e", "#293b37"],
    ["#f8c56d", "#bf7552", "#316878", "#1a3e50"],
    ["#f3bd6c", "#ca8250", "#267a79", "#183c49"],
    ["#ecc078", "#a95c42", "#4d5364", "#262e40"],
    ["#df945f", "#a9463d", "#5a3940", "#252c39"],
    ["#f7d38a", "#ca7953", "#397469", "#1c4240"]
  ];

  const landscape = (index, palette) => {
    const [sky, glow, land, deep] = palette;
    const sun = index === 8 || index === 9 ? "#f5b879" : "#ffe0a0";
    const sunMarkup = `<circle cx="680" cy="210" r="95" fill="${sun}" opacity=".88"/><circle cx="680" cy="210" r="130" fill="${sun}" opacity=".12"/>`;
    const mountains = `<path d="M0 520 175 320l145 170 170-225 210 235 120-150 180 170v480H0Z" fill="${land}" opacity=".72"/><path d="M0 635 230 460l190 195 180-250 300 260v330H0Z" fill="${deep}" opacity=".78"/>`;
    const ground = `<path d="M0 710c170-55 305-16 440 15s310 22 460-33v330H0Z" fill="${deep}"/>`;
    const forest = `<g fill="${land}"><path d="M88 690 170 470l82 220z"/><path d="M102 604h136v25H102zm-12 52h160v25H90z"/><path d="M710 698 790 475l86 223z"/><path d="M724 607h135v25H724zm-12 52h160v25H712z"/></g><g stroke="#d7a66e" stroke-width="12"><path d="M170 660v150m620-150v160"/></g>`;
    const river = `<path d="M0 720c150-46 235 28 390-12s278-39 510 8v284H0Z" fill="#287c86"/><path d="M0 786c160-28 225 33 390-5s320-37 510 3" fill="none" stroke="#90c4b8" stroke-width="10" opacity=".8"/><path d="M0 870c160-30 260 30 410-4s330-35 490 4" fill="none" stroke="#90c4b8" stroke-width="7" opacity=".6"/>`;
    const palace = `<g fill="${deep}" stroke="${sky}" stroke-width="8"><path d="M125 710V455h110v255m20 0V380h130v330m32 0V455h112v255m26 0V350h142v360m30 0V455h112v255"/><path d="m108 460 72-85 72 85m22-75 66-82 68 82m39-10 73-92 73 92m18 10 69-85 70 85m31 0 70-80 70 80"/></g><g fill="${sky}"><path d="M185 705v-90a34 34 0 0 1 68 0v90zm148 0V575a42 42 0 0 1 84 0v130zm279 0V550a46 46 0 0 1 92 0v155zm162 0v-90a34 34 0 0 1 68 0v90z"/></g>`;
    const bridge = `<path d="M0 755c175-145 320-165 470-78 145 85 270 85 460-54" fill="none" stroke="#eac38a" stroke-width="37" stroke-linecap="round"/><path d="M0 806c175-145 320-165 470-78 145 85 270 85 460-54" fill="none" stroke="${deep}" stroke-width="13" stroke-dasharray="4 28" stroke-linecap="round"/>`;
    const ocean = `<path d="M0 685c100-45 180-45 280 0s180 45 280 0 180-45 280 0 180 45 280 0v315H0Z" fill="#26727b"/><path d="M0 760c100-42 180-42 280 0s180 42 280 0 180-42 280 0 180 42 280 0" fill="none" stroke="#8bc3bb" stroke-width="11"/><path d="M0 860c100-42 180-42 280 0s180 42 280 0 180-42 280 0 180 42 280 0" fill="none" stroke="#8bc3bb" stroke-width="8" opacity=".7"/>`;
    const deer = `<g fill="#c8814e" stroke="#f1ca86" stroke-width="10"><path d="M410 710c-5-70 45-130 120-130 65 0 108 45 108 108 0 44-27 75-65 82l20 90h-28l-31-80h-70l-22 80h-28l15-100c-14-10-19-29-19-50z"/><path d="m505 588-45-90m45 74-8-106m137 126 36-92m-37 77 17-106" fill="none"/></g><circle cx="615" cy="626" r="8" fill="#f8e6bf"/>`;
    const bird = `<g fill="#1d3335"><path d="M300 625c65-70 132-99 210-82 50 10 91 47 122 95-58-34-108-38-149-5-48 38-105 43-183 10 40 4 77-3 109-21-35-16-72-15-109 3z"/><path d="m498 630 72 56-94-25"/></g><path d="M483 550q-20-90-90-130m105 126q8-101 82-147" fill="none" stroke="#eac48b" stroke-width="12" stroke-linecap="round"/>`;
    const boat = `<path d="M288 718h320l-54 70H345Z" fill="#884e3c" stroke="#f1cf94" stroke-width="9"/><path d="M445 710V510m5 7 118 155H450Z" fill="#f0d195" opacity=".9"/>`;
    const bridgeScene = index === 7;
    const background = `<rect width="1000" height="1000" fill="url(#sky)"/>${sunMarkup}${mountains}${ground}`;
    const sceneLayers = [
      background + palace,
      background + river + boat,
      background + palace,
      background + forest + deer,
      background + forest + bird,
      background + forest + `<circle cx="700" cy="645" r="54" fill="${glow}"/><path d="m580 710 130-140 160 140" fill="${deep}"/>`,
      background + ocean + `<path d="M460 680q65-115 125-40l85-75-45 125h-160" fill="${glow}"/>`,
      background + ocean + bridge,
      background + palace + `<path d="M690 615v-150" stroke="${glow}" stroke-width="14"/><path d="m700 460 98 37-98 35" fill="${glow}"/>`,
      background + palace + `<path d="M0 750h1000v250H0Z" fill="${deep}" opacity=".3"/><path d="m530 675 70-105 70 105" fill="${glow}"/>`,
      background + palace + `<g fill="#ffd98c"><path d="M125 825q42-58 84 0-42 58-84 0"/><path d="M790 835q38-55 76 0-38 55-76 0"/><circle cx="167" cy="825" r="10"/><circle cx="828" cy="835" r="9"/></g>`
    ];
    const scene = sceneLayers[index] ?? sceneLayers[0];
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" role="img"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="${glow}"/></linearGradient></defs>${scene}<rect x="22" y="22" width="956" height="956" rx="8" fill="none" stroke="#f4d69f" stroke-opacity=".72" stroke-width="4"/><path d="M70 930h860" stroke="#f4d69f" stroke-opacity=".55" stroke-width="3"/></svg>`;
  };

  window.ramayanaSceneArtwork = {
    source: "https://upload.wikimedia.org/wikipedia/commons/2/29/Rama-Sita_coronation.jpg",
    render(index) {
      if (index === 0) return this.source;
      const palette = palettes[index] ?? palettes[0];
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(landscape(index - 1, palette))}`;
    }
  };
})();
