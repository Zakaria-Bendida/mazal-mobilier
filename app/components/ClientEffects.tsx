"use client";

import { useEffect } from "react";

export function ClientEffects() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // Scroll to hash element on page load / navigation
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }

    // Lenis smooth scroll
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        let rafId: number;
        function raf(time: number) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
        cleanups.push(() => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        });
      } catch {
        // Lenis not available
      }
    };
    initLenis();

    // Reveal on scroll
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // Animated counters
    const counters = document.querySelectorAll("[data-count]");
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.getAttribute("data-count") || "0", 10);
          const duration = 1800;
          const start = performance.now();
          let rafId: number;
          function tick(now: number) {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = String(Math.round(eased * target));
            if (p < 1) rafId = requestAnimationFrame(tick);
          }
          rafId = requestAnimationFrame(tick);
          cleanups.push(() => cancelAnimationFrame(rafId));
          countIO.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    counters.forEach((el) => countIO.observe(el));
    cleanups.push(() => countIO.disconnect());

    // Carousel navigation
    const scrollEl = document.getElementById("collScroll");
    const collNext = document.getElementById("collNext");
    const collPrev = document.getElementById("collPrev");
    if (scrollEl && collNext && collPrev) {
      const scrollAmount = 380;
      const onNext = () => scrollEl.scrollBy({ left: scrollAmount, behavior: "smooth" });
      const onPrev = () => scrollEl.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      collNext.addEventListener("click", onNext);
      collPrev.addEventListener("click", onPrev);

      let isDown = false;
      let startX = 0;
      let scrollLeftVal = 0;
      const onMouseDown = (e: MouseEvent) => {
        isDown = true;
        scrollEl.style.cursor = "grabbing";
        startX = e.pageX - scrollEl.offsetLeft;
        scrollLeftVal = scrollEl.scrollLeft;
      };
      const onMouseLeave = () => { isDown = false; scrollEl.style.cursor = "grab"; };
      const onMouseUp = () => { isDown = false; scrollEl.style.cursor = "grab"; };
      const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollEl.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollEl.scrollLeft = scrollLeftVal - walk;
      };
      scrollEl.addEventListener("mousedown", onMouseDown);
      scrollEl.addEventListener("mouseleave", onMouseLeave);
      scrollEl.addEventListener("mouseup", onMouseUp);
      scrollEl.addEventListener("mousemove", onMouseMove);
      scrollEl.style.cursor = "grab";

      cleanups.push(() => {
        collNext.removeEventListener("click", onNext);
        collPrev.removeEventListener("click", onPrev);
        scrollEl.removeEventListener("mousedown", onMouseDown);
        scrollEl.removeEventListener("mouseleave", onMouseLeave);
        scrollEl.removeEventListener("mouseup", onMouseUp);
        scrollEl.removeEventListener("mousemove", onMouseMove);
      });
    }

    // Filters
    const allFilterBtns = document.querySelectorAll(".filter-bar button");
    const filterHandlers: Array<[Element, () => void]> = [];
    allFilterBtns.forEach((btn) => {
      const handler = () => {
        document.querySelectorAll(".filter-bar button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.getAttribute("data-filter");

        document.querySelectorAll<HTMLElement>(".grid-cards .coll-card, .portfolio-item, .journal-card").forEach((item) => {
          const catAttr = item.getAttribute("data-cat") || item.getAttribute("data-category");
          const show = cat === "all" || catAttr === cat;
          if (show) {
            item.style.display = "";
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            requestAnimationFrame(() => {
              item.style.transition = "opacity 0.4s ease, transform 0.4s ease";
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            });
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            setTimeout(() => { item.style.display = "none"; }, 300);
          }
        });
      };
      btn.addEventListener("click", handler);
      filterHandlers.push([btn, handler]);
    });
    cleanups.push(() => {
      filterHandlers.forEach(([btn, handler]) => btn.removeEventListener("click", handler));
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
