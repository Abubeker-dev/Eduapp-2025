const ADMIN = {
  telegramUsername: "sms1850", // MAKE SURE THIS IS CORRECT
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
         "citizenship": { /* Fill with Amhara G5 Citizenship data */ "chapter-1": []},
         // NEW SUBJECTS FOR AMHARA GRADE 5
         "pva": {
           "chapter-1": [
             { title: "Amhara G5 P.V.A Ch1 Vid1", url: "https://www.youtube.com/embed/pva_video_amhara_g5_ch1_1?rel=0&modestbranding=1" },
             { title: "Amhara G5 P.V.A Ch1 Vid2", url: "https://www.youtube.com/embed/pva_video_amhara_g5_ch1_2?rel=0&modestbranding=1" },
           ],
           "chapter-2": [], // Add more chapters/videos as needed
         },
         "social-study": {
           "chapter-1": [
             { title: "Amhara G5 Social Study Ch1 Vid1", url: "https://www.youtube.com/embed/social_video_amhara_g5_ch1_1?rel=0&modestbranding=1" },
           ],
         }
       },
       "grade-6": { // Fill with Amhara G6 data
            "maths": { "chapter-1": [{title:"Amhara G6 M Ch1 V1", url:"PUT_EMBED_URL"}, {title:"Amhara G6 M Ch1 V2", url:"PUT_EMBED_URL"}] },
            "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] },
            // NEW SUBJECTS FOR AMHARA GRADE 6
            "pva": { "chapter-1": [] },
            "social-study": { "chapter-1": [] }
       },
       "grade-7": { // Fill with Amhara G7 data
            "maths": {
               "chapter-1":[ { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              
              "chapter-2":[{ title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              
              
              "chapter-3": [
                     { title: "Grade 7 Maths Unit 3 Part 1", url: "PUT_YOUR_YOUTUBE_EMBED_URL_HERE" },
                     { title: "Grade 7 Maths Unit 3 Part 2 (if available)", url: "PUT_ANOTHER_YOUTUBE_EMBED_URL_HERE" },
                 ],
                 "chapter-4": [  { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              "chapter-5": [ { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              
              "chapter-6":[{ title: "Amhara Grade 7 Maths unit 6 solid figure and congruency", url: "https://www.youtube.com/embed/UNXO2Q7bxG4?rel=0&modestbranding=1" },
          
                           { title: "Amhara Grade 7 Maths Cunit 6  solid figure and congruency", url: "https://www.youtube.com/embed/UNXO2Q7bxG4?rel=0&modestbranding=1" }, ],
              
              "chapter-7":[{ title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ]
            },
            "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] },
            // NEW SUBJECTS FOR AMHARA GRADE 7
            "pva": { "chapter-1": [] },
            "social-study": { "chapter-1": [] }
       },
       "grade-8": { // Fill with Amhara G8 data
            "maths": { "chapter-1": [] }, "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] },
            // NEW SUBJECTS FOR AMHARA GRADE 8 (example, you can add data)
            "pva": { "chapter-1": [] },
            "social-study": { "chapter-1": [] }
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
         "citizenship": { "chapter-1": [] }, // Add Addis G5 Citizenship chapters/videos
         // NEW SUBJECTS FOR ADDIS ABABA GRADE 5
         "pva": {
           "chapter-1": [
             { title: "Addis G5 P.V.A Ch1 Vid1", url: "https://www.youtube.com/embed/pva_video_addis_g5_ch1_1?rel=0&modestbranding=1" },
           ],
         },
         "social-study": {
           "chapter-1": [],
         }
       },
       "grade-6": { // Fill with Addis G6 data
            "maths": { "chapter-1": [{title:"Addis G6 M Ch1 V1", url:"PUT_EMBED_URL"},{title:"Addis G6 M Ch1 V2", url:"PUT_EMBED_URL"}] },
            "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] },
            // NEW SUBJECTS FOR ADDIS ABABA GRADE 6
            "pva": { "chapter-1": [] },
            "social-study": { "chapter-1": [] }
       },
       "grade-7": { // Fill with Addis G7 data
        
            "maths": 
              {
               "chapter-1":[ { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              
              "chapter-2":[{ title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              
              
              "chapter-3": [
                     { title: "Grade 7 Maths Unit 3 Part 1", url: "PUT_YOUR_YOUTUBE_EMBED_URL_HERE" },
                     { title: "Grade 7 Maths Unit 3 Part 2 (if available)", url: "PUT_ANOTHER_YOUTUBE_EMBED_URL_HERE" },
                 ],
                 "chapter-4": [  { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              "chapter-5": [ { title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ],
              
              "chapter-6":[{ title: "Amhara Grade 7 Maths unit 6 solid figure and congruency", url: "https://www.youtube.com/embed/UNXO2Q7bxG4?rel=0&modestbranding=1" },
          
                           { title: "Amhara Grade 7 Maths Cunit 6  solid figure and congruency", url: "https://www.youtube.com/embed/UNXO2Q7bxG4?rel=0&modestbranding=1" }, ],
              
              "chapter-7":[{ title: "Amhara G5 Maths Ch1 Vid1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
             { title: "Amhara G5 Maths Ch1 Vid2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },  ]
            },
              
              "english": { "chapter-1": [] }, "gs": { "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] },
              // NEW SUBJECTS FOR ADDIS ABABA GRADE 7
              "pva": { "chapter-1": [] },
              "social-study": { "chapter-1": [] }
       },
       "grade-8": { // Fill with Addis G8 data
            "maths": { "chapter-1": [] }, "english": { "chapter-1": [] }, "gs": "chapter-1": [] }, "ict": { "chapter-1": [] }, "citizenship": { "chapter-1": [] },
            // NEW SUBJECTS FOR ADDIS ABABA GRADE 8 (example, you can add data)
            "pva": { "chapter-1": [] },
            "social-study": { "chapter-1": [] }
       }
    }
  }
};

// --- Helper Functions (deviceId, SHA-256 hashing, LIFETIME access control) ---
function getDeviceId() {
  let id = localStorage.getItem("deviceId"); if (!id) { id = "device-" + Math.random().toString(36).slice(2, 11); localStorage.setItem("deviceId", id); } return id;
}
const deviceId = getDeviceId();
const deviceIdInput = document.getElementById("device-id"); if (deviceIdInput) deviceIdInput.value = deviceId;
const copyDeviceIdBtn = document.getElementById("copy-device-id-btn");
if (copyDeviceIdBtn) { copyDeviceIdBtn.addEventListener("click", async () => { try { await navigator.clipboard.writeText(deviceId); alert("Device ID copied!"); } catch (err) { try { const input = document.createElement("input"); input.style.position = "absolute"; input.style.left = "-9999px"; input.value = deviceId; document.body.appendChild(input); input.select(); input.setSelectionRange(0, 99999); document.execCommand("copy"); document.body.removeChild(input); alert("Device ID copied (fallback method)!"); } catch(fallbackErr) { alert("Could not copy Device ID. Please select and copy it manually."); } } }); }
function arrayBufferToHex(buffer) { return Array.prototype.map.call(new Uint8Array(buffer), byte => ('0' + byte.toString(16)).slice(-2)).join(''); }

// Hashing function based ONLY on deviceId and grade (LIFETIME)
async function hashDeviceIdWithGrade(deviceId, grade) {
    const str = deviceId + ":" + grade; // String to hash (no year)
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    try {
        if (!crypto || !crypto.subtle || !crypto.subtle.digest) {
            console.error("SubtleCrypto API not available.");
            return "CODE-NOSUBTLECRYPTO";
        }
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashHex = arrayBufferToHex(hashBuffer);
        const codePart = hashHex.slice(0, 10).toUpperCase();
        // Embed grade for clarity in the code itself (easier for admin/debug)
        return `CODE-${grade.toUpperCase()}-${codePart}`; // Example: CODE-GRADE-5-ABCDEF1234
    } catch (error) {
        console.error("Hashing failed:", error);
        return "CODE-HASHINGERROR";
    }
}

// Save access for a specific grade - NO EXPIRY DATE
function saveGradeAccess(grade) {
    let accessData = loadAccess() || {}; // Load existing or create new object

    // Initialize structure if it's the first time
    if (!accessData.deviceId) {
        accessData.deviceId = deviceId;
    }
    if (!accessData.paidGrades) {
        accessData.paidGrades = [];
    }

    // Add the grade if it's not already there
    if (!accessData.paidGrades.includes(grade)) {
        accessData.paidGrades.push(grade);
    }

    try {
        // Store only deviceId and the list of paid grades (NO EXPIRY)
        localStorage.setItem("eduaccess", JSON.stringify({
            deviceId: accessData.deviceId,
            paidGrades: accessData.paidGrades
        }));
        console.log("Lifetime access saved for grade:", grade, "Current access:", accessData);
        return true; // Indicate success
    } catch (e) {
        alert("Could not save access info.");
        return false; // Indicate failure
    }
}

// Load access data - NO EXPIRY DATE EXPECTED
function loadAccess() {
    try {
        const accessData = localStorage.getItem("eduaccess");
        if (!accessData) return null;
        const parsedData = JSON.parse(accessData);
        // Basic validation - Check for deviceId
        if (typeof parsedData !== 'object' || !parsedData.deviceId) {
             localStorage.removeItem("eduaccess"); // Clear invalid data
             return null;
        }
        // Ensure paidGrades is an array, default to empty if missing/invalid
        if (!Array.isArray(parsedData.paidGrades)) {
            parsedData.paidGrades = [];
        }
        return parsedData;
    } catch(e) {
        console.error("Error loading access data:", e);
        localStorage.removeItem("eduaccess"); // Clear potentially corrupted data
        return null;
    }
}

// Check if the device ID in storage matches the current device ID.
function isDeviceValid(access) {
    if (!access || typeof access !== 'object') return false;
    // IMPORTANT: Check device ID match!
    if (access.deviceId !== deviceId) {
        console.warn("Device ID mismatch in localStorage. Clearing access.");
        localStorage.removeItem("eduaccess");
        return false;
    };
    // No expiry check needed anymore
    return true; // If device ID matches, it's considered valid
}

// Check if the user has access to a SPECIFIC grade (using isDeviceValid)
function hasAccessToGrade(grade) {
    const access = loadAccess();
    // Check if the stored data is for the correct device
    if (!isDeviceValid(access)) {
        return false; // Invalid device means no access
    }
    // Check if the grade exists in the paidGrades array
    return access.paidGrades && access.paidGrades.includes(grade);
}
// --- End Helper Functions ---


// --- UI Elements Cache ---
const sampleVideoSection = document.getElementById("sample-video-section");
const paymentSection = document.getElementById("payment-section");
const appContent = document.getElementById("app-content");
// const accessExpiryEl = document.getElementById("access-expiry"); // Removed
const regionView = document.getElementById("region-view");
const gradeView = document.getElementById("grade-view");
const subjectView = document.getElementById("subject-view");
const chapterView = document.getElementById("chapter-view");
const videoView = document.getElementById("video-view");
const regionList = document.getElementById("region-list");
const gradeList = document.getElementById("grade-list");
const gradeListTitle = document.getElementById("grade-list-title");
const subjectList = document.getElementById("subject-list");
const subjectButtonsContainer = document.getElementById("subject-buttons-container");
const subjectListTitle = document.getElementById("subject-list-title");
const chapterList = document.getElementById("chapter-list");
const chapterButtonsContainer = document.getElementById("chapter-buttons-container");
const chapterListTitle = document.getElementById("chapter-list-title");
const videoListContainer = document.getElementById("video-list");
const videoListTitle = document.getElementById("video-list-title");
const unlockCodeInput = document.getElementById("unlock-code");
const unlockMsg = document.getElementById("unlock-msg");
const telegramBtn = document.getElementById("telegram-btn");
const unlockBtn = document.getElementById("unlock-btn");
const logoutBtn = document.getElementById("logout-btn");
const backToRegionsBtn = document.getElementById("back-to-regions");
const backToGradesBtn = document.getElementById("back-to-grades");
const backToSubjectsBtn = document.getElementById("back-to-subjects");
const backToChaptersBtn = document.getElementById("back-to-chapters");

// --- State Variables ---
let currentRegion = null;
let currentGrade = null;
let currentSubject = null;
let currentChapter = null;

// --- UI Control Functions ---
function showView(viewToShow) {
    if (regionView) regionView.classList.add("hidden");
    if (gradeView) gradeView.classList.add("hidden");
    if (subjectView) subjectView.classList.add("hidden");
    if (chapterView) chapterView.classList.add("hidden");
    if (videoView) videoView.classList.add("hidden");

    if (viewToShow === "regions" && regionView) regionView.classList.remove("hidden");
    else if (viewToShow === "grades" && gradeView) gradeView.classList.remove("hidden");
    else if (viewToShow === "subjects" && subjectView) subjectView.classList.remove("hidden");
    else if (viewToShow === "chapters" && chapterView) chapterView.classList.remove("hidden");
    else if (viewToShow === "videos" && videoView) videoView.classList.remove("hidden");
    else if (regionView) regionView.classList.remove("hidden"); // Default to regions
}

// Show UI based on device validity - NO EXPIRY TEXT
function showAppUI() {
  const access = loadAccess();
  // Check if the stored data is valid for THIS device
  if (isDeviceValid(access)) {
    if(sampleVideoSection) sampleVideoSection.classList.add("hidden");
    if(paymentSection) paymentSection.classList.add("hidden");
    if(appContent) appContent.classList.remove("hidden");
    // No expiry text needed

    showView("regions"); // Show regions view initially
    // Always refresh grade button states when logged in to reflect current access
    if (currentRegion) { // If a region was previously selected
        populateGrades(currentRegion, true); // Refresh but don't switch view
    } else if (!regionView.classList.contains('hidden')) {
        // If region view is active, ensure grade states are potentially updated if needed
        // This case is less critical as populateGrades runs on region selection
    }

  } else {
    // Show login/payment view if no valid data for this device
    if(sampleVideoSection) sampleVideoSection.classList.remove("hidden");
    if(paymentSection) paymentSection.classList.remove("hidden");
    if(appContent) appContent.classList.add("hidden");
  }
}

function resetSelections() {
    currentRegion = null; currentGrade = null; currentSubject = null; currentChapter = null;
    document.querySelectorAll(".folder-btn.selected").forEach(b => b.classList.remove("selected"));
}

// MODIFIED: Added 'pva' and 'social-study' to formatting
function formatDisplayName(key) {
    if (!key) return '';
    if (key === 'gs') return 'G.S';
    if (key === 'ict') return 'ICT';
    if (key === 'pva') return 'P.V.A'; // NEW
    if (key === 'social-study') return 'Social Study'; // NEW
    if (key === 'amhara-region') return 'Amhara Region';
    if (key === 'addis-ababa-region') return 'Addis Ababa Region';
    return key.replace(/-/g, ' ').replace(/\b(gs|ict)\b/gi, m => m.toUpperCase()).replace(/\b\w/g, l => l.toUpperCase());
}

// --- Dynamic Content Population Functions ---

// Populate Grades - Disable buttons for non-purchased grades
function populateGrades(region, preventViewSwitch = false) {
    currentRegion = region;
    // Reset downstream selections
    currentGrade = null; currentSubject = null; currentChapter = null;

    if (!gradeList || !gradeListTitle) return;
    gradeList.innerHTML = ""; // Clear previous grades
    const regionData = ADMIN.videos[region];
    const regionName = formatDisplayName(region);
    gradeListTitle.textContent = `${regionName} - Grades`;
    const gradeOrder = ["grade-5", "grade-6", "grade-7", "grade-8"];
    const availableGrades = regionData ? Object.keys(regionData) : [];

    if (!regionData || availableGrades.length === 0) {
        gradeList.innerHTML = "<p>No grades available for this region yet.</p>";
    } else {
        const gradesToShow = gradeOrder.filter(g => availableGrades.includes(g));
        if (gradesToShow.length === 0) {
             gradeList.innerHTML = "<p>No configured grades (5-8) found for this region yet.</p>";
        } else {
            gradesToShow.forEach(gradeKey => {
                const btn = document.createElement("button");
                btn.className = "folder-btn grade-btn";
                btn.dataset.folder = gradeKey;
                btn.textContent = formatDisplayName(gradeKey);

                // *** Check access for this specific grade (LIFETIME) ***
                if (hasAccessToGrade(gradeKey)) {
                    btn.disabled = false; // Enable if paid
                    btn.title = `Access ${formatDisplayName(gradeKey)}`;
                } else {
                    btn.disabled = true; // Disable if not paid
                    btn.title = `Purchase access required for ${formatDisplayName(gradeKey)}`;
                    // Styling for disabled is handled in CSS via :disabled pseudo-class now
                }
                gradeList.appendChild(btn);
            });
        }
    }

    // Update selected region button styling
    document.querySelectorAll("#region-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
    const regionBtn = document.querySelector(`#region-list .folder-btn[data-folder='${region}']`);
    if(regionBtn) regionBtn.classList.add("selected");

    // Only switch view if not prevented
    if (!preventViewSwitch) {
        showView("grades");
    }
}

// Populate Subjects - Should only be called if grade access was granted
function populateSubjects(grade) {
    // Double-check access
    if (!hasAccessToGrade(grade)) {
        alert("Access to this grade is required.");
        console.warn("Attempted to access locked grade:", grade);
        showView("grades"); // Go back
        return;
    }

    currentGrade = grade;
    // Reset downstream selections
    currentSubject = null; currentChapter = null;

    if (!subjectButtonsContainer || !subjectListTitle || !currentRegion) return;
    subjectButtonsContainer.innerHTML = ""; // Clear previous subjects
    const gradeData = ADMIN.videos?.[currentRegion]?.[grade];
    const regionName = formatDisplayName(currentRegion);
    const gradeName = formatDisplayName(grade);
    subjectListTitle.textContent = `${regionName} / ${gradeName} - Subjects`;

    // MODIFIED: Added 'pva' and 'social-study' to the order
    const subjectOrder = ["maths", "english", "gs", "ict", "citizenship", "pva", "social-study"];
    const availableSubjects = gradeData ? Object.keys(gradeData) : [];

    if (!gradeData || availableSubjects.length === 0) {
        subjectButtonsContainer.innerHTML = "<p>No subjects available for this grade yet.</p>";
    } else {
        const subjectsToShow = subjectOrder.filter(subj => availableSubjects.includes(subj));
        if (subjectsToShow.length === 0) {
            subjectButtonsContainer.innerHTML = "<p>No configured subjects found for this grade yet.</p>";
        } else {
            subjectsToShow.forEach((subjectKey) => {
                const btn = document.createElement("button");
                btn.className = "folder-btn subject-btn";
                btn.dataset.folder = subjectKey;
                btn.textContent = formatDisplayName(subjectKey);
                subjectButtonsContainer.appendChild(btn);
            });
        }
    }

    // Update selected grade button styling
    document.querySelectorAll("#grade-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
    const gradeBtn = document.querySelector(`#grade-list .folder-btn[data-folder='${grade}']`);
    if(gradeBtn) gradeBtn.classList.add("selected");

    showView("subjects");
}

// Populate Chapters
function populateChapters(subject) {
    currentSubject = subject;
    currentChapter = null;
    if (!chapterButtonsContainer || !chapterListTitle || !currentRegion || !currentGrade) return;
    chapterButtonsContainer.innerHTML = "";
    const subjectData = ADMIN.videos?.[currentRegion]?.[currentGrade]?.[currentSubject];
    const regionName = formatDisplayName(currentRegion); const gradeName = formatDisplayName(currentGrade); const subjectName = formatDisplayName(currentSubject);
    chapterListTitle.textContent = `${regionName} / ${gradeName} / ${subjectName} - Chapters`;
    const chapterKeys = Array.from({length: 9}, (_, i) => `chapter-${i + 1}`); // Chapters 1-9

    if (!subjectData) {
        chapterButtonsContainer.innerHTML = "<p>No chapter data defined for this subject yet.</p>";
    } else {
        let chaptersFound = false;
        chapterKeys.forEach(chapterKey => {
             if (subjectData.hasOwnProperty(chapterKey)) { // Check if chapter exists in data
                chaptersFound = true;
                const btn = document.createElement("button");
                btn.className = "folder-btn chapter-btn";
                btn.dataset.folder = chapterKey;
                btn.textContent = formatDisplayName(chapterKey);
                // Only enable button if chapter actually has videos
                btn.disabled = !(subjectData[chapterKey] && subjectData[chapterKey].length > 0);
                if (btn.disabled) {
                    btn.title = "No videos in this chapter yet";
                }
                chapterButtonsContainer.appendChild(btn);
             }
        });
        if (!chaptersFound) {
            chapterButtonsContainer.innerHTML = "<p>No chapters (1-9) configured for this subject yet.</p>";
        }
    }
    document.querySelectorAll("#subject-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
    const subjectBtn = document.querySelector(`#subject-list .folder-btn[data-folder='${subject}']`);
    if(subjectBtn) subjectBtn.classList.add("selected");
    showView("chapters");
}

// Load Videos
function loadVideos(chapter) {
    currentChapter = chapter;
    if (!videoListContainer || !videoListTitle || !currentRegion || !currentGrade || !currentSubject) return;
    videoListContainer.innerHTML = ""; // Clear previous videos
    const allVideos = ADMIN.videos?.[currentRegion]?.[currentGrade]?.[currentSubject]?.[currentChapter] || [];
    const videosToShow = allVideos; // Show all videos for the chapter now
    const regionName = formatDisplayName(currentRegion); const gradeName = formatDisplayName(currentGrade);
    const subjectName = formatDisplayName(currentSubject); const chapterName = formatDisplayName(currentChapter);
    videoListTitle.textContent = `${regionName} / ${gradeName} / ${subjectName} / ${chapterName}`;

    if (videosToShow.length === 0) {
        videoListContainer.innerHTML = "<p>No videos available for this chapter yet.</p>";
    } else {
        videosToShow.forEach((video) => {
            const p = document.createElement("p");
            p.textContent = video.title || "Video";
            const iframe = document.createElement("iframe");
            iframe.width = "100%";
            iframe.height = "315"; // Adjust height if needed
            iframe.src = video.url; // Use the EMBED URL
            iframe.title = video.title || "YouTube video player";
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
            iframe.setAttribute("allowfullscreen", "true");
            videoListContainer.appendChild(p);
            videoListContainer.appendChild(iframe);
        });
         // Remove the limit notice if showing all videos
         // if (allVideos.length > 2) {
         //     const notice =
