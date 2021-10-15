function styleInject(style: string) {
  if (!style.trim() || typeof document === 'undefined') { return; }
  const head = document.head || document.getElementsByTagName('head')[0];

  // "beforebegin" | "afterbegin" | "beforeend" | "afterend"
  head.insertAdjacentHTML('afterend', style);
}
