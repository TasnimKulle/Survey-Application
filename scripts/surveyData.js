const url = "/scripts/data.json";
async function fetchSurveyData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const surveyData = await response.json();
    console.log(surveyData);
    displaySurveyData(surveyData);
  } catch (error) {
    console.error("Error fetching survey data:", error);
  }
}
fetchSurveyData();

function displaySurveyData(surveyData) {
  let { questions } = surveyData;
  const surveyTitle = document.getElementById("surveyTitle");
  const surveyDescription = document.getElementById("surveyDescription");
  surveyTitle.innerHTML = surveyData.survey_title;
  surveyDescription.innerHTML = surveyData.description;

  // fromka diyarintisa
  const form = document.getElementById("surveyForm");

  surveyData.questions.forEach((q) => {
    const Label = document.createElement("label");
    Label.innerHTML = q.question;
    form.appendChild(Label);
    if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `${q.id}`;
      input.required = true;
      form.appendChild(input);
    } else if (q.type === "single_choice") {
      q.options.forEach((option) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `${q.id}`;
        input.value = option;
        input.required = true;
        form.appendChild(input);
        const label = document.createElement("label");
        label.innerHTML = option;
        form.appendChild(label);
       
      });
    } else if (q.type === "multiple_choice") {
      q.options.forEach((option) => {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = `${q.id}`;
        input.value = option;
        form.appendChild(input);
        const label = document.createElement("label");
        label.innerHTML = option;
        form.appendChild(label);
      });
    } else if (q.type === "rating") {
        q.labels.forEach((labelText, index) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `${q.id}`;
            input.value = index + 1; // value 1-5
        
            const label = document.createElement("label");
            label.innerHTML = labelText;
        
            form.appendChild(input);
            form.appendChild(label);
          });
    } else if (q.type === "yes_no") {
    q.options.forEach((option) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `${q.id}`;
        input.value = option;
        input.required = true;
        form.appendChild(input);
        const label = document.createElement("label");
        label.innerHTML = option;
        
        form.appendChild(label);
      });
    }
    const br = document.createElement("br");
    form.appendChild(br);
    console.log(q);
    console.log(form);
  });
  
}
