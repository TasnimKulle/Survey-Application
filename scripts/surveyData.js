window.onload = function () {
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

}

const form = document.getElementById("surveyForm");
function displaySurveyData(surveyData) {
  let {questions} = surveyData;
  const surveyTitle = document.getElementById("surveyTitle");
  const surveyDescription = document.getElementById("surveyDescription");
  surveyTitle.innerHTML = surveyData.survey_title;
  surveyDescription.innerHTML = surveyData.description;

  // fromka diyarintisa
 

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
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.id = "submitButton";
  submitButton.innerHTML = "Submit Survey";
  form.appendChild(submitButton);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log("data is ",data);
  console.log("fdata is",formData)
// message show successfully as anthor page
  window.location.href = "/pages/thankyou.html"; // Redirect to thank you page
  // Clear the input field after submission 
  form.reset();
  savedSarveyData(data) // Reset the form to clear all fields

})


// surveyData saved in local storage
function savedSarveyData(data){
  const surveyData = JSON.parse(localStorage.getItem("surveyData"))|| [];
  surveyData.push(data);
  localStorage.setItem("surveyData",JSON.stringify(surveyData))
  console.log("survey data is",surveyData)
}

