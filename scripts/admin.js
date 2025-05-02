      // Retrieve all survey responses
      const responses = JSON.parse(localStorage.getItem("surveyData")) || [];
      document.getElementById("responseCount").textContent = responses.length;

      // Get the number of registered users
      const userCount = JSON.parse(localStorage.getItem("users"))?.length || 0;
      document.getElementById("userCount").textContent = userCount;

      // Count answers for a specific question by ID
      const countAnswers = (questionId) => {
        const map = {};
        responses.forEach((res) => {
          const answer = res[questionId];
          if (!answer) return;
          // If multiple answers (e.g., checkbox), count each
          if (Array.isArray(answer)) {
            answer.forEach((a) => (map[a] = (map[a] || 0) + 1));
          } else {
            map[answer] = (map[answer] || 0) + 1;
          }
        });
        return map;
      };

      // Render a horizontal bar chart using divs
      const drawBar = (containerId, dataObj) => {
        const container = document.getElementById(containerId);
        const max = Math.max(...Object.values(dataObj));
        container.innerHTML = Object.entries(dataObj)
          .map(([label, value]) => {
            const widthPercent = (value / max) * 100; // Scale width to highest count
            return `<div class="bar" style="width:${widthPercent}%">${label} (${value})</div>`;
          })
          .join("");
      };

      // Draw each survey chart
      drawBar("genderChart", countAnswers("2"));
      drawBar("providerChart", countAnswers("4"));
      drawBar("ratingChart", countAnswers("6"));
      drawBar("affordableChart", countAnswers("8"));

      // Render text-based responses with search filter
      function renderTextAnswers(id, containerId, inputId) {
        const list = document.getElementById(containerId);
        const input = document.getElementById(inputId);
        const answers = responses.map((res) => res[id]).filter(Boolean);

        function renderFiltered(text) {
          const filtered = answers.filter((ans) =>
            ans.toLowerCase().includes(text.toLowerCase())
          );
          list.innerHTML = filtered.map((a) => `<li>${a}</li>`).join("");
        }

        // Initial render with all responses
        renderFiltered("");

        // Update list on search input
        input.addEventListener("input", (e) => {
          renderFiltered(e.target.value);
        });
      }

      // Render text response sections
      renderTextAnswers("7", "challengesList", "challengeSearch");
      renderTextAnswers("9", "improvementsList", "improvementSearch");