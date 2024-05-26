import { DirectiveBinding } from "vue";

const lazyLoad = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add(binding.value.loadedClass);
          if (binding.arg === "background") {
            el.style.backgroundImage = `url(${binding.value.src})`;
          } else {
            el.setAttribute("src", binding.value.src);
          }
          observer.unobserve(el);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
};

export default lazyLoad;
