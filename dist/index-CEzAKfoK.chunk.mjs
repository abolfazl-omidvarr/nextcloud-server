const appName = "nextcloud-ui";
const appVersion = "1.0.0";
function loadState(app, key, fallback) {
  const selector = `#initial-state-${app}-${key}`;
  if (window._nc_initial_state?.has(selector)) {
    return window._nc_initial_state.get(selector);
  } else if (!window._nc_initial_state) {
    window._nc_initial_state = /* @__PURE__ */ new Map();
  }
  const elem = document.querySelector(selector);
  if (elem === null) {
    if (fallback !== void 0) {
      return fallback;
    }
    throw new Error(`Could not find initial state ${key} of ${app}`);
  }
  try {
    const parsedValue = JSON.parse(atob(elem.value));
    window._nc_initial_state.set(selector, parsedValue);
    return parsedValue;
  } catch (error) {
    console.error("[@nextcloud/initial-state] Could not parse initial state", { key, app, error });
    if (fallback !== void 0) {
      return fallback;
    }
    throw new Error(`Could not parse initial state ${key} of ${app}`, { cause: error });
  }
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (!!importerUrl) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
        const link$1 = links[i$1];
        if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
      }
      else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
function getCapabilities() {
  try {
    return loadState("core", "capabilities");
  } catch (error) {
    console.debug("Could not find capabilities initial state fall back to _oc_capabilities");
    if (!("_oc_capabilities" in window)) {
      return {};
    }
    return window["_oc_capabilities"];
  }
}
function encodePath(path) {
  if (!path) {
    return path;
  }
  return path.split("/").map(encodeURIComponent).join("/");
}
function basename(path, extname2) {
  path = path.replace(/\\/g, "/").replace(/\/+$/g, "").replace(/.*\//, "");
  return path;
}
function dirname(path) {
  path = path.replaceAll(/\\/g, "/");
  const sections = path.split("/");
  if (sections.length <= 1) {
    return ".";
  }
  sections.pop();
  if (sections.length === 1 && sections[0] === "") {
    return "/";
  }
  return sections.join("/");
}
function extname(path) {
  const base = basename(path);
  const index = base.lastIndexOf(".");
  if (index > 0) {
    return base.substring(index);
  }
  return "";
}
function join(...args) {
  if (arguments.length < 1) {
    return "";
  }
  const nonEmptyArgs = args.filter((arg) => arg.length > 0);
  if (nonEmptyArgs.length < 1) {
    return "";
  }
  const lastArg = nonEmptyArgs[nonEmptyArgs.length - 1];
  const leadingSlash = nonEmptyArgs[0].charAt(0) === "/";
  const trailingSlash = lastArg.charAt(lastArg.length - 1) === "/";
  const sections = nonEmptyArgs.reduce((acc, section) => acc.concat(section.split("/")), []);
  let first = !leadingSlash;
  const path = sections.reduce((acc, section) => {
    if (section === "") {
      return acc;
    }
    if (first) {
      first = false;
      return acc + section;
    }
    return acc + "/" + section;
  }, "");
  if (trailingSlash) {
    return path + "/";
  }
  return path;
}
export {
  __vitePreload as _,
  _export_sfc as a,
  basename as b,
  extname as c,
  dirname as d,
  encodePath as e,
  getCapabilities as g,
  join as j,
  loadState as l
};
//# sourceMappingURL=index-CEzAKfoK.chunk.mjs.map
