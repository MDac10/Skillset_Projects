document.addEventListener("DOMContentLoaded", () => {
    const addPageBtn = document.getElementById("addPageBtn");
    const pageList = document.getElementById("pageList");
    let currentTabUrl = null;

    // Load existing pages
    chrome.storage.local.get({ pages: [] }, (data) => {
        renderPages(data.pages);
    });

    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs[0]) {
            currentTabUrl = tabs[0];

            // Update the UI text elements with the tab properties
            document.getElementById('page-title').textContent = currentTabUrl.title || "No title available";
            document.getElementById('page-url').textContent = currentTabUrl.url || "No URL available";
        } else {
            document.getElementById('page-title').textContent = "Error retrieving page";
            document.getElementById('page-url').textContent = "Error retrieving URL";
        }
    });

    // Add page
    addPageBtn.addEventListener("click", () => {

        if (!currentTabUrl) return;

        const newPage = {
            title: currentTabUrl.title || "No title available",
            url: currentTabUrl.url
        };

        chrome.storage.local.get({ pages: [] }, (data) => {
            // Avoid duplicates
            const alreadySaved = data.pages.some((p) => p.url === newPage.url);
            if (alreadySaved) return;

            const updatedPages = [...data.pages, newPage];
            chrome.storage.local.set({ pages: updatedPages }, () => {
                renderPages(updatedPages);
            });
        });
    });

    // Function to render link to pages in the queue
    function renderPages(pages) {
        pageList.innerHTML = "";
        pages.forEach((page, index) => {
            const li = document.createElement("li");

            const link = document.createElement("a");
            link.href = page.url;
            link.textContent = page.title;
            link.target = "_blank"; // opens in a new tab
            link.classList.add("page-link");

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "✕";
            deleteBtn.classList.add("delete-btn");

            deleteBtn.addEventListener("click", () => {
                pages.splice(index, 1);
                chrome.storage.local.set({ pages }, () => {
                    renderPages(pages);
                });
            });

            li.appendChild(link);
            li.appendChild(deleteBtn);
            pageList.appendChild(li);
        });
    }
});
