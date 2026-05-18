/* ============================================================
   JP 광고 메시지 UT 프로토타입 — 데이터 & 렌더러
   가설 H1/H2/H3 = 광고 카피 + 도착 LP
   Figma 출처: JP Commerce / Biz task board
     - UT용 에셋  : 6874:2756 (H1 6874:2509 / H2 6874:2559 / H3 6874:2560)
     - LP(신버전): 6905:1263 (H1 6905:1264 / H2 6905:1381 / H3 6905:1473)
   ※ 사진 영역은 Figma export 한도 리셋 후 교체용 .ph 플레이스홀더
   ============================================================ */

const HYPO = {
  1: {
    key: "1",
    tag: "HYPOTHESIS 01 · デザイン × 価格",
    // 실제 LP URL을 넣으면 광고 클릭 시 해당 페이지로 이동(미설정 시 lp.html 재현본 사용)
    lpUrl: "https://www.ohouse.com/ja-JP/store/exhibitions/10072",
    adCopyJP: "好きなデザインを<br>手が届く価格で",
    adCopyKR: "좋아하는 디자인을 손닿는 가격에",
    caption:
      "気になるデザイン、あきらめていませんか？お気に入りのテイストを、手が届く価格で。",
    creative: "h1",
    // 캐러셀 3장 — assets/h1-1.png, h1-2.png, h1-3.png 로 교체 (Figma 노드 참고)
    figmaSlides: ["6874:2452", "6874:2462", "6874:2487"],
    lp: {
      heroCls: "h1",
      eyebrow: "OHOUSE INTERIOR",
      heroH: "好きなデザインを<br>手が届く価格で",
      heroP: "人気のテイストを、無理のない価格で。あなたらしい部屋づくりを。",
      sections: [
        {
          h: "好みのテイストから探す",
          sub: "あなたの「好き」から、部屋づくりを始めましょう。",
          taste: [
            ["無機質", "無骨さといえば、インダストリアル。空間にほどよい存在感を足したい時にぴったりです。", "t6"],
            ["北欧", "ぬくもりといえば、北欧。やさしい空気感を空間に足したい時にぴったりです。", "t3"],
            // ⚠ 메모리: JP "한국 인테리어" 전면 소구 중단 방침과 충돌 — Figma 원본 그대로 유지(README 참고)
            ["韓国 インテリア", "トレンド感といえば、韓国スタイル。抜け感のあるおしゃれを取り入れたい時にぴったりです。", "t4"],
            ["モダン", "洗練といえば、モダン。すっきりとした美しさを加えたい時にぴったりです。", "t1"],
          ],
        },
        {
          h: "カテゴリーから探す",
          chips: ["テーブル", "ソファ", "椅子", "収納家具", "照明", "ラグ"],
          grid: ["t1", "t2", "t3", "t5", "t6", "t4"],
          gridLabel: "人気アイテム",
        },
      ],
    },
  },

  2: {
    key: "2",
    tag: "HYPOTHESIS 02 · 品質 × 価格",
    lpUrl: "https://www.ohouse.com/ja-JP/store/exhibitions/10073",
    adCopyJP: "この品質で<br>この価格",
    adCopyKR: "이 품질에 이 가격",
    caption:
      "見た目だけじゃない。長く使える品質を、納得の価格で。Ohouseが厳選しました。",
    creative: "h2",
    // 캐러셀 3장 — assets/h2-1.png, h2-2.png, h2-3.png 로 교체
    figmaSlides: ["6874:2510", "6874:2521", "6874:2538"],
    lp: {
      heroCls: "h2",
      eyebrow: "QUALITY & PRICE",
      heroH: 'この品質で<br>この価格',
      heroP: "品質で選んでも、価格で迷わない。Ohouseのコスパアイテム。",
      sections: [
        {
          h: "価格帯から探す",
          sub: "予算に合わせて、ぴったりの一品を。",
          chips: ["〜¥5,000", "〜¥10,000", "〜¥30,000", "¥30,000〜"],
        },
        {
          h: "人気BESTアイテム",
          sub: "品質と価格、どちらも妥協しない定番。",
          grid: ["t2", "t5", "t1", "t6"],
          gridLabel: "BEST",
          more: "もっと見る",
        },
        {
          h: "空間別で探す",
          sub: "用途やシーン別に探せます。",
          chips: ["キッチン", "書斎", "リビング", "寝室", "玄関"],
        },
        {
          h: "条件を絞り込む",
          sub: "いろいろな条件で商品を探す。",
          chips: ["送料無料", "大型家具OK", "即日発送", "レビュー高評価"],
        },
      ],
    },
  },

  3: {
    key: "3",
    tag: "HYPOTHESIS 03 · 小さな空間",
    lpUrl: "https://www.ohouse.com/ja-JP/store/exhibitions/10074",
    adCopyJP: "かわいい部屋づくりに<br>広さは関係ない",
    adCopyKR: "예쁜 방 만들기에 넓이는 관계없다",
    caption:
      "狭くても、ちゃんとかわいい。どんな空間も、あなたらしく。#一人暮らし #狭い部屋",
    creative: "h3",
    // 캐러셀 3장 — assets/h3-1.png, h3-2.png, h3-3.png 로 교체
    figmaSlides: ["6874:2695", "6874:2740", "6874:2792"],
    lp: {
      heroCls: "h3",
      eyebrow: "SMALL SPACE",
      heroH: "かわいい部屋づくりに<br>広さは関係ない",
      heroP: "どんな空間もあなたらしく。",
      badge: "UP TO 59% OFF",
      sections: [
        {
          h: "STAFF PICKS",
          sub: "Ohouseのスタッフが厳選した注目のアイテム",
          grid: ["t1", "t3", "t6", "t2"],
          gridLabel: "Ohouse_서오홈さんのお部屋",
          more: "もっと見る",
        },
        {
          h: "カテゴリーから探す",
          sub: "小さな空間の味方になる家具。",
          chips: ["隙間収納", "コンパクト家具", "壁面活用", "折りたたみ", "ロフト下"],
          grid: ["t5", "t6", "t4", "t3", "t1", "t2"],
          gridLabel: "home deco · UP TO 10%",
        },
        {
          h: "",
          banner: { b: "小さな部屋の味方", p: "小さな空間でも使える家具を探す →" },
        },
      ],
    },
  },
};

function getH() {
  const p = new URLSearchParams(location.search).get("h") || "1";
  return HYPO[p] ? p : "1";
}

/* ---------- 공통 SVG ---------- */
const I = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.3-9.3-8.3C1 8.5 2.6 5 6 5c2 0 3.3 1.2 4 2.3C10.7 6.2 12 5 14 5c3.4 0 5 3.5 3.3 6.7C19 15.7 12 20 12 20z"/></svg>',
  comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  dm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10.5 12 3l9 7.5V21H3z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  reels: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="m10 9 5 3-5 3z"/></svg>',
  shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9h16l-1 11H5zM9 9V6a3 3 0 0 1 6 0v3"/></svg>',
};

function statusbar(dark) {
  return `<div class="statusbar${dark ? " dark" : ""}">
    <span>9:41</span>
    <span class="icons">●●●● &nbsp; 5G &nbsp; <span style="border:1.5px solid currentColor;border-radius:3px;padding:0 3px;font-size:9px;">88</span></span>
  </div>`;
}
const homeIndicator = `<div class="home-indicator"></div>`;

/* ---------- 광고 크리에이티브 (가설별) ---------- */
function creative(h) {
  const phA = (t) => `<div class="ph"><small>📷 ${t}<br>Figma 소재 교체</small></div>`;
  if (h.creative === "h1")
    return `<div class="creative cr-h1">
      <div class="oh-logo"><i class="mk"></i> Ohouse</div>
      <div class="hl">${h.adCopyJP}</div>
      <div class="grid">
        <div class="ph"><small>📷 商品</small></div><div class="ph"><small>📷 商品</small></div>
        <div class="ph"><small>📷 商品</small></div><div class="ph"><small>📷 商品</small></div>
      </div>
      <div class="foot">Ohouse</div>
    </div>`;
  if (h.creative === "h2")
    return `<div class="creative cr-h2">
      <div class="photo">${phA("ソファのある部屋")}</div>
      <div class="scrim"></div>
      <div class="oh-logo"><i class="mk"></i> Ohouse</div>
      <div class="hl">この品質で<br><span class="b">この価格</span></div>
      <div class="credit"><i class="mk"></i> Ohouse_minzipさんのお部屋</div>
    </div>`;
  return `<div class="creative cr-h3">
      <div class="photo">${phA("小さな部屋のインテリア")}</div>
      <div class="scrim"></div>
      <div class="oh-logo"><i class="mk"></i> Ohouse</div>
      <div class="hl">${h.adCopyJP}</div>
    </div>`;
}

/* 이미지 로드 실패 시(아직 미교체) 재현 크리에이티브로 대체 */
window.adFallback = function (img) {
  const k = img.getAttribute("data-h");
  const wrap = document.createElement("div");
  wrap.className = "cr-fallback";
  wrap.innerHTML =
    creative(HYPO[k]) +
    `<span class="cr-tag">サンプル · 画像未差し替え</span>`;
  img.replaceWith(wrap);
};

/* ---------- Instagram 캐러셀 광고 (가설당 3장, 좌우 스와이프) ---------- */
function carousel(h, k, lpHref) {
  const n = (h.figmaSlides || [1, 2, 3]).length || 3;
  const slides = Array.from({ length: n }, (_, i) => {
    const src = `assets/h${k}-${i + 1}.jpg`;
    return `<a class="ig-slide" href="${lpHref}" aria-label="広告 ${i + 1}/${n}">
      <img src="${src}" data-h="${k}" alt="広告クリエイティブ ${i + 1}"
           onerror="this.onerror=null;window.adFallback(this)">
    </a>`;
  }).join("");
  const dots = Array.from({ length: n }, (_, i) =>
    `<i class="${i === 0 ? "on" : ""}"></i>`
  ).join("");
  return `
  <div class="ig-carousel">
    <div class="ig-track" id="adTrack">${slides}</div>
    <span class="ig-count" id="adCount">1/${n}</span>
    <button class="ig-arrow prev" id="adPrev" aria-label="前へ">‹</button>
    <button class="ig-arrow next" id="adNext" aria-label="次へ">›</button>
  </div>
  <div class="ig-dots" id="adDots">${dots}</div>`;
}

function wireCarousel() {
  const track = document.getElementById("adTrack");
  if (!track) return;
  const count = document.getElementById("adCount");
  const dots = [...document.querySelectorAll("#adDots i")];
  const n = dots.length;
  const idx = () => Math.round(track.scrollLeft / track.clientWidth);
  const sync = () => {
    const i = Math.min(n - 1, Math.max(0, idx()));
    count.textContent = `${i + 1}/${n}`;
    dots.forEach((d, j) => d.classList.toggle("on", j === i));
  };
  track.addEventListener("scroll", () => window.requestAnimationFrame(sync), {
    passive: true,
  });
  const go = (d) =>
    track.scrollBy({ left: d * track.clientWidth, behavior: "smooth" });
  document.getElementById("adPrev").addEventListener("click", () => go(-1));
  document.getElementById("adNext").addEventListener("click", () => go(1));
  dots.forEach((d, j) =>
    d.addEventListener("click", () =>
      track.scrollTo({ left: j * track.clientWidth, behavior: "smooth" })
    )
  );
}

/* ---------- Instagram 피드 렌더 ---------- */
function renderFeed() {
  const k = getH();
  const h = HYPO[k];
  // 실제 LP URL이 설정돼 있으면 그쪽으로(실 페이지 플로우), 아니면 재현본 lp.html
  const lpHref = h.lpUrl ? h.lpUrl : `lp.html?h=${k}`;
  const stories = ["あなた", "ohouse_jp", "muji_life", "yuka.room", "tokyo_deco", "ks_home"];
  document.title = `UT · 広告 (H${k})`;
  document.getElementById("app").innerHTML = `
  <div class="device">
    ${statusbar(false)}
    <div class="ig-topbar">
      <div class="ig-logo">Instagram</div>
      <div class="acts"><span>${I.heart}</span><span>${I.dm}</span></div>
    </div>
    <div class="screen" id="scr">
      <div class="ig-stories">
        ${stories
          .map(
            (s, i) =>
              `<div class="story ${i === 0 ? "me" : ""}"><div class="ring"><i></i></div><span>${s}</span></div>`
          )
          .join("")}
      </div>

      <!-- 일반 피드(맥락용) -->
      <div class="ig-post">
        <div class="head">
          <div class="ava" style="background:#C9A36B">y</div>
          <div class="meta"><b>yuka.room</b><small>東京</small></div>
          <div class="dots">···</div>
        </div>
        <div class="ig-media ph" style="aspect-ratio:1/1"><small>📷 一般投稿</small></div>
        <div class="ig-actions">${I.heart}${I.comment}${I.share}<span class="spacer"></span>${I.bookmark}</div>
        <div class="ig-likes">「いいね！」1,204件</div>
        <div class="ig-caption"><b>yuka.room</b>休日の模様替え🛋️ #一人暮らし</div>
        <div class="ig-time">2時間前</div>
      </div>

      <!-- 스폰서 광고 (UT 대상) -->
      <div class="ig-post" id="ad">
        <div class="head">
          <div class="ava"><i style="display:block;width:18px;height:18px;border-radius:5px;background:#fff"></i></div>
          <div class="meta"><b>ohouse_jp</b><small>広告</small></div>
          <div class="dots">···</div>
        </div>
        ${carousel(h, k, lpHref)}
        <a href="${lpHref}" class="ig-cta"><b>詳しくはこちら</b><span class="chev">›</span></a>
        <div class="ig-actions">${I.heart}${I.comment}${I.share}<span class="spacer"></span>${I.bookmark}</div>
        <div class="ig-likes">「いいね！」3,872件</div>
        <div class="ig-caption"><b>ohouse_jp</b>${h.caption}<span class="more"> …続きを読む</span></div>
        <div class="ig-comments">コメント128件をすべて見る</div>
        <div class="ig-time">1日前</div>
      </div>

      <div class="ig-post">
        <div class="head">
          <div class="ava" style="background:#7C9CB5">t</div>
          <div class="meta"><b>tokyo_deco</b><small>スポンサーではない投稿</small></div>
          <div class="dots">···</div>
        </div>
        <div class="ig-media ph" style="aspect-ratio:1/1"><small>📷 一般投稿</small></div>
        <div class="ig-actions">${I.heart}${I.comment}${I.share}<span class="spacer"></span>${I.bookmark}</div>
        <div class="ig-likes">「いいね！」842件</div>
        <div class="ig-time">5時間前</div>
      </div>
    </div>
    <div class="ig-tabbar">
      ${I.home}${I.search}${I.reels}${I.shop}<span class="pf"></span>
    </div>
    ${homeIndicator}
  </div>`;

  wireCarousel();

  // 광고가 보이도록 살짝 스크롤(피드 맥락 인지 후 광고 도달)
  const scr = document.getElementById("scr");
  setTimeout(() => {
    const ad = document.getElementById("ad");
    if (ad) scr.scrollTo({ top: ad.offsetTop - 70, behavior: "smooth" });
  }, 700);
}

/* ---------- LP 렌더 ---------- */
function pcard(tone, nm) {
  return `<div class="pcard"><div class="img ${tone} ph"><small>📷</small></div>
    <div class="nm">${nm || "商品名がここに入ります"}</div>
    <div class="pr"><s>¥6,000</s><em>¥4,878</em></div></div>`;
}
function renderLP() {
  const k = getH();
  const h = HYPO[k];
  const lp = h.lp;
  document.title = `UT · LP (H${k})`;

  const secHTML = lp.sections
    .map((s) => {
      let inner = "";
      if (s.h) inner += `<h2>${s.h}</h2>`;
      if (s.sub) inner += `<div class="sub">${s.sub}</div>`;
      if (s.taste)
        inner += `<div class="taste">${s.taste
          .map(
            (t) =>
              `<div class="card"><div class="thumb ${t[2]} ph"><small>📷</small></div>
               <div class="tx"><b>${t[0]}</b><p>${t[1]}</p></div></div>`
          )
          .join("")}</div>`;
      if (s.chips)
        inner += `<div class="chips">${s.chips
          .map((c, i) => `<span class="chip ${i === 0 ? "on" : ""}">${c}</span>`)
          .join("")}</div>`;
      if (s.grid) {
        if (s.gridLabel) inner += `<div class="sub" style="margin-top:18px;font-weight:800;color:var(--ohouse-ink)">${s.gridLabel}</div>`;
        const cls = s.grid.length > 4 ? "grid3" : "grid2";
        inner += `<div class="${cls}">${s.grid.map((t) => pcard(t)).join("")}</div>`;
      }
      if (s.more) inner += `<div class="more-btn">${s.more}</div>`;
      if (s.banner)
        inner += `<div class="banner"><b>${s.banner.b}</b><p>${s.banner.p}</p></div>`;
      return `<div class="sec">${inner}</div>`;
    })
    .join("");

  document.getElementById("app").innerHTML = `
  <div class="device">
    ${statusbar(false)}
    <div class="screen">
      <div class="lp-nav">
        <a class="back" href="feed.html?h=${k}" title="広告に戻る">‹</a>
        <div class="oh"><i class="mk"></i> Ohouse</div>
        <span class="sp"></span>
        <span class="ic">${I.search}</span><span class="ic">${I.bookmark}</span>
      </div>
      <div class="lp-hero ${lp.heroCls}">
        <div class="eyebrow">${lp.eyebrow}</div>
        <h1>${lp.heroH}</h1>
        <p>${lp.heroP}</p>
        ${lp.badge ? `<span class="badge">${lp.badge}</span>` : ""}
      </div>
      ${secHTML}
      <div class="lp-foot">
        <div class="oh">Ohouse</div>
        プロトタイプ（UT用）· 実データではありません<br>
        가설 H${k} · ${h.tag}
      </div>
    </div>
    ${homeIndicator}
  </div>`;
}
