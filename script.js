const positions = [
  "0% 0%",
  "33.333% 0%",
  "66.666% 0%",
  "100% 0%",
  "0% 33.333%",
  "33.333% 33.333%",
  "66.666% 33.333%",
  "100% 33.333%",
  "0% 66.666%",
  "33.333% 66.666%",
  "66.666% 66.666%",
  "100% 66.666%",
  "0% 100%",
  "33.333% 100%",
  "66.666% 100%",
  "100% 100%",
];

const data = {
  "답례떡": {
    types: [
      {
        name: "소포장",
        image: 14,
        products: [
          ["꿀떡 답례 20개", 52000, 14],
          ["바람떡 답례 20개", 56000, 6],
          ["절편 답례 20개", 60000, 10],
          ["혼합 답례 30개", 87000, 13],
          ["스티커 답례 50개", 145000, 15],
        ],
      },
      {
        name: "행사",
        image: 15,
        products: [
          ["회사 행사 30개", 99000, 15],
          ["학교 행사 50개", 155000, 7],
          ["교회 단체 80개", 240000, 11],
        ],
      },
      {
        name: "간식컵",
        image: 0,
        products: [
          ["꼬마 컵떡 10컵", 38000, 0],
          ["영양 컵떡 20컵", 72000, 5],
          ["혼합 컵떡 30컵", 105000, 8],
        ],
      },
    ],
  },
  "행사떡": {
    types: [
      {
        name: "백일·돌",
        image: 8,
        products: [
          ["백일 상차림", 78000, 8],
          ["돌상 기본", 98000, 12],
          ["돌상 프리미엄", 145000, 5],
          ["수수팥 세트", 42000, 10],
        ],
      },
      {
        name: "생신",
        image: 4,
        products: [
          ["생신 떡케이크 1호", 52000, 4],
          ["생신 떡케이크 2호", 68000, 5],
          ["꽃장식 떡케이크", 82000, 9],
        ],
      },
      {
        name: "고사·개업",
        image: 3,
        products: [
          ["시루떡 소", 35000, 3],
          ["시루떡 중", 52000, 7],
          ["시루떡 대", 72000, 11],
        ],
      },
    ],
  },
  "선물세트": {
    types: [
      {
        name: "모둠",
        image: 11,
        products: [
          ["곰돌이 모둠 9구", 32000, 11],
          ["곰돌이 모둠 16구", 52000, 15],
          ["곰돌이 모둠 25구", 78000, 3],
        ],
      },
      {
        name: "보자기",
        image: 5,
        products: [
          ["보자기 선물 소", 42000, 5],
          ["보자기 선물 중", 62000, 9],
          ["보자기 선물 대", 92000, 13],
        ],
      },
      {
        name: "프리미엄",
        image: 1,
        products: [
          ["프리미엄 찬합", 88000, 1],
          ["상견례 선물", 120000, 12],
          ["명품 감사 세트", 150000, 2],
        ],
      },
    ],
  },
  "찹쌀떡": {
    types: [
      {
        name: "기본",
        image: 2,
        products: [
          ["흰 찹쌀떡 10개", 22000, 2],
          ["흰 찹쌀떡 20개", 42000, 10],
          ["흰 찹쌀떡 30개", 62000, 14],
        ],
      },
      {
        name: "쑥·흑임자",
        image: 6,
        products: [
          ["쑥 찹쌀떡 10개", 25000, 6],
          ["흑임자 찹쌀떡 10개", 28000, 7],
          ["반반 찹쌀떡 20개", 52000, 11],
        ],
      },
      {
        name: "혼합",
        image: 13,
        products: [
          ["찹쌀떡 3종 12개", 34000, 13],
          ["찹쌀떡 3종 24개", 66000, 15],
        ],
      },
    ],
  },
  "송편·꿀떡": {
    types: [
      {
        name: "송편",
        image: 0,
        products: [
          ["꽃송편 1kg", 24000, 0],
          ["오색 송편 1kg", 26000, 4],
          ["잣꽃송편 선물", 48000, 8],
        ],
      },
      {
        name: "꿀떡",
        image: 1,
        products: [
          ["꿀떡 1kg", 18000, 1],
          ["알사탕 꿀떡", 24000, 6],
          ["파스텔 꿀떡 박스", 36000, 10],
        ],
      },
      {
        name: "바람떡",
        image: 9,
        products: [
          ["바람떡 1kg", 22000, 9],
          ["꽃바람떡 박스", 42000, 5],
        ],
      },
    ],
  },
  "명절떡": {
    types: [
      {
        name: "설날",
        image: 3,
        products: [
          ["떡국떡 1kg", 12000, 3],
          ["모둠전병 세트", 38000, 7],
          ["설 선물 세트", 68000, 11],
        ],
      },
      {
        name: "추석",
        image: 0,
        products: [
          ["송편 2kg", 48000, 0],
          ["추석 보자기 세트", 72000, 13],
          ["프리미엄 송편함", 98000, 15],
        ],
      },
    ],
  },
};

const state = {
  page: "landing",
  category: "답례떡",
  type: "소포장",
  selected: null,
};

const $ = (selector) => document.querySelector(selector);
const formatWon = (value) => new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
  maximumFractionDigits: 0,
}).format(value);

function setPhotoPosition(element, imageIndex) {
  element.style.setProperty("--pos", positions[imageIndex % positions.length]);
}

function showPage(page) {
  state.page = page;
  $("#landingPage").classList.toggle("is-active", page === "landing");
  $("#orderPage").classList.toggle("is-active", page === "order");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPreviewGrid() {
  const grid = $("#previewGrid");
  grid.innerHTML = "";
  [0, 1, 2, 3, 4, 5, 8, 11].forEach((imageIndex) => {
    const item = document.createElement("a");
    item.href = "https://search.naver.com/search.naver?query=%EB%96%A1%EB%A7%8C%EB%93%9C%EB%8A%94%20%EA%B3%B0%EB%8F%8C%EC%9D%B4%20%EB%B0%A9%ED%95%99%EB%8F%99";
    item.target = "_blank";
    item.rel = "noreferrer";
    item.className = "photo preview-photo";
    item.ariaLabel = "제품 사진 보기";
    setPhotoPosition(item, imageIndex);
    grid.append(item);
  });
}

function renderCategories() {
  const tabs = $("#categoryTabs");
  tabs.innerHTML = "";
  Object.keys(data).forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-button";
    button.textContent = category;
    button.classList.toggle("is-active", category === state.category);
    button.addEventListener("click", () => {
      state.category = category;
      state.type = data[category].types[0].name;
      state.selected = null;
      renderOrder();
    });
    tabs.append(button);
  });
}

function renderTypes() {
  const tabs = $("#typeTabs");
  tabs.innerHTML = "";
  data[state.category].types.forEach((type) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "type-button";
    button.classList.toggle("is-active", type.name === state.type);
    button.innerHTML = `<span class="photo type-thumb" aria-hidden="true"></span><span>${type.name}</span>`;
    setPhotoPosition(button.querySelector(".type-thumb"), type.image);
    button.addEventListener("click", () => {
      state.type = type.name;
      state.selected = null;
      renderOrder();
    });
    tabs.append(button);
  });
}

function currentType() {
  return data[state.category].types.find((type) => type.name === state.type);
}

function renderProducts() {
  const type = currentType();
  const grid = $("#productGrid");
  grid.innerHTML = "";
  $("#menuTitle").textContent = `${state.category} · ${type.name}`;
  $("#itemCount").textContent = `· ${type.products.length}개`;

  type.products.forEach(([name, price, image]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo product-card";
    button.classList.toggle("is-selected", state.selected?.name === name);
    setPhotoPosition(button, image);
    button.innerHTML = `
      <span class="product-info">
        <strong>${name}</strong>
        <span>${formatWon(price)}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.selected = { category: state.category, type: type.name, name, price };
      renderQuote();
      renderProducts();
    });
    grid.append(button);
  });
}

function renderQuote() {
  const selected = state.selected;
  $("#selectedName").textContent = selected ? selected.name : "아직 선택 전";
  $("#selectedPrice").textContent = selected ? formatWon(selected.price) : "₩0";
  $("#makeOrder").disabled = !selected;
  $("#quoteBar").classList.toggle("is-visible", Boolean(selected));
}

function renderOrder() {
  renderCategories();
  renderTypes();
  renderProducts();
  renderQuote();
}

function makeOrderText() {
  const selected = state.selected;
  if (!selected) return "";
  return [
    "[떡만드는 곰돌이 주문서]",
    `상품: ${selected.category} / ${selected.type} / ${selected.name}`,
    `예상 금액: ${formatWon(selected.price)}`,
    "픽업 희망일:",
    "픽업 시간:",
    "성함:",
    "연락처:",
    "방문 지점: 도봉구 방학동",
    "요청사항:",
    "",
    "금액은 구성과 수량에 따라 상담 후 달라질 수 있습니다.",
  ].join("\n");
}

function wireEvents() {
  $("#startOrder").addEventListener("click", () => showPage("order"));
  $("#backHome").addEventListener("click", () => showPage("landing"));
  $("#logoBack").addEventListener("click", () => showPage("landing"));
  $("#homeLogo").addEventListener("click", () => showPage("landing"));

  $("#clearSelection").addEventListener("click", () => {
    state.selected = null;
    renderProducts();
    renderQuote();
  });

  $("#viewportToggle").addEventListener("click", () => {
    $("#app").classList.toggle("compact");
    $("#viewportToggle").textContent = $("#app").classList.contains("compact") ? "📱 모바일" : "💻 PC";
  });

  $("#adminOpen").addEventListener("click", () => {
    $("#adminModal").showModal();
  });

  $("#makeOrder").addEventListener("click", () => {
    $("#orderText").value = makeOrderText();
    $("#orderModal").showModal();
  });

  $("#copyOrder").addEventListener("click", async () => {
    const text = $("#orderText").value;
    try {
      await navigator.clipboard.writeText(text);
      $("#copyOrder").textContent = "복사 완료";
      setTimeout(() => {
        $("#copyOrder").textContent = "주문서 복사";
      }, 1400);
    } catch {
      $("#orderText").select();
      document.execCommand("copy");
    }
  });
}

renderPreviewGrid();
renderOrder();
wireEvents();
