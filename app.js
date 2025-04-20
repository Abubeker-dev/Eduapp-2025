const ADMIN = {
  telegramUsername: "eduapp1850",
  // UPDATED STRUCTURE: region -> grade -> subject -> chapter -> [videos]
  // IMPORTANT: URLs MUST be in the EMBED format!
  videos: {
    "amhara-region": { // Data for Amhara Region
       "grade-5": {
         "maths": {
           "chapter-1": [
             { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },
           ],
           "chapter-2": [
             { title: "Amhara G5 Maths Ch2 Vid1", url: "https://www.youtube.com/embed/L_jWHffIx5E?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch2 Vid2", url: "https://www.youtube.com/embed/eY52Zsg-KVI?rel=0&modestbranding=1" },
           ],
           "chapter-3": [], "chapter-4": [], "chapter-5": [], "chapter-6": [], "chapter-7": [], "chapter-8": [], "chapter-9": [],
         },
         "english": { /* Fill with Amhara G5 English data */ "chapter-1": []},
         "gs": { /* Fill with Amhara G5 GS data */ "chapter-1": []},
         "ict": { /* Fill with Amhara G5 ICT data */ "chapter-1": []},
         "citizenship": { /* Fill with Amhara G5 Citizenship data */ "chapter-1": []}
       },
       "grade-6": { // Fill with Amhara G6 data
            "maths": { "chapter-1": [{title:"Amhara G6 M Ch1 V1", url:"PUT_EMBED_URL"}, {title:"Amhara G6 M Ch1 V2", url:"PUT_EMBED_URL"}] },
            "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] }
       },
       "grade-7": { // Fill with Amhara G7 data
            "maths": {
                "chapter-3": [
                     { title: "Grade 7 Maths Unit 3 Part 1", url: "PUT_YOUR_YOUTUBE_EMBED_URL_HERE" },
                     { title: "Grade 7 Maths Unit 3 Part 2 (if available)", url: "PUT_ANOTHER_YOUTUBE_EMBED_URL_HERE" },
                 ],
                 "chapter-1": [], "chapter-2": []
            },
            "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] }
       },
       "grade-8": { // Fill with Amhara G8 data
            "maths": { "chapter-1": [] }, "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] }
       }
    },
    // ===============================================
    //     ADDIS ABABA REGION DATA - MUST BE FILLED
    // ===============================================
    "addis-ababa-region": {
       "grade-5": { // Fill with Addis G5 data
         "maths": {
           "chapter-1": [
             { title: "Addis G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/fLexgOxsZu0?rel=0&modestbranding=1" },
             { title: "Addis G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/9bZkp7q19f0?rel=0&modestbranding=1" },
           ],
            "chapter-2": [], "chapter-3": [], "chapter-4": [], "chapter-5": [], "chapter-6": [], "chapter-7": [], "chapter-8": [], "chapter-9": [],
         },
         "english": { "chapter-1": [] }, // Add Addis G5 English chapters/videos
         "gs": { "chapter-1": [] },      // Add Addis G5 GS chapters/videos
         "ict": { "chapter-1": [] },     // Add Addis G5 ICT chapters/videos
         "citizenship": { "chapter-1": [] } // Add Addis G5 Citizenship chapters/videos
       },
       "grade-6": { // Fill with Addis G6 data
            "maths": { "chapter-1": [{title:"Addis G6 M Ch1 V1", url:"PUT_EMBED_URL"},{title:"Addis G6 M Ch1 V2", url:"PUT_EMBED_URL"}] },
            "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] }
       },
       "grade-7": { // Fill with Addis G7 data
            "maths": { "chapter-1": [] }, "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] }
       },
       "grade-8": { // Fill with Addis G8 data
            "maths": { "chapter-1": [] }, "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] }
       }
    }
  }
};

// --- Helper Functions (deviceId, SHA-256 hashing, access control, date format) ---
// --- These functions remain the same as the previous secure version ---
function getDeviceId() {
  let id = localStorage.getItem("deviceId"); if (!id) { id = "device-" + Math.random().toString(36).slice(2, 11); localStorage.setItem("deviceId", id); } return id;
}
const deviceId = getDeviceId();
const deviceIdInput = document.getElementById("device-id"); if (deviceIdInput) deviceIdInput.value = deviceId;
const copyDeviceIdBtn = document.getElementById("copy-device-id-btn");
if (copyDeviceIdBtn) { copyDeviceIdBtn.addEventListener("click", async () => { try { await navigator.clipboard.writeText(deviceId); alert("Device ID copied!"); } catch (err) { try { const input = document.createElement("input"); input.style.position = "absolute"; input.style.left = "-9999px"; input.value = deviceId; document.body.appendChild(input); input.select(); input.setSelectionRange(0, 99999); document.execCommand("copy"); document.body.removeChild(input); alert("Device ID copied (fallback method)!"); } catch(fallbackErr) { alert("Could not copy Device ID. Please select and copy it manually."); } } }); }
function arrayBufferToHex(buffer) { return Array.prototype.map.call(new Uint8Array(buffer), byte => ('0' + byte.toString(16)).slice(-2)).join(''); }
async function hashDeviceIdWithYear(deviceId, year) { const str = deviceId + ":" + year; const encoder = new TextEncoder(); const data = encoder.encode(str); try { if (!crypto || !crypto.subtle || !crypto.subtle.digest) { console.error("SubtleCrypto API not available."); return "CODE-NOSUBTLECRYPTO"; } const hashBuffer = await crypto.subtle.digest('SHA-256', data); const hashHex = arrayBufferToHex(hashBuffer); const codePart = hashHex.slice(0, 10).toUpperCase(); return "CODE-" + codePart; } catch (error) { console.error("Hashing failed:", error); return "CODE-HASHINGERROR"; } }
function saveAccess(code) { const expiry = new Date(); expiry.setFullYear(expiry.getFullYear() + 1); try { localStorage.setItem("eduaccess", JSON.stringify({ deviceId, code, expiry: expiry.toISOString() })); } catch (e) { alert("Could not save access info."); } }
function loadAccess() { try { const accessData = localStorage.getItem("eduaccess"); return accessData ? JSON.parse(accessData) : null; } catch(e) { localStorage.removeItem("eduaccess"); return null; } }
function isAccessValid(access) { if (!access || typeof access !== 'object') return false; if (access.deviceId !== deviceId) return false; if (!access.expiry || isNaN(new Date(access.expiry).getTime())) return false; return new Date(access.expiry) > new Date(); }
function formatDate(dateStr) { try { return new Date(dateStr).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { return "Invalid Date"; } }
// --- End Helper Functions ---

// --- UI Elements Cache ---
const sampleVideoSection = document.getElementById("sample-video-section"); const paymentSection = document.getElementById("payment-section");
const appContent = document.getElementById("app-content"); const accessExpiryEl = document.getElementById("access-expiry");
const regionView = document.getElementById("region-view"); const gradeView = document.getElementById("grade-view");
const subjectView = document.getElementById("subject-view"); const chapterView = document.getElementById("chapter-view");
const videoView = document.getElementById("video-view"); const regionList = document.getElementById("region-list");
const gradeList = document.getElementById("grade-list"); const gradeListTitle = document.getElementById("grade-list-title");
const subjectList = document.getElementById("subject-list"); const subjectButtonsContainer = document.getElementById("subject-buttons-container");
const subjectListTitle = document.getElementById("subject-list-title"); const chapterList = document.getElementById("chapter-list");
const chapterButtonsContainer = document.getElementById("chapter-buttons-container"); const chapterListTitle = document.getElementById("chapter-list-title");
const videoListContainer = document.getElementById("video-list"); const videoListTitle = document.getElementById("video-list-title");
const unlockCodeInput = document.getElementById("unlock-code"); const unlockMsg = document.getElementById("unlock-msg");
const telegramBtn = document.getElementById("telegram-btn"); const unlockBtn = document.getElementById("unlock-btn");
const logoutBtn = document.getElementById("logout-btn"); const backToRegionsBtn = document.getElementById("back-to-regions");
const backToGradesBtn = document.getElementById("back-to-grades"); const backToSubjectsBtn = document.getElementById("back-to-subjects");
const backToChaptersBtn = document.getElementById("back-to-chapters");

// --- State Variables ---
let currentRegion = null; let currentGrade = null; let currentSubject = null; let currentChapter = null;

// --- UI Control Functions ---
function showView(viewToShow) {
    if (regionView) regionView.classList.add("hidden"); if (gradeView) gradeView.classList.add("hidden");
    if (subjectView) subjectView.classList.add("hidden"); if (chapterView) chapterView.classList.add("hidden");
    if (videoView) videoView.classList.add("hidden");
    if (viewToShow === "regions" && regionView) regionView.classList.remove("hidden"); else if (viewToShow === "grades" && gradeView) gradeView.classList.remove("hidden");
    else if (viewToShow === "subjects" && subjectView) subjectView.classList.remove("hidden"); else if (viewToShow === "chapters" && chapterView) chapterView.classList.remove("hidden");
    else if (viewToShow === "videos" && videoView) videoView.classList.remove("hidden"); else if (regionView) regionView.classList.remove("hidden");
}
function showAppUI() {
  const access = loadAccess();
  if (isAccessValid(access)) {
    if(sampleVideoSection) sampleVideoSection.classList.add("hidden"); if(paymentSection) paymentSection.classList.add("hidden");
    if(appContent) appContent.classList.remove("hidden"); if(accessExpiryEl) accessExpiryEl.textContent = "Access valid until: " + formatDate(access.expiry);
    resetSelections(); showView("regions");
  } else {
    if(sampleVideoSection) sampleVideoSection.classList.remove("hidden"); if(paymentSection) paymentSection.classList.remove("hidden");
    if(appContent) appContent.classList.add("hidden"); if(accessExpiryEl) accessExpiryEl.textContent = "";
  }
}
function resetSelections() { currentRegion = null; currentGrade = null; currentSubject = null; currentChapter = null; document.querySelectorAll(".folder-btn.selected").forEach(b => b.classList.remove("selected")); }
function formatDisplayName(key) { if (!key) return ''; if (key === 'gs') return 'G.S'; if (key === 'ict') return 'ICT'; if (key === 'amhara-region') return 'Amhara Region'; if (key === 'addis-ababa-region') return 'Addis Ababa Region'; return key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); }

// --- Dynamic Content Population Functions ---
function populateGrades(region) {
    currentRegion = region; currentGrade = null; currentSubject = null; currentChapter = null;
    if (!gradeList || !gradeListTitle) return; gradeList.innerHTML = ""; const regionData = ADMIN.videos[region];
    const regionName = formatDisplayName(region); gradeListTitle.textContent = `${regionName} - Grades`;
    const gradeOrder = ["grade-5", "grade-6", "grade-7", "grade-8"]; const availableGrades = regionData ? Object.keys(regionData) : [];
    if (!regionData || availableGrades.length === 0) { gradeList.innerHTML = "<p>No grades available for this region yet.</p>"; }
    else {
        const gradesToShow = gradeOrder.filter(g => availableGrades.includes(g));
        if (gradesToShow.length === 0) { gradeList.innerHTML = "<p>No configured grades (5-8) found for this region yet.</p>"; }
        else { gradesToShow.forEach(gradeKey => { const btn = document.createElement("button"); btn.className = "folder-btn grade-btn"; btn.dataset.folder = gradeKey; btn.textContent = formatDisplayName(gradeKey); gradeList.appendChild(btn); }); }
    }
    document.querySelectorAll("#region-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
    const regionBtn = document.querySelector(`#region-list .folder-btn[data-folder='${region}']`); if(regionBtn) regionBtn.classList.add("selected");
    showView("grades");
}
function populateSubjects(grade) {
  currentGrade = grade; currentSubject = null; currentChapter = null;
  if (!subjectButtonsContainer || !subjectListTitle || !currentRegion) return; subjectButtonsContainer.innerHTML = "";
  const gradeData = ADMIN.videos?.[currentRegion]?.[grade]; const regionName = formatDisplayName(currentRegion); const gradeName = formatDisplayName(grade);
  subjectListTitle.textContent = `${regionName} / ${gradeName} - Subjects`; const subjectOrder = ["maths", "english", "gs", "ict", "citizenship"];
  const availableSubjects = gradeData ? Object.keys(gradeData) : [];
  if (!gradeData || availableSubjects.length === 0) { subjectButtonsContainer.innerHTML = "<p>No subjects available for this grade yet.</p>"; }
  else {
      const subjectsToShow = subjectOrder.filter(subj => availableSubjects.includes(subj));
      if (subjectsToShow.length === 0) { subjectButtonsContainer.innerHTML = "<p>No configured subjects found for this grade yet.</p>"; }
      else { subjectsToShow.forEach((subjectKey) => { const btn = document.createElement("button"); btn.className = "folder-btn subject-btn"; btn.dataset.folder = subjectKey; btn.textContent = formatDisplayName(subjectKey); subjectButtonsContainer.appendChild(btn); }); }
  }
  document.querySelectorAll("#grade-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
  const gradeBtn = document.querySelector(`#grade-list .folder-btn[data-folder='${grade}']`); if(gradeBtn) gradeBtn.classList.add("selected");
  showView("subjects");
}
function populateChapters(subject) {
    currentSubject = subject; currentChapter = null;
    if (!chapterButtonsContainer || !chapterListTitle || !currentRegion || !currentGrade) return; chapterButtonsContainer.innerHTML = "";
    const subjectData = ADMIN.videos?.[currentRegion]?.[currentGrade]?.[currentSubject];
    const regionName = formatDisplayName(currentRegion); const gradeName = formatDisplayName(currentGrade); const subjectName = formatDisplayName(currentSubject);
    chapterListTitle.textContent = `${regionName} / ${gradeName} / ${subjectName} - Chapters`; const chapterKeys = Array.from({length: 9}, (_, i) => `chapter-${i + 1}`);
    if (!subjectData) { chapterButtonsContainer.innerHTML = "<p>No chapter data defined for this subject yet.</p>"; }
    else {
        let chaptersFound = false;
        chapterKeys.forEach(chapterKey => {
             if (subjectData.hasOwnProperty(chapterKey)) {
                chaptersFound = true; const btn = document.createElement("button"); btn.className = "folder-btn chapter-btn"; btn.dataset.folder = chapterKey; btn.textContent = formatDisplayName(chapterKey);
                // Only enable button if chapter actually has videos
                btn.disabled = !(subjectData[chapterKey] && subjectData[chapterKey].length > 0);
                if (btn.disabled) { btn.title = "No videos in this chapter yet"; } // Add tooltip for disabled
                chapterButtonsContainer.appendChild(btn);
             }
        });
        if (!chaptersFound) { chapterButtonsContainer.innerHTML = "<p>No chapters configured for this subject yet.</p>"; }
    }
    document.querySelectorAll("#subject-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
    const subjectBtn = document.querySelector(`#subject-list .folder-btn[data-folder='${subject}']`); if(subjectBtn) subjectBtn.classList.add("selected");
    showView("chapters");
}

// --- REVERTED loadVideos function (to create iframes) ---
function loadVideos(chapter) {
    currentChapter = chapter;
    if (!videoListContainer || !videoListTitle || !currentRegion || !currentGrade || !currentSubject) return;
    videoListContainer.innerHTML = "";
    const allVideos = ADMIN.videos?.[currentRegion]?.[currentGrade]?.[currentSubject]?.[currentChapter] || [];
    const videosToShow = allVideos.slice(0, 2); // Still showing max 2 per chapter
    const regionName = formatDisplayName(currentRegion); const gradeName = formatDisplayName(currentGrade);
    const subjectName = formatDisplayName(currentSubject); const chapterName = formatDisplayName(currentChapter);
    videoListTitle.textContent = `${regionName} / ${gradeName} / ${subjectName} / ${chapterName}`;

    if (videosToShow.length === 0) {
        videoListContainer.innerHTML = "<p>No videos available for this chapter yet.</p>";
    } else {
        videosToShow.forEach((video) => {
            const p = document.createElement("p"); p.textContent = video.title || "Video";
            const iframe = document.createElement("iframe");
            iframe.width = "100%"; iframe.height = "315"; // Adjust height if needed
            iframe.src = video.url; // Use the EMBED URL
            iframe.title = video.title || "YouTube video player";
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            iframe.setAttribute("allowfullscreen", "true");
            videoListContainer.appendChild(p); videoListContainer.appendChild(iframe);
        });
         if (allVideos.length > 2) {
             const notice = document.createElement("p"); notice.textContent = `(Showing first 2 of ${allVideos.length} videos for this chapter)`;
             notice.className = 'video-notice'; videoListContainer.appendChild(notice);
         }
    }
    document.querySelectorAll("#chapter-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
    const chapterBtn = document.querySelector(`#chapter-list .folder-btn[data-folder='${chapter}']`); if(chapterBtn) chapterBtn.classList.add("selected");
    showView("videos");
}


// --- Initial Setup & Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    showAppUI();
    if (telegramBtn) telegramBtn.addEventListener("click", () => window.open(`https://t.me/${ADMIN.telegramUsername}`, "_blank"));
    if (unlockBtn && unlockCodeInput && unlockMsg) {
        unlockBtn.addEventListener('click', async () => { // Keep async
            const userCode = unlockCodeInput.value.trim(); const year = new Date().getFullYear(); unlockMsg.textContent = "";
            if (!userCode) { unlockMsg.textContent = "Please enter the code."; return; }
            try {
                const expectedCode = await hashDeviceIdWithYear(deviceId, year);
                console.log("User Code:", userCode, "Expected Code:", expectedCode);
                if (expectedCode === "CODE-HASHINGERROR" || expectedCode === "CODE-NOSUBTLECRYPTO") { unlockMsg.textContent = "Code validation error. Check browser/connection or contact support."; return; }
                if (userCode.toUpperCase() === expectedCode.toUpperCase()) { saveAccess(userCode); unlockCodeInput.value = ""; showAppUI(); }
                else { unlockMsg.textContent = "Invalid unlock code."; }
            } catch (error) { console.error("Unlock check error:", error); unlockMsg.textContent = "Error validating code."; }
        });
    }
    if (logoutBtn) { logoutBtn.addEventListener("click", () => { localStorage.removeItem("eduaccess"); resetSelections(); showAppUI(); }); }
    // Navigation Listeners
    if (regionList) { regionList.addEventListener("click", (event) => { if (event.target.classList.contains("region-btn")) { const selectedRegion = event.target.dataset.folder; if(selectedRegion) populateGrades(selectedRegion); }}); }
    if (gradeList) { gradeList.addEventListener("click", (event) => { if (event.target.classList.contains("grade-btn")) { const selectedGrade = event.target.dataset.folder; if(selectedGrade) populateSubjects(selectedGrade); }}); }
    if (subjectList) { subjectList.addEventListener("click", (event) => { if (event.target.classList.contains("subject-btn")) { const selectedSubject = event.target.dataset.folder; if(selectedSubject) populateChapters(selectedSubject); }}); }
    if (chapterList) { chapterList.addEventListener("click", (event) => { if (event.target.classList.contains("chapter-btn") && !event.target.disabled) { const selectedChapter = event.target.dataset.folder; if(selectedChapter) loadVideos(selectedChapter); }}); }
    // Back Button Listeners
    if (backToRegionsBtn) { backToRegionsBtn.addEventListener("click", () => { currentRegion = null; document.querySelectorAll("#region-list .folder-btn.selected").forEach(b => b.classList.remove("selected")); showView("regions"); }); }
    if (backToGradesBtn) { backToGradesBtn.addEventListener("click", () => { currentGrade = null; document.querySelectorAll("#grade-list .folder-btn.selected").forEach(b => b.classList.remove("selected")); showView("grades"); }); }
    if (backToSubjectsBtn) { backToSubjectsBtn.addEventListener("click", () => { currentSubject = null; document.querySelectorAll("#subject-list .folder-btn.selected").forEach(b => b.classList.remove("selected")); showView("subjects"); }); }
    if (backToChaptersBtn) { backToChaptersBtn.addEventListener("click", () => { currentChapter = null; document.querySelectorAll("#chapter-list .folder-btn.selected").forEach(b => b.classList.remove("selected")); showView("chapters"); }); }
}); // End DOMContentLoaded
