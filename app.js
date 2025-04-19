const ADMIN = {
  telegramUsername: "eduapp1850",
  videos: {
    "grade-5": {
      "maths": [
        { title: "Maths Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
        { title: "Maths Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },
        { title: "Maths Video 3", url: "https://www.youtube.com/embed/L_jWHffIx5E?rel=0&modestbranding=1" },
        { title: "Maths Video 4", url: "https://www.youtube.com/embed/eY52Zsg-KVI?rel=0&modestbranding=1" },
        { title: "Maths Video 5", url: "https://www.youtube.com/embed/fLexgOxsZu0?rel=0&modestbranding=1" }
      ],
      "english": [
        { title: "English Video 1", url: "https://www.youtube.com/embed/QtXby3twMmI?rel=0&modestbranding=1" },
        { title: "English Video 2", url: "https://www.youtube.com/embed/tVj0ZTS4WF4?rel=0&modestbranding=1" },
        { title: "English Video 3", url: "https://www.youtube.com/embed/9bZkp7q19f0?rel=0&modestbranding=1" }
      ],
      "gs": [
        { title: "GS Video 1", url: "https://www.youtube.com/embed/6Dh-RL__uN4?rel=0&modestbranding=1" },
        { title: "GS Video 2", url: "https://www.youtube.com/embed/uelHwf8o7_U?rel=0&modestbranding=1" },
        { title: "GS Video 3", url: "https://www.youtube.com/embed/CD-E-LDc384?rel=0&modestbranding=1" }
      ],
      "ict": [
        { title: "ICT Video 1", url: "https://www.youtube.com/embed/MZ2hJFO7Ws8?rel=0&modestbranding=1" },
        { title: "ICT Video 2", url: "https://www.youtube.com/embed/y0u9ch6y2EY?rel=0&modestbranding=1" },
        { title: "ICT Video 3", url: "https://www.youtube.com/embed/3YP8zkEUzXQ?rel=0&modestbranding=1" }
      ],
      "citizenship": [
        { title: "Citizenship Video 1", url: "https://www.youtube.com/embed/YQHsXMglC9A?rel=0&modestbranding=1" },
        { title: "Citizenship Video 2", url: "https://www.youtube.com/embed/0KSOMA3QBU0?rel=0&modestbranding=1" },
        { title: "Citizenship Video 3", url: "https://www.youtube.com/embed/hT_nvWreIhg?rel=0&modestbranding=1" }
      ]
    },
    "grade-6": {
      "maths": [
        { title: "Maths Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
        { title: "Maths Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },
        { title: "Maths Video 3", url: "https://www.youtube.com/embed/L_jWHffIx5E?rel=0&modestbranding=1" }
      ],
      "english": [
        { title: "English Video 1", url: "https://www.youtube.com/embed/QtXby3twMmI?rel=0&modestbranding=1" },
        { title: "English Video 2", url: "https://www.youtube.com/embed/tVj0ZTS4WF4?rel=0&modestbranding=1" },
        { title: "English Video 3", url: "https://www.youtube.com/embed/9bZkp7q19f0?rel=0&modestbranding=1" }
      ],
      "ict": [
        { title: "ICT Video 1", url: "https://www.youtube.com/embed/MZ2hJFO7Ws8?rel=0&modestbranding=1" },
        { title: "ICT Video 2", url: "https://www.youtube.com/embed/y0u9ch6y2EY?rel=0&modestbranding=1" },
        { title: "ICT Video 3", url: "https://www.youtube.com/embed/3YP8zkEUzXQ?rel=0&modestbranding=1" }
      ]
      // Note: GS and Citizenship are missing for Grade 6, which is handled dynamically
    },
    "grade-7": {
      "maths": [
        { title: "Maths Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1" },
        { title: "Maths Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ?rel=0&modestbranding=1" },
        { title: "Maths Video 3", url: "https://www.youtube.com/embed/L_jWHffIx5E?rel=0&modestbranding=1" },
        { title: "Maths Video 4", url: "https://www.youtube.com/embed/eY52Zsg-KVI?rel=0&modestbranding=1" },
        { title: "Maths Video 5", url: "https://www.youtube.com/embed/fLexgOxsZu0?rel=0&modestbranding=1" }
      ],
      "ict": [
        { title: "Unit 1 Part 1", url: "https://www.youtube.com/embed/MZ2hJFO7Ws8?rel=0&modestbranding=1" },
        { title: "Unit 1 Part 2", url: "https://www.youtube.com/embed/y0u9ch6y2EY?rel=0&modestbranding=1" },
        { title: "Review Question on Unit 1", url: "https://www.youtube.com/embed/3YP8zkEUzXQ?rel=0&modestbranding=1" }
      ]
    }
    // Add Grade 8 data here when available
    // "grade-8": { ... }
  }
};

// --- Device ID & Access Functions ---
function getDeviceId() {
  let id = localStorage.getItem("deviceId");
  if (!id) {
    id = "device-" + Math.random().toString(36).slice(2, 11);
    localStorage.setItem("deviceId", id);
  }
  return id;
}

const deviceId = getDeviceId();
// Ensure the input element exists before setting its value
const deviceIdInput = document.getElementById("device-id");
if (deviceIdInput) {
    deviceIdInput.value = deviceId;
} else {
    console.error("Element with ID 'device-id' not found.");
}


const copyDeviceIdBtn = document.getElementById("copy-device-id-btn");
if (copyDeviceIdBtn) {
    copyDeviceIdBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(deviceId);
        alert("Device ID copied!");
      } catch (err) {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers or if clipboard API fails
        try {
            const input = document.createElement("input");
            input.style.position = "absolute";
            input.style.left = "-9999px"; // Move it off-screen
            input.value = deviceId;
            document.body.appendChild(input);
            input.select();
            input.setSelectionRange(0, 99999); // For mobile devices
            document.execCommand("copy");
            document.body.removeChild(input);
            alert("Device ID copied (fallback method)!");
        } catch(fallbackErr) {
            console.error('Fallback copy failed: ', fallbackErr);
            alert("Could not copy Device ID. Please select and copy it manually.");
        }
      }
    });
} else {
    console.error("Element with ID 'copy-device-id-btn' not found.");
}


function hashDeviceIdWithYear(deviceId, year) {
  const str = deviceId + year;
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return "CODE-" + Math.abs(hash);
}

function saveAccess(code) {
  const expiry = new Date();
  expiry.setFullYear(expiry.getFullYear() + 1); // Access valid for 1 year
  try {
      localStorage.setItem(
        "eduaccess",
        JSON.stringify({ deviceId, code, expiry: expiry.toISOString() })
      );
  } catch (e) {
      console.error("Failed to save access to localStorage:", e);
      alert("Could not save access information. LocalStorage might be disabled or full.");
  }
}

function loadAccess() {
  try {
    const accessData = localStorage.getItem("eduaccess");
    return accessData ? JSON.parse(accessData) : null;
  } catch(e) {
    console.error("Failed to load access from localStorage:", e);
    // Attempt to clear corrupted data
    localStorage.removeItem("eduaccess");
    return null;
  }
}

function isAccessValid(access) {
  if (!access || typeof access !== 'object') return false;
  if (access.deviceId !== deviceId) {
      console.warn("Stored deviceId doesn't match current deviceId.");
      return false; // ID mismatch
  }
  if (!access.expiry || isNaN(new Date(access.expiry).getTime())) {
      console.warn("Invalid expiry date found in stored access.");
      return false; // Invalid date
  }
  return new Date(access.expiry) > new Date(); // Check expiry
}

function formatDate(dateStr) {
    try {
        return new Date(dateStr).toLocaleDateString(undefined, { // Use locale format
            year: 'numeric', month: 'long', day: 'numeric'
        });
    } catch (e) {
        console.error("Failed to format date:", dateStr, e);
        return "Invalid Date";
    }
}

// --- UI Elements Cache ---
const sampleVideoSection = document.getElementById("sample-video-section");
const paymentSection = document.getElementById("payment-section");
const appContent = document.getElementById("app-content");
const accessExpiryEl = document.getElementById("access-expiry");
const gradeList = document.getElementById("grade-list");
const subjectList = document.getElementById("subject-list");
const subjectButtonsContainer = document.getElementById("subject-buttons-container");
const videoLinks = document.getElementById("video-links");
const videoListContainer = document.getElementById("video-list");
const videoListTitle = document.getElementById("video-list-title");
const unlockCodeInput = document.getElementById("unlock-code");
const unlockMsg = document.getElementById("unlock-msg");
const telegramBtn = document.getElementById("telegram-btn");
const unlockBtn = document.getElementById("unlock-btn");
const logoutBtn = document.getElementById("logout-btn");
const backToGradesBtn = document.getElementById("back-to-grades");
const backToSubjectsBtn = document.getElementById("back-to-subjects");

// --- UI Control Functions ---
function showView(viewToShow) {
    // Hide all primary content views first
    if (gradeList) gradeList.classList.add("hidden");
    if (subjectList) subjectList.classList.add("hidden");
    if (videoLinks) videoLinks.classList.add("hidden");

    // Show the requested view
    if (viewToShow === "grades" && gradeList) {
        gradeList.classList.remove("hidden");
    } else if (viewToShow === "subjects" && subjectList) {
        subjectList.classList.remove("hidden");
    } else if (viewToShow === "videos" && videoLinks) {
        videoLinks.classList.remove("hidden");
    } else {
        console.warn("Tried to show an unknown or non-existent view:", viewToShow);
        // Default to grades view if something goes wrong
        if (gradeList) gradeList.classList.remove("hidden");
    }
}

function showAppUI() {
  const access = loadAccess();
  if (isAccessValid(access)) {
    if(sampleVideoSection) sampleVideoSection.classList.add("hidden");
    if(paymentSection) paymentSection.classList.add("hidden");
    if(appContent) appContent.classList.remove("hidden");
    if(accessExpiryEl) accessExpiryEl.textContent = "Access valid until: " + formatDate(access.expiry);
    showView("grades"); // Start at grade selection when logged in
  } else {
    if(sampleVideoSection) sampleVideoSection.classList.remove("hidden");
    if(paymentSection) paymentSection.classList.remove("hidden");
    if(appContent) appContent.classList.add("hidden");
    // Clear any previous invalid expiry text
    if(accessExpiryEl) accessExpiryEl.textContent = "";
  }
}

function populateSubjects(grade) {
  if (!subjectButtonsContainer) {
      console.error("Subject buttons container not found.");
      return;
  }
  subjectButtonsContainer.innerHTML = ""; // Clear previous subjects
  const subjectsData = ADMIN.videos[grade];

  if (!subjectsData || Object.keys(subjectsData).length === 0) {
      subjectButtonsContainer.innerHTML = "<p>No subjects available for this grade yet.</p>";
  } else {
      const subjects = Object.keys(subjectsData);
      subjects.forEach((subjectKey) => {
          const btn = document.createElement("button");
          btn.className = "folder-btn subject-btn";
          btn.dataset.folder = subjectKey;
          // Capitalize first letter for display, handle 'gs' specifically
          let buttonText = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);
          if (subjectKey === 'gs') buttonText = 'G.S';
          btn.textContent = buttonText;
          subjectButtonsContainer.appendChild(btn);
      });
  }
  // Clear selected state from any previously selected grade button
  document.querySelectorAll("#grade-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
  // Mark the current grade as selected
  const gradeBtn = document.querySelector(`#grade-list .folder-btn[data-folder='${grade}']`);
  if(gradeBtn) {
      gradeBtn.classList.add("selected");
  } else {
      console.warn(`Button for grade '${grade}' not found.`);
  }

  showView("subjects");
}

function loadVideos(grade, subject) {
  if (!videoListContainer || !videoListTitle) {
      console.error("Video list container or title element not found.");
      return;
  }
  videoListContainer.innerHTML = ""; // Clear previous videos
  const videos = ADMIN.videos?.[grade]?.[subject] || [];

  // Format grade and subject names for the title
  const gradeDisplay = grade.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  let subjectDisplay = subject.charAt(0).toUpperCase() + subject.slice(1);
  if (subject === 'gs') subjectDisplay = 'G.S';
  if (subject === 'ict') subjectDisplay = 'ICT';


  videoListTitle.textContent = `${gradeDisplay} - ${subjectDisplay} Videos`; // Update title

  if (videos.length === 0) {
    videoListContainer.innerHTML = "<p>No videos available for this subject yet.</p>";
  } else {
    videos.forEach((video) => {
      const p = document.createElement("p");
      p.textContent = video.title;
      // Removed bold style here, handled by CSS if needed

      const iframe = document.createElement("iframe");
      iframe.width = "100%";
      iframe.height = "315"; // Standard 16:9 aspect ratio height based on common widths
      iframe.src = video.url;
      iframe.title = video.title; // Important for accessibility
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
      iframe.setAttribute("allowfullscreen", "true");
      // Removed inline margin style, handled by CSS

      videoListContainer.appendChild(p);
      videoListContainer.appendChild(iframe);
    });
  }
   // Clear selected state from any previously selected subject button
  document.querySelectorAll("#subject-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
   // Mark the current subject as selected
  const subjectBtn = document.querySelector(`#subject-list .folder-btn[data-folder='${subject}']`);
  if(subjectBtn) {
      subjectBtn.classList.add("selected");
  } else {
      console.warn(`Button for subject '${subject}' not found.`);
  }

  showView("videos");
}


// --- Initial Setup & Event Listeners ---

// Make sure the DOM is fully loaded before running initial UI setup and attaching listeners
document.addEventListener('DOMContentLoaded', () => {

    // Initial UI state based on access
    showAppUI();

    // Payment/Unlock Section Listeners
    if (telegramBtn) {
        telegramBtn.addEventListener("click", () => {
          window.open(`https://t.me/${ADMIN.telegramUsername}`, "_blank");
        });
    }

    if (unlockBtn && unlockCodeInput && unlockMsg) {
        unlockBtn.addEventListener("click", () => {
          const userCode = unlockCodeInput.value.trim();
          const year = new Date().getFullYear();
          const expectedCode = hashDeviceIdWithYear(deviceId, year);

          unlockMsg.textContent = ""; // Clear previous message

          if (!userCode) {
              unlockMsg.textContent = "Please enter the unlock code.";
              return;
          }

          if (userCode === expectedCode) {
            saveAccess(userCode);
            unlockCodeInput.value = ""; // Clear input on success
            showAppUI(); // Refresh the view to show the app content
          } else {
            unlockMsg.textContent = "Invalid unlock code.";
          }
        });
    }

    // App Content Listeners
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          localStorage.removeItem("eduaccess");
          // Clear selections visually
          document.querySelectorAll(".folder-btn.selected").forEach(b => b.classList.remove("selected"));
          showAppUI(); // Refresh the view to show the payment section
        });
    }

    // Navigation Listeners (using event delegation where appropriate)
    if (gradeList) {
        gradeList.addEventListener("click", (event) => {
          // Check if the clicked element is a grade button itself
          if (event.target.classList.contains("grade-btn")) {
            const selectedGrade = event.target.dataset.folder;
            if(selectedGrade) {
                populateSubjects(selectedGrade);
            } else {
                console.warn("Clicked grade button is missing data-folder attribute.");
            }
          }
        });
    }

    if (subjectList) {
        subjectList.addEventListener("click", (event) => {
          const target = event.target;
          // Handle clicks on dynamically added subject buttons
          if (target.classList.contains("subject-btn")) {
            const selectedSubject = target.dataset.folder;
            const selectedGradeBtn = document.querySelector("#grade-list .folder-btn.selected");

            if (!selectedGradeBtn) {
                alert("Error: Grade not selected. Please go back and select a grade.");
                showView("grades"); // Force back to grades if state is broken
                return;
            }
            const selectedGrade = selectedGradeBtn.dataset.folder;

            if(selectedGrade && selectedSubject) {
                loadVideos(selectedGrade, selectedSubject);
            } else {
                 console.warn("Missing grade or subject data for loading videos.");
            }
          }
          // Handle click on the static "Back to Grades" button
          else if (target.id === "back-to-grades") {
             // Clear selected state from grade buttons when going back
             document.querySelectorAll("#grade-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
             showView("grades");
          }
        });
    }

    if (backToSubjectsBtn) {
        // Back to Subjects (from Videos view)
        backToSubjectsBtn.addEventListener("click", () => {
            // Clear selected state from subject buttons when going back
            document.querySelectorAll("#subject-list .folder-btn.selected").forEach(b => b.classList.remove("selected"));
            showView("subjects");
        });
    }

}); // End of DOMContentLoaded listener