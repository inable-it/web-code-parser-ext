"use strict";

console.log("Frontend Code Parser loaded.");

/**
 * 오버레이를 생성하여 페이지의 프론트엔드 코드(HTML)를 표시합니다.
 */
function createCodeOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "codeOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  overlay.style.color = "#fff";
  overlay.style.zIndex = "9999";
  overlay.style.overflow = "auto";
  overlay.style.padding = "20px";
  overlay.style.fontFamily = "monospace";
  overlay.style.fontSize = "12px";
  overlay.style.display = "none"; // 기본은 숨김

  // 닫기 버튼 추가
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.position = "fixed";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.zIndex = "10000";
  closeButton.onclick = () => {
    overlay.style.display = "none";
  };
  overlay.appendChild(closeButton);

  // 코드를 표시할 pre 태그 생성
  const pre = document.createElement("pre");
  pre.id = "codePre";
  pre.style.whiteSpace = "pre-wrap";
  pre.style.wordWrap = "break-word";
  overlay.appendChild(pre);

  document.body.appendChild(overlay);
}

/**
 * 오버레이를 토글하며, 현재 페이지의 전체 HTML 코드를 표시합니다.
 */
function toggleCodeOverlay() {
  const overlay = document.getElementById("codeOverlay");
  if (!overlay) return;

  if (overlay.style.display === "none") {
    // 문서 전체 HTML 코드를 가져와 pre 태그에 표시
    const pre = document.getElementById("codePre");
    pre.textContent = document.documentElement.outerHTML;
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
}

/**
 * 페이지 우측 하단에 오버레이를 토글할 수 있는 버튼을 생성합니다.
 */
function createToggleButton() {
  const btn = document.createElement("button");
  btn.textContent = "Show Frontend Code";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "10000";
  btn.onclick = toggleCodeOverlay;
  document.body.appendChild(btn);
}

// 페이지 로드 시 오버레이와 토글 버튼을 생성합니다.
window.addEventListener("load", () => {
  createCodeOverlay();
  createToggleButton();
});
