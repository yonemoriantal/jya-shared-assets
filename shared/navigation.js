const navContainer = document.getElementById("cross-site-nav");

if (navContainer) {
  const nav = document.createElement("div");
  nav.className = "xnav";
  nav.setAttribute("aria-label", "Cross-site navigation");

  const links = [
    {
      id: "xnav-jya",
      href: "https://jyainc.com",
      text: "Mission-Critical"
    },
    {
      id: "xnav-hh",
      href: "https://homes-hear-specialist.com",
      text: "HOMES / HEAR"
    },
    {
      id: "xnav-ri",
      href: "https://jya-rural-engineering.com",
      text: "Rural Infrastructure"
    }
  ];

  links.forEach(item => {
    const link = document.createElement("a");
    link.id = item.id;
    link.href = item.href;
    link.textContent = item.text;
    nav.appendChild(link);
  });

  navContainer.appendChild(nav);

  const host = location.hostname.toLowerCase();

  if (host.includes("jyainc.com")) {
    document.getElementById("xnav-jya")?.classList.add("active");
  } else if (host.includes("homes-hear-specialist.com")) {
    document.getElementById("xnav-hh")?.classList.add("active");
  } else if (host.includes("jya-rural-engineering.com")) {
    document.getElementById("xnav-ri")?.classList.add("active");
  }
}
