const elements = document.querySelectorAll("[data-include]");
const totalPartials = elements.length;
let processedPartials = 0;

const scrollToElementId = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
};

const checkAllProcessed = async () => {
    if (processedPartials === totalPartials) {
        const event = new CustomEvent("partialsLoaded");
        document.dispatchEvent(event);
        const url = new URL(window.location.href);
        const id = url.hash.slice(1);
        if (id) {
            scrollToElementId(id);
        }
    }
};

const fetchInclude = async (element) => {
    const src = element.getAttribute("data-include");
    try {
        const response = await fetch(src);
        if (!response.ok) {
            throw new Error(
                `Failed to load ${src} with status ${response.status}`
            );
        }
        const html = await response.text();
        element.outerHTML = html;
        processedPartials++;
        await checkAllProcessed();
    } catch (error) {
        console.error("Error including file:", error);
        processedPartials++;
        await checkAllProcessed();
    }
};

const processElements = async () => {
    for (const element of elements) {
        await fetchInclude(element);
    }
};

processElements();
